const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, 'src/backend/data');

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
        getAllFiles(filePath, fileList);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getAllFiles(dataDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let dirty = false;

  // Regex to match imports starting with ../../something/assets/img/
  const importRegex = /(import\s+.*?from\s+['"])(?:\.\.\/)+assets\/img\/(.*?)(['"])/g;
  
  content = content.replace(importRegex, (match, p1, p2, p3) => {
    dirty = true;
    return `const ${match.split(' ')[1]} = '/img/${p2}';\n// ` + match.replace(/\n/g, ''); // comment out old import, create const string
  });
  
  // also fix if they used it directly inside objects like imgSrc: "../../../assets/img..."
  const inlineRegex = /(['"])(?:\.\.\/)+assets\/img\/(.*?)(['"])/g;
  content = content.replace(inlineRegex, (match, p1, p2, p3) => {
    dirty = true;
    return `'/img/${p2}'`;
  });

  if (dirty) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed asset paths in ${file}`);
  }
});
