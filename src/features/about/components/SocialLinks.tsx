import { Stack, Link as MuiLink } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://github.com/dmitropasichniuk",
      icon: <GitHubIcon />,
      label: "GitHub",
      external: true,
    },
    {
      href: "https://linkedin.com/in/dmytro-pasichniuk",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      external: true,
    },
    {
      href: "mailto:dimapasichniuk@gmail.com",
      icon: <EmailIcon />,
      label: "Email",
      external: false,
    },
  ];

  return (
    <Stack direction="row" spacing={2} mb={4}>
      {socialLinks.map(({ href, icon, label, external }) => (
        <MuiLink
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener" : undefined}
          underline="hover"
          sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
        >
          {icon} {label}
        </MuiLink>
      ))}
    </Stack>
  );
};
