const fs = require('fs');
const content = fs.readFileSync('src/backend/data/icons/icon-iconify/dataIconify.jsx', 'utf8');
const lines = content.split('\n');

lines.forEach((line, i) => {
    if (line.includes('export const')) {
        // Check for basic structure: export const Name = ({}) => (<svg ... /></svg>);
        if (!line.includes('=>') || !line.includes('<svg') || !line.includes('</svg>')) {
             console.log(`Potential malformed line at ${i+1}: ${line.substring(0, 100)}...`);
        }
    }
});
