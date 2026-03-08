const fs = require('fs');
const path = require('path');

const blogDir = '/Users/orionsieling/.openclaw/sites/ienable-site/blog';
const posts = [];

// Get all HTML files
const files = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.html') && f !== 'index.html');

// Add from-prompt-to-primetime series
const seriesDir = path.join(blogDir, 'from-prompt-to-primetime');
if (fs.existsSync(seriesDir)) {
  const seriesFiles = fs.readdirSync(seriesDir)
    .filter(f => f.endsWith('.html'))
    .map(f => 'from-prompt-to-primetime/' + f);
  files.push(...seriesFiles);
}

files.forEach(file => {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  
  // Extract title
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1].replace(' | iEnable Blog', '').replace(' — iEnable Blog', '') : '';
  
  // Extract description
  const descMatch = content.match(/<meta name="description" content="(.*?)"/);
  const description = descMatch ? descMatch[1] : '';
  
  // Extract date from article-meta or inline
  let dateMatch = content.match(/📅\s*(.*?)<\/span>/);
  if (!dateMatch) {
    dateMatch = content.match(/📅\s*([A-Za-z]+ \d+, \d{4})/);
  }
  const dateStr = dateMatch ? dateMatch[1].trim() : 'Feb 24, 2026';
  
  // Extract read time
  let timeMatch = content.match(/⏱\s*(\d+)\s*min/);
  const readTime = timeMatch ? timeMatch[1] + ' min read' : '10 min read';
  
  // Determine category based on content or filename
  let category = 'Thought Leadership';
  if (content.includes('Technical Deep Dive') || content.includes('🔬 Technology')) {
    category = 'Technical Deep Dive';
  } else if (content.includes('Implementation') || content.includes('📋') || content.includes('🔧')) {
    category = 'Implementation';
  } else if (content.includes('Comparison') || content.includes('⚔️')) {
    category = 'Comparison';
  } else if (content.includes('Strategy') || content.includes('📊')) {
    category = 'Enterprise AI';
  } else if (content.includes('Industry Analysis') || content.includes('Analysis')) {
    category = 'Industry Analysis';
  } else if (content.includes('From Prompt to Primetime') || content.includes('🎬')) {
    category = '🎬 Creative Journal';
  } else if (content.includes('Context Engineering')) {
    category = 'Context Engineering';
  }
  
  // Parse date for sorting
  const dateParsed = new Date(dateStr);
  
  posts.push({
    file,
    title,
    description,
    date: dateStr,
    dateParsed,
    readTime,
    category
  });
});

// Sort by date (newest first)
posts.sort((a, b) => b.dateParsed - a.dateParsed);

// Output JSON
console.log(JSON.stringify(posts, null, 2));
