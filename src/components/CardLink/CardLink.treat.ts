import { style } from "treat";

export const base = style((theme) => ({
  display: "block",
  padding: theme.grid * 2,
  borderRadius: theme.grid,
  border: "1px solid lightgrey",
  transition: "box-shadow 0.15s ease-in-out",
  color: "inherit",
  textDecoration: "none",
  ":hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
  },
}));
