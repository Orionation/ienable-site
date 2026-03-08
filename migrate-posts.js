const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'blog');
const outputDir = path.join(__dirname, 'src/content/blog');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all HTML files
const htmlFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.html') && f !== 'index.html');

console.log(`Found ${htmlFiles.length} blog posts to migrate\n`);

let migrated = 0;

htmlFiles.forEach(filename => {
  const filePath = path.join(blogDir, filename);
  const html = fs.readFileSync(filePath, 'utf-8');
  
  // Extract metadata
  const title = (html.match(/<title>(.*?) — iEnable Blog<\/title>/) || [])[1] || 'Untitled';
  const description = (html.match(/<meta name="description" content="(.*?)"/) || [])[1] || '';
  const date = (html.match(/<meta property="article:published_time" content="([\d-]+)"/) || [])[1] || '2026-01-01';
  
  // Extract from post-meta if available
  const readTimeMatch = html.match(/<span>(\d+ min read)<\/span>/);
  const readTime = readTimeMatch ? readTimeMatch[1] : '5 min';
  
  // Extract tag from post-tag
  const tagMatch = html.match(/<span class="post-tag">(.*?)<\/span>/);
  const primaryTag = tagMatch ? tagMatch[1] : 'Enterprise AI';
  
  // Extract article content
  let content = '';
  const articleMatch = html.match(/<article>([\s\S]*?)<\/article>/);
  
  if (articleMatch) {
    content = articleMatch[1];
    
    // Remove back link
    content = content.replace(/<a href="\/blog\/" class="back-link">.*?<\/a>/, '');
    
    // Convert HTML to Markdown
    // Headers
    content = content.replace(/<h2>(.*?)<\/h2>/g, '\n## $1\n');
    content = content.replace(/<h3>(.*?)<\/h3>/g, '\n### $1\n');
    content = content.replace(/<h4>(.*?)<\/h4>/g, '\n#### $1\n');
    
    // Paragraphs
    content = content.replace(/<p>(.*?)<\/p>/gs, '$1\n\n');
    
    // Strong and em
    content = content.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
    content = content.replace(/<em>(.*?)<\/em>/g, '*$1*');
    
    // Lists
    content = content.replace(/<ul>/g, '\n');
    content = content.replace(/<\/ul>/g, '\n');
    content = content.replace(/<ol>/g, '\n');
    content = content.replace(/<\/ol>/g, '\n');
    content = content.replace(/<li>(.*?)<\/li>/gs, '- $1\n');
    
    // Blockquotes
    content = content.replace(/<blockquote><p>(.*?)<\/p><\/blockquote>/gs, '\n> $1\n');
    
    // Code
    content = content.replace(/<code>(.*?)<\/code>/g, '`$1`');
    
    // Links
    content = content.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)');
    
    // Remove remaining HTML tags (divs, spans, etc.)
    content = content.replace(/<div[^>]*>/g, '\n');
    content = content.replace(/<\/div>/g, '\n');
    content = content.replace(/<span[^>]*>/g, '');
    content = content.replace(/<\/span>/g, '');
    content = content.replace(/<section[^>]*>/g, '\n');
    content = content.replace(/<\/section>/g, '\n');
    
    // Clean up excessive whitespace
    content = content.replace(/\n{3,}/g, '\n\n');
    content = content.trim();
  }
  
  // Create frontmatter
  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
description: "${description.replace(/"/g, '\\"')}"
tags: ["${primaryTag}"]
readTime: "${readTime}"
---

`;
  
  // Write markdown file
  const mdFilename = filename.replace('.html', '.md');
  const mdPath = path.join(outputDir, mdFilename);
  
  fs.writeFileSync(mdPath, frontmatter + content);
  migrated++;
  console.log(`✓ Migrated: ${filename} -> ${mdFilename}`);
});

console.log(`\n✅ Migrated ${migrated} blog posts successfully!`);
