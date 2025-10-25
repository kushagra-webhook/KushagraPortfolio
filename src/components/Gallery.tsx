import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";


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
    thumbnail: "/linkedin4.jpg",
  },
  {
    id: "2",
    url: "https://www.linkedin.com/posts/kushagra-anit-singh_machinelearning-nlp-conversationalai-activity-7346197761161101312-hXC5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zmMoBm5GxIxS_6_OgwkSOgfLZTmlXMHg",
    title: "RAG Chatbot with LLaMA-3 70B",
    description: "Research Paper Published at IEEE ICoICC 2025 - Hybrid Retrieval-Augmented Generation achieving 0.92 BERTScore accuracy",
    thumbnail: "/linkedin3.jpg",
  },
  {
    id: "3",
    url: "https://www.linkedin.com/posts/kushagra-anit-singh_adobehackathon-adobe-hackathon-activity-7372552805162668032-CWqP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zmMoBm5GxIxS_6_OgwkSOgfLZTmlXMHg",
    title: "Adobe Hackathon 2025 Finale",
    description: "AI-Powered PDF Analysis Platform with Google Gemini, Azure Speech Services, and semantic search capabilities",
    thumbnail: "/linkedin2.jpg",
  },
  {
    id: "4",
    url: "https://www.linkedin.com/posts/kushagra-anit-singh_mufg-mitsubishi-hackathonwinner-activity-7376684951288754176-zPee?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zmMoBm5GxIxS_6_OgwkSOgfLZTmlXMHg",
    title: "Mitsubishi Hackathon Winner",
    description: "AI-Powered Superannuation Advisor Dashboard with ML-driven retirement projections and voice-enabled financial guidance",
    thumbnail: "/linkedin1.jpg",
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
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out my latest posts and updates from LinkedIn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...linkedInPosts].sort((a, b) => parseInt(b.id) - parseInt(a.id)).map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 max-w-lg mx-auto w-full"
              aria-label={`View LinkedIn post: ${post.title}`}
            >
              <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors shadow-sm">
                <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>

              <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={post.thumbnail}
                  alt={`LinkedIn post: ${post.title}`}
                  className="w-full h-auto object-contain max-h-[500px]"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
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
