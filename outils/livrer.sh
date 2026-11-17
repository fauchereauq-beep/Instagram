#!/usr/bin/env bash
# Génère un carrousel, son aperçu, son ZIP et ses JPEG pour l'agent.
# Usage : bash outils/livrer.sh 41-crash-balade-fantome
set -euo pipefail
cd "$(dirname "$0")/.."
slug="$1"
node build.js "${slug%%-*}"
mkdir -p apercus zips
node outils/apercu.js "carrousels/$slug" "apercus/$slug.png"
rm -f "zips/$slug.zip" && (cd "carrousels/$slug" && zip -q -r "../../zips/$slug.zip" .)
if grep -q "\"$slug\"" publier/calendrier.json; then node publier/publier.js preparer >/dev/null; fi
echo "Livré : apercus/$slug.png · zips/$slug.zip"
