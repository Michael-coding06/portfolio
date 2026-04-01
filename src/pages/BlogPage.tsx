import { Box, Typography, Chip, Modal, IconButton } from "@mui/material";
import { useState } from "react";
import GMDH from "../img/blog/vnya/GMDH.png"
import CAREER_FAIR from "../img/blog/vnya/career_fair.JPG"
import vnya from "../img/blog/vnya/vnya.jpg"

type Post = (typeof BLOG_POSTS)[0];

const BLOG_POSTS = [
  {
    id: 1,
    date: "October 2025",
    title: "Reflecting on My Time with VNYA: My First Experience Leading Events",
    excerpt:
      "I gained my first experience managing large teams across program, publicity, logistics, and external relations, while resolving issues in real time and developing structured, effective planning skills",
    image: vnya,
    image2: GMDH,
    image3: CAREER_FAIR,
    content: `Joining VNYA was my first opportunity to work in a large, cross-functional team beyond academics. What started as a way to contribute quickly became one of the most defining experiences in my journey, especially when I was given the responsibility to lead key events.

**Stepping into leadership for the first time**

Leading “Singapore Study Dream 2024” was a turning point for me. The event brought together over 150 attendees, with partnerships across 8 top universities, and successfully connected 50 mentees with 40 mentors. For the first time, I had to coordinate across multiple teams, program, publicity, logistics, and external relations, ensuring everyone stayed aligned towards a shared goal.

There were constant challenges: tight timelines, last-minute changes, and the need to make quick decisions. I learned how to manage people with different working styles, communicate clearly under pressure, and keep the team moving forward even when things didn’t go as planned.

[IMAGE_1]

**From planning to execution**

Building on that experience, I later supported the Career Fair 2025, where I coordinated logistics for over 100 Vietnamese students in Singapore. This time, I approached things differently, with more structure, clearer timelines, and better anticipation of risks.

Alongside event planning, I also contributed as a web developer by building landing pages for major events. These pages helped streamline participant registration and improved engagement, allowing our team to manage events more efficiently.

[IMAGE_2]

**What I took away**

Through VNYA, I didn’t just learn how to organize events, I learned how to lead, adapt, and take ownership. Managing large teams, solving problems in real time, and turning ideas into impactful experiences pushed me far beyond my comfort zone.

Looking back, this experience shaped how I approach teamwork and leadership today, and gave me the confidence to take on even bigger challenges in the future.`,
  },
];

const FullPostModal = ({ post, onClose }: { post: Post; onClose: () => void }) => {
  return (
    <Modal open onClose={onClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      <Box
        sx={{
          background: "#0d1117",
          border: "1px solid rgba(91, 109, 209, 0.35)",
          borderRadius: "14px",
          width: "100%",
          maxWidth: 680,
          maxHeight: "88vh",
          display: "flex",          // ADD
          flexDirection: "column",  // ADD
          outline: "none",
          // REMOVE overflowY: "auto" from here
        }}
      >
        {/* Hero image */}
        <Box sx={{ position: "relative", 
                width: "100%", 
                height: 220, 
                overflow: "hidden", 
                borderRadius: "14px 14px 0 0" ,
                flexShrink: 0
        }}>
          <Box
            component="img"
            src={post.image}
            alt={post.title}
            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <Box sx={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, #0d1117 100%)",
          }} />
          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              position: "absolute", top: 12, right: 12,
              background: "rgba(13,17,30,0.75)", backdropFilter: "blur(4px)",
              border: "1px solid rgba(74,125,212,0.3)", color: "#8899cc",
              width: 30, height: 30, fontSize: "13px",
              "&:hover": { background: "rgba(30,40,80,0.9)", color: "#aabbee" },
            }}
          >
            ✕
          </IconButton>
        </Box>

        {/* Post body */}
        <Box sx={{ 
            px: { xs: 3, sm: 4 }, 
            pb: 5, pt: 2.5,
            overflowY: "auto",   
            "&::-webkit-scrollbar": { width: "4px" },
            "&::-webkit-scrollbar-track": { background: "transparent" },
            "&::-webkit-scrollbar-thumb": { background: "rgba(91,109,209,0.3)", borderRadius: "2px" },
        }}>
          <Typography sx={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
            color: "rgba(100,130,170,0.7)", mb: 1.5, letterSpacing: "0.3px",
          }}>
            {post.date}
          </Typography>

          <Typography sx={{
            fontWeight: 700, fontSize: { xs: "20px", sm: "24px" },
            color: "var(--TEXT_COLOR)", lineHeight: 1.35, mb: 3,
          }}>
            {post.title}
          </Typography>

          <Box sx={{ borderLeft: "2px solid rgba(74,125,212,0.4)", pl: 2, mb: 3.5 }}>
            <Typography sx={{
              fontSize: "14px", color: "rgba(160,180,215,0.85)",
              fontStyle: "italic", lineHeight: 1.7,
            }}>
              {post.excerpt}
            </Typography>
          </Box>

            {post.content.split(/\n\s*\n/).map((block, i) => {
            const trimmed = block.trim();

            if (trimmed.includes("[IMAGE_1]")) {
                return (
                <Box key={i} sx={{ my: 3 }}>
                    <Box
                    component="img"
                    src={post.image2}
                    alt="Event"
                    sx={{
                        width: "100%",
                        borderRadius: "10px",
                        border: "1px solid rgba(91,109,209,0.2)",
                    }}
                    />
                </Box>
                );
            }

            if (trimmed.includes("[IMAGE_2]")) {
                return (
                <Box key={i} sx={{ my: 3 }}>
                    <Box
                    component="img"
                    src={post.image3}
                    alt="Event"
                    sx={{
                        width: "100%",
                        borderRadius: "10px",
                        border: "1px solid rgba(91,109,209,0.2)",
                    }}
                    />
                </Box>
                );
            }

            const isBoldHeading = /^\*\*(.*?)\*\*$/.test(trimmed);

            if (isBoldHeading) {
                return (
                <Typography
                    key={i}
                    sx={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "var(--TEXT_COLOR)",
                    mt: 3.5,
                    mb: 1,
                    }}
                >
                    {trimmed.replace(/^\*\*|\*\*$/g, "")}
                </Typography>
                );
            }

            return (
                <Typography
                key={i}
                sx={{
                    fontSize: "14px",
                    color: "rgba(140,165,205,0.9)",
                    lineHeight: 1.9,
                    mb: 1.5,
                }}
                >
                {trimmed}
                </Typography>
            );
            })}
        </Box>

        <Box sx= {{minHeight: 10}}>
        </Box>
      </Box>
    </Modal>
  );
};

const BlogPostCard = ({ post, onClick }: { post: Post; onClick: () => void }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(91, 109, 209, 0.2)",
        background: "rgba(17, 24, 39, 0.6)",
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "pointer",
        "&:hover": {
          borderColor: "rgba(91, 109, 209, 0.55)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: 120, sm: 200 },
          minWidth: { xs: 120, sm: 200 },
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </Box>

      {/* Right: Content */}
      <Box sx={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        gap: 1, py: { xs: 2, sm: 2.5 }, px: { xs: 2, sm: 3 }, flex: 1, minWidth: 0,
      }}>
        <Typography sx={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
          color: "rgba(100,130,170,0.7)", letterSpacing: "0.3px",
        }}>
          {post.date}
        </Typography>

        <Typography sx={{
          fontWeight: 600, fontSize: { xs: "13px", sm: "15px" },
          color: "var(--TEXT_COLOR)", lineHeight: 1.4,
        }}>
          {post.title}
        </Typography>

        <Typography sx={{
          fontSize: { xs: "11px", sm: "12.5px" },
          color: "rgba(140,160,195,0.75)", lineHeight: 1.65,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {post.excerpt}
        </Typography>
      </Box>
    </Box>
  );
};

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

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
          <Box component="span" className="bracket">{"{"}
          </Box>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, ml: { xs: 1, sm: 4 }, mb: 4 }}>
        {BLOG_POSTS.map((post) => (
          <BlogPostCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
        ))}
      </Box>

      <Box
        component="span"
        className="bracket"
        sx={{
          background: "var(--Text_COLOR_HIGHLIGHT2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: 800,
          fontSize: "40px",
        }}
      >
        {"}"}
      </Box>

      {selectedPost && (
        <FullPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </Box>
  );
};

export default BlogPage;