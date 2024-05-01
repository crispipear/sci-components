import { SvgIcon, SvgIconProps } from "@mui/material";

/**
 * CustomSvgIcon is a component that extends the SvgIcon component from the Material-UI library.
 * It allows easy usage of custom SVG icons with in the storybook demos.
 */

function CustomSvgIcon(props: SvgIconProps) {
  return (
    <SvgIcon color="primary" viewBox="2 2 20 20" {...props}>
      <path d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62C6.28 8.13 5 9.92 5 12c0 2.76 2.24 5 5 5v2z"></path>
      <path d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35z"></path>
      <circle cx="10.5" cy="8" r="1.5"></circle>
    </SvgIcon>
  );
}

export default CustomSvgIcon;
