import { PaletteMode } from "@mui/material";
import { AppTheme, SDSThemeOptions } from "./types";

const SDSPaletteLight = (appTheme: AppTheme) => {
  return {
    accent: {
      border: appTheme.colors.blue[500],
      borderFocus: appTheme.colors.blue[500],
      borderHover: appTheme.colors.blue[600],
      borderOpen: appTheme.colors.blue[500],
      borderPressed: appTheme.colors.blue[700],
      borderSelected: appTheme.colors.blue[500],
      fillHover: appTheme.colors.blue[600],
      fillPressed: appTheme.colors.blue[700],
      fillPrimary: appTheme.colors.blue[500],
      icon: appTheme.colors.blue[500],
      iconFocus: appTheme.colors.blue[500],
      iconHover: appTheme.colors.blue[600],
      iconOpen: appTheme.colors.blue[500],
      iconPressed: appTheme.colors.blue[700],
      iconSelected: appTheme.colors.blue[500],
      surfacePrimary: appTheme.colors.blue[100],
      surfaceSecondary: appTheme.colors.blue[500],
      textAction: appTheme.colors.blue[500],
      textActionHover: appTheme.colors.blue[600],
      textActionPressed: appTheme.colors.blue[700],
    },
    base: {
      border: appTheme.colors.gray[500],
      borderDisabled: appTheme.colors.gray[300],
      borderHover: appTheme.colors.gray[900]!,
      borderPressed: appTheme.colors.gray[900]!,
      borderTable: appTheme.colors.gray[300],
      divider: appTheme.colors.gray[200],
      fillDisabled: appTheme.colors.gray[200],
      /* the number 47 is the opacity of the color, which is equal to 28% */
      fillHover: appTheme.colors.gray[300] + "47",
      fillOpen: appTheme.colors.gray[300] + "47",
      fillPressed: appTheme.colors.gray[300] + "47",
      fillPrimary: appTheme.colors.gray[50]!,
      fillSelected: appTheme.colors.gray[900]!,
      iconDisabled: appTheme.colors.gray[300],
      iconPrimary: appTheme.colors.gray[500],
      iconPrimaryHover: appTheme.colors.gray[900]!,
      iconPrimaryInverse: appTheme.colors.gray[50]!,
      iconPrimaryInverseHover: appTheme.colors.gray[400],
      iconPrimaryInversePressed: appTheme.colors.gray[400],
      iconPrimaryPressed: appTheme.colors.gray[900]!,
      iconSecondary: appTheme.colors.gray[900]!,
      surfaceBackground: appTheme.colors.gray[50]!,
      surfacePrimary: appTheme.colors.gray[50]!,
      surfacePrimaryInverse: appTheme.colors.gray[900]!,
      surfaceSecondary: appTheme.colors.gray[100],
      surfaceTertiary: appTheme.colors.gray[200],
      textDisabled: appTheme.colors.gray[300],
      textPrimary: appTheme.colors.gray[900]!,
      textPrimaryInverse: appTheme.colors.gray[50]!,
      textSecondary: appTheme.colors.gray[600],
      textSecondaryInverse: appTheme.colors.gray[300],
    },
    beta: {
      border: appTheme.colors.purple[500],
      fillHover: appTheme.colors.purple[600],
      fillPressed: appTheme.colors.purple[700],
      fillPrimary: appTheme.colors.purple[500],
      fillSecondary: appTheme.colors.purple[100],
      ornament: appTheme.colors.purple[600],
      surfacePrimary: appTheme.colors.purple[100],
      surfaceSecondary: appTheme.colors.purple[500],
      text: appTheme.colors.purple[600],
    },
    info: {
      border: appTheme.colors.blue[500],
      fillHover: appTheme.colors.blue[600],
      fillPressed: appTheme.colors.blue[700],
      fillPrimary: appTheme.colors.blue[500],
      fillSecondary: appTheme.colors.blue[100],
      ornament: appTheme.colors.blue[600],
      surfacePrimary: appTheme.colors.blue[100],
      surfaceSecondary: appTheme.colors.blue[500],
      text: appTheme.colors.blue[600],
    },
    negative: {
      border: appTheme.colors.red[500],
      fillHover: appTheme.colors.red[600],
      fillPressed: appTheme.colors.red[700],
      fillPrimary: appTheme.colors.red[500],
      fillSecondary: appTheme.colors.red[100],
      ornament: appTheme.colors.red[600],
      surfacePrimary: appTheme.colors.red[100],
      surfaceSecondary: appTheme.colors.red[500],
      text: appTheme.colors.red[600],
    },
    neutral: {
      border: appTheme.colors.gray[500],
      fillHover: appTheme.colors.gray[600],
      fillPressed: appTheme.colors.gray[700],
      fillPrimary: appTheme.colors.gray[500],
      fillSecondary: appTheme.colors.gray[100],
      ornament: appTheme.colors.gray[700],
      surfacePrimary: appTheme.colors.gray[200],
      surfaceSecondary: appTheme.colors.gray[500],
      text: appTheme.colors.gray[700],
    },
    notice: {
      border: appTheme.colors.yellow[500],
      fillHover: appTheme.colors.yellow[600],
      fillPressed: appTheme.colors.yellow[700],
      fillPrimary: appTheme.colors.yellow[500],
      fillSecondary: appTheme.colors.yellow[100],
      ornament: appTheme.colors.yellow[600],
      surfacePrimary: appTheme.colors.yellow[100],
      surfaceSecondary: appTheme.colors.yellow[500],
      text: appTheme.colors.yellow[600],
    },
    positive: {
      border: appTheme.colors.green[500],
      fillHover: appTheme.colors.green[600],
      fillPressed: appTheme.colors.green[700],
      fillPrimary: appTheme.colors.green[500],
      fillSecondary: appTheme.colors.green[100],
      ornament: appTheme.colors.green[600],
      surfacePrimary: appTheme.colors.green[100],
      surfaceSecondary: appTheme.colors.green[500],
      text: appTheme.colors.green[600],
    },
  };
};

const SDSPaletteDark = (appTheme: AppTheme) => {
  return {
    accent: {
      border: appTheme.colors.blue[500],
      borderFocus: appTheme.colors.blue[500],
      borderHover: appTheme.colors.blue[600],
      borderOpen: appTheme.colors.blue[500],
      borderPressed: appTheme.colors.blue[700],
      borderSelected: appTheme.colors.blue[500],
      fillHover: appTheme.colors.blue[600],
      fillPressed: appTheme.colors.blue[700],
      fillPrimary: appTheme.colors.blue[500],
      icon: appTheme.colors.blue[500],
      iconFocus: appTheme.colors.blue[500],
      iconHover: appTheme.colors.blue[600],
      iconOpen: appTheme.colors.blue[500],
      iconPressed: appTheme.colors.blue[700],
      iconSelected: appTheme.colors.blue[500],
      surfacePrimary: appTheme.colors.blue[100],
      surfaceSecondary: appTheme.colors.blue[500],
      textAction: appTheme.colors.blue[500],
      textActionHover: appTheme.colors.blue[600],
      textActionPressed: appTheme.colors.blue[700],
    },
    base: {
      border: appTheme.colors.gray[500],
      borderDisabled: appTheme.colors.gray[300],
      borderHover: appTheme.colors.gray[900]!,
      borderPressed: appTheme.colors.gray[900]!,
      borderTable: appTheme.colors.gray[300],
      divider: appTheme.colors.gray[200],
      fillDisabled: appTheme.colors.gray[200],
      /* the number 47 is the opacity of the color, which is equal to 28% */
      fillHover: appTheme.colors.gray[300] + "47",
      fillOpen: appTheme.colors.gray[300] + "47",
      fillPressed: appTheme.colors.gray[300] + "47",
      fillPrimary: appTheme.colors.gray[100],
      fillSelected: appTheme.colors.gray[900]!,
      iconDisabled: appTheme.colors.gray[300],
      iconPrimary: appTheme.colors.gray[500],
      iconPrimaryHover: appTheme.colors.gray[900]!,
      iconPrimaryInverse: appTheme.colors.gray[50]!,
      iconPrimaryInverseHover: appTheme.colors.gray[400],
      iconPrimaryInversePressed: appTheme.colors.gray[400],
      iconPrimaryPressed: appTheme.colors.gray[900]!,
      iconSecondary: appTheme.colors.gray[900]!,
      surfaceBackground: appTheme.colors.gray[75]!,
      surfacePrimary: appTheme.colors.gray[100],
      surfacePrimaryInverse: appTheme.colors.gray[900]!,
      surfaceSecondary: appTheme.colors.gray[200],
      surfaceTertiary: appTheme.colors.gray[300],
      textDisabled: appTheme.colors.gray[300],
      textPrimary: appTheme.colors.gray[900]!,
      textPrimaryInverse: appTheme.colors.gray[50]!,
      textSecondary: appTheme.colors.gray[600],
      textSecondaryInverse: appTheme.colors.gray[300],
    },
    beta: {
      border: appTheme.colors.purple[500],
      fillHover: appTheme.colors.purple[600],
      fillPressed: appTheme.colors.purple[700],
      fillPrimary: appTheme.colors.purple[500],
      fillSecondary: appTheme.colors.purple[100],
      ornament: appTheme.colors.purple[600],
      surfacePrimary: appTheme.colors.purple[100],
      surfaceSecondary: appTheme.colors.purple[500],
      text: appTheme.colors.purple[600],
    },
    info: {
      border: appTheme.colors.blue[500],
      fillHover: appTheme.colors.blue[600],
      fillPressed: appTheme.colors.blue[700],
      fillPrimary: appTheme.colors.blue[500],
      fillSecondary: appTheme.colors.blue[100],
      ornament: appTheme.colors.blue[600],
      surfacePrimary: appTheme.colors.blue[100],
      surfaceSecondary: appTheme.colors.blue[500],
      text: appTheme.colors.blue[600],
    },
    negative: {
      border: appTheme.colors.red[500],
      fillHover: appTheme.colors.red[600],
      fillPressed: appTheme.colors.red[700],
      fillPrimary: appTheme.colors.red[500],
      fillSecondary: appTheme.colors.red[100],
      ornament: appTheme.colors.red[600],
      surfacePrimary: appTheme.colors.red[100],
      surfaceSecondary: appTheme.colors.red[500],
      text: appTheme.colors.red[600],
    },
    neutral: {
      border: appTheme.colors.gray[500],
      fillHover: appTheme.colors.gray[600],
      fillPressed: appTheme.colors.gray[700],
      fillPrimary: appTheme.colors.gray[500],
      fillSecondary: appTheme.colors.gray[100],
      ornament: appTheme.colors.gray[700],
      surfacePrimary: appTheme.colors.gray[200],
      surfaceSecondary: appTheme.colors.gray[500],
      text: appTheme.colors.gray[700],
    },
    notice: {
      border: appTheme.colors.yellow[500],
      fillHover: appTheme.colors.yellow[600],
      fillPressed: appTheme.colors.yellow[700],
      fillPrimary: appTheme.colors.yellow[500],
      fillSecondary: appTheme.colors.yellow[100],
      ornament: appTheme.colors.yellow[600],
      surfacePrimary: appTheme.colors.yellow[100],
      surfaceSecondary: appTheme.colors.yellow[500],
      text: appTheme.colors.yellow[700],
    },
    positive: {
      border: appTheme.colors.green[500],
      fillHover: appTheme.colors.green[600],
      fillPressed: appTheme.colors.green[700],
      fillPrimary: appTheme.colors.green[500],
      fillSecondary: appTheme.colors.green[100],
      ornament: appTheme.colors.green[600],
      surfacePrimary: appTheme.colors.green[100],
      surfaceSecondary: appTheme.colors.green[500],
      text: appTheme.colors.green[600],
    },
  };
};

/**
 * This function creates the theme options for the MUI theme provider
 */
export function makeThemeOptions(
  appTheme: AppTheme,
  mode: PaletteMode
): SDSThemeOptions {
  return {
    app: appTheme,
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiDrawer: {
        defaultProps: {
          hideBackdrop: true,
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
    palette: {
      action: {
        disabled: appTheme.colors.gray[400],
        disabledBackground: appTheme.colors.gray[300],
      },
      background: {
        default:
          mode === "dark" ? appTheme.colors.gray[75] : appTheme.colors.gray[50],
      },
      divider: appTheme.colors.gray[200],
      error: {
        "100": appTheme.colors.red[100],
        "200": appTheme.colors.red[200],
        "300": appTheme.colors.red[300],
        "400": appTheme.colors.red[400],
        "500": appTheme.colors.red[500],
        "600": appTheme.colors.red[600],
        contrastText: appTheme.colors.gray[50],
        dark: appTheme.colors.red[600],
        light: appTheme.colors.red[200],
        main: appTheme.colors.red[400],
      },
      grey: {
        "100": appTheme.colors.gray[100],
        "200": appTheme.colors.gray[200],
        "300": appTheme.colors.gray[300],
        "400": appTheme.colors.gray[400],
        "500": appTheme.colors.gray[500],
        "600": appTheme.colors.gray[600],
      },
      info: {
        "100": appTheme.colors.blue[100],
        "200": appTheme.colors.blue[200],
        "300": appTheme.colors.blue[300],
        "400": appTheme.colors.blue[400],
        "500": appTheme.colors.blue[500],
        "600": appTheme.colors.blue[600],
        contrastText: appTheme.colors.gray[50],
        dark: appTheme.colors.blue[600],
        light: appTheme.colors.blue[200],
        main: appTheme.colors.blue[400],
      },
      mode: mode,
      primary: {
        "100": appTheme.colors.blue[100],
        "200": appTheme.colors.blue[200],
        "300": appTheme.colors.blue[300],
        "400": appTheme.colors.blue[400],
        "500": appTheme.colors.blue[500],
        "600": appTheme.colors.blue[600],
        contrastText: appTheme.colors.gray[50],
        dark: appTheme.colors.blue[600],
        light: appTheme.colors.blue[200],
        main: appTheme.colors.blue[400],
      },
      sds:
        mode === "dark" ? SDSPaletteDark(appTheme) : SDSPaletteLight(appTheme),
      secondary: {
        "100": appTheme.colors.green[100],
        "200": appTheme.colors.green[200],
        "300": appTheme.colors.green[300],
        "400": appTheme.colors.green[400],
        "500": appTheme.colors.green[500],
        "600": appTheme.colors.green[600],
        contrastText: appTheme.colors.gray[50],
        dark: appTheme.colors.green[600],
        light: appTheme.colors.green[200],
        main: appTheme.colors.green[400],
      },
      success: {
        "100": appTheme.colors.green[100],
        "200": appTheme.colors.green[200],
        "300": appTheme.colors.green[300],
        "400": appTheme.colors.green[400],
        "500": appTheme.colors.green[500],
        "600": appTheme.colors.green[600],
        contrastText: appTheme.colors.gray[50],
        dark: appTheme.colors.green[600],
        light: appTheme.colors.green[200],
        main: appTheme.colors.green[400],
      },
      text: {
        disabled: appTheme.colors.gray[300],
        primary: appTheme.colors.gray[900],
        secondary: appTheme.colors.gray[600],
      },
      warning: {
        "100": appTheme.colors.yellow[100],
        "200": appTheme.colors.yellow[200],
        "300": appTheme.colors.yellow[300],
        "400": appTheme.colors.yellow[400],
        "500": appTheme.colors.yellow[500],
        "600": appTheme.colors.yellow[600],
        contrastText: appTheme.colors.gray[900],
        dark: appTheme.colors.yellow[600],
        light: appTheme.colors.yellow[200],
        main: appTheme.colors.yellow[400],
      },
    },
    shadows: [
      appTheme.shadows.none,
      appTheme.shadows.s,
      appTheme.shadows.s,
      appTheme.shadows.s,
      appTheme.shadows.s,
      appTheme.shadows.s,
      appTheme.shadows.s,
      appTheme.shadows.s,
      appTheme.shadows.s,
      appTheme.shadows.m,
      appTheme.shadows.m,
      appTheme.shadows.m,
      appTheme.shadows.m,
      appTheme.shadows.m,
      appTheme.shadows.m,
      appTheme.shadows.m,
      appTheme.shadows.m,
      appTheme.shadows.l,
      appTheme.shadows.l,
      appTheme.shadows.l,
      appTheme.shadows.l,
      appTheme.shadows.l,
      appTheme.shadows.l,
      appTheme.shadows.l,
      appTheme.shadows.l,
    ],
    shape: {
      borderRadius: appTheme.corners.m,
    },
    spacing: [
      appTheme.spacing.default,
      appTheme.spacing.xxxs,
      appTheme.spacing.xxs,
      appTheme.spacing.xs,
      appTheme.spacing.s,
      appTheme.spacing.m,
      appTheme.spacing.l,
      appTheme.spacing.xl,
      appTheme.spacing.xxl,
    ],
    transitions: {
      duration: {
        complex: 200,
        enteringScreen: 20,
        leavingScreen: 10,
        short: 150,
        shorter: 100,
        shortest: 50,
        standard: 200,
      },
      easing: {
        easeIn: "cubic-bezier(0, 0, 0.2, 1)",
        easeInOut: "cubic-bezier(0, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        sharp: "cubic-bezier(0, 0.2, 0.6, 1)",
      },
    },
    typography: {
      body1: appTheme.typography.styles.body.regular.xs,
      body2: appTheme.typography.styles.body.regular.xxs,
      button: appTheme.typography.styles.body.regular.button,
      caption: appTheme.typography.styles.body.regular.xxxs,
      fontFamily: `${appTheme.typography.fontFamily.body}, sans-serif`,
      h1: appTheme.typography.styles.header.semibold.xxl,
      h2: appTheme.typography.styles.header.semibold.xl,
      h3: appTheme.typography.styles.header.semibold.l,
      h4: appTheme.typography.styles.header.semibold.m,
      h5: appTheme.typography.styles.header.semibold.s,
      h6: appTheme.typography.styles.header.semibold.xs,
      overline: appTheme.typography.styles.caps.semibold.xxxs,
      subtitle1: appTheme.typography.styles.body.regular.xs,
      subtitle2: appTheme.typography.styles.header.semibold.xxs,
    },
  };
}
