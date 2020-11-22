const COLORS = {
  DarkBlue: 'hsl(209, 23%, 22%)',
  VeryDarkBlueBg: 'hsl(207, 26%, 17%)',
  VeryDarkBlueText: 'hsl(200, 15%, 8%)',
  DarkGray: 'hsl(0, 0%, 52%)',
  VeryLightGray: 'hsl(0, 0%, 98%)',
  White: 'hsl(0, 0%, 100%)',
};

const themes = {
  light: {
    color: COLORS.VeryDarkBlueText,
    bg: COLORS.VeryLightGray,
    elements: COLORS.White,
    inputText: COLORS.DarkGray,
    shadow: '0 0 5px #D0D0D0',
  },
  dark: {
    color: COLORS.White,
    bg: COLORS.VeryDarkBlueBg,
    elements: COLORS.DarkBlue,
    inputText: COLORS.White,
    shadow: '0 0 5px #191919',
  },
};

export default themes;
