import React, { useState } from "react";
import { Box, Typography, InputBase } from "@mui/material";

import HomePage from "./HomePage.tsx";
import AboutPage from "./AboutPage.tsx";
import ExperiencePage from "./ExperiencePage.tsx";
import ProjectPage from "./ProjectPage.tsx";
import SkillsPage from "./SkillsPage.tsx";
import BlogPage from "./BlogPage.tsx";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";

const sections = ["home", "about", "experience", "skills", "projects", "blog"];

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("home");


  const renderPage = () => {
    switch (currentSection) {
      case "about":
        return <AboutPage />;
      case "experience":
        return <ExperiencePage />;
      case "projects":
        return <ProjectPage/>;
      case "skills":
        return <SkillsPage/>;
      case "blog":
        return <BlogPage/>;
      default:
        return <HomePage />;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
        color: "white",
        
      }}
    >
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          display: { xs: "flex", md: "none" },
          zIndex: 2,

          backdropFilter: "blur(10px)",
          background: "rgba(15, 23, 42, 0.6)", 
          border: "1px solid rgba(129, 140, 248, 0.3)",
          borderRadius: "12px",
          width: 44,
          height: 44,

          color: "#818cf8",

          transition: "all 0.25s ease",

          "&:hover": {
            background: "rgba(129, 140, 248, 0.15)",
            boxShadow: "0 0 12px rgba(129, 140, 248, 0.4)",
            transform: "scale(1.05)",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateRows: "repeat(4, min-content)", 
          gridAutoFlow: "column", 
          gap: 1,
          position: "fixed",   
          top: 16,           
          left: 16,
          height: "100vh", 
        }}
      >
        {sections.map((item) => (
          <Box
            key={item}
            onClick={() => setCurrentSection(item)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              p: 1,
              width: "80px", 
              borderRadius: 2,
              transition: "all 0.2s",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
              border: currentSection === item ? "1px solid rgba(99, 102, 241, 0.5)" : "1px solid transparent",
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 35,
                backgroundColor: "#6366f1",
                position: "relative",
                borderRadius: "4px",
                mb: 1,
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -5,
                  left: 0,
                  width: 20,
                  height: 10,
                  backgroundColor: "#6366f1",
                  borderRadius: "4px 4px 0 0",
                }
              }}
            />

            <Typography 
              variant="caption" 
              sx={{ 
                color: "#cbd5f5", 
                textAlign: "center",
                fontWeight: currentSection === item ? "bold" : "normal" 
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
            color: "#e2e8f0",
            borderRight: "1px solid rgba(129, 140, 248, 0.2)",
            width: 220,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {sections.map((item) => (
            <Box
              key={item}
              onClick={() => {
                setCurrentSection(item);
                setOpen(false);
              }}
              sx={{
                p: 1.2,
                borderRadius: "8px",
                cursor: "pointer",
                textTransform: "capitalize",
                fontWeight: currentSection === item ? 700 : 400,

                // ✨ gradient highlight (same as ExperiencePage)
                background:
                  currentSection === item
                    ? "linear-gradient(to right, #818cf8, #60a5fa)"
                    : "transparent",
                WebkitBackgroundClip:
                  currentSection === item ? "text" : "initial",
                WebkitTextFillColor:
                  currentSection === item ? "transparent" : "#cbd5f5",

                "&:hover": {
                  background: "rgba(129, 140, 248, 0.15)",
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Drawer>
      <Box
        sx={{
          flex: 1,
          p: 4,
          overflow: "auto",
          ml: { xs: 0, md: 30 }
        }}
      >
        {renderPage()}
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60px",
          bgcolor: "#020617",
          borderTop: "1px solid #818cf8",
          px: 5,
          py: 1.5,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 2,
          zIndex: 1000,
        }}
      >
        <Typography
          sx={{
            background: "var(--Text_COLOR_HIGHLIGHT2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Khoa@portfolio: ~$ npm run:
        </Typography>

        <InputBase
          placeholder="home"
          onChange={(e) => setSection(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCurrentSection(section); 
            }
          }}
          sx={{
            color: "#e2e8f0",
            fontFamily: "monospace",
            flex: 1,
            "& input": {
              padding: 0,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Portfolio;