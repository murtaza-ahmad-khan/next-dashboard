import useTheme from "@material-ui/core/styles/useTheme";
import React from "react";
import Image from "next/image";

export default function Logo() {
  const theme = useTheme();

  return (
    <Image
      src={`/images/Logo-${
        theme.palette.type === "light" ? "Black" : "White"
      }.png`}
      width={100}
      height={30}
      alt="Voolwood"
    />
  );
}
