/**
 * Tailwind CSS configuration file that dynamically selects the theme configuration based on an environment variable.
 * The theme can either be 'chevrolet' or 'gmc', defaulting to 'chevrolet' if not specified.
 * 
 * It imports two theme configurations from external files:
 * - `chevrolet-theme`: Configuration specific to the Chevrolet theme.
 * - `gmc-theme`: Configuration specific to the GMC theme.
 * 
 * Based on the value of the `process.env.THEME` environment variable, the corresponding theme configuration is chosen.
 * 
 * The resulting configuration includes a list of paths to scan for class names and incorporates the selected theme's customizations.
 *
 * @type {import('tailwindcss').Config}
 * @example
 * append --theme=gmc to build/run script
 * If `process.env.THEME` is 'gmc', the 'gmc-theme' configuration is applied.
 */

import type { Config } from "tailwindcss";

// Import all possible theme configurations statically
import themeChevroletConfig from './tailwind-config/chevrolet-theme';
import themeGMCConfig from './tailwind-config/gmc-theme';

const theme = process.env.THEME || 'chevrolet';

let themeConfig;
if (theme === 'chevrolet') {
  themeConfig = themeChevroletConfig;
} else if (theme === 'gmc') {
  themeConfig = themeGMCConfig;
} else {
  themeConfig = themeChevroletConfig;
}

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  ...themeConfig,
  plugins: [],
} satisfies Config;