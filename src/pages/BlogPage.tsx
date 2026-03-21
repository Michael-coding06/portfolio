import { Box, Typography, Button, Chip } from "@mui/material";
import {SKILLS} from "../data/data.tsx"

const BlogPage = () => {
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
                    blog{" "}
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

export default BlogPage;