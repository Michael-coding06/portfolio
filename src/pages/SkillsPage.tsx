import { Box, Typography, Button, Chip } from "@mui/material";
import {SKILLS} from "../data/data.tsx"

const SkillsPage = () => {
    return (
        <Box sx={{ minHeight: "80vh", py: 6, flexDirection: "column" }}>
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        color: "var(--TEXT_COLOR)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 3,
                        "& span.bracket": {
                            background: "var(--Text_COLOR_HIGHLIGHT2)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontWeight: 800,
                        },
                    }}
                >
                    skill{" "}
                    <Box component="span" className="bracket">{"{"}</Box>
                </Typography>
            </Box>

            <Box
                sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                ml: { xs: 1, sm: 4 },
                mb: 4,
                }}
            >
                {Object.entries(SKILLS).map(([category, skills]) => (
                <Box key={category}>
                    
                    {/* Category Title */}
                    <Typography
                    variant="h6"
                    sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: "#e2e8f0",
                        position: "relative",
                        display: "inline-block",

                        "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "40%",
                        height: "2px",
                        background: "linear-gradient(to right, #818cf8, transparent)",
                        },
                    }}
                    >
                    {category}
                    </Typography>

                    {/* Chips */}
                    <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.2,
                    }}
                    >
                    {skills.map((skill, i) => (
                        <Chip
                        key={i}
                        label={skill}
                        sx={{
                            background: "#1e293b",
                            color: "#cbd5f5",
                            fontSize: "0.8rem",
                            borderRadius: "8px",
                            border: "1px solid rgba(148,163,184,0.15)",
                            transition: "all 0.2s ease",

                            "&:hover": {
                            background: "#334155",
                            transform: "translateY(-2px)",
                            boxShadow: "0 6px 15px rgba(99,102,241,0.25)",
                            },
                        }}
                        />
                    ))}
                    </Box>
                </Box>
                ))}
            </Box>
            
            <Box component="span" className="bracket" sx={{
                background: "var(--Text_COLOR_HIGHLIGHT2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 800,
                fontSize: "40px",
            }}>
                {"}"}
            </Box>
        </Box>
    );
};

export default SkillsPage;