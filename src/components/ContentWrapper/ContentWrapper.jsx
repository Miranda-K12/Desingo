import React from "react";
import Box from "@mui/material/Box";

function ContentWrapper({ children }) {
  return (
    <Box
      sx={{
        maxWidth: "1920px",
        padding: { xs: "0 1.5rem", md: "0 10rem" },
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}

export default ContentWrapper;
