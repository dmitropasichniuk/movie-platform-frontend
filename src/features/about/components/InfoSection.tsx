import { Typography, List, ListItem } from "@mui/material";
import { Stack } from "@mui/system";

interface SectionProps {
  content?: string;
  list?: { label: string; items: string }[];
}

export const InfoSection = ({ content, list }: SectionProps) => (
  <Stack spacing={2} sx={{ mb: 4 }}>
    {content && (
      <Typography variant="body1" textAlign="justify">
        {content}
      </Typography>
    )}
    {list && (
      <List>
        {list.map((item, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            <strong>{item.label}</strong> : {item.items}
          </ListItem>
        ))}
      </List>
    )}
  </Stack>
);
