import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Notification } from "@/components/ui/notification";
import { copyToClipboard } from "@/utils/clipboard";

const taglines = [
  "Crafting Intelligent Systems with Scalable AI Solutions.",
  "Bridging AI Research and Full-Stack Engineering.",
  "Building Purpose-Driven Software for Real-World Impact.",
  "Empowering AI-Driven Healthcare & Financial Insights.",
  "Engineering Next-Gen AI Systems with Cutting-Edge Research.",
  "Deploying Scalable ML Models for Real-Time Decision Making.",
  "Transforming Data into Actionable Intelligence.",
  "Designing Robust AI Pipelines & Cloud-Native Solutions.",
  "Leading Innovation at the Intersection of AI and Software.",
  "Integrating Generative AI with User-Centric Applications.",
  "Building Secure, Agile Platforms for Intelligent Automation.",
  "Pioneering Conversational AI for Enhanced User Experience.",
  "From Data Science to Deployment — End-to-End AI Engineering.",
  "Orchestrating Cloud-Native AI Solutions with Kubernetes & Docker.",
  "Automating Scalable ML Deployments via CI/CD Pipelines.",
  "Building Resilient Microservices for Intelligent Applications.",
  "Enabling Real-Time AI Inference on Cloud Platforms.",
  "Designing Secure, Containerized Systems for Modern AI Workloads.",
  "Driving Agile Teams to Deliver Cutting-Edge AI Innovations.",
  "Leading End-to-End Development of Scalable AI Products.",
  "Fostering Collaboration to Build Future-Ready Tech Solutions.",
  "Championing Excellence in Software & Machine Learning Engineering.",
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-36 pb-20 gradient-hero">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative inline-block"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-glow animate-float">
              <img 
                src="/images/Kushagra2.jpg" 
                alt="Kushagra Singh" 
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = '';
                  target.alt = 'KS';
                  target.className = 'w-full h-full rounded-full bg-card flex items-center justify-center text-6xl font-heading font-bold text-primary';
                  target.textContent = 'KS';
                }}
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-heading font-bold"
              style={{
                background: 'linear-gradient(135deg, hsl(217 91% 55%), hsl(174 72% 45%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kushagra Singh
            </motion.h1>
            
            <motion.div
              key={taglineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground font-mono h-8"
            >
              {taglines[taglineIndex]}
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-primary/10 shadow-2xl">
              <div className="space-y-3 text-left text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  I'm a <span className="text-foreground">Final Year Computer Science Engineering student at MIT World Peace University, Pune</span>, passionate about building impactful tech solutions at the crossroads of <span className="text-foreground">Artificial Intelligence, Machine Learning, Web Development, and Embedded Systems</span>.
                </p>
                
                <p>
                  As the <span className="text-foreground">Technical Head of the IRIS Tech Club</span>, I lead a team of developers delivering innovative projects, including the club's official website and autonomous vehicle modules. Recently, we launched a domain-specific conversational AI chatbot, based on research I co-authored and presented at the <span className="text-foreground">IEEE International Conference on Information, Communication and Computing Technology (ICoICC) 2025</span>.
                </p>
                
                <p>
                  I've gained hands-on experience as a <span className="text-foreground">Machine Learning Research Associate at IIMT University</span>, contributing to advanced healthcare analytics through PhD-level research using sophisticated ML models and interactive web apps. My internship at <span className="text-foreground">Infosys Springboard</span> strengthened my skills in deep learning and computer vision, where I built high-accuracy neural networks.
                </p>
                
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-6" />
                
                <p>
                  I thrive in fast-paced, collaborative environments, proven by my achievements across several hackathons:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3 py-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-lg">▸</span>
                    <span><span className="text-foreground font-semibold">Winner</span> of the Mitsubishi UFJ Financial Group (MUFG) Hackathon 2025</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-lg">▸</span>
                    <span><span className="text-foreground font-semibold">Top 18 Finalist</span> at the Bosch BOROSA Hackathon 2025</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-lg">▸</span>
                    <span><span className="text-foreground font-semibold">Top 100</span> out of 2,60,000+ participants at the Adobe Hackathon 2025</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-lg">▸</span>
                    <span><span className="text-foreground font-semibold">Top 25 Finalist</span> at the Smart India Hackathon 2024</span>
                  </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-6" />
                
                <p>
                  My technical toolkit includes <span className="text-foreground">Python, C++, PyTorch, TensorFlow, Next.js, Spring Boot, AWS, Docker, LangChain, HuggingFace, FAISS</span>, and more.
                </p>
                
                <p>
                  Driven by curiosity and a commitment to <span className="text-foreground">real-world impact</span>, I enjoy tackling complex challenges, whether it's developing <span className="text-foreground">autonomous driving systems, AI-powered healthcare tools, or scalable cloud-native applications</span>. I'm always excited to connect, collaborate and create solutions that make a difference.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button asChild className="shadow-md hover:shadow-lg transition-all bg-[#333] hover:bg-[#24292e] text-white border-0">
              <a href="https://github.com/kushagra-a-singh" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild className="shadow-md hover:shadow-lg transition-all bg-[#0077b5] hover:bg-[#006399] text-white border-0">
              <a href="https://www.linkedin.com/in/kushagra-anit-singh/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button 
              asChild
              className="shadow-md hover:shadow-lg transition-all bg-[#ea4335] hover:bg-[#d33426] text-white border-0 group"
            >
              <a 
                href="mailto:kushagraa.n@gmail.com"
                onClick={async (e) => {
                  e.preventDefault();
                  const success = await copyToClipboard('kushagraa.n@gmail.com');
                  if (success) {
                    setShowNotification(true);
                    // Commenting out external handler for now
                    // setTimeout(() => {
                    //   window.location.href = 'mailto:kushagraa.n@gmail.com';
                    // }, 100);
                  }
                }}
                title="mailto:kushagraa.n@gmail.com"
                className="flex items-center"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            {showNotification && (
              <Notification 
                message="Email copied to clipboard!" 
                onClose={() => setShowNotification(false)} 
              />
            )}
            <Button asChild className="shadow-md hover:shadow-lg transition-all bg-[#4285f4] hover:bg-[#3367d6] text-white border-0">
              <a href="https://scholar.google.com/citations?user=upUymaUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="mr-2 h-4 w-4" />
                Scholar
              </a>
            </Button>
            <Button asChild className="shadow-md hover:shadow-lg transition-all bg-[#43e55e] hover:bg-[#38c24d] text-[#1e1e1e] border-0 font-semibold">
              <a href="https://linktr.ee/kushagra_singh" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Linktree
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-8 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ 
                y: [0, 8, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center gap-1"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                <motion.path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary -mt-3">
                <motion.path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
