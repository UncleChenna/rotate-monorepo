# NextJS monorepo Performance Optimization and CSS Migration Project

## Table of Contents
1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Development Process](#development-process)
   - [1. Project Setup](#1-project-setup)
   - [2. Sample Dashboard](#2-sample-dashboard)
   - [3. Performance Analysis](#3-performance-analysis)
   - [4. Chakra UI Optimization](#4-chakra-ui-optimization)
   - [5. Panda CSS Integration](#5-panda-css-integration)
   - [6. Full Migration Strategy](#6-full-migration-strategy)
   - [7. Bundle Optimization](#7-bundle-optimization)
5. [Performance Metrics](#performance-metrics)
6. [Challenges and Solutions](#challenges-and-solutions)
7. [Future Improvements](#future-improvements)
8. [Conclusion](#conclusion)

## Project Overview

This project demonstrates the development of a NextJS application with a focus on performance optimization and CSS framework migration. The primary goals were to create a sample dashboard, analyze and improve performance, and transition from Chakra UI to Panda CSS.

Key features:
- NextJS with App Router
- Monorepo structure using pnpm workspaces
- Initial styling with Chakra UI
- Performance optimization
- Partial migration to Panda CSS
- Bundle size reduction techniques
- Proper documentation in docs folder
- Lighthouse reports in reports folder

## Getting Started

To run this project locally:

1. Clone the repository
git clone [[repository-url](https://github.com/UncleChenna/rotate-monorepo)]
2. Install dependencies
    pnpm install
3. Run the development server
    pnpm run dev
4. Open [http://localhost:3001](http://localhost:3001) in your browser


## Development Process

### 1. Project Setup
- Created a new NextJS project using the App Router
- Set up a monorepo structure with pnpm workspaces
- Integrated Chakra UI for initial styling

### 2. Sample Dashboard
- Developed three main routes:
  - Home page: Just a page that has a button centered
  - Data table: Display a list of todo cards that were fetched from an API
  - Form page: Input form with validation
- Utilized Chakra UI components for consistent styling

### 3. Performance Analysis
- Implemented Lighthouse CI for automated performance testing
- Used web-vitals for real-time performance monitoring
- Initial performance metrics:
  - These can be found in `/reports`
- Identified performance bottlenecks related to Chakra UI and CSS-in-JS

### 4. Chakra UI Optimization
- Implemented code splitting for components
- Optimized Chakra UI theme for reduced bundle size
- Changed button color to allow more visibility and accessibility

### 5. Panda CSS Integration
- Added Panda CSS to the project
- Migrated the home page from Chakra UI to Panda CSS
- Comparative analysis:
  - The supporting documents can be found in the reports folder

### 6. Full Migration Strategy
- Outlined a phased approach for complete migration to Panda CSS:
  1. Component-by-component migration
  2. Design system adaptation
  3. Server component optimization
  4. Theme migration
- Considerations for maintaining consistent UI during transition

### 7. Bundle Optimization
- Analyzed bundle size using webpack-bundle-analyzer
- Implemented dynamic imports for route-based code splitting
- Applied lazy loading for below-the-fold content
- Results:
  - [Include bundle size reduction metrics]


## Future Improvements

1. Complete migration to Panda CSS
2. Further optimization of server-side rendering
3. Implementation of advanced caching strategies
4. Exploration of partial hydration techniques

## Conclusion

This project successfully demonstrated the process of optimizing a NextJS application and migrating between CSS frameworks. Through careful analysis and strategic improvements, we achieved significant performance enhancements and laid the groundwork for a full transition to a more performant CSS solution.

The challenges encountered and solutions implemented provide valuable insights for similar projects in the future, emphasizing the importance of performance consideration in modern web development.
This README provides a comprehensive overview of the project, detailing the development process, performance improvements, and future considerations. It's structured to give readers a clear understanding of the project's goals, the steps taken to achieve them, and the outcomes.