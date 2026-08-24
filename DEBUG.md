# White Page Bug - Root Cause Analysis

## Problem
When running `npm run dev`, the website displayed a completely white/blank page with no content or errors visible.

## Root Cause
**TypeError: can't access property "user", auth is null**

The error occurred in [src/App.jsx:82](src/App.jsx#L82) where the code attempted to access `auth.user` without checking if `auth` was null:

```jsx
// BEFORE (line 82) - Caused the crash
<Dashboard user={auth.user} onUpdateUser={...} />

// AFTER - Fixed with optional chaining
<Dashboard user={auth?.user} onUpdateUser={...} />
```

## Why It Happened
1. On initial app load, `auth` is initialized as `null` (no user logged in yet)
2. The Dashboard route is rendered during app initialization
3. The component tried to pass `auth.user` to Dashboard before checking if `auth` existed
4. React's error boundary caught this error but since there was no error boundary in the original code, the entire app crashed silently
5. The browser rendered nothing, resulting in a white page

## Solution Applied
1. **Added optional chaining operator (`?.`)** to safely access nested properties:
   - Changed `auth.user` to `auth?.user`
   - This returns `undefined` instead of throwing an error when `auth` is null

2. **Added Error Boundary component** in [src/main.jsx](src/main.jsx) to catch and display React errors
   - Displays error messages in the UI instead of silent failures
   - Helpful for future debugging

## Files Modified
- `src/App.jsx` - Fixed unsafe property access
- `src/main.jsx` - Added error boundary for better error handling

## Prevention Tips
- Always use optional chaining (`?.`) when accessing properties of potentially null/undefined values
- Use TypeScript for compile-time type safety
- Implement error boundaries in React apps for graceful error handling
- Use browser DevTools console to catch errors early during development
