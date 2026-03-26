const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
        if (!filePath.includes('node_modules')) {
            getAllFiles(filePath, fileList);
        }
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getAllFiles(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let dirty = false;

  const importRegex = /import\s+.*?\s+from\s+['"](@(?:app|features|pages|shared|backend)[^'"]+)['"]/g;
  const dynamicImportRegex = /import\(['"](@(?:app|features|pages|shared|backend)[^'"]+)['"]\)/g;
  
  const replacer = (match, importPath) => {
    const parts = importPath.split('/');
    const lastPart = parts.pop();
    if (lastPart && /^[A-Z]/.test(lastPart)) {
      const newLastPart = lastPart.charAt(0).toLowerCase() + lastPart.slice(1);
      parts.push(newLastPart);
      dirty = true;
      return match.replace(importPath, parts.join('/'));
    }
    return match;
  };

  content = content.replace(importRegex, replacer);
  content = content.replace(dynamicImportRegex, replacer);

  if (dirty) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated case imports in ${file}`);
  }
});
