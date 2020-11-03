import { style } from "treat";

export const header = style((theme) => ({
  backgroundColor: "#083751",
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.grid * 6,
  paddingRight: theme.grid * 6,
  paddingTop: theme.grid * 2,
  paddingBottom: theme.grid * 2,
}));

export const title = style((theme) => ({
  color: "white",
  textDecoration: "none",
  fontSize: "1.5rem",
}));

export const iconLink = style((theme) => ({
  color: "white",
  textDecoration: "none",
  marginLeft: "auto",
}));
