import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Briefcase, Award } from "lucide-react";

const roles = [
  {
    role: 'IRIS [Student Club, MIT-WPU] – Technical Head',
    date: 'Aug 2024 – Present',
  },
  {
    role: 'IIMT University [Remote] – ML Research Associate',
    date: 'Jan 2025 – Mar 2025',
  },
  {
    role: 'Infosys Springboard [Remote] – ML Intern',
    date: 'Oct 2024 – Dec 2024',
  }
];

const achievements = [
  {
    title: 'Mitsubishi UFJ Financial Group (MUFG) Hackathon 2025',
    status: 'Winner',
    description: 'Led development of an AI-powered financial assistant for personalized retirement planning using XGBoost, KMeans, and Google Gemini. Enabled voice-first interaction via Azure Speech Services and real-time insights with NewsAPI + Gemini. Deployed with Docker on AWS App Runner and frontend on Vercel.',
    icon: '🏆'
  },
  {
    title: 'Adobe India Hackathon 2025',
    status: 'Top 100 out of 2.6L+ participants',
    description: 'Built a containerized AI pipeline for PDF understanding, including multilingual outline extraction (PyMuPDF, K-Means), persona-driven content ranking (Ollama), and a semantic insight platform with PDF.js integration and Azure TTS-based multi-voice podcasting.',
    icon: '🎯'
  },
  {
    title: 'Bosch BOROSA Hackathon 2025',
    status: 'Top 18 Finalist',
    description: 'Built an intelligent traffic safety system using YOLOv8 for real-time signal & crosswalk detection (95–98% accuracy). Integrated ESP32S3 and MQTT for edge automation and GenAI-based decision logic.',
    icon: '🚗'
  },
  {
    title: 'Smart India Hackathon (SIH) 2024',
    status: 'Top 25 Finalist',
    description: 'Developed PlantWise, an LLM-powered Ayurvedic health companion for disease prediction and natural remedies.',
    icon: '🌿'
  },
  {
    title: 'HackMITWPU\'24 Ideathon',
    status: 'Finalist',
    description: 'Proposed DermDetect, an AI-powered tool for preliminary dermatological diagnosis using image processing for remote consultations and personalized skincare solutions.',
    icon: '🩺'
  }
];

export function RolesAchievements() {
  return (
    <>
      {/* Roles Section */}
      <section id="roles" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, hsl(217 91% 55%), hsl(174 72% 45%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Professional Roles
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 gradient-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Positions</h3>
              </div>
              <div className="space-y-4">
                {roles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <p className="text-foreground font-medium mb-1">{role.role}</p>
                    <p className="text-sm text-muted-foreground font-mono">{role.date}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, hsl(217 91% 55%), hsl(174 72% 45%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 gradient-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Highlights</h3>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{achievement.icon}</span>
                      <div>
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="font-semibold text-foreground">{achievement.title}</span>
                          <span className="text-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {achievement.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
