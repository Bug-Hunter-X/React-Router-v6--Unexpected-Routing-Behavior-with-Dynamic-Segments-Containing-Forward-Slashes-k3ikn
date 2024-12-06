# React Router v6: Dynamic Segment Slash Handling Bug

This repository demonstrates a bug in React Router v6 related to handling forward slashes ('/') within dynamic route segments.  When a route parameter contains a slash, the router may misinterpret the segments, leading to incorrect routing.

## Bug Description
The issue occurs when a route path contains a dynamic segment that itself contains a forward slash. Without proper escaping or handling, React Router might interpret the slash as a route separator, resulting in unexpected navigation or routing errors.

## How to Reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the app: `npm start`
4. Observe the unexpected routing behavior when navigating to a URL with a dynamic segment containing a slash.

## Solution
The solution involves proper URL encoding (or decoding) of the dynamic segment before including it in the URL or using a different approach to route parameters that may contain '/' character, such as using the `useParams` hook and properly formatting the value.