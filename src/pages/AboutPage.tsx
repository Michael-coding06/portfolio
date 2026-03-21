import { Box, Typography, Button, Chip } from "@mui/material";
import {ABOUT_TEXT} from "../data/data.tsx"
import Khoa_Pixel from "../img/Khoa_pixel/Khoa_pixel.png";
import resume from "../data/Tran Viet Khoa's Resume.pdf";
const AboutPage = () => {

    const buttonClick = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Tran Viet Khoa's Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }; 

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
                    about{" "}
                    <Box component="span" className="bracket">{"{"}</Box>
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "space-between",
                    gap: 6,
                    flexDirection: { xs: "column", md: "row" },
                    mb: 6
                }}
            >
                <Box
                    sx={{
                        width: { xs: 200, md: "400px" },
                        height: { xs: 200, md: "400px" },
                        borderRadius: "50%",
                        padding: "3px",
                        background: "var(--Text_COLOR_HIGHLIGHT2)",
                        boxShadow: "0 0 40px rgba(129,140,248,0.25)",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            overflow: "hidden",
                            backgroundColor: "var(--BACKGROUND_BOX)",
                        }}
                    >
                        <Box
                            component="img"
                            src={Khoa_Pixel}
                            alt="Profile photo"
                            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Box>
                </Box>

                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3, maxWidth: "700px" }}>
                    <Typography
                        variant="body1"
                        sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.8, "& strong": { color: "#60a5fa" },}}
                    >
                        {ABOUT_TEXT.map((text, index) => (
                            <span key={index} style={{ display: "block", marginBottom: "1rem" }}>
                                {text}
                            </span>
                        ))}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1 }}>
                        <Button
                            variant="contained"
                            size="large"
                            disableElevation
                            sx={{
                                background: "linear-gradient(to right, #818cf8, #60a5fa)",
                                color: "#1a1a1a",
                                fontWeight: 700,
                                "&:hover": { opacity: 0.9 },
                            }}
                            onClick={() => buttonClick()}
                        >
                            Download my Resume
                        </Button>
                    </Box>
                </Box>
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

export default AboutPage;