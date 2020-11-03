import { style } from "treat";

export const base = style((theme) => ({
  maxWidth: "700px",
  paddingLeft: theme.grid * 4,
  paddingRight: theme.grid * 4,
  marginLeft: "auto",
  marginRight: "auto",
}));
