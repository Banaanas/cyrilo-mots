/* - AppTheme -
 * This Theme is a JavaScript Object, in order to get the typing autocomplete/type
 * safety :
 * 1 - It contains the references to the CSS Variables ;
 * 2 - The theme also contains, among other values, the Media
 * Queries, because CSS Variables can NOT be used with Media Queries.
 * because CSS Variables can NOT be used with Media Queries;
 * 3 - It can be used as Emotion Theme also.
 *  */

// Breakpoints
const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

// Queries
const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
};

const appTheme = {
  /* CSS VARIABLES */
  colors: {
    primary: {
      100: "var(--color-primary-100)",
      200: "var(--color-primary-200)",
      300: "var(--color-primary-300)",
      400: "var(--color-primary-400)",
      500: "var(--color-primary-500)",
      600: "var(--color-primary-600)",
      700: "var(--color-primary-700)",
      800: "var(--color-primary-800)",
      900: "var(--color-primary-900)",
    },

    secondary: {
      100: "var(--color-secondary-100)",
      200: "var(--color-secondary-200)",
      300: "var(--color-secondary-300)",
      400: "var(--color-secondary-400)",
      500: "var(--color-secondary-500)",
      600: "var(--color-secondary-600)",
      700: "var(--color-secondary-700)",
      800: "var(--color-secondary-800)",
      900: "var(--color-secondary-900)",
    },

    tertiary: {
      100: "var(--color-tertiary-100)",
      200: "var(--color-tertiary-200)",
      300: "var(--color-tertiary-300)",
      400: "var(--color-tertiary-400)",
      500: "var(--color-tertiary-500)",
      600: "var(--color-tertiary-600)",
      700: "var(--color-tertiary-700)",
      800: "var(--color-tertiary-800)",
      900: "var(--color-tertiary-900)",
    },

    black: "var(--color-black-default)",
    white: "var(--color-white-default)",
    textDefault: "var(--color-text-default)",
    selection: "var(--color-selection)",
    selectionBackground: "var(--color-selection-background)",
    scrollbar: "var(--color-scrollbar)",
    scrollbarBackground: "var(--color-scrollbar-background)",
  },

  elevation: {
    sm: "var(--elevation-1)",
    md: "var(--elevation-2)",
    lg: "var(--elevation-3)",
    xl: "var(--elevation-4)",
  },

  fontWeight: {
    light: "var(--font-weight-light)",
    medium: "var(--font-weight-medium)",
    bold: "var(--font-weight-bold)",
  },

  fontSize: {
    xs: "var(--font-size-xs)",
    sm: "var(--font-size-sm)",
    md: "var(--font-size-md)",
    lg: "var(--font-size-lg)",
    xl: "var(--font-size-xl)",
    xl2: "var(--font-size-xl2)",
    xl3: "var(--font-size-xl3)",
    xl4: "var(--font-size-xl4)",
    xl5: "var(--font-size-xl5)",
    xl6: "var(--font-size-xl6)",
    xl7: "var(--font-size-xl7)",
    xl8: "var(--font-size-xl8)",
    xl9: "var(--font-size-xl9)",
  },

  fontFamily: {
    montserrat: "var(--font-family-1)",
    openSans: "var(--font-family-2)",
    alternativeFonts: "var(--alternative-fonts)",
  },

  /* OTHERS */
  globalMinWidth: "320px",
  globalMaxWidth: "1100px",
  headerHeight: "72px",
  queries: QUERIES,
};

export default appTheme;
