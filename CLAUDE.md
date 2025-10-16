# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based marketing website for Elevate Global Ventures, a real estate investment and lending company. The site features service pages, a blog integrated with Contentful CMS, and multi-step forms for loan and property inquiries deployed on Netlify.

## Development Commands

### Running the Application
- `npm run dev` - Start the Vite development server (default port 5173)
- `npm run preview` - Preview the production build locally

### Building
- `npm run build` - Create production build in `dist/` directory
- `npm start` - Alias for `npm run build`

### Code Quality
- `npm run lint` - Run ESLint to check code quality

## Environment Setup

The project requires environment variables for Contentful CMS integration. Create a `.env` file in the root:

```
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

These variables are accessed via `import.meta.env.VITE_*` throughout the codebase.

## Architecture

### Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom theme
- **CMS**: Contentful (for blog content)
- **Forms**: Netlify Forms
- **Icons**: Lucide React

### Application Structure

**Entry Point**: `src/main.tsx` → `src/App.tsx`

**Routing**: All routes are defined in `src/App.tsx` using React Router:
- `/` - Home page
- `/mission`, `/about`, `/services`, `/contact` - Core pages
- `/blog` - Blog listing page (Contentful integration)
- `/blog/:id` - Individual blog post (Contentful integration)
- `/privacy-policy`, `/terms-and-conditions` - Legal pages
- `/staffing`, `/tax`, `/real-estate-support` - Service-specific pages

**Pages**: Located in `src/pages/` - Each page is a self-contained component that typically includes Navbar and Footer.

**Components**: Located in `src/components/`:
- Layout components: `Navbar.tsx`, `Footer.tsx`
- Forms: `LoanForm.tsx`, `PropertyForm.tsx` (multi-step forms with consent checkboxes)
- Feature sections: `Hero.tsx`, `WhatWeDo.tsx`, `Mission.tsx`, `Stats.tsx`, etc.
- Special: `EVGAI.tsx` - AI-related component

### Contentful CMS Integration

Blog content is managed via Contentful CMS. The integration pattern:

1. **Client Setup**: Each page that uses Contentful creates a client instance:
   ```typescript
   import { createClient } from 'contentful';

   const client = createClient({
     space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
     accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
   });
   ```

2. **Type Definitions**: `src/types/contentful.ts` defines TypeScript interfaces for Contentful entries:
   - `BlogPostFields` - Structure for blog post data
   - Includes support for rich text content, images, and recommended posts

3. **Content Fetching**: Use `client.getEntries()` with content type `'blogPage'`
   - Blog listing: Fetch all posts ordered by creation date
   - Blog post: Fetch single entry by ID with `include: 2` for related content

4. **Rich Text Rendering**: Use `@contentful/rich-text-react-renderer` to render blog post bodies

### Form Handling

Forms use Netlify Forms for submission:

1. **HTML Setup**: Hidden forms in `index.html` define the form structure for Netlify
2. **React Forms**: `LoanForm.tsx` and `PropertyForm.tsx` are multi-step forms with:
   - Step-based navigation with progress bars
   - Consent checkboxes for marketing and non-marketing communications
   - Links to Privacy Policy and Terms of Service
   - Form submission via `fetch('/', { method: 'POST', ... })`

### Styling System

**Tailwind Configuration** (`tailwind.config.js`):
- Custom color palette:
  - `blue.{50-900}` - Primary brand colors
  - `darkblue.{50-900}` - Dark brand variant (base: #001c6a)
- Custom font: Inter (loaded from Google Fonts)
- Custom shadow: `shadow-soft`

**Global Styles** (`src/index.css`):
- Custom component classes defined in `@layer components`:
  - `.btn-primary` - Primary call-to-action button
  - `.btn-secondary` - Secondary button with border
  - `.btn-secondary-white` - White variant of secondary button
  - `.input-field` - Standard form input styling
  - `.card` - Card component with hover effects
- Testimonial animation classes for slide transitions

### Deployment

**Platform**: Netlify

**Configuration**:
- Build output: `dist/`
- SPA routing: `public/_redirects` contains `/* /index.html 200` for client-side routing
- Base path: `./` (relative paths for assets)
- Source maps enabled in production build

**Tracking**: Facebook Pixel integrated in `index.html` (ID: 1105203184426860)

## Common Patterns

### Adding a New Page
1. Create component in `src/pages/`
2. Import and add route in `src/App.tsx`
3. Include `<Navbar />` and `<Footer />` in the page component
4. Use Tailwind classes and custom component classes for styling

### Adding a New Form
1. Add hidden form definition in `index.html` for Netlify
2. Create form component in `src/components/`
3. Use `form-name` parameter matching the hidden form name
4. Include consent checkboxes and links to legal pages if collecting user data

### Working with Contentful
1. Define TypeScript interfaces in `src/types/contentful.ts`
2. Create Contentful client with environment variables
3. Use `getEntries()` or `getEntry()` with appropriate content type
4. Handle loading and error states in the component
5. Use `@contentful/rich-text-react-renderer` for rich text content
