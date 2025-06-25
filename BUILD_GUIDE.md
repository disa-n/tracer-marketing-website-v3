# 🚀 Vercel Build Guide

This guide helps you catch build issues locally before deploying to Vercel.

## 🎯 Quick Commands

```bash
# Test your build exactly like Vercel does
npm run test-build

# Run the comprehensive build test script
./scripts/vercel-build-test.sh

# Check types only
npm run type-check

# Lint with zero warnings tolerance (like Vercel)
npm run lint:strict

# Auto-fix linting issues
npm run lint:fix
```

## 🔧 Build Scripts Explained

### `npm run test-build`
- Runs type checking
- Runs strict linting (zero warnings)
- Builds the application
- Matches Vercel's build process

### `npm run build:vercel-local`
- Cleans previous builds
- Runs type checking
- Runs strict linting
- Builds with Next.js
- Most comprehensive local test

### `npm run type-check`
- Runs TypeScript compiler in check mode
- Catches type errors that would fail on Vercel
- Uses strict TypeScript settings

### `npm run lint:strict`
- Runs ESLint with `--max-warnings 0`
- Treats warnings as errors (like Vercel)
- Catches unused imports, variables, etc.

## 🚨 Common Issues & Solutions

### TypeScript Errors

**Issue**: `Object is possibly 'undefined'`
```typescript
// ❌ Bad
const item = array[0];
const title = item.title; // Error: item might be undefined

// ✅ Good
const item = array[0];
const title = item?.title || 'Default';
// or
if (item) {
  const title = item.title;
}
```

**Issue**: `Not all code paths return a value`
```typescript
// ❌ Bad
useEffect(() => {
  if (condition) {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }
  // Missing return for else case
}, []);

// ✅ Good
useEffect(() => {
  if (condition) {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }
  return; // Explicit return
}, []);
```

### ESLint Errors

**Issue**: `'variable' is defined but never used`
```typescript
// ❌ Bad
import { useState, useEffect, useMemo } from 'react'; // useMemo not used

// ✅ Good
import { useState, useEffect } from 'react';
```

**Issue**: Type mismatches with `exactOptionalPropertyTypes`
```typescript
// ❌ Bad
interface Props {
  tag: string; // Required
}

// Passing undefined
<Component tag={undefined} />

// ✅ Good
interface Props {
  tag?: string; // Optional
}
// or
interface Props {
  tag: string | undefined; // Explicitly allow undefined
}
```

## 🛠️ Development Workflow

1. **Before coding**: Run `npm run type-check:watch` in a terminal
2. **While coding**: VS Code will show errors in real-time
3. **Before committing**: Run `npm run test-build`
4. **Before pushing**: Ensure all tests pass

## 🔍 Debugging Build Issues

### Check TypeScript Issues
```bash
npm run type-check
```

### Check ESLint Issues
```bash
npm run lint:strict
```

### Check Build Output
```bash
npm run build
# Check .next folder is created
ls -la .next
```

### Full Diagnostic
```bash
./scripts/vercel-build-test.sh
```

## 📋 Pre-Deployment Checklist

- [ ] `npm run type-check` passes
- [ ] `npm run lint:strict` passes  
- [ ] `npm run build` succeeds
- [ ] No console errors in development
- [ ] Environment variables set in Vercel dashboard
- [ ] All imports are resolved correctly

## 🎛️ Configuration Files

- **`tsconfig.json`**: Strict TypeScript settings
- **`eslint.config.mjs`**: Strict ESLint rules
- **`.vscode/settings.json`**: IDE configuration for real-time error checking
- **`package.json`**: Build scripts and dependencies

## 💡 Pro Tips

1. **Use the strict build script regularly**: `npm run test-build`
2. **Fix TypeScript errors first**: They often cascade into other issues
3. **Enable auto-fix on save**: VS Code will fix many ESLint issues automatically
4. **Check bundle size**: Large bundles can cause Vercel timeouts
5. **Test with clean node_modules**: `rm -rf node_modules && pnpm install`

## 🚨 Emergency Fixes

If Vercel build fails and you need a quick fix:

1. **Disable strict TypeScript temporarily**:
   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "noUnusedLocals": false,
       "noUnusedParameters": false,
       "exactOptionalPropertyTypes": false
     }
   }
   ```

2. **Ignore specific ESLint rules**:
   ```javascript
   // eslint.config.mjs
   rules: {
     "@typescript-eslint/no-unused-vars": "warn", // Change from "error"
   }
   ```

3. **Use ESLint disable comments** (last resort):
   ```typescript
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const unusedVar = something;
   ```

Remember to fix the underlying issues after the emergency deployment!
