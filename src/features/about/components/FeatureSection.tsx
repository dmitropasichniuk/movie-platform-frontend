import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HandymanIcon from "@mui/icons-material/Handyman";
import PushPinIcon from "@mui/icons-material/PushPin";

type FeatureSectionProps = {
  features: {
    complete: string[];
    inProgress: string[];
    planned: string[];
  };
};

const FeatureColumn = ({
  label,
  items,
  icon,
}: {
  label: string;
  items: string[];
  icon: React.ReactNode;
}) => (
  <Grid item xs={12} md={4} sx={{ minWidth: "30%" }}>
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
  </Grid>
);

export const FeatureSection = ({ features }: FeatureSectionProps) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <FeatureColumn
        label="Completed"
        icon={<CheckCircleOutlineIcon color="success" />}
        items={features.complete}
      />
      <FeatureColumn
        label="In Progress"
        icon={<HandymanIcon color="info" />}
        items={features.inProgress}
      />
      <FeatureColumn
        label="Planned"
        icon={<PushPinIcon color="warning" />}
        items={features.planned}
      />
    </Grid>
  );
};
