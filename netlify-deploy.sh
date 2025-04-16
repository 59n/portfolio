#!/bin/bash

# Ensure the script exits on any error
set -e

echo "Starting Netlify deployment process..."

# Clean up any previous builds
echo "Cleaning up previous builds..."
rm -rf .next build

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Verify the build directory exists
if [ -d ".next" ]; then
  echo "Build directory exists. Ready for deployment."
else
  echo "Error: Build directory not found. Check your Next.js configuration."
  exit 1
fi

echo "Deployment preparation complete. You can now deploy to Netlify."
echo "Run: netlify deploy --prod"
