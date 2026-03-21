import { Box, Typography } from "@mui/material";
import { EXPERIENCE } from "../data/data.tsx";

const ExperiencePage = () => {
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
          experience <Box component="span" className="bracket">{"{"}</Box>
        </Typography>
      </Box>

      {/* Timeline container */}
      <Box
        sx={{
          position: "relative",
          ml: { xs: 1.5, sm: 3 },
          minHeight: "50vh",
        }}
      >
        {/* Timeline vertical line (UNCHANGED) */}
        <Box
          sx={{
            position: "absolute",
            left: 16,
            top: 0,
            bottom: 0,
            width: "4px",
            bgcolor: "#818cf8",
            borderRadius: "2px",
          }}
        />

        {/* Timeline item */}
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 6 }}>
          
          {/* Dot */}
          <Box
            sx={{
              width: 18,
              height: 18,
              minWidth: 18,
              borderRadius: "50%",
              background: "linear-gradient(to right, #818cf8, #60a5fa)",
              zIndex: 1,
              mt: 1,
              ml: 1.2,
              boxShadow: "0 0 10px rgba(129,140,248,0.5)",
            }}
          />

          {/* Content wrapper */}
          <Box
            sx={{
              ml: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // 👈 key fix
              gap: { xs: 1.5, sm: 2 },
              width: "100%",
              minWidth: 0,
            }}
          >
            
            {/* Image */}
            <Box
              component="img"
              src={EXPERIENCE.image}
              alt={EXPERIENCE.Company}
              sx={{
                width: { xs: 36, sm: 50 },
                height: { xs: 36, sm: 50 },
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />

            {/* Text */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              
              <Typography
                sx={{
                  fontWeight: 700,
                  background: "var(--Text_COLOR_HIGHLIGHT2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                }}
              >
                {EXPERIENCE.Timeline}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontWeight: 700,
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  lineHeight: 1.4,
                }}
              >
                {EXPERIENCE.Role} @{" "}
                <Box
                  component="span"
                  sx={{
                    background: "var(--Text_COLOR_HIGHLIGHT2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {EXPERIENCE.Company}
                </Box>
              </Typography>

              {/* Description */}
              <Box
                component="ul"
                sx={{
                  color: "#94a3b8",
                  pl: 2,
                  mt: 1,
                  "& strong": { color: "#60a5fa" },
                  "& li": {
                    mb: 1,
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    lineHeight: 1.5,
                  },
                }}
              >
                {EXPERIENCE.Description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </Box>

              {/* Tech stack */}
              <Box sx={{ mt: 1.5 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {EXPERIENCE.TechStack.map((tech, i) => (
                    <Box
                      key={i}
                      sx={{
                        px: 1.2,
                        py: 0.4,
                        borderRadius: "4px",
                        bgcolor: "rgba(129, 140, 248, 0.2)",
                        color: "#818cf8",
                        fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>

      {/* Closing bracket */}
      <Box
        sx={{
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

export default ExperiencePage;