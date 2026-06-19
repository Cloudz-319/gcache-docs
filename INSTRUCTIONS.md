# Frantic Bounty #2 - Fix Instructions

## Requirements (from previous rejection)
- ❌ 15 symbols → ✅ Need 20+
- ❌ github.io domain → ✅ Real domain
- ❌ evidence.json pointed to FATCAT → ✅ Point to actual docs

## Library: bluele/gcache
- 24+ exported symbols (constants + functions + types)
- Real, maintained Go caching library (2731 stars)
- https://github.com/bluele/gcache

## Step 1: Generate docs with Sourcey
```bash
cd /Volumes/工作/赚钱/frantic-bounty-2
git clone https://github.com/bluele/gcache.git
npx sourcey build
```

## Step 2: Deploy to Netlify
```bash
# Option A: Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir dist

# Option B: Drag dist/ to https://app.netlify.com/drop
```

Result URL: https://gcache-docs.netlify.app

## Step 3: Upload evidence to gist
```bash
gh gist create /Volumes/工作/赚钱/frantic-bounty-2/evidence.json --public --desc "Frantic #2 evidence - gcache docs"
```

## Step 4: Claim + Deliver
The monitor will handle this automatically when cooldown clears.
