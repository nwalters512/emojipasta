import { style } from "treat";

export const container = style((theme) => ({
  position: "relative",
}));

export const input = style((theme) => ({
  borderRadius: theme.grid,
  display: "block",
  width: "100%",
  padding: theme.grid * 2,
  border: "1px solid lightgrey",
}));

export const withIcon = style((theme) => ({
  paddingLeft: theme.grid * 8,
}));

export const iconContainer = style((theme) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  height: "100%",
  paddingLeft: theme.grid * 2,
  paddingRight: theme.grid * 2,
}));
