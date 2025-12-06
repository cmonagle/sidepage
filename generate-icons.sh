#!/bin/bash

# Generate properly sized icons from SVG
# Usage: ./generate-icons.sh

set -e

SVG_FILE="addon/side-view.svg"
OUTPUT_DIR="addon"

if [ ! -f "$SVG_FILE" ]; then
  echo "Error: $SVG_FILE not found"
  exit 1
fi

if ! command -v rsvg-convert &> /dev/null; then
  echo "Error: rsvg-convert not found. Install librsvg2-bin (Debian/Ubuntu) or librsvg (other distros)"
  exit 1
fi

echo "Generating icons from $SVG_FILE..."

# Generate 48x48 icon (with aspect ratio preserved)
rsvg-convert -w 48 -h 48 --keep-aspect-ratio "$SVG_FILE" -o "$OUTPUT_DIR/icon-48.png"
echo "✓ Generated icon-48.png (48x48)"

# Generate 96x96 icon (with aspect ratio preserved)
rsvg-convert -w 96 -h 96 --keep-aspect-ratio "$SVG_FILE" -o "$OUTPUT_DIR/icon-96.png"
echo "✓ Generated icon-96.png (96x96)"

# Generate 128x128 icon (with aspect ratio preserved)
rsvg-convert -w 128 -h 128 --keep-aspect-ratio "$SVG_FILE" -o "$OUTPUT_DIR/icon-128.png"
echo "✓ Generated icon-128.png (128x128)"

echo ""
echo "Done! Update manifest.json to use the new icons:"
echo '  "icons": {'
echo '    "48": "icon-48.png",'
echo '    "96": "icon-96.png",'
echo '    "128": "icon-128.png"'
echo '  }'
