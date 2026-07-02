/**
 * PREMIUM AI CHAT SYSTEM FOR HARMATRA
 * Rebuilt from scratch with clean architecture, responsive layout, smooth UX,
 * and realistic AI behavior.
 */

(function () {
  'use strict';

  // Constants
  const STORAGE_KEY = 'harmatra_premium_chat_history';
  const GEMINI_API_KEY = "AQ.Ab8RN6LANymz2ylNVYUfaYD9L8KZ_YMW3eDio9XbZvth1e7Kcg";
  const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

  // State Management
  const state = {
    isOpen: false,
    isTyping: false,
    messages: []
  };

  // UI Element Cache
  let elements = {};

  // Initialize Chat Component
  function init() {
    cacheElements();
    if (!elements.chatWidget) return;

    bindEvents();
    loadHistory();
    updateUIState();
    
    // Set initial language strings
    updateChatLanguage();
    
    // Hook language toggle function to refresh chat language dynamically
    if (typeof window.toggleLang === 'function') {
      const originalToggleLang = window.toggleLang;
      window.toggleLang = function () {
        originalToggleLang();
        updateChatLanguage();
      };
    }
    
    // Fallback event listener on language button
    const langBtn = document.querySelector('button[onclick="toggleLang()"]');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        setTimeout(updateChatLanguage, 10);
      });
    }

    // Initialize draggable feature
    setupDraggableWidget();
  }

  // Cache DOM references
  function cacheElements() {
    elements = {
      chatWidget: document.getElementById('chatWidget'),
      chatWindow: document.getElementById('chatWindow'),
      chatBody: document.getElementById('chatBody'),
      chatMessages: document.getElementById('chatMessages'),
      chatInput: document.getElementById('chatInput'),
      sendChatBtn: document.getElementById('sendChatBtn'),
      chatToggleButton: document.getElementById('chatToggleButton'),
      chatToggleAvatarWrapper: document.getElementById('chatToggleAvatarWrapper'),
      chatToggleCloseIcon: document.querySelector('.chat-toggle-close-icon'),
      chatToggleDot: document.querySelector('.chat-toggle-dot'),
      clearChatBtn: document.getElementById('clearChatBtn'),
      closeChatBtn: document.getElementById('closeChatBtn'),
      chatStatusText: document.getElementById('chatStatusText'),
      chatStatusDot: document.querySelector('.chat-status-dot'),
      welcomeContainer: document.querySelector('.chat-welcome-container')
    };
  }

  // Bind event listeners
  function bindEvents() {
    // Open/Close toggle (now handled in dragEnd to prevent double click bugs)
    elements.closeChatBtn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleChat(false);
    });

    // Clear history
    elements.clearChatBtn.addEventListener('click', confirmClearChat);

    // Textarea input adjustments
    elements.chatInput.addEventListener('input', handleInput);
    elements.chatInput.addEventListener('keydown', handleKeyDown);

    // Send click
    elements.sendChatBtn.addEventListener('click', handleSend);

    // Suggestion chips delegation
    elements.chatBody.addEventListener('click', handleSuggestionClick);
  }

  // Setup draggable floating window logic
  function setupDraggableWidget() {
    const widget = elements.chatWidget;
    const header = document.querySelector('.chat-header-premium');
    const toggleBtn = elements.chatToggleButton;

    let isDragging = false;
    let currentX = 0;
    let currentY = 0;
    let initialX = 0;
    let initialY = 0;
    let startClickX = 0;
    let startClickY = 0;
    let xOffset = parseFloat(localStorage.getItem('matra_ai_pos_x')) || 0;
    let yOffset = parseFloat(localStorage.getItem('matra_ai_pos_y')) || 0;

    // Apply saved offset initially
    setTranslate(xOffset, yOffset, widget);

    if (header) {
      header.style.cursor = 'grab';
      header.style.touchAction = 'none';
    }
    if (toggleBtn) {
      toggleBtn.style.cursor = 'grab';
      toggleBtn.style.touchAction = 'none';
    }

    function dragStart(e) {
      // Prevent drag if interacting with inner elements like buttons or input
      if (e.target.closest('.chat-header-actions') || 
          e.target.closest('#chatBody') || 
          e.target.closest('.chat-input-area-premium')) {
        return;
      }
      
      // Allow drag only from header or toggle button
      if (!e.target.closest('.chat-header-premium') && !e.target.closest('#chatToggleButton')) {
        return;
      }

      if (e.type === 'touchstart') {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
        startClickX = e.touches[0].clientX;
        startClickY = e.touches[0].clientY;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        startClickX = e.clientX;
        startClickY = e.clientY;
      }

      isDragging = true;
      if (header) header.style.cursor = 'grabbing';
      if (toggleBtn) toggleBtn.style.cursor = 'grabbing';
    }

    function dragEnd(e) {
      if (!isDragging) return;
      
      let endX, endY;
      if (e.type === 'touchend' || e.type === 'touchcancel') {
        endX = e.changedTouches ? e.changedTouches[0].clientX : startClickX;
        endY = e.changedTouches ? e.changedTouches[0].clientY : startClickY;
      } else {
        endX = e.clientX;
        endY = e.clientY;
      }

      const distance = Math.hypot(endX - startClickX, endY - startClickY);
      
      initialX = currentX;
      initialY = currentY;
      isDragging = false;

      if (header) header.style.cursor = 'grab';
      if (toggleBtn) toggleBtn.style.cursor = 'grab';

      // Snap to boundaries
      snapToBoundaries();

      // Save position
      localStorage.setItem('matra_ai_pos_x', xOffset);
      localStorage.setItem('matra_ai_pos_y', yOffset);

      // Trigger click if it was a tiny movement (a tap/click) on the toggle button
      if (distance < 5 && e.target.closest('#chatToggleButton')) {
        toggleChat();
      }
    }

    function drag(e) {
      if (isDragging) {
        if (e.type === 'touchmove') {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        requestAnimationFrame(() => setTranslate(currentX, currentY, widget));
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    function snapToBoundaries() {
      const rect = widget.getBoundingClientRect();
      const viewportW = window.innerWidth;
      const viewportH = window.innerHeight;

      let adjustedX = xOffset;
      let adjustedY = yOffset;

      if (rect.left < 0) adjustedX -= rect.left - 10;
      if (rect.right > viewportW) adjustedX -= (rect.right - viewportW + 10);
      if (rect.top < 0) adjustedY -= rect.top - 10;
      if (rect.bottom > viewportH) adjustedY -= (rect.bottom - viewportH + 10);

      if (adjustedX !== xOffset || adjustedY !== yOffset) {
        xOffset = adjustedX;
        yOffset = adjustedY;
        widget.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
        setTranslate(xOffset, yOffset, widget);
        
        setTimeout(() => {
          widget.style.transition = ''; 
        }, 300);
      }
    }

    widget.addEventListener('touchstart', dragStart, { passive: true });
    window.addEventListener('touchend', dragEnd);
    window.addEventListener('touchmove', (e) => { if (isDragging) e.preventDefault(); drag(e); }, { passive: false });

    widget.addEventListener('mousedown', dragStart);
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('mousemove', drag);
    
    window.addEventListener('resize', snapToBoundaries);
    window.matraAiSnapBoundaries = snapToBoundaries;
  }

  // Get current language from parent site
  function getLang() {
    if (window.harmatraData && window.harmatraData.currentLang) {
      return window.harmatraData.currentLang;
    }
    return 'id'; // default
  }

  // Update all chat widget strings dynamically based on selected language
  function updateChatLanguage() {
    const lang = getLang();
    const isId = lang === 'id';
    const isAr = lang === 'ar';

    // 1. Update Welcome container content
    const welcomeTitle = elements.welcomeContainer.querySelector('.chat-welcome-title');
    const welcomeDesc = elements.welcomeContainer.querySelector('.chat-welcome-desc');
    if (welcomeTitle) {
      welcomeTitle.textContent = isId ? 'Halo, saya Matra AI' : (isAr ? 'مرحباً، أنا Matra AI' : 'Hello, I am Matra AI');
    }
    if (welcomeDesc) {
      welcomeDesc.textContent = isId 
        ? 'Asisten cerdas Angkatan 11 HARMATRA. Tanyakan kepada saya tentang info kelas, data anggota, galeri memori, atau perjalanan kami.'
        : (isAr 
          ? 'المساعد الذكي للدفعة 11 هارماترى. اسألني عن معلومات الصف، بيانات الأعضاء، معرض الذكريات، أو رحلتنا.'
          : 'The smart assistant of HARMATRA 11th Gen. Ask me about class info, member data, memory gallery, or our journey.');
    }

    // Update Suggestion Chips
    const suggestionsGrid = elements.welcomeContainer.querySelector('.chat-suggestions-grid');
    if (suggestionsGrid) {
      const chipsData = [
        {
          icon: 'fa-users text-blue-400',
          id: { prompt: 'Siapa saja anggota kelas?', label: 'Keluarga Harmatra' },
          en: { prompt: 'Who are the class members?', label: 'Harmatra Family' },
          ar: { prompt: 'من هم أعضاء الصف؟', label: 'عائلة هارماترى' }
        },
        {
          icon: 'fa-images text-purple-400',
          id: { prompt: 'Tampilkan galeri memori kelas', label: 'Galeri Memori' },
          en: { prompt: 'Show class memory gallery', label: 'Memory Gallery' },
          ar: { prompt: 'عرض معرض الصور', label: 'معرض الذكريات' }
        },
        {
          icon: 'fa-route text-emerald-400',
          id: { prompt: 'Apa saja agenda perjalanan kita?', label: 'Jejak Langkah' },
          en: { prompt: 'What is our journey itinerary?', label: 'Our Journey' },
          ar: { prompt: 'ما هي أجندة رحلتنا؟', label: 'رحلتنا' }
        },
        {
          icon: 'fa-crown text-amber-400',
          id: { prompt: 'Siapa ketua kelas Harmatra?', label: 'Ketua Kelas' },
          en: { prompt: 'Who is the class president of Harmatra?', label: 'Class President' },
          ar: { prompt: 'من هو رئيس الصف؟', label: 'رئيس الصف' }
        }
      ];

      suggestionsGrid.innerHTML = chipsData.map(chip => {
        const localized = chip[lang] || chip.id;
        return `
          <button class="chat-suggestion-chip" data-prompt="${escapeHTML(localized.prompt)}">
            <i class="fa-solid ${chip.icon}"></i>
            <span>${escapeHTML(localized.label)}</span>
          </button>
        `;
      }).join('');
    }

    // 2. Update Input Area
    if (elements.chatInput) {
      elements.chatInput.placeholder = isId ? 'Tanya Matra AI...' : (isAr ? 'اسأل Matra AI...' : 'Ask Matra AI anything...');
      if (isAr) {
        elements.chatInput.style.textAlign = 'right';
        elements.chatInput.style.direction = 'rtl';
      } else {
        elements.chatInput.style.textAlign = '';
        elements.chatInput.style.direction = '';
      }
    }

    const footerNote = elements.chatWidget.querySelector('.chat-footer-note');
    if (footerNote) {
      footerNote.textContent = isId 
        ? 'Tekan Enter untuk mengirim, Shift + Enter untuk baris baru' 
        : (isAr 
          ? 'اضغط Enter للإرسال، Shift + Enter لسطر جديد' 
          : 'Press Enter to send, Shift + Enter for new line');
    }

    // 3. Update Header Status
    if (elements.chatStatusText) {
      if (state.isTyping) {
        elements.chatStatusText.textContent = isId ? 'Sedang mengetik...' : (isAr ? 'يكتب الآن...' : 'Typing...');
      } else {
        elements.chatStatusText.textContent = isAr ? 'متصل' : 'Online';
      }
    }

    // 4. Update rendered messages labels & actions
    const userLabels = elements.chatMessages.querySelectorAll('.chat-entry.user .chat-bubble-info span');
    userLabels.forEach(lbl => {
      lbl.textContent = isId ? 'Anda' : (isAr ? 'أنت' : 'You');
    });

    const copyBtnLabels = elements.chatMessages.querySelectorAll('.copy-btn span');
    copyBtnLabels.forEach(lbl => {
      lbl.textContent = isId ? 'Salin' : (isAr ? 'نسخ' : 'Copy');
    });
  }

  // Formatting parser: converts Markdown-like syntax to HTML safely
  function formatMessage(text) {
    if (!text) return '';

    // Simple HTML escape for XSS protection
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Markdown bold: **text** -> <strong>text</strong>
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[var(--chat-text-main)]">$1</strong>');

    // Bullet points: lines starting with "- " or "* " -> <ul><li>
    const lines = html.split('\n');
    let inList = false;
    let listHTML = [];

    for (let line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (!inList) {
          listHTML.push('<ul class="list-disc pl-5 my-2 space-y-1">');
          inList = true;
        }
        // Remove the bullet and wrap in <li>
        listHTML.push(`<li class="text-sm leading-relaxed">${trimmed.substring(2)}</li>`);
      } else {
        if (inList) {
          listHTML.push('</ul>');
          inList = false;
        }
        listHTML.push(line);
      }
    }

    if (inList) {
      listHTML.push('</ul>');
    }

    // Join with linebreaks
    return listHTML.join('\n').replace(/\n/g, '<br>');
  }

  // Open / Close chat window with animations
  function toggleChat(forceState) {
    if (!elements.chatWindow || !elements.chatToggleButton) return;

    const nextState = typeof forceState === 'boolean' ? forceState : !state.isOpen;
    if (nextState === state.isOpen) return;

    state.isOpen = nextState;

    if (state.isOpen) {
      elements.chatWindow.classList.remove('hidden');
      elements.chatWindow.classList.add('active');
      elements.chatWindow.style.visibility = 'visible';
      elements.chatWindow.style.opacity = '1';
      elements.chatWindow.style.pointerEvents = 'auto';

      // Force layout recalc before removing transition classes
      void elements.chatWindow.offsetWidth;
      elements.chatToggleButton.classList.add('active');
      
      // Hide the entire avatar wrapper (which includes the blue dot) when open
      if (elements.chatToggleAvatarWrapper) elements.chatToggleAvatarWrapper.classList.add('hidden', 'scale-0', 'opacity-0');
      if (elements.chatToggleCloseIcon) elements.chatToggleCloseIcon.classList.remove('hidden');

      // Focus input (on desktop only to avoid virtual keyboard pops on mobile load)
      if (window.innerWidth > 480) {
        setTimeout(() => elements.chatInput.focus(), 100);
      }

      scrollToBottom(true);
    } else {
      elements.chatWindow.classList.add('hidden');
      elements.chatWindow.classList.remove('active');
      elements.chatWindow.style.visibility = '';
      elements.chatWindow.style.opacity = '';
      elements.chatWindow.style.pointerEvents = '';
      elements.chatToggleButton.classList.remove('active');

      if (elements.chatToggleAvatarWrapper) elements.chatToggleAvatarWrapper.classList.remove('hidden', 'scale-0', 'opacity-0');
      if (elements.chatToggleCloseIcon) elements.chatToggleCloseIcon.classList.add('hidden');
    }

    // Ensure it doesn't overflow screen after size changes
    if (window.matraAiSnapBoundaries) {
      setTimeout(window.matraAiSnapBoundaries, 50);
    }
  }

  // Handle auto-resize of textarea on user typing
  function handleInput() {
    const textarea = elements.chatInput;
    if (textarea && textarea.value.trim().toLowerCase() === 'askaa') {
      textarea.value = '';
      toggleChat(false);
      triggerAskaaProtocol();
      return;
    }
    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight - 6, 120);
    textarea.style.height = `${newHeight}px`;

    // Toggle disabled state of send button
    elements.sendChatBtn.disabled = !textarea.value.trim() || state.isTyping;
  }

  // Handle Enter to send, Shift+Enter for new line
  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // Suggestion chips handler
  function handleSuggestionClick(e) {
    const chip = e.target.closest('.chat-suggestion-chip');
    if (!chip) return;

    const prompt = chip.dataset.prompt;
    if (prompt) {
      sendUserMessage(prompt);
    }
  }

  // Core messaging flow
  async function handleSend() {
    const text = elements.chatInput.value.trim();
    if (!text || state.isTyping) return;

    sendUserMessage(text);
  }

  function sendUserMessage(text) {
    if (text.trim().toLowerCase() === 'askaa') {
      elements.chatInput.value = '';
      handleInput();
      toggleChat(false);
      triggerAskaaProtocol();
      return;
    }
    // Clear input
    elements.chatInput.value = '';
    handleInput();

    // Add user message to state and UI
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage = { role: 'user', content: text, time: timeStr };
    state.messages.push(userMessage);

    // Save and render
    saveHistory();
    renderMessage(userMessage);
    hideWelcomeIfNeeded();
    scrollToBottom(true);

    // Simulate AI thinking and response
    triggerAIResponse(text);
  }

  // Handle AI typing simulation
  async function triggerAIResponse(userPrompt) {
    // 6. LOADING STATE
    const lang = getLang();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const loadingText = lang === 'ar' ? 'Matra AI يفكر...' : (lang === 'en' ? 'Matra AI is thinking...' : 'Matra AI sedang berpikir...');
    const botMessage = { role: 'assistant', content: loadingText, time: timeStr };
    state.messages.push(botMessage);

    const messageId = renderMessage(botMessage, true);
    const container = document.getElementById(messageId);
    const bubbleElement = container ? container.querySelector('.chat-bubble.bot') : null;

    // 7. AUTO SCROLL
    if (elements.chatBody) elements.chatBody.scrollTop = elements.chatBody.scrollHeight;

    state.isTyping = true;
    elements.sendChatBtn.disabled = true;
    elements.chatInput.disabled = true;

    let rawReply = "";
    const lowerPrompt = userPrompt.toLowerCase();
    
    try {
      rawReply = await fetchAIResponse(userPrompt);
    } catch (error) {
      console.error("AI Response Error:", error);
      const lang = getLang();
      if (error.message.includes('429_TOO_MANY_REQUESTS')) {
        rawReply = lang === 'ar'
          ? 'عذراً، أواجه ضغطاً كبيراً في الوقت الحالي. يرجى الانتظار بضع ثوانٍ ثم المحاولة مرة أخرى.'
          : (lang === 'en'
          ? 'I am receiving too many requests right now. Please wait a few seconds and try again.'
          : 'Maaf, saya sedang melayani terlalu banyak permintaan saat ini. Mohon tunggu beberapa detik dan coba lagi ya.');
      } else {
        rawReply = lang === 'ar'
          ? 'عذراً، Matra AI يواجه مشكلة في الاتصال. حاول مرة أخرى بعد قليل.'
          : (lang === 'en'
          ? 'Sorry, Matra AI is experiencing a connection issue. Error: ' + error.message
          : 'Maaf, Matra AI sedang mengalami gangguan koneksi. Error: ' + error.message);
      }
    }

    if (!bubbleElement) return;

    // Update the message in state and UI
    botMessage.content = rawReply;
    bubbleElement.innerHTML = formatMessage(rawReply);
    
    if (elements.chatBody) elements.chatBody.scrollTop = elements.chatBody.scrollHeight;

    if (document.getElementById(messageId)) {
        addBotActions(messageId, rawReply);
    }

    // Finish streaming
    state.isTyping = false;
    elements.chatInput.disabled = false;
    
    // Auto focus on desktop after bot replies if window is open
    if (window.innerWidth > 480 && state.isOpen) {
      elements.chatInput.focus();
    }
    handleInput(); 
    
    saveHistory();
    scrollToBottom(true);
  }

  // Toggle visual typing state in header & body
  function toggleTyping(isTyping) {
    state.isTyping = isTyping;
    elements.sendChatBtn.disabled = isTyping || !elements.chatInput.value.trim();
    elements.chatInput.disabled = isTyping;

    if (isTyping) {
      elements.chatStatusText.textContent = getLang() === 'id' ? 'Sedang mengetik...' : (getLang() === 'ar' ? 'يكتب الآن...' : 'Typing...');
      elements.chatStatusDot.classList.add('typing');
      appendTypingIndicator();
    } else {
      elements.chatStatusText.textContent = getLang() === 'ar' ? 'متصل' : 'Online';
      elements.chatStatusDot.classList.remove('typing');
      removeTypingIndicator();
    }
  }

  // Bouncing 3-dot typing UI insertion
  function appendTypingIndicator() {
    removeTypingIndicator(); // Ensure no duplicates
    const typingHTML = `
      <div id="chatTypingIndicator" class="chat-typing-bubble">
        <div class="chat-typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    elements.chatMessages.insertAdjacentHTML('beforeend', typingHTML);
    scrollToBottom();
  }

  // Remove typing indicator
  function removeTypingIndicator() {
    const indicator = document.getElementById('chatTypingIndicator');
    if (indicator) indicator.remove();
  }

  // Scroll to bottom helper with customizable smooth behavior
  function scrollToBottom(force = false) {
    const chatBody = elements.chatBody;
    const scrollHeight = chatBody.scrollHeight;
    
    if (force) {
      chatBody.scrollTop = scrollHeight;
    } else {
      chatBody.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
    }
  }

  // Hide or show the welcome container based on message list state
  function hideWelcomeIfNeeded() {
    if (state.messages.length > 0) {
      elements.welcomeContainer.style.display = 'none';
      elements.chatMessages.style.display = 'flex';
    } else {
      elements.welcomeContainer.style.display = 'flex';
      elements.chatMessages.style.display = 'none';
    }
  }

  // Render a message block to the container
  function renderMessage(msg, isStreaming = false) {
    const isUser = msg.role === 'user';
    const messageId = msg.id || `msg-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    if (!msg.id) msg.id = messageId;

    const actionsHTML = (!isUser && !isStreaming) ? `
          <div class="chat-bot-actions">
            <button class="chat-bubble-action-btn copy-btn" data-clipboard="${escapeHTML(msg.content)}">
              <i class="fa-regular fa-copy"></i>
              <span>${getLang() === 'id' ? 'Salin' : (getLang() === 'ar' ? 'نسخ' : 'Copy')}</span>
            </button>
          </div>
    ` : ((!isUser && isStreaming) ? `<div class="chat-bot-actions-container"></div>` : '');

    const messageHTML = `
      <div class="chat-entry ${isUser ? 'user' : 'bot'}" id="${messageId}">
        <div class="chat-bubble-info">
          <span>${isUser ? (getLang() === 'id' ? 'Anda' : (getLang() === 'ar' ? 'أنت' : 'You')) : 'Matra AI'}</span>
        </div>
        <div class="chat-bubble ${isUser ? 'user' : 'bot'}">${isUser ? escapeHTML(msg.content) : formatMessage(msg.content)}</div>
        <div class="chat-bubble-time">${msg.time}</div>
        ${actionsHTML}
      </div>
    `;

    elements.chatMessages.insertAdjacentHTML('beforeend', messageHTML);

    if (!isUser && !isStreaming) {
      bindCopyAction(messageId, msg.content);
    }
    
    return messageId;
  }
  
  function bindCopyAction(messageId, content) {
      const container = document.getElementById(messageId);
      if (!container) return;
      const copyBtn = container.querySelector('.copy-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => copyToClipboard(copyBtn, content));
      }
  }

  function addBotActions(messageId, content) {
      const container = document.getElementById(messageId);
      if (!container) return;
      const actionsContainer = container.querySelector('.chat-bot-actions-container');
      if (actionsContainer) {
          actionsContainer.outerHTML = `
          <div class="chat-bot-actions">
            <button class="chat-bubble-action-btn copy-btn" data-clipboard="${escapeHTML(content)}">
              <i class="fa-regular fa-copy"></i>
              <span>${getLang() === 'id' ? 'Salin' : (getLang() === 'ar' ? 'نسخ' : 'Copy')}</span>
            </button>
          </div>
          `;
          bindCopyAction(messageId, content);
      }
  }

  // Clipboard copy API with button status toggle
  function copyToClipboard(button, text) {
    navigator.clipboard.writeText(text).then(() => {
      const label = button.querySelector('span');
      const icon = button.querySelector('i');
      
      const originalLabel = label.textContent;
      const originalIconClass = icon.className;

      label.textContent = getLang() === 'id' ? 'Tersalin!' : (getLang() === 'ar' ? 'تم النسخ!' : 'Copied!');
      icon.className = 'fa-solid fa-check text-green-400';

      setTimeout(() => {
        label.textContent = originalLabel;
        icon.className = originalIconClass;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  // Simple HTML escaping helper
  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Confirm and clear chat history (using SweetAlert2 if available)
  function confirmClearChat() {
    const isId = getLang() === 'id';
    const isAr = getLang() === 'ar';
    
    if (window.Swal) {
      window.Swal.fire({
        title: isAr ? 'مسح الذاكرة' : (isId ? 'Hapus Memori' : 'Clear Memory'),
        html: isAr 
          ? 'هل أنت متأكد أنك تريد مسح جميع سجلات المحادثة؟'
          : (isId 
            ? 'Tindakan ini akan menghapus seluruh riwayat obrolan Anda dengan Matra AI secara permanen.'
            : 'This action will permanently delete your entire conversation history with Matra AI.'),
        icon: 'warning',
        iconColor: '#a855f7',
        showCancelButton: true,
        confirmButtonText: isAr ? 'مسح' : (isId ? 'Hapus' : 'Clear'),
        cancelButtonText: isAr ? 'إلغاء' : (isId ? 'Batal' : 'Cancel'),
        buttonsStyling: false,
        customClass: {
          popup: 'matra-alert-popup',
          title: 'matra-alert-title',
          htmlContainer: 'matra-alert-html',
          confirmButton: 'matra-alert-confirm',
          cancelButton: 'matra-alert-cancel'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          clearChatHistory();
        }
      });
    } else {
      // Fallback if Swal is not loaded yet
      const confirmMsg = isAr 
        ? 'هل أنت متأكد أنك تريد حذف جميع الرسائل؟' 
        : (isId ? 'Apakah Anda yakin ingin menghapus semua pesan?' : 'Are you sure you want to clear all messages?');
      if (confirm(confirmMsg)) {
        clearChatHistory();
      }
    }
  }

  function clearChatHistory() {
    state.messages = [];
    localStorage.removeItem(STORAGE_KEY);
    elements.chatMessages.innerHTML = '';
    
    // Reset typing state if interrupted
    state.isTyping = false;
    elements.chatInput.disabled = false;
    elements.sendChatBtn.disabled = !elements.chatInput.value.trim();
    elements.chatStatusText.textContent = getLang() === 'ar' ? 'متصل' : 'Online';
    elements.chatStatusDot.classList.remove('typing');
    removeTypingIndicator();
    
    hideWelcomeIfNeeded();
    
    // Add glowing dot again since history cleared
    if (elements.chatToggleDot) {
      elements.chatToggleDot.style.display = 'block';
    }
  }

  // LocalStorage Caching persistence
  function saveHistory() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.messages.slice(-40)));
  }

  function loadHistory() {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      try {
        state.messages = JSON.parse(cached) || [];
      } catch (e) {
        state.messages = [];
      }
    }

    elements.chatMessages.innerHTML = '';
    state.messages.forEach(renderMessage);
    hideWelcomeIfNeeded();
    scrollToBottom(true);
  }

  // Sync visual updates based on local theme / layout constraints
  function updateUIState() {
    // Hide status glow notification dot if there are messages
    if (state.messages.length > 0 && elements.chatToggleDot) {
      elements.chatToggleDot.style.display = 'none';
    }
  }

  // ==========================================
  // INTELLECTUAL RESPONSE GENERATOR
  // ==========================================
  
  async function fetchAIResponse(userPrompt) {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE" || GEMINI_API_KEY === "PASTE_YOUR_KEY_HERE") {
       throw new Error("API Key is missing.");
    }

    // 5. GET HARMATRA DATA (if available)
    let harmatraContext = "";
    const rawDb = (window.harmatraData && window.harmatraData.dbData) || window.HARMATRA_DATA || {};
    
    // We check if data exists in rawDb, otherwise fallback to global variable if available
    const db = Object.keys(rawDb).length > 0 ? rawDb : (window.localData || {});
    
    if (db) {
      harmatraContext = `
[HARMATRA DATABASE]
Website Metadata: ${JSON.stringify(db.website_metadata || { developer: "Immszkyy", name: "HARMATRA" })}
Website History: ${JSON.stringify(db.website_history || {})}
Today's Spotlight: ${JSON.stringify(db.spotlight || {})}
Total Active Members: ${db.members ? db.members.length : 0}
Active Members Data: ${JSON.stringify((db.members || []).map(m => ({name: m.name, full_name: m.full_name, role: m.role})))}
Total Previous Members: ${db.previous_members ? db.previous_members.length : 0}
Timeline Events: ${JSON.stringify(db.timeline || [])}
Total Gallery Items: ${db.gallery ? db.gallery.length : 0}
Quotes: ${JSON.stringify(db.quotes || [])}
[END OF DATABASE]
`;
    }

    // 6. SYSTEM PROMPT FOR GEMINI — Language Aware
    const lang = getLang();
    const langInstruction = lang === 'ar'
      ? 'CRITICAL LANGUAGE RULE: You MUST respond ONLY in Arabic (العربية). Every single word must be in Arabic. Never mix with Indonesian or English. Even if the question is in another language, respond in Arabic.'
      : (lang === 'en'
      ? 'CRITICAL LANGUAGE RULE: You MUST respond ONLY in English. Every single word must be in English. Never mix with Indonesian or Arabic. Even if the question is in another language, respond in English.'
      : 'CRITICAL LANGUAGE RULE: Kamu HARUS merespons HANYA dalam Bahasa Indonesia. Setiap kata harus dalam Bahasa Indonesia. Jangan campur dengan bahasa lain.');

    const systemInstruction = `You are MATRA AI.
Official digital intelligent assistant of the HARMATRA website.

You are not a simple chatbot. You feel like a real AI assistant living inside the Harmatra website.

Your behavior:
- smart, natural, modern, helpful, warm, responsive, human-like.
- Provide accurate, context-aware responses based on the latest available information.

${langInstruction}

CRITICAL INSTRUCTION:
You have direct access to the HARMATRA DATABASE below.
Whenever a question relates to the website content (developers, members, history, gallery count, spotlight, etc.), you MUST search the database first.
For example:
- If asked "Who built this website?", answer using the Developer information from Website Metadata.
- If asked "Who is the secretary?", search Active Members Data for the role 'Secretary'.
- If asked "How many gallery photos?", read the Total Gallery Items count.

If the requested data is truly not found in the HARMATRA DATABASE, reply naturally that you couldn't find the information in the archive. Do not invent facts or hallucinate.

Outside Harmatra questions:
act like smart AI (school help, study help, writing, ideas, motivation, productivity).
Never say “I am demo” or robotic answers. Stay as MATRA AI.

${harmatraContext}`;

    const contents = [];
    
    // 8. CHAT HISTORY — exclude any loading placeholder messages
    const loadingPhrases = ['Matra AI sedang berpikir...', 'Matra AI is thinking...', 'Matra AI يفكر...'];
    for (let msg of state.messages) {
      if (msg.role === 'user') {
         contents.push({ role: 'user', parts: [{ text: msg.content }] });
      } else if (msg.role === 'assistant' && !loadingPhrases.includes(msg.content)) {
         contents.push({ role: 'model', parts: [{ text: msg.content }] });
      }
    }
    
    // Inject system prompt into the first message
    if (contents.length > 0) {
       contents[0].parts[0].text = `System: ${systemInstruction}\n\n${contents[0].parts[0].text}`;
    } else {
       contents.push({ role: 'user', parts: [{ text: `System: ${systemInstruction}\n\n${userPrompt}` }]});
    }

    const requestBody = { contents };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errText = await response.text();
      if (response.status === 429) {
        throw new Error(`429_TOO_MANY_REQUESTS`);
      }
      throw new Error(`Status ${response.status} - ${errText}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text;
    }
    
    throw new Error("Empty response from Gemini.");
  }

  function playSynthSound(freq, duration, type = 'sine', volume = 0.04) {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch(e) {}
  }

  async function triggerAskaaProtocol() {
    runMatrixSequence(1, () => {
      const isId = getLang() === 'id';
      const isAr = getLang() === 'ar';
      
      let currentPasscode = 'askaryy';
      if (window.harmatraData && window.harmatraData.dbData && window.harmatraData.dbData.settings && window.harmatraData.dbData.settings.adminPasscode) {
        currentPasscode = window.harmatraData.dbData.settings.adminPasscode;
      } else if (window.HARMATRA_DATA && window.HARMATRA_DATA.settings && window.HARMATRA_DATA.settings.adminPasscode) {
        currentPasscode = window.HARMATRA_DATA.settings.adminPasscode;
      }

      if (window.Swal) {
        window.Swal.fire({
          title: isAr ? 'أدخل رمز المرور للمشرف' : (isId ? 'Masukkan Passcode Admin' : 'Enter Admin Passcode'),
          input: 'password',
          inputPlaceholder: '••••••',
          inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off',
            autocomplete: 'new-password'
          },
          background: '#0a0a0f',
          color: '#ffffff',
          confirmButtonColor: '#00ff88',
          confirmButtonText: isAr ? 'دخول' : (isId ? 'Masuk' : 'Access'),
          showCancelButton: true,
          cancelButtonText: isAr ? 'إلغاء' : (isId ? 'Batal' : 'Cancel'),
          customClass: {
            container: 'swal-z-top',
            popup: 'rounded-3xl border border-[#00ff88]/30 shadow-2xl backdrop-blur-md'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            if (result.value === currentPasscode) {
              runMatrixSequence(2, () => {
                const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';
                window.location.href = isLocal ? 'backroom.html' : '/backroom';
              });
            } else {
              cleanupMatrix();
              window.Swal.fire({
                icon: 'error',
                title: isAr ? 'تم رفض الوصول' : (isId ? 'Akses Ditolak' : 'Access Denied'),
                text: isAr ? 'رمز المرور غير صحيح.' : (isId ? 'Passcode salah.' : 'Incorrect passcode.'),
                background: '#0a0a0f',
                color: '#ffffff',
                confirmButtonColor: '#ef4444'
              });
            }
          } else {
            cleanupMatrix();
          }
        });
      } else {
        const p = prompt(isId ? "Masukkan Passcode Admin:" : "Enter Admin Passcode:");
        if (p === currentPasscode) {
          runMatrixSequence(2, () => {
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';
            window.location.href = isLocal ? 'backroom.html' : '/backroom';
          });
        } else {
          cleanupMatrix();
          if (p !== null) alert(isId ? "Passcode salah!" : "Incorrect passcode!");
        }
      }
    });
  }

  function cleanupMatrix() {
    document.getElementById('matrixGlitchStyles')?.remove();
    document.getElementById('matrixCanvas')?.remove();
    document.getElementById('matrixTextOverlay')?.remove();
  }

  function runMatrixSequence(phase, onComplete) {
    cleanupMatrix();

    // 1. Glitch Styles
    const styleEl = document.createElement('style');
    styleEl.id = 'matrixGlitchStyles';
    styleEl.textContent = `
      .swal-z-top { z-index: 10000000 !important; }
      @keyframes matrixGlitch {
        0% { transform: translate(0); text-shadow: 0 0 10px rgba(0, 255, 136, 0.8); }
        20% { transform: translate(-2px, 2px); text-shadow: -2px 0 red, 2px 0 blue; }
        40% { transform: translate(-2px, -2px); text-shadow: 0 0 10px rgba(0, 255, 136, 0.8); }
        60% { transform: translate(2px, 2px); text-shadow: 2px -2px red, -2px 2px blue; }
        80% { transform: translate(2px, -2px); text-shadow: 0 0 10px rgba(0, 255, 136, 0.8); }
        100% { transform: translate(0); text-shadow: 0 0 10px rgba(0, 255, 136, 0.8); }
      }
      .glitch-text { animation: matrixGlitch 0.3s infinite; }
      @keyframes matrixFlicker {
        0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; filter: brightness(1); }
        20%, 24%, 55% { opacity: 0.8; filter: brightness(1.2); }
      }
      .flicker-overlay { animation: matrixFlicker 2s infinite; }
      .terminal-prompt::after { content: '_'; animation: blink 0.8s infinite; }
      @keyframes blink { 50% { opacity: 0; } }
    `;
    document.head.appendChild(styleEl);

    // 2. Setup Canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'matrixCanvas';
    Object.assign(canvas.style, {
      position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
      zIndex: '999999', backgroundColor: '#050505', opacity: '0',
      transition: 'opacity 1s ease', pointerEvents: 'auto'
    });
    document.body.appendChild(canvas);

    const overlay = document.createElement('div');
    overlay.id = 'matrixTextOverlay';
    Object.assign(overlay.style, {
      position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
      zIndex: '1000000', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', pointerEvents: 'none',
      opacity: '0', transition: 'opacity 1s ease',
      backdropFilter: 'blur(10px)', webkitBackdropFilter: 'blur(10px)'
    });

    overlay.innerHTML = `
      <div class="flicker-overlay" style="width: 90%; max-width: 600px; padding: 2rem; background: rgba(5,5,5,0.9); border: 1px solid #00ff88; border-radius: 1rem; box-shadow: 0 0 30px rgba(0, 255, 136, 0.25); font-family: monospace; font-size: 1.05rem; line-height: 1.8; color: #00ff88;">
        <div id="bootTerminal" style="text-align: left; height: 200px; overflow-y: auto; white-space: pre-wrap;"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    setTimeout(() => {
      canvas.style.opacity = '1';
      overlay.style.opacity = '1';
    }, 50);

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resizeHandler = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };
    window.addEventListener('resize', resizeHandler);

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもやゆよらりるれろわをんァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲン'.split('');
    const fontSize = 16;
    const columns = Math.floor(width / fontSize) + 1;
    const rainDrops = Array(columns).fill(1);
    
    const colors = ['#00ff88', '#00ee77', '#00dd66', '#ffffff'];
    const columnColors = Array(columns).fill(0).map(() => colors[Math.floor(Math.random() * colors.length)]);

    let animationInterval;
    function drawMatrix() {
      if (!document.body.contains(canvas)) {
        clearInterval(animationInterval);
        return;
      }
      ctx.fillStyle = 'rgba(5, 5, 5, 0.08)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;
        ctx.fillStyle = Math.random() > 0.98 ? '#ffffff' : columnColors[i];
        ctx.fillText(text, x, y);
        if (y > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
          columnColors[i] = colors[Math.floor(Math.random() * colors.length)];
        }
        rainDrops[i]++;
      }
    }

    animationInterval = setInterval(drawMatrix, 33);

    // 3. Boot Sequence Logs Typer
    const terminal = document.getElementById('bootTerminal');
    const logs = phase === 1 ? [
      { text: "ACCESSING HARMATRA CORE...", style: "color: #00ff88;" },
      { text: "SELAMAT DATANG MANG ATMIN", style: "color: #00ff88; font-size: 1.4rem; font-weight: bold; text-shadow: 0 0 15px rgba(0,255,136,0.8); margin-top: 0.5rem;" }
    ] : [
      { text: "VERIFYING DECRYPTION KEY...", style: "color: #00ff88;" },
      { text: "ACCESS GRANTED", style: "color: #00ffff; font-weight: bold; text-shadow: 0 0 10px rgba(0,255,255,0.8);" },
      { text: "darcuupp", style: "color: #00ff88; font-size: 1.4rem; font-weight: bold; text-shadow: 0 0 15px rgba(0,255,136,0.8); margin-top: 0.5rem;" }
    ];

    let lineIndex = 0;

    function startNextLine() {
      if (!document.body.contains(canvas)) return;

      if (lineIndex >= logs.length) {
        setTimeout(() => {
          if (phase === 1) {
            overlay.style.opacity = '0';
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 500);
          } else {
            canvas.style.transition = 'opacity 0.8s ease';
            overlay.style.transition = 'opacity 0.8s ease';
            canvas.style.opacity = '0';
            overlay.style.opacity = '0';
            setTimeout(() => {
              cleanupMatrix();
              if (onComplete) onComplete();
            }, 800);
          }
        }, 1500);
        return;
      }

      const logInfo = logs[lineIndex];
      const lineDiv = document.createElement('div');
      if (logInfo.style) lineDiv.style.cssText = logInfo.style;
      
      const isFinalText = (lineIndex === logs.length - 1);
      if (isFinalText) {
        lineDiv.classList.add('glitch-text');
      } else {
        lineDiv.classList.add('terminal-prompt');
      }

      terminal.appendChild(lineDiv);
      terminal.scrollTop = terminal.scrollHeight;

      let charIndex = 0;
      
      if (phase === 2 && lineIndex === 1) {
        playSynthSound(400, 0.08, 'triangle', 0.05);
        setTimeout(() => playSynthSound(800, 0.2, 'sine', 0.05), 80);
      } else if (isFinalText) {
        playSynthSound(1000, 0.35, 'sine', 0.04);
      }

      function typeChar() {
        if (!document.body.contains(canvas)) return;

        if (charIndex < logInfo.text.length) {
          lineDiv.textContent += logInfo.text.charAt(charIndex);
          charIndex++;
          
          // Audio keystroke synth
          if (lineIndex < 3) {
            playSynthSound(Math.random() * 300 + 400, 0.02, 'sine', 0.02);
          }
          
          setTimeout(typeChar, 40);
        } else {
          lineDiv.classList.remove('terminal-prompt');
          lineIndex++;
          setTimeout(startNextLine, 250);
        }
      }

      typeChar();
    }

    setTimeout(startNextLine, 400);
  }

  // Load chat on page DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose toggleChat to global window object for HTML inline references or other hooks
  window.toggleChat = toggleChat;

})();
