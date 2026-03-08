#!/bin/bash

# Script to fix missing blog post titles by extracting from HTML files

cd /Users/orionsieling/.openclaw/sites/ienable-site

# Counter for tracking
fixed_count=0
missing_html=0

echo "=== Fixing Blog Post Titles ==="
echo ""

# Find all markdown files with "Untitled"
for md_file in src/content/blog/*.md; do
    # Check if it has "Untitled" title
    if grep -q 'title: "Untitled"' "$md_file"; then
        # Get the base filename without extension
        base_name=$(basename "$md_file" .md)
        html_file="blog/${base_name}.html"
        
        echo "Processing: $base_name"
        
        if [ -f "$html_file" ]; then
            # Try to extract title from <h1> tag first
            title=$(grep -o '<h1[^>]*>[^<]*</h1>' "$html_file" | sed 's/<[^>]*>//g' | head -1)
            
            # If no h1, try <title> tag
            if [ -z "$title" ]; then
                title=$(grep -o '<title>[^<]*</title>' "$html_file" | sed 's/<[^>]*>//g' | head -1)
            fi
            
            # Clean up the title - remove " — iEnable Blog" or " — iEnable"
            title=$(echo "$title" | sed 's/ — iEnable Blog$//' | sed 's/ — iEnable$//' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
            
            if [ -n "$title" ]; then
                echo "  Found title: $title"
                
                # Escape special characters for sed
                escaped_title=$(echo "$title" | sed 's/[&/\]/\\&/g' | sed 's/"/\\"/g')
                
                # Update the markdown file
                sed -i '' "s/title: \"Untitled\"/title: \"$escaped_title\"/" "$md_file"
                
                ((fixed_count++))
                echo "  ✓ Updated"
            else
                echo "  ✗ No title found in HTML"
            fi
        else
            echo "  ✗ HTML file not found: $html_file"
            ((missing_html++))
        fi
        echo ""
    fi
done

echo "=== Summary ==="
echo "Fixed: $fixed_count"
echo "Missing HTML: $missing_html"
echo ""

# Show a few examples
echo "=== Sample Results ==="
head -15 src/content/blog/*.md | grep -A 1 "==>" | head -20
