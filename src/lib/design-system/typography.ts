/**
 * Krštinc d.o.o. — Typography Tokens
 * Font family: Open Sans (400, 600, 700)
 * Source: Figma design system
 */

export const fontFamily = {
  sans: ["Open Sans", "sans-serif"],
} as const;

export const fontWeight = {
  regular: 400,
  semibold: 600,
  bold: 700,
} as const;

export const typeScale = {
  h1: { fontSize: 48, lineHeight: 64, fontWeight: fontWeight.bold },
  h2: { fontSize: 36, lineHeight: 48, fontWeight: fontWeight.bold },
  h3: { fontSize: 28, lineHeight: 38, fontWeight: fontWeight.bold },
  h4: { fontSize: 20, lineHeight: 30, fontWeight: fontWeight.bold },
  h5: { fontSize: 18, lineHeight: 28, fontWeight: fontWeight.bold },
  h6: { fontSize: 16, lineHeight: 26, fontWeight: fontWeight.bold },
  body1: { fontSize: 18, lineHeight: 28, fontWeight: fontWeight.regular },
  body2: { fontSize: 16, lineHeight: 26, fontWeight: fontWeight.regular },
  body3: { fontSize: 20, lineHeight: 30, fontWeight: fontWeight.regular },
  subhead28: { fontSize: 28, lineHeight: 38, fontWeight: fontWeight.regular },
  subhead20: { fontSize: 20, lineHeight: 30, fontWeight: fontWeight.regular },
  button1: { fontSize: 18, lineHeight: 28, fontWeight: fontWeight.regular },
  button2: { fontSize: 20, lineHeight: 30, fontWeight: fontWeight.regular },
  semibold18: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: fontWeight.semibold,
  },
  semibold20: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: fontWeight.semibold,
  },
  semibold16: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: fontWeight.semibold,
  },
  bold28: { fontSize: 28, lineHeight: 38, fontWeight: fontWeight.bold },
  italic18: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: fontWeight.regular,
    fontStyle: "italic" as const,
  },
} as const;

export type TypeScale = typeof typeScale;
