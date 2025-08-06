import { Grid } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HandymanIcon from "@mui/icons-material/Handyman";
import PushPinIcon from "@mui/icons-material/PushPin";
import { FeatureColumn } from "./FeatureColumn";

type FeatureSectionProps = {
  features: {
    complete: string[];
    inProgress: string[];
    planned: string[];
  };
};

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
