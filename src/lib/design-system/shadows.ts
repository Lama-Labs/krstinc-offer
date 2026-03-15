/**
 * Krštinc d.o.o. — Shadow & Effect Tokens
 * Source: Figma design system
 */

export const shadows = {
  tooltipBottom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  tooltipTop: "0px -4px 4px rgba(0, 0, 0, 0.25)",
  navigation: "0px 2px 4px rgba(0, 0, 0, 0.10)",
  dropdown: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  card: "2px 4px 4px rgba(0, 0, 0, 0.10)",
  floatingButton: "0px 2px 4px rgba(0, 0, 0, 0.25)",
} as const;

export const blur = {
  navigation: "blur(10px)",
} as const;

export type Shadows = typeof shadows;
