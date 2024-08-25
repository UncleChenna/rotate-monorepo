# Performance Analysis Report

## Introduction

This document provides an overview of the performance analysis conducted on the dashboard application using Google's Lighthouse cli tool. The purpose of this analysis is to evaluate the application's performance, accessibility, best practices, and SEO, with a focus on identifying areas for optimization.

## Methodology

The Lighthouse audits were performed using Google Chrome's Lighthouse CI ( Command Line Interface ) on the following pages:

- **Home Page** (`/`)
- **Data Table Page** (`/data-table`)
- **Form Page** (`/form`)

Each page was tested with desktop simulation to ensure a realistic assessment of the application's performance.

## Key Metrics

The following metrics were assessed:

- **Performance**: Measures page load speed, including Core Web Vitals like Largest Contentful Paint (LCP), First Contentful Paint (FCP), Cumulative Layout Shift (CLS), Total Blocking Time (TBT) and Speed Index (SI).
- **Accessibility**: Checks for issues that might affect users with disabilities.
- **Best Practices**: Ensures that the application follows modern web development practices.
- **SEO**: Evaluates the page's search engine optimization readiness.

## Key Findings

### Home Page (`/`)

| Metric                | Score 
|-----------------------|-----------------------------------------------------------
| **Performance**       | 89  
| **Accessibility**     | 81    
| **Best Practices**    | 96   
| **SEO**               | 80    


**Notable Issues:**
- **Performance**: Serve images in next-gen formats
- **Performance**: Largest Contentful Paint element
- **Performance**: Eliminate render-blocking resources: Resources are blocking the first paint of the page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles.
- **Performance**: Page prevented back/forward cache restoration; Many navigations are performed by going back to a previous page, or forwards again. The back/forward cache (bfcache) can speed up these return navigations.
- **Accessibility**: Background and foreground colors do not have a sufficient contrast ratio; Low-contrast text in 'Get started' button could be difficult or impossible for many users to read.
- **Accessibility**: Document doesn't have a '<title>' element.
- **Best Practices**: Browser errors were logged to the console.
- **SEO**: Document doesn't have a '<title>' element.
- **SEO**: Document doesn't have a '<meta/>' description.



### Data Table Page (`/data-table`)

| Metric                | Score 
|-----------------------|------------------------------------------------------------
| **Performance**       | 89 
| **Accessibility**     | 100   
| **Best Practices**    | 96    
| **SEO**               | 90  


**Notable Issues:**
- **Performance**: Serve images in next-gen formats 
- **Performance**: Largest Contentful Paint element
- **Performance**: Reduce initial server response time Root document took 1,060 ms
- **Performance**: Reduce unused JavaScript Potential savings
- **Performance**: Eliminate render-blocking resources Potential savings
- **Performance**: Page prevented back/forward cache restoration
- **Best Practices**: Browser errors were logged to the console
- **Best Practices**: Missing source maps for large first-party JavaScript
- **SEO**: Document does not have a meta description



### Form Page (`/form`)

| Metric                | Score 
|-----------------------|------------------------------------------------------------
| **Performance**       | 90                 
| **Accessibility**     | 91  
| **Best Practices**    | 96                                
| **SEO**               | 80  

**Notable Issues:**
- **Performance**: Serve images in next-gen formats 
- **Performance**: Largest Contentful Paint element 
- **Performance**: Reduce initial server response time Root document took 810 ms
- **Performance**: Eliminate render-blocking resources
- **Performance**: Page prevented back/forward cache restoration
- **Accessibility**: Background and foreground colors do not have a sufficient contrast ratio.
- **Accessibility**: Document doesn't have a '<title>' element
- **Best Practices**: Browser errors were logged to the console
- **Best Practices**: Missing source maps for large first-party JavaScript
- **SEO**: Document doesn't have a '<title>' element.
- **SEO**: Document doesn't have a '<meta/>' description.



# Chakra UI and CSS-in-JS Related Bottlenecks

## Identified Bottlenecks from the Lighthouse Report

1. **Render-Blocking Resources**
   - **Impact**: Delays First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
   - **Cause**: Synchronous injection of styles from Chakra UI components.

2. **Largest Contentful Paint (LCP)**
   - **Impact**: LCP is delayed due to large DOM elements or heavy components.
   - **Cause**: Complex Chakra UI components adding extra DOM elements and styles.

3. **Eliminate Unused JavaScript**
   - **Impact**: Unused JavaScript increases load times.
   - **Cause**: Unused Chakra UI components or CSS-in-JS code being bundled.

4. **CSS-in-JS Performance Overhead**
   - **Impact**: Runtime overhead due to CSS-in-JS style generation.
   - **Cause**: Chakra UI’s CSS-in-JS approach.

5. **Accessibility Issues**
   - **Impact**: Poor user experience for users with disabilities.
   - **Cause**: Incorrect Chakra UI theme customization leading to issues like low color contrast.


# Conclusion

The Lighthouse audit highlights several areas for improvement that can enhance the user experience and performance of the application. By addressing the issues identified in this report, we can achieve better performance scores and a more accessible, SEO-friendly application.

# Full Reports

- [Home Page Report](../reports/lighthouse/initial-report/home-page-report.html)
- [Data Table Page Report](../reports/lighthouse/initial-report/data-table-report.html)
- [Form Page Report](../reports/lighthouse/initial-report/form-page-report.html)