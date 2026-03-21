import { Box, Typography, Button, Chip } from "@mui/material";
import { PROJECTS } from "../data/data.tsx";

const ProjectPage = () => {
  return (
    <Box sx={{ minHeight: "80vh", py: 6, display: "flex", flexDirection: "column" }}>
      
      {/* Title */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "var(--TEXT_COLOR)",
            display: "inline-flex",
            alignItems: "center",
            gap: 2,
            fontSize: { xs: "1.5rem", sm: "2rem" },
            "& span.bracket": {
              background: "var(--Text_COLOR_HIGHLIGHT2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
            },
          }}
        >
          projects <Box component="span" className="bracket">{"{"}</Box>
        </Typography>
      </Box>

      {/* Projects */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 6, sm: 8 },
          mb: 4,
          ml: { xs: 0, sm: 2, md: 5 }, // 👈 fix overflow on mobile
        }}
      >
        {PROJECTS.map((proj, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                flexDirection: { xs: "column", sm: "row" }, // 👈 stack on mobile
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  background: "var(--Text_COLOR_HIGHLIGHT2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "1.1rem", sm: "1.4rem" },
                }}
              >
                {proj.Name}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "0.8rem", sm: "0.95rem" },
                  color: "#94a3b8",
                }}
              >
                {proj.Timeline}
              </Typography>
            </Box>

            {/* Image + Description */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // 👈 key fix
                gap: 2,
                alignItems: "flex-start",
              }}
            >
              
              {/* Image */}
              <Box
                component="img"
                src={proj.Image}
                alt={proj.Name}
                sx={{
                  width: { xs: "100%", sm: "200px" },
                  height: { xs: "160px", sm: "120px" },
                  objectFit: "cover",
                  borderRadius: "12px",
                  border: "1px solid #818cf8",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 12px 30px rgba(99,102,241,0.35)",
                  },
                }}
              />

              {/* Description */}
              <Box
                component="ul"
                sx={{
                  color: "#94a3b8",
                  pl: 2,
                  m: 0,
                  flex: 1,
                  "& strong": {
                    color: "#60a5fa",
                  },
                  "& li": {
                    mb: 1,
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    lineHeight: 1.5,
                  },
                }}
              >
                {proj.Description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </Box>
            </Box>

            {/* Tech stack */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {proj.TechStack.map((tech, i) => (
                <Chip
                  key={i}
                  label={tech}
                  sx={{
                    background: "#334155",
                    color: "#cbd5f5",
                    fontSize: { xs: "0.7rem", sm: "0.8rem" },
                    borderRadius: "6px",
                  }}
                />
              ))}
            </Box>

            {/* Button */}
            <Box sx={{ mt: 1 }}>
              <Button
                variant="contained"
                href={proj.Platform}
                target="_blank"
                sx={{
                  background: "linear-gradient(to right, #818cf8, #6366f1)",
                  textTransform: "none",
                  px: { xs: 2.5, sm: 3 },
                  py: { xs: 1, sm: 1.2 },
                  borderRadius: "10px",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                }}
              >
                View Project
              </Button>
            </Box>

          </Box>
        ))}
      </Box>

      {/* Closing bracket */}
      <Box
        sx={{
          mt: 8,
          background: "var(--Text_COLOR_HIGHLIGHT2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 800,
          fontSize: { xs: "32px", sm: "40px" },
        }}
      >
        {"}"}
      </Box>
    </Box>
  );
};

export default ProjectPage;