export const blogs = [{
        id: 1,
        slug: "react-hooks-guide",
        title: "10 React Hooks Every Frontend Developer Should Know",
        category: "React",
        tag: "Featured",
        readTime: "8 min read",
        date: "2026-05-20",
        author: "Sachin Bhadoriya",

        coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",

        seo: {
            title: "10 React Hooks Every Frontend Developer Should Know",
            description: "Learn the most useful React Hooks with practical examples and real-world use cases.",
            keywords: "react hooks, useState, useEffect, react tutorial, frontend development",
        },

        excerpt: "Learn the most important React Hooks every developer should know with practical examples.",

        content: `
# Introduction

React Hooks completely changed the way developers build React applications.

Before Hooks, developers relied heavily on class components. Today, Hooks allow us to manage state, side effects, performance optimization and reusable logic using functional components.

## 1. useState

useState is used to manage local state inside a component.

Example:
const [count, setCount] = useState(0);

Use cases:
- Counter
- Form inputs
- UI toggles

## 2. useEffect

useEffect handles side effects such as:

- API calls
- Event listeners
- Timers

Example:
useEffect(() => {
  fetchUsers();
}, []);

## 3. useContext

Avoid prop drilling and share data globally.

Common uses:
- Theme management
- Authentication
- Language preferences

## 4. useRef

Useful for:

- DOM access
- Persistent values
- Focus management

## 5. useMemo

Optimizes expensive calculations.

## 6. useCallback

Prevents unnecessary function recreation.

## 7. useReducer

Perfect for complex state management.

## Conclusion

Mastering React Hooks helps you build scalable and maintainable applications.
`,
    },

    {
        id: 2,
        slug: "frontend-roadmap-2026",
        title: "Frontend Developer Roadmap 2026",
        category: "Career",
        tag: "Featured",
        readTime: "12 min read",
        date: "2026-05-18",
        author: "Sachin Bhadoriya",

        coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

        seo: {
            title: "Frontend Developer Roadmap 2026",
            description: "Complete roadmap for becoming a frontend developer in 2026.",
            keywords: "frontend roadmap, web development roadmap, react roadmap, javascript roadmap",
        },

        excerpt: "A complete guide to becoming a frontend developer from beginner to advanced level.",

        content: `
# Introduction

Frontend development is one of the most popular fields in software engineering.

This roadmap will help you learn the right technologies in the correct order.

## Step 1: HTML

Learn:

- Semantic HTML
- Forms
- Accessibility
- SEO basics

## Step 2: CSS

Focus on:

- Flexbox
- Grid
- Responsive Design
- Animations

## Step 3: JavaScript

Master:

- ES6+
- Async/Await
- Promises
- DOM Manipulation

## Step 4: Git & GitHub

Learn:

- Branches
- Pull Requests
- Collaboration

## Step 5: React

Understand:

- Components
- Hooks
- Routing
- State Management

## Step 6: TypeScript

Type safety improves code quality.

## Step 7: Testing

Learn:

- Jest
- React Testing Library

## Step 8: Deployment

Use:

- Vercel
- Netlify

## Conclusion

Focus on projects more than tutorials.
`,
    },

    {
        id: 3,
        slug: "react-performance-optimization",
        title: "React Performance Optimization Tips",
        category: "Performance",
        tag: "Featured",
        readTime: "10 min read",
        date: "2026-05-15",
        author: "Sachin Bhadoriya",

        coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

        seo: {
            title: "React Performance Optimization Tips",
            description: "Improve your React app performance with practical optimization techniques.",
            keywords: "react optimization, react performance, useMemo, lazy loading",
        },

        excerpt: "Learn practical ways to improve React performance and reduce unnecessary re-renders.",

        content: `
# Why Performance Matters

A slow website creates a poor user experience.

## 1. Use React.memo

Prevent unnecessary component renders.

## 2. Use useMemo

Cache expensive calculations.

## 3. Use useCallback

Memoize functions.

## 4. Lazy Loading

Use React.lazy() and Suspense.

Benefits:
- Smaller bundle size
- Faster load times

## 5. Optimize Images

Use:
- WebP
- Lazy Loading
- Responsive Images

## 6. Virtualization

Use react-window for large lists.

## Conclusion

Performance optimization should be part of every React project.
`,
    },

    {
        id: 4,
        slug: "deploy-react-app-on-vercel",
        title: "How to Deploy a React App on Vercel",
        category: "Deployment",
        tag: "Featured",
        readTime: "7 min read",
        date: "2026-05-12",
        author: "Sachin Bhadoriya",

        coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",

        seo: {
            title: "How to Deploy a React App on Vercel",
            description: "Deploy your React application on Vercel step by step.",
            keywords: "vercel deployment, deploy react app, react hosting",
        },

        excerpt: "Step-by-step guide to deploying React applications on Vercel.",

        content: `
# Introduction

Vercel is one of the easiest platforms for deploying React applications.

## Step 1

Push your project to GitHub.

## Step 2

Create a Vercel account.

## Step 3

Import your repository.

## Step 4

Configure build settings.

Build Command:
npm run build

Output Directory:
dist

## Step 5

Click Deploy.

## Custom Domain

You can connect your own domain in minutes.

## Conclusion

Vercel provides fast deployment with minimal configuration.
`,
    },

    {
        id: 5,
        slug: "portfolio-website-case-study",
        title: "How I Built My Portfolio Using React and Tailwind CSS",
        category: "Case Study",
        tag: "Featured",
        readTime: "9 min read",
        date: "2026-05-10",
        author: "Sachin Bhadoriya",

        coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",

        seo: {
            title: "How I Built My Portfolio Using React and Tailwind CSS",
            description: "A complete case study explaining how I designed and built my portfolio website.",
            keywords: "react portfolio, tailwind css portfolio, frontend portfolio",
        },

        excerpt: "A behind-the-scenes look at building a modern developer portfolio website.",

        content: `
# Project Overview

I wanted a portfolio that reflected my frontend development skills.

## Goals

- Fast loading
- Responsive
- Modern UI
- SEO Friendly

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion

## Folder Structure

Organized by:

- Components
- Pages
- Hooks
- Assets

## Challenges

The biggest challenge was balancing animations and performance.

## Performance Improvements

Implemented:

- Image optimization
- Code splitting
- Lazy loading

## Final Results

The website achieved:

- Excellent Lighthouse score
- Responsive design
- Smooth user experience

## Conclusion

Building a portfolio is one of the best ways to showcase your skills.
`,
    },
];