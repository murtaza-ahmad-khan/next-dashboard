import * as MIcons from "@material-ui/icons";

export default function Icon({ name, style, ...props }) {
  if (!name) return null;

  const MIcon = MIcons[name];
  return (
    <span style={{ display: "inline-flex", ...style }} {...props}>
      <MIcon />
    </span>
  );
}
