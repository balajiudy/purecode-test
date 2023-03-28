import * as React from "react";
import Chip from "@mui/joy/Chip";
import SettingsIcon from "@mui/icons-material/Settings";

export default function ClickableChipSetting() {
  return (
    <Chip
      slotProps={{ action: { component: "a", href: "#as-link" } }}
      sx={{
        bottom: "600px",
        left: "1168px",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}
      className="Chip_comp">
      <SettingsIcon />
    </Chip>
  );
}
