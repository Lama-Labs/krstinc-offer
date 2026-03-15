/**
 * Krštinc d.o.o. — Component Inventory
 * Maps Figma component sets → state variants
 * Source: Figma design system (799 total components)
 */

export const componentStates = {
  buttonKajZelite: ["default", "hover", "focus"],
  buttonMobileMenu: ["default", "hover", "focus", "menuOpen"],

  sliderButtonLargeRight: ["default", "hover", "focus", "disabled"],
  sliderButtonMediumRight: ["default", "hover", "focus", "disabled"],
  sliderButtonSmallRight: ["default", "hover", "focus", "disabled"],
  sliderButtonLargeLeft: ["default", "hover", "focus", "disabled"],
  sliderButtonMediumLeft: ["default", "hover", "focus", "disabled"],
  sliderButtonSmallLeft: ["default", "hover", "focus", "disabled"],

  bulletLarge: ["default", "selected", "hover", "focus"],
  bulletMedium: ["default", "selected", "hover", "focus"],
  bulletSmall: ["default", "selected", "hover", "focus"],

  mainNavigation: [
    "beforeScrolling1560",
    "afterScrolling1560",
    "state2_1400",
    "state3_1200",
    "state4_992to320",
    "state5_320",
  ],

  categoryMainNav: [
    "default",
    "hover",
    "selected",
    "dropdownDisplayed",
    "dropdownDisplayedHover",
    "state2Default",
    "state2Hover",
    "state2Selected",
    "state2DropdownDisplayed",
    "state2DropdownDisplayedHover",
  ],

  dropdownItem: ["default", "hover"],
  logo: ["default", "hover"],
  iconMainNav: ["dropdownNotDisplayed", "dropdownDisplayed"],
  iconMobileNav: ["subCategoriesNotDisplayed", "subCategoriesDisplayed"],
} as const;

export const formStates = [
  "default",
  "hover",
  "focus",
  "error",
  "filled",
  "disabled",
] as const;

export const radioCheckboxStates = [
  "default",
  "hover",
  "focus",
  "error",
  "selected",
  "selectedFocus",
] as const;

export type ComponentStates = typeof componentStates;
export type FormState = (typeof formStates)[number];
export type RadioCheckboxState = (typeof radioCheckboxStates)[number];
