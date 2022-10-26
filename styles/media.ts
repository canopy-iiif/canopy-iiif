export const width = {
  xxs: 334,
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199,
};

const media = {
  xxs: `(max-width: ${width.xxs}px)`,
  xs: `(max-width: ${width.xs}px)`,
  sm: `(max-width: ${width.sm}px)`,
  md: `(max-width: ${width.md}px)`,
  lg: `(max-width: ${width.lg}px)`,
  xl: `(min-width: ${width.lg + 1}px)`,
};

export default media;
