# Configuration Guide

This guide will help you customize your portfolio by editing the `config.json` file.

## Quick Start

1. Open `config.json` in your favorite text editor
2. Update the values to match your information
3. Save the file
4. Restart the dev server (`npm run dev`)

## Configuration Options

### Site Settings

```json
"site": {
  "name": "Your Company Name",           // Used in page title
  "tagline": "Your main tagline",         // Main headline
  "description": "Brief description",     // Meta description & subtitle
  "logo": {
    "type": "svg",
    "svg": "<svg>...</svg>"               // Your logo SVG code
  },
  "contact": {
    "phone": "+1234567890",               // Contact phone number
    "email": "hello@example.com",         // Contact email
    "address": "123 Street, City"         // Physical address
  },
  "social": {
    "instagram": "#",                     // Instagram URL (or # to disable)
    "facebook": "#",                      // Facebook URL (or # to disable)
    "twitter": "#"                        // Twitter URL (or # to disable)
  },
  "copyright": "© 2024 All rights reserved",
  "links": {
    "privacyPolicy": "#",                 // Privacy policy URL
    "termsAndConditions": "#"             // Terms URL
  }
}
```

### Hero Section

The first section visitors see:

```json
"hero": {
  "title": "Crafting Digital Experiences",  // Main headline (supports multi-word)
  "highlightWord": "Digital",                // Word to highlight with gradient
  "subtitle": "We build...",                 // Subtitle text
  "cta": {
    "text": "Case Studies",                  // Button text
    "link": "#"                              // Button link
  },
  "badge": {
    "year": "2020",                          // Establishment year badge
    "text": "Est."                           // Badge text
  }
}
```

### Projects

Your portfolio work:

```json
"projects": [
  {
    "id": "unique-project-id",         // Unique identifier (use lowercase-with-dashes)
    "title": "Project Name",           // Project title
    "image": "/project-image.jpg",     // Image path (place in /public folder)
    "categories": [                    // Project categories (array)
      "UI/UX Design",
      "E-Commerce"
    ],
    "isLatest": true                   // Show "Latest" badge (only one should be true)
  }
]
```

**Tips:**
- Images should be placed in the `/public` folder
- Use aspect ratio of 1.25:1 for best results
- Categories should match those in the categories section

### Categories

Service categories:

```json
"categories": [
  {
    "id": "category-slug",             // Unique ID (lowercase-with-dashes)
    "title": "Category Name"           // Display name
  }
]
```

**Note:** Categories are automatically matched with projects to show the latest work in each category.

### What We Do Section

```json
"whatWeDo": {
  "subtitle": "Our team of experts can help you with...",
  "description": {
    "title": "Creative Agency",
    "text": "We're an award-winning..."
  },
  "badges": [
    "300+ Projects",                   // Achievement badges
    "15 Awards"
  ]
}
```

### Team Image

```json
"team": {
  "image": "/team-photo.jpg",          // Team photo path
  "alt": "Our Team"                    // Alt text for accessibility
}
```

**Recommended:** Use aspect ratio of 1.75:1

### Partners Section

```json
"partners": {
  "heading": "From ambitious startups to global companies...",
  "logos": []                          // Partner logos (currently not displayed)
}
```

### Marquee

Scrolling text section:

```json
"marquee": {
  "text": "Elevate your digital presence"  // Scrolling text
}
```

### Achievements

Stats section:

```json
"achievements": {
  "heading": "Let our experienced team elevate your digital goals",
  "description": "We have successfully completed...",
  "stats": [
    {
      "value": 250,                    // Number to count up to
      "label": "Five-Star Reviews"     // Stat label
    },
    {
      "value": 10,
      "label": "In-House Experts"
    }
  ]
}
```

### Established Year

```json
"establishedYear": {
  "year": 2020,                        // Your founding year
  "description": "With years of experience..."
}
```

### Services

List of services you offer:

```json
"services": [
  "E-Commerce",
  "Website Design",
  "Web Development",
  "Digital Products",
  "Brand Identities",
  "SEO Optimisation"
]
```

### Services CTA

Call-to-action in the services section:

```json
"servicesCta": {
  "heading": "Let's start with a conversation...",
  "buttonText": "Let's talk",
  "phone": "999999999"                 // Phone number to display
}
```

### Testimonials

Client feedback:

```json
"testimonials": [
  {
    "id": "1",                         // Unique ID
    "author": {
      "name": "Client Name",           // Client name
      "company": "Company Name",       // Company (optional)
      "image": "/avatar.png"           // Avatar image (optional, leave empty for initials)
    },
    "content": "Testimonial text..."   // Testimonial quote
  }
]
```

**Tips:**
- Keep testimonials concise and impactful
- If no image provided, first letter of name is used as avatar
- Add 3-5 testimonials for best effect

### Footer

```json
"footer": {
  "heading": "We love crafting unforgettable digital experiences...",
  "getInTouchLabel": "Get in touch",
  "followUs": {
    "title": "Follow Us"
  },
  "cta": {
    "heading": "Let's get started",
    "description": "We'd love to hear about your project.",
    "buttonText": "Get in touch"
  }
}
```

## Tips for Best Results

1. **Images:**
   - Use high-quality images
   - Optimize for web (recommended tools: TinyPNG, ImageOptim)
   - Place all images in `/public` folder
   - Reference with `/image-name.jpg` (include the leading slash)

2. **Text:**
   - Keep headlines short and impactful
   - Write clear, concise descriptions
   - Proofread all content

3. **Categories & Projects:**
   - Ensure category names match between `categories` and `projects`
   - Use consistent naming

4. **Colors:**
   - To change colors, edit `app/globals.css`
   - Modify the CSS variables under `:root`

5. **Logo:**
   - Get SVG code from your design tool or convert from other formats
   - Ensure SVG has `fill="currentColor"` for proper theming
   - Test in both light and dark backgrounds

## Common Issues

**Q: My logo doesn't show**
A: Make sure the SVG code is properly escaped in JSON. Use a JSON validator.

**Q: Images not loading**
A: Ensure images are in `/public` folder and paths start with `/`

**Q: Changes not reflecting**
A: Restart the dev server after editing `config.json`

**Q: Categories not showing projects**
A: Ensure category names match exactly (case-sensitive)

## Need Help?

Refer to the main README.md for development commands and project structure.

