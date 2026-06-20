const fs = require('fs');
const file = 'c:/Users/izm/OneDrive/ドキュメント/alhazen/html/alhazen/kelas 10/angkatan/index.html';
let content = fs.readFileSync(file, 'utf8');

// Match any name_ar: "...", followed by some spacing, followed by role: "..."
// We need to be careful not to replace the one we already manually updated.
content = content.replace(/(name_ar:\s*".*?",)(\s*)(role:\s*".*?",)/g, (match, p1, p2, p3) => {
  return p1 + p2 + 'full_name: "selain ultraman",' + p2 + p3;
});

fs.writeFileSync(file, content);
console.log("Updated index.html");
