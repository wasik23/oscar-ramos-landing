# Oscar Ramos Custom Registration Landing Page PRD

## Summary

Build a standalone WEEX campaign landing page for Oscar Ramos. The page should promote an exclusive XRP airdrop, new-user double rewards, WEEX trust points, and Oscar's community channel.

The implementation must be a local Git repo using raw HTML, raw JavaScript, and Less.

## Goals

- Drive users to register or trade on WEEX through Oscar's exclusive link.
- Explain the reward campaign clearly.
- Match the supplied Figma/reference screenshots on desktop and mobile.
- Keep implementation simple, static, and easy to deploy.

## Non Goals

- No React or Next.js.
- No backend integration in phase one.
- No dynamic i18n system in phase one.
- No user authentication or reward claim API integration in phase one.

## Target Page

Single page:

```text
src/index.html
```

## Required Sections

### 1. Navigation Bar

Content:

- Left: WEEX logo.
- Left/center: KOL avatar and name, `Oscar Ramos`.
- Optional badge based on design, such as `Challenge Live`.
- Right: `Trade on WEEX` button.

Behavior:

- `Trade on WEEX` redirects to the WEEX registration/trading link.
- Header should remain visually compact.

### 2. Hero Introduction

Desktop layout:

- Left side: campaign headline, subtitle, countdown, primary CTA.
- Right side: Oscar Ramos image/video card.

Copy:

- Headline: `Claim Your Exclusive XRP Airdrop & Unlock Up to $15,000 USDT in Rewards!`
- Subtitle: `0% Trial fund/No KYC/Double Rewards`
- Button: `Get My Rewards Now`

Behavior:

- CTA redirects to the registration/login page.
- Countdown displays days, hours, minutes, seconds.

### 3. Activity Details

Title:

- `Double Rewards for New Users`

Subtitle:

- `Total prize pool over $15,000 USDT`

Reward cards:

- Event 1: `Exclusive XRP Airdrop`
- Event 1 description: `Grab Free XRP Just for Joining!`
- Event 2: `Deposit $100 & Get $20 USDT!`
- Event 2 description: `Supercharge Your Portfolio with a 20% Boost!`

Visual requirements:

- Dark cards.
- Yellow accent labels and progress bars.
- Reward imagery from local assets.

### 4. Participation Steps

Title:

- `How to Participate in 3 Simple Steps`

Steps:

1. `Sign Up`
   - Register a WEEX account via Oscar's exclusive link on this page.
2. `Deposit & Trade`
   - Deposit at least $100 USDT to qualify for the $20 trial fund or scale up trading volume to unlock more rewards.
3. `Receive Rewards`
   - Rewards are credited directly to the user's WEEX account after tracking.

Responsive:

- Desktop: horizontal timeline.
- Mobile: stacked vertical steps.

### 5. WEEX Selling Points and Registration Guide

Title:

- `Start trading alongside Oscar on WEEX`

Subtitle:

- `Create an account using my referral link. Join me today and claim your exclusive rewards!`

CTA:

- `Sign up for $20`

Selling points:

- `1000 BTC Protection Fund`
  - `Asset security first. Trade with confidence.`
- `Trusted By 10M+ Users`
  - `Access crypto, U.S. stocks, gold, crude oil, and more-all from a single app.`
- `8 Years Of Proven Security`
  - `8 years of trusted operations, built on a proven track record.`
- `Only 1 Email Is Required`
  - `More privacy control. More freedom to trade.`

### 6. KOL Community Guidance

Title:

- `Join Oscar's Exclusive Trading Circle`

Subtitle:

- `Don't navigate the market alone! Connect with Oscar and thousands of like-minded traders inside our official Discord community.`

Cards:

- `Real-Time Trading Signals`
- `Exclusive Community Giveaways`
- `Elite Trader Network`

CTA:

- `Join Oscar's Discord Now`

Discord/community link:

```text
https://bit.ly/patreon-ramos
```

### 7. Footer

Content:

- WEEX logo.
- Social icons.
- Link groups: About, Support, Compliance, Contact, Product, Service, Learn.
- QR/download area.
- Sign up button.

## Assets Needed

- WEEX logo.
- Oscar Ramos avatar.
- Oscar Ramos hero/card photo.
- Event reward images.
- Selling point icons.
- Community section icons.
- Footer social icons.
- QR/download image if required.

Store assets locally:

```text
src/assets/images/
src/assets/icons/
```

## JavaScript Requirements

Use `src/js/main.js` only for small page behavior:

- Countdown timer.
- CTA redirects.
- Discord/community button redirect.
- Optional mobile navigation behavior.
- Optional video-card controls if required by Figma.

## Less Requirements

Use:

```text
src/less/main.less
src/less/variables.less
src/less/responsive.less
```

Compiled output:

```text
dist/css/main.css
```

Responsive breakpoints:

- Mobile: below 768px.
- Tablet: 768px through 1024px.
- Desktop: above 1024px.

## Acceptance Criteria

- Page can run locally.
- Layout matches Figma/reference screenshots closely.
- CTA links work.
- Countdown works.
- Desktop and mobile layouts do not overflow.
- Less compiles successfully.
- No framework code is introduced.
- Repo has clean Git status except intentional changed files.

## Implementation Phases

### Phase 1: Repo and Planning

- Initialize Git repo.
- Add package scripts.
- Add PRD.
- Add README.
- Add folder skeleton.

### Phase 2: Static Structure

- Create semantic HTML sections.
- Add placeholder asset references.
- Wire CTA href/data attributes.

### Phase 3: Styling

- Build desktop layout.
- Add tablet and mobile responsive rules.
- Match colors, spacing, card shapes, typography, and footer layout.

### Phase 4: JavaScript

- Add countdown.
- Add CTA redirect handlers if buttons are not plain links.
- Add optional mobile behavior.

### Phase 5: QA

- Compile Less.
- Run local server.
- Verify desktop, tablet, mobile.
- Check links.
- Check Git status before commit.
