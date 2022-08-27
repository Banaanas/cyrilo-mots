import { css } from "@emotion/react";

const colors = css`
  /* Primary Color */
  --color-primary-100: hsl(158, 92%, 90%);
  --color-primary-200: hsl(163, 92%, 79%);
  --color-primary-300: hsl(169, 85%, 68%);
  --color-primary-400: hsl(174, 79%, 58%);
  --color-primary-500: hsl(179, 93%, 44%);
  --color-primary-600: hsl(184, 95%, 37%);
  --color-primary-700: hsl(190, 95%, 31%);
  --color-primary-800: hsl(195, 97%, 25%);
  --color-primary-900: hsl(200, 98%, 21%);

  /* Secondary Color */
  --color-secondary-100: hsl(7, 100%, 92%);
  --color-secondary-200: hsl(2, 100%, 84%);
  --color-secondary-300: hsl(356, 100%, 75%);
  --color-secondary-400: hsl(351, 100%, 69%);
  --color-secondary-500: hsl(345, 100%, 59%);
  --color-secondary-600: hsl(339, 74%, 49%);
  --color-secondary-700: hsl(333, 78%, 40%);
  --color-secondary-800: hsl(327, 83%, 32%);
  --color-secondary-900: hsl(322, 88%, 25%);

  /* Tertiary Color */
  --color-tertiary-100: hsl(210, 39%, 93%);
  --color-tertiary-200: hsl(213, 39%, 86%);
  --color-tertiary-300: hsl(215, 22%, 69%);
  --color-tertiary-400: hsl(219, 12%, 46%);
  --color-tertiary-500: hsl(220, 17%, 17%);
  --color-tertiary-600: hsl(222, 24%, 14%);
  --color-tertiary-700: hsl(224, 35%, 11%);
  --color-tertiary-800: hsl(224, 46%, 8%);
  --color-tertiary-900: hsl(229, 55%, 6%);

  /* Black */
  --color-black-default: hsl(216, 18%, 16%);

  /* White */
  --color-white-default: hsl(0, 0%, 100%);

  /* Text Color */
  --color-text-default: var(--color-black-default);

  /* Selection */
  --color-selection: var(--color-secondary-200);
  --color-selection-background: var(--color-tertiary-900);

  /* Scrollbar */
  --color-scrollbar: var(--color-tertiary-900);
  --color-scrollbar-background: var(--color-tertiary-200);
`;

export default colors;
