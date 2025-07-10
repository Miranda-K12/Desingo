import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ROUTES from "../../routes/Routes";
import { useNavigate } from "react-router-dom";
import designoLogo from "../../assets/shared/desktop/logo-dark.png";

// Styled Components
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  color: "black",
  boxShadow: "none",
  maxWidth: "1112px",
  margin: "0 auto",
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    maxWidth: "690px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "1112px"
  },
}));

const Logo = styled("img")({
  width: 200,
});

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: "inherit",
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();



  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position={isScrolled ? "fixed" : "static"}
      elevation={0}
      sx={{
        marginBottom: 4,
        transition: "border-bottom 0.2s ease",
        borderBottom: isScrolled ? "1px solid #000" : "none",
        backgroundColor: "white",
        zIndex: 1300,
      }}
    >
      <StyledToolbar>
        <Logo src={designoLogo} alt="Designo logo" />

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {pages.map(({ label, path }) => (
                <MenuItem key={label} onClick={handleCloseMenu}>
                  <Typography textAlign="center" onClick={() => navigate(path)}>
                    {label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box>
            {pages.map(({ label, path }) => (
              <NavButton key={label} onClick={() => navigate(path)}>
                {label}
              </NavButton>
            ))}
          </Box>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
