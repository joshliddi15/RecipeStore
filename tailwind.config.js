/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'olive-green': '#7D9763',
        'darkSlate': '#d8dded',
        'brown': '#354145',
        // Accent Colors
        'terracotta-orange': '#E67A2E',
        'cerulean-blue': '#4A90E2',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      // Custom Components and Utilities
      components: {
        // Header and Navigation
        '.header': {
          display: 'flex',
          backgroundColor: 'var(--color-olive-green)',
        },
        '.nav-link': {
          // Add flexbox properties to align links horizontally
          display: 'flex',
          alignItems: 'center', // Align items vertically in the center
          padding: '0.5rem 1rem', // Add padding for better spacing
          textDecoration: 'none', // Remove default underline from links
          color: 'var(--color-darkSlate)', // Text color for links
        },
        '.dropdown': {
          // Styles for dropdowns if we decide we need any
        },

        // Main Section
        '.main-section': {
          backgroundColor: '#ffffff', // White background, maybe change in the future to increase visual interest.
        },
        '.product-grid': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          // Styles for the grid layout on the product listings page
        },
        '.control-menu': {
          // Possibly implement this in the future?
        },

        // Buttons and Call-to-Actions
        '.btn-orange': {
          backgroundColor: 'var(--color-terracotta-orange)',
        },
        '.btn-blue': {
          backgroundColor: 'var(--color-cerulean-blue)',
        },

        // Icons and Visual Elements
        '.artisan-icon': {
          //Implement this in the future for profile icons for artisans
        },

        // Footer
        '.footer': {
          backgroundColor: 'brown',
          color: 'var(--color-brown)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}