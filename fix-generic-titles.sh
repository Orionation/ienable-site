#!/bin/bash

cd /Users/orionsieling/.openclaw/sites/ienable-site

# Manually fix the 9 files with "iEnable Blog" title based on their slugs

declare -A title_map=(
    ["ai-fragmentation-paradox-every-vendor-solution-makes-it-worse"]="The AI Fragmentation Paradox: Why Every Vendor's Solution Makes the Problem Worse"
    ["ai-reliability-crisis-enterprise-single-vendor-risk"]="The AI Reliability Crisis: Why Single-Vendor Enterprise AI Is a Ticking Time Bomb"
    ["context-engineering-enterprise-guide"]="Context Engineering for Enterprise: The Complete Guide to Making AI Actually Work"
    ["context-engineering-for-marketing-teams"]="Context Engineering for Marketing Teams: How to Make AI Understand Your Brand Voice"
    ["context-engineering-for-sales-teams"]="Context Engineering for Sales Teams: How to Give AI Your Best Rep's Closing Instincts"
    ["copilot-adoption-crisis"]="The Copilot Adoption Crisis: Why 97% of Enterprise AI Seats Stay Empty"
    ["openai-frontier-alliances-consulting-tax"]="OpenAI's Frontier Alliances Program: The Hidden Consulting Tax on Enterprise AI"
    ["servicenow-employeeworks-vs-ai-enablement"]="ServiceNow EmployeeWorks vs. AI Enablement: Why Workflow Automation Isn't the Same as AI Transformation"
    ["the-3-3-percent-problem-microsoft-copilot-adoption-crisis"]="The 3.3% Problem: Inside Microsoft Copilot's Enterprise Adoption Crisis"
)

echo "=== Fixing Generic Titles ==="
echo ""

for slug in "${!title_map[@]}"; do
    md_file="src/content/blog/${slug}.md"
    title="${title_map[$slug]}"
    
    if [ -f "$md_file" ]; then
        echo "Updating: $slug"
        echo "  New title: $title"
        
        # Escape special characters
        escaped_title=$(echo "$title" | sed 's/[&/\]/\\&/g' | sed 's/"/\\"/g')
        
        # Update the markdown file
        sed -i '' "s/title: \"iEnable Blog\"/title: \"$escaped_title\"/" "$md_file"
        echo "  ✓ Done"
    fi
done

echo ""
echo "=== Complete ==="_
