#!/usr/bin/env node

/**
 * Clean HTML-to-Markdown converter for iEnable blog posts
 * Extracts article content only, no layout/nav/footer
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

// Configure Turndown for clean markdown
const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
  strongDelimiter: '**',
});

// Preserve custom components as raw HTML
const customComponents = ['step-flow', 'step', 'step-num', 'step-content', 'scout-demo', 'scout-line', 'scout-check', 'scout-warn', 'scout-label', 'scout-value', 'cta-box'];

customComponents.forEach(component => {
  turndown.addRule(component, {
    filter: (node) => {
      return node.classList && node.classList.contains(component);
    },
    replacement: (content, node) => {
      return '\n' + node.outerHTML + '\n';
    }
  });
});

// Remove empty paragraphs
turndown.addRule('removeEmptyParagraphs', {
  filter: (node) => {
    return node.nodeName === 'P' && node.textContent.trim() === '';
  },
  replacement: () => ''
});

function extractFrontmatter(html) {
  const $ = cheerio.load(html);
  
  // Extract from meta tags
  const title = $('meta[property="og:title"]').attr('content') || $('title').text().replace(' — iEnable Blog', '');
  const description = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || '';
  const date = $('meta[property="article:published_time"]').attr('content') || '';
  const author = $('meta[property="article:author"]').attr('content') || 'iEnable Team';
  
  // Extract tags from post-tag class in the hero section
  const tagText = $('.post-tag').first().text().trim();
  const tags = tagText ? [tagText] : ['Article'];
  
  // Extract read time from post-meta
  const readTimeMatch = $('.post-meta').text().match(/(\d+)\s*min\s*read/i);
  const readTime = readTimeMatch ? `${readTimeMatch[1]} min read` : '5 min read';
  
  return {
    title,
    date,
    description,
    tags,
    readTime,
    author
  };
}

function extractArticleContent(html) {
  const $ = cheerio.load(html);
  
  // Find the article element
  const $article = $('article');
  
  if (!$article.length) {
    console.error('No article element found');
    return '';
  }
  
  // Remove the back link (it's added by the layout)
  $article.find('.back-link').remove();
  
  // Get the HTML content
  let articleHtml = $article.html();
  
  // Convert to markdown
  let markdown = turndown.turndown(articleHtml);
  
  // Clean up excessive newlines (but keep some structure)
  markdown = markdown.replace(/\n{4,}/g, '\n\n\n');
  
  // Clean up list formatting issues
  markdown = markdown.replace(/^\s+[-*]/gm, '-');
  
  // Fix heading spacing
  markdown = markdown.replace(/\n(#{1,6}\s+)/g, '\n\n$1');
  markdown = markdown.replace(/(#{1,6}\s+.+)\n/g, '$1\n\n');
  
  // Clean up any inline styles that leaked through
  markdown = markdown.replace(/style="[^"]*"/g, '');
  
  // Trim and return
  return markdown.trim();
}

function convertBlogPost(htmlPath, outputPath) {
  try {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const frontmatter = extractFrontmatter(html);
    const content = extractArticleContent(html);
    
    // Build markdown file
    const markdown = `---
title: "${frontmatter.title}"
date: "${frontmatter.date}"
description: "${frontmatter.description}"
tags: ${JSON.stringify(frontmatter.tags)}
readTime: "${frontmatter.readTime}"
---

${content}
`;
    
    // Write to output
    fs.writeFileSync(outputPath, markdown, 'utf8');
    console.log(`✓ Converted: ${path.basename(htmlPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${path.basename(htmlPath)}:`, error.message);
    return false;
  }
}

function main() {
  const blogDir = path.join(__dirname, 'blog');
  const outputDir = path.join(__dirname, 'src/content/blog');
  
  // Get all HTML files
  const htmlFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.html'));
  
  console.log(`Found ${htmlFiles.length} HTML files to convert...\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  htmlFiles.forEach(file => {
    const htmlPath = path.join(blogDir, file);
    const mdFile = file.replace('.html', '.md');
    const outputPath = path.join(outputDir, mdFile);
    
    if (convertBlogPost(htmlPath, outputPath)) {
      successCount++;
    } else {
      failCount++;
    }
  });
  
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`✓ Successful: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
}

main();
