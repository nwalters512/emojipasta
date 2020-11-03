import { style } from "treat";

export const base = style((theme) => ({
  padding: theme.grid * 2,
  backgroundColor: "blue",
  color: "white",
  border: "none",
  borderRadius: theme.grid,
  fontSize: "1rem",
}));
