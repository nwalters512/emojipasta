declare module "treat/theme" {
  type TreatTheme = import("./base").Theme;

  export interface Theme extends TreatTheme {}
}
