const fs = require('fs');
const path = require('path');

function usage() {
  console.log('Usage: node updateChain.js <url>');
  console.log('Example: node updateChain.js "http://localhost:3000/introduction?chain=999"');
}

const urlArg = process.argv[2];
if (!urlArg) {
  usage();
  process.exit(1);
}

let chainValue;
try {
  const url = new URL(urlArg);
  chainValue = url.searchParams.get('chain');
} catch (err) {
  console.error('Invalid URL provided.');
  usage();
  process.exit(1);
}

if (!chainValue) {
  console.error('No "chain" query parameter found in the URL.');
  process.exit(1);
}

const snippetPath = path.join(__dirname, 'snippets', 'chain.mdx');
const newContent = `export const chain = ${chainValue};\n`;

try {
  fs.writeFileSync(snippetPath, newContent);
  console.log(`Updated ${snippetPath} with chain value ${chainValue}`);
} catch (err) {
  console.error('Failed to update snippet:', err);
  process.exit(1);
}
