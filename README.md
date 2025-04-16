# Personal Portfolio

A minimalist portfolio website built with Next.js, featuring a clean design and smooth animations.

## Features

- Clean, minimalist design
- Interactive cursor effects
- Dynamic background patterns
- Responsive layout
- Project showcase
- Social media links

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/59n/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To create a production build:

```bash
npm run build
```

## Deployment

### Netlify (Recommended)

#### Option 1: Deploy using the Netlify CLI

1. Install the Netlify CLI if you haven't already:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Run the deploy script:
```bash
npm run deploy
```

4. Deploy to Netlify:
```bash
netlify deploy --prod
```

#### Option 2: Deploy via Netlify UI

1. Fork or clone this repository
2. Log in to your Netlify account
3. Click "New site from Git"
4. Choose your repository
5. Make sure the following settings are configured:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

**Important Note:** The `netlify.toml` file in this repository is already configured to use the correct build directory (`build` instead of `.next`). This is essential for successful deployment with Next.js 15.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/59n/portfolio)

### Alternative Deployment Options

You can also deploy on:
- Vercel
- GitHub Pages (requires additional configuration)
- Railway
- DigitalOcean App Platform

## Author

- 59n (59n@panel.mom)

## License

This project is open source and available under the MIT license.
