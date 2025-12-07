# Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Install (1 minute)

```bash
cd portfolio
npm install
```

## Step 2: Run Dev Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - You should see the template with example content!

## Step 3: Customize Your Content (3 minutes)

Open `config.json` and update these essential fields:

### Must Update:
```json
{
  "site": {
    "name": "YOUR COMPANY NAME",
    "contact": {
      "phone": "YOUR PHONE",
      "email": "YOUR EMAIL",
      "address": "YOUR ADDRESS"
    }
  },
  "hero": {
    "title": "YOUR MAIN HEADLINE",
    "subtitle": "YOUR SUBTITLE"
  }
}
```

### Update Your Projects:
```json
{
  "projects": [
    {
      "id": "my-project",
      "title": "My Awesome Project",
      "image": "/my-project-image.jpg",
      "categories": ["Web Design"],
      "isLatest": true
    }
  ]
}
```

### Update Services:
```json
{
  "services": [
    "Your Service 1",
    "Your Service 2",
    "Your Service 3"
  ]
}
```

## Step 4: Add Your Images

1. Place your images in the `/public` folder
2. Update image paths in `config.json`

Required images:
- Logo (as SVG code in config)
- Project images
- Team photo (optional)

## Step 5: Deploy (Optional)

### Deploy to Vercel (Easiest):
```bash
npm install -g vercel
vercel
```

### Or build for any static host:
```bash
npm run build
```

Upload the `.next` folder to your hosting provider.

## Need More Help?

- **Full Configuration Options**: See `CONFIGURATION_GUIDE.md`
- **Project Structure**: See `README.md`
- **Issues**: Check the configuration guide's "Common Issues" section

## Pro Tips

✨ **Update the logo**: Get your SVG logo code and paste it into `config.json` → `site.logo.svg`

✨ **Change colors**: Edit `app/globals.css` → CSS variables under `:root`

✨ **Add more projects**: Just add more objects to the `projects` array in `config.json`

✨ **Reorder sections**: Edit `app/page.tsx` to reorder or remove sections

---

That's it! You now have a beautiful, animated portfolio website. 🎉

