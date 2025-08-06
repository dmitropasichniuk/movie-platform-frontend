import React from "react";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";

interface FeatureColumnProps {
  label: string;
  items: string[];
  icon: React.ReactNode;
}

export const FeatureColumn = ({ label, items, icon }: FeatureColumnProps) => {
  return (
    <Box
      sx={{
        minWidth: "30%",
        flex: 1,
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        {icon} {label}
      </Typography>
      <List dense disablePadding>
        {items.map((feature, i) => (
          <ListItem key={i} disableGutters>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
