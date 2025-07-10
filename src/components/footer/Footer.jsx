import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ROUTES from "../../routes/Routes";
import { useNavigate } from "react-router-dom";
import designoLogo from "../../assets/shared/desktop/logo-light.png";
import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import pinterestIcon from "../../assets/shared/desktop/icon-pinterest.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import youtubeIcon from "../../assets/shared/desktop/icon-youtube.svg";

// Styled Components
const Logo = styled("img")({
  width: 200,
});

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: "lightgray",
  backgroundColor: "transparent",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const pages = [
  { label: "Our Company", path: ROUTES.ABOUT },
  { label: "Location", path: ROUTES.LOCATIONS },
  { label: "Contact", path: ROUTES.CONTACT },
];

const socials = [
  {
    mediaName: "Facebook",
    icon: facebookIcon,
    url: "https://www.facebook.com",
  },
  {
    mediaName: "Youtube",
    icon: youtubeIcon,
    url: "https://www.youtube.com",
  },
  {
    mediaName: "Twitter",
    icon: twitterIcon,
    url: "https://www.twitter.com",
  },
  {
    mediaName: "Pinterest",
    icon: pinterestIcon,
    url: "https://www.pinterest.com",
  },
  {
    mediaName: "Instagram",
    icon: instagramIcon,
    url: "https://www.instagram.com",
  },
];

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const gapValue = isMobile
    ? theme.spacing(4)
    : isTablet
    ? theme.spacing(5)
    : theme.spacing(30);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--color-primary-black)",
        color: "lightgray",
        padding: theme.spacing(20, 10, 10, 10),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
        width: "100%",
      }}
    >
      {isMobile ? (
        <Box>
          <Box
            sx={{
              textAlign: "center",
              paddingBottom: 2,
              borderBottom: "1px solid gray",
            }}
          >
            <Logo src={designoLogo} alt="Designo logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 2,
            }}
          >
            {pages.map(({ label, path }) => (
              <NavButton key={label} onClick={() => navigate(path)}>
                {label}
              </NavButton>
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid gray",
            padding: theme.spacing(2, 0),
          }}
        >
          <Logo src={designoLogo} alt="Designo logo" />
          <Box>
            {pages.map(({ label, path }) => (
              <NavButton key={label} onClick={() => navigate(path)}>
                {label}
              </NavButton>
            ))}
          </Box>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isMobile ? theme.spacing(6) : theme.spacing(0),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            gap: gapValue,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography>
            <span style={{ fontWeight: 600 }}>Designo Central Office</span>
            <br />
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </Typography>
          <Typography>
            Contact Us (Central Office) <br />
            P: +1 253-863-8967 <br />
            M: contact@designo.co
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: isDesktop ? theme.spacing(2) : theme.spacing(0.5),
            justifyContent: isMobile ? "center" : "flex-end",
          }}
        >
          {socials.map(({ mediaName, icon, url }, idx) => (
            <IconButton
              key={idx}
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "&:hover": {
                  opacity: 0.8,
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src={icon}
                alt={`Visit us on ${mediaName}`}
                style={{ width: 24, height: 24 }}
              />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
