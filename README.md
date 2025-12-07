# Portfolio Template

A configurable NextJS portfolio template with stunning animations and modern design.

## Features

- ✨ Beautiful animations using Framer Motion
- 🎨 Modern, responsive design
- ⚙️ Fully configurable via `config.json`
- 🚀 Built with Next.js 15
- 💨 Tailwind CSS styling
- 🎯 Zero backend needed

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

All content is managed through the `config.json` file at the root of the project. Simply edit this file to customize your portfolio.

### Key Configuration Sections

#### Site Information
```json
{
  "site": {
    "name": "Your Company Name",
    "tagline": "Your Tagline",
    "description": "Brief description",
    "logo": {
      "type": "svg",
      "svg": "Your SVG logo code here"
    },
    "contact": {
      "phone": "+1234567890",
      "email": "hello@example.com",
      "address": "123 Street, City, Country"
    },
    "social": {
      "instagram": "https://instagram.com/...",
      "facebook": "https://facebook.com/...",
      "twitter": "https://twitter.com/..."
    }
  }
}
```

#### Hero Section
Configure the main hero section with title, subtitle, and CTA button.

#### Projects
Add your portfolio projects:
```json
{
  "projects": [
    {
      "id": "project-slug",
      "title": "Project Name",
      "image": "/project-image.jpg",
      "categories": ["Category 1", "Category 2"],
      "isLatest": true
    }
  ]
}
```

#### Services
List your services:
```json
{
  "services": [
    "Service 1",
    "Service 2",
    "Service 3"
  ]
}
```

#### Testimonials
Add client testimonials:
```json
{
  "testimonials": [
    {
      "id": "1",
      "author": {
        "name": "Client Name",
        "company": "Company Name",
        "image": "/avatar.png"
      },
      "content": "Testimonial text here..."
    }
  ]
}
```

### Adding Images

1. Place your images in the `/public` folder
2. Reference them in `config.json` using `/image-name.jpg`

### Customizing the Logo

Update the SVG code in `config.json` under `site.logo.svg` with your own logo SVG code.

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # All page sections
│   ├── ui/                # Reusable UI components
│   ├── header.tsx         # Header component
│   └── footer.tsx         # Footer component
├── lib/
│   ├── config.ts          # Config helper functions
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── config.json            # Main configuration file
└── tailwind.config.ts     # Tailwind configuration
```

## Customization Tips

1. **Colors**: Edit `app/globals.css` to change the color scheme
2. **Fonts**: Update `app/layout.tsx` to import and use custom fonts
3. **Animations**: Modify animation components in `components/animate-wrappers.tsx`
4. **Sections**: Add, remove, or reorder sections in `app/page.tsx`

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Support

For questions or issues, please refer to the configuration guide above or check the inline comments in `config.json`.

---

Built with ❤️ using Next.js
