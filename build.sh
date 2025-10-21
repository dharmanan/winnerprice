#!/bin/bash
set -e

echo "📦 Installing root dependencies..."
pnpm install

echo "🏗️  Building nextjs-app..."
cd examples/nextjs-app
pnpm install
pnpm build

echo "✅ Build complete!"
