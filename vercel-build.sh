#!/bin/bash
set -ex

echo "=== VERCEL BUILD SCRIPT ==="
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "pnpm version: $(pnpm --version)"

echo ""
echo "=== Step 1: pnpm install ==="
pnpm install

echo ""
echo "=== Step 2: cd to examples/nextjs-app ==="
cd examples/nextjs-app
echo "Now in: $(pwd)"

echo ""
echo "=== Step 3: pnpm build ==="
pnpm build

echo ""
echo "=== BUILD COMPLETE ==="
echo "Dist contents:"
ls -la dist/
