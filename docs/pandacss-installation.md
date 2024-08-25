
# Panda CSS Setup with Next.js

This guide provides a step-by-step approach to the precedures used in setting up pandacss in this monorepo

## 1. Install Panda CSS

Install Panda CSS as a development dependency:

```bash
pnpm install -D @pandacss/dev
```

Initialize Panda CSS with PostCSS support:

```bash
pnpm panda init --postcss
```

The above command creates a `postcss.config.js` file at the root of your project with the following content:

```javascript
module.exports = {
  plugins: {
    '@pandacss/dev/postcss': {},
  },
}
```


## 2. Update `package.json` Scripts

Open your `package.json` file and update the `scripts` section as follows:

```json
{
  "scripts": {
    "prepare": "panda codegen"
  }
}
```

This `prepare` script ensures that Panda's output directory is regenerated after each dependency installation. Add the output directory to your `.gitignore` file.

## 3. Configure Panda CSS

Update the Panda CSS configuration in `panda.config.ts`:

```typescript
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use CSS reset
  preflight: true,

  // Where to look for your CSS declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your CSS system
  outdir: "styled-system",
})
```

## 4. Configure Entry CSS with Layers

The following code below was added to `global.css` file in `/apps/web/src/styles/global.css``

```css
@layer reset, base, tokens, recipes, utilities;
```

## 5. Import Entry CSS into the App

Ensure that `globals.css` is imported in your `src/app/layout.tsx` file:

```typescript
import './globals.css'
```

## 6. Start Using Panda CSS

We can now use Panda CSS in the project.

```typescript
import { css } from '../../styled-system/css';
```

## 7. Migrating a Chakra UI (TODO CARD) Component to Panda CSS

### Changes in `TodoCard` Component

The `TodoCard` component was originally styled using Chakra UI components. The migration to Panda CSS involved replacing Chakra UI components with standard HTML elements and using Panda CSS's `css` function for styling.

#### Key Changes:
- **Container**: The Chakra `Box` component was replaced with a `div` element, and styles were applied using Panda CSS.
- **Heading**: The Chakra `Heading` component was replaced with an `h2` element.
- **Icons**: Chakra UI's `Icon` component was retained, but Panda CSS was used to apply conditional styles based on the `completed` state.
- **Text**: The `Text` component was replaced with `p` elements, styled with Panda CSS.
- **Badge**: The `Badge` component was replaced with a `span` element, with conditional styles applied using Panda CSS.
- **Divider**: The Chakra `Divider` component was replaced with an `hr` element, styled via Panda CSS.


## Performance Overview

The following metrics were recorded after the migration:

- **First Contentful Paint (FCP)**: **0.3 s**
- **Largest Contentful Paint (LCP)**: **3.4 s**
- **Total Blocking Time (TBT)**: **360 ms**
- **Cumulative Layout Shift (CLS)**: **0.066**
- **Speed Index (SI)**: **0.4 s**
- **Overall Performance Score**: **65**

### Performance Breakdown

- **FCP**: The time taken for the first content to be painted on the screen is 0.3 seconds.
- **LCP**: The time taken for the largest content element to be painted is 3.4 seconds.
- **TBT**: The total time during which the main thread was blocked is 360 milliseconds.
- **CLS**: The cumulative layout shift score is 0.066, indicating minor layout shifts.
- **SI**: The speed index score is 0.4 seconds, representing the time at which the visible parts of the page are displayed.

### Performance Score

The overall performance score is 65, which falls into the "Needs Improvement" range. These values are estimated and may vary.

## Visual Representation
- [Data Table Page Report](../reports/lighthouse/post-pandacss-integration/data-table-report.html)
The final performance analysis linked below reflects the performance at that moment. 

_Values are estimated and may vary. The performance score is calculated directly from these metrics._

Performance score ranges:
- **0–49**: Poor
- **50–89**: Needs Improvement
- **90–100**: Good


## New panda css component
- [Todo card component]('../../../apps/web/src/components/todo/ToDoCard.tsx')
- [Data Table Page Report](../reports/lighthouse/post-pandacss-integration/data-table-report.html)