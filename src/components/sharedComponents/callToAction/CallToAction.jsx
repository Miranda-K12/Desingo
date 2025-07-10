import React from "react";
import styles from "./CallToAction.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CallToActionBtn from "../button/Button";
import CallToActionBg from "../../../assets/shared/desktop/bg-pattern-call-to-action.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

function CallToAction() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      className={styles.CallToAction}
      sx={{
        marginTop: { xs: "6rem", md: "8rem" },
        marginBottom: { xs: "-6rem", md: "-8rem" }, // Pull down over footer
        zIndex: 10,
        position: "relative",
      }}
    >
      <Box className={styles.descriptionCont}>
        <Typography variant="h4">Let's talk about your project</Typography>
        <Typography variant="body1">
          Ready to take it to the next level? Contact us today and find out
          {!isMobile && <br />}
          how our expertise can help your business grow.
        </Typography>
      </Box>
      <Box className={styles.bgImage}>
        <img src={CallToActionBg} alt="" />
      </Box>
      <Box sx={{ position: "relative", zIndex: 9000 }}>
        <CallToActionBtn>Get in Touch</CallToActionBtn>
      </Box>
    </Box>
    // Take care of the responsive part here
  );
}

export default CallToAction;
