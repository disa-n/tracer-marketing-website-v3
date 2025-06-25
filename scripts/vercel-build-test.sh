#!/bin/bash

# Vercel Build Test Script
# This script mimics Vercel's build process to catch issues locally

set -e  # Exit on any error

echo "🚀 Starting Vercel-like build test..."
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out
print_status "Build artifacts cleaned"

# Step 2: Install dependencies (simulate Vercel's npm install)
echo "📦 Installing dependencies..."
if command -v pnpm &> /dev/null; then
    pnpm install --frozen-lockfile
else
    npm ci
fi
print_status "Dependencies installed"

# Step 3: TypeScript type checking (strict mode)
echo "🔍 Running TypeScript type checking..."
if npx tsc --noEmit --incremental false; then
    print_status "TypeScript type checking passed"
else
    print_error "TypeScript type checking failed"
    echo "💡 Fix TypeScript errors before deploying to Vercel"
    exit 1
fi

# Step 4: ESLint with zero warnings tolerance
echo "🔧 Running ESLint (zero warnings tolerance)..."
if npm run lint:strict; then
    print_status "ESLint passed with no warnings"
else
    print_error "ESLint failed or has warnings"
    echo "💡 Run 'npm run lint:fix' to auto-fix some issues"
    exit 1
fi

# Step 5: Next.js build
echo "🏗️  Running Next.js build..."
if npm run build; then
    print_status "Next.js build successful"
else
    print_error "Next.js build failed"
    exit 1
fi

# Step 6: Check for common Vercel deployment issues
echo "🔍 Checking for common deployment issues..."

# Check for large bundle sizes
echo "📊 Analyzing bundle sizes..."
if [ -f ".next/analyze/client.html" ]; then
    print_status "Bundle analysis available"
else
    print_warning "Consider adding @next/bundle-analyzer for bundle size monitoring"
fi

# Check for missing environment variables in production
echo "🌍 Checking environment configuration..."
if [ -f ".env.local" ]; then
    print_warning "Remember to set environment variables in Vercel dashboard"
fi

# Success message
echo ""
echo "=================================="
echo -e "${GREEN}🎉 Build test completed successfully!${NC}"
echo "Your app should deploy successfully to Vercel."
echo ""
echo "💡 Pro tips:"
echo "  • Run this script before every deployment"
echo "  • Use 'npm run test-build' for quick testing"
echo "  • Check Vercel dashboard for environment variables"
echo "=================================="
