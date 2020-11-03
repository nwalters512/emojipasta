export interface Theme {
  grid: number;
}

const base: Partial<Theme> = {
  grid: 4,
};

export const makeTheme = (theme: Partial<Theme>): Theme => {
  return { ...base, ...theme } as Theme;
};
