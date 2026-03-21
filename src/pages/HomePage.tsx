import { Box, Typography, Button } from "@mui/material";
import {HOME_TEXT} from "../data/data.tsx"
import Spline from "@splinetool/react-spline";
import {Suspense} from "react";
// import Text_COLOR_HIGHLIGHT2 from '../data/colors.css'

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "92vh",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{width: "100%"}}>
        <Typography 
          sx = {{ 
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, 
            fontWeight: "bold"
          }}>
          Hello, I'm
        </Typography>

        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            background: "var(--Text_COLOR_HIGHLIGHT2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Khoa, Tran Viet.
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: "#94a3b8",
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
            whiteSpace: "pre-line",
            lineHeight: 2
          }}
        >
          {HOME_TEXT}
        </Typography>

        <Box sx={{ mt: 5, display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #818cf8, #6366f1)",
              textTransform: "none",
              px: 3,
              py: 1.2,
              borderRadius: "10px",
            }}
            href = "https://github.com/Michael-coding06"
            target="_blank"
          >
            Github
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "#334155",
              textTransform: "none",
              px: 3,
              py: 1.2,
              borderRadius: "10px",
            }}
            href = "https://www.linkedin.com/in/khoatranviet/"
            target="_blank"
          >
            Linkedin
          </Button>
        </Box>

        <Box>

        </Box>
      </Box>
    
      <Box
        sx={{
            height: 500,
            width: "100%",
            display: { xs: "none", md: "block" } 
        }}
        onWheel={(e) => e.stopPropagation()} 
        >
        <Suspense fallback={<span>Loading...</span>}>
            <Spline scene="portfolio/assets/scene.splinecode" />
        </Suspense>
      </Box>
    </Box>
  );
};

export default HomePage;