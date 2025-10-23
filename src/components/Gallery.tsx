import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import post1 from "@/assets/linkedin-post-1.jpg";
import post2 from "@/assets/linkedin-post-2.jpg";
import post3 from "@/assets/linkedin-post-3.jpg";
import post4 from "@/assets/linkedin-post-4.jpg";

interface LinkedInPost {
  id: string;
  url: string;
  title: string;
  description: string;
  thumbnail: string;
}

const linkedInPosts: LinkedInPost[] = [
  {
    id: "1",
    url: "https://www.linkedin.com/posts/kushagra-anit-singh_hackathon-bosch-borosa2025-activity-7318136852983508992-7Knc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zmMoBm5GxIxS_6_OgwkSOgfLZTmlXMHg",
    title: "Bosch BOROSA 2025 Hackathon Finalist",
    description: "Autonomous Traffic Management System with YOLOv8 and ESP32 - Real-time AI-driven traffic solutions for smart cities",
    thumbnail: post1,
  },
  {
    id: "2",
    url: "https://www.linkedin.com/posts/kushagra-anit-singh_machinelearning-nlp-conversationalai-activity-7346197761161101312-hXC5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zmMoBm5GxIxS_6_OgwkSOgfLZTmlXMHg",
    title: "RAG Chatbot with LLaMA-3 70B",
    description: "Research Paper Published at IEEE ICoICC 2025 - Hybrid Retrieval-Augmented Generation achieving 0.92 BERTScore accuracy",
    thumbnail: post2,
  },
  {
    id: "3",
    url: "https://www.linkedin.com/posts/kushagra-anit-singh_adobehackathon-adobe-hackathon-activity-7372552805162668032-CWqP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zmMoBm5GxIxS_6_OgwkSOgfLZTmlXMHg",
    title: "Adobe Hackathon 2025 Finale",
    description: "AI-Powered PDF Analysis Platform with Google Gemini, Azure Speech Services, and semantic search capabilities",
    thumbnail: post3,
  },
  {
    id: "4",
    url: "https://www.linkedin.com/posts/kushagra-anit-singh_mufg-mitsubishi-hackathonwinner-activity-7376684951288754176-zPee?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zmMoBm5GxIxS_6_OgwkSOgfLZTmlXMHg",
    title: "Mitsubishi Hackathon Winner",
    description: "AI-Powered Superannuation Advisor Dashboard with ML-driven retirement projections and voice-enabled financial guidance",
    thumbnail: post4,
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, hsl(217 91% 55%), hsl(174 72% 45%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            LinkedIn Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out my latest posts and updates from LinkedIn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {linkedInPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-2xl gradient-card border border-border shadow-elegant hover:shadow-glow transition-all duration-300"
              aria-label={`View LinkedIn post: ${post.title}`}
            >
              <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={post.thumbnail}
                  alt={`LinkedIn post screenshot: ${post.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-heading font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>View on LinkedIn</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/kushagra-anit-singh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all duration-300 hover:scale-105"
          >
            View All Posts on LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
