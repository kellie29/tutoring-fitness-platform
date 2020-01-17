#!/bin/bash

set -e

if [[ -z "$PUBLIC_URL" ]]; then
  echo "PUBLIC_URL must be set" 1>&2
  exit 1
fi

WEBHOOK_URL="https://discordapp.com/api/webhooks/559465284583424010/lHv5DD8EwCSVNXOw8k-zvzJn72DP9s4hfVyYWLzZrPrh9pW8gDkyouHr6WeRNsWHLKuc"
CONTENT="A new version was deployed! Check it out at: <$PUBLIC_URL>"
DATA="{\"content\": \"$CONTENT\"}"

curl -H "Content-Type: application/json" -X POST -d "$DATA" "$WEBHOOK_URL"
