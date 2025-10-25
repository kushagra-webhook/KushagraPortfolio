import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: 'IRIS, MIT WPU',
    role: 'Technical Head',
    location: 'Pune',
    date: 'Aug 2024 – Present',
    logo: '/images/iris.png',
    description: [
      'Spearheaded the development of the official I.R.I.S. club website, taking the lead in designing, coding, and deploying it for live hackathon event registrations for 200+ people.',
      'Currently leading and managing the tech team to oversee website updates, changes, & new feature implementations.',
      'Led the website\'s successful deployment during live events, ensuring smooth operation and scalability for real-time registrations and payments.',
      'Developing an autonomous vehicle module for non-ADAS cars using YOLOv8 deep learning models and sensor-based simulations.',
    ],
  },
  {
    company: 'IIMT University',
    role: 'Machine Learning Research Associate',
    location: 'Remote',
    date: 'Jan 2025 – Mar 2025',
    logo: '/images/iimt.jpeg',
    description: [
      'Led an AI-driven machine learning research project for Cardiovascular Disease risk prediction, contributing to a PhD study in healthcare analytics.',
      'Developed a predictive pipeline utilizing ensemble ML models for multi-disease risk assessment.',
      'Built and deployed an interactive Streamlit-based web application with SHAP value visualizations and model performance comparisons.',
      'Implemented a multi-output Random Forest model to predict multiple disease types simultaneously.',
    ],
  },
  {
    company: 'Infosys Springboard',
    role: 'ML Project Intern',
    location: 'Remote',
    date: 'Oct 2024 – Dec 2024',
    logo: '/images/info.png',
    description: [
      'Designed and implemented a handwritten digit recognition application using neural networks (MLP, CNN, LeNet5) for MNIST dataset classification.',
      'Developed custom PyTorch models with dropout, activation functions, and convolutional layers for efficient feature extraction.',
      'Built an interactive web application using Streamlit to predict digits from uploaded images. Achieved 90.04%, 98.93% & 98.95% accuracies respectively.',
      'Created a digit visualization tool to save and display images from the MNIST dataset using Matplotlib.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-0.5 sm:px-4">
      <div className="container max-w-[99.5vw] sm:max-w-6xl mx-auto">
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 gradient-card border-l-4 border-l-primary">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full overflow-hidden border-2 border-border/20 shadow-sm bg-white p-0 flex items-center justify-center ${exp.company.includes('IRIS') ? 'bg-black' : ''}`}>
                      <div className={`${exp.company.includes('IRIS') ? 'w-16 h-16 scale-110' : 'w-15 h-15'} rounded-full overflow-hidden`}>
                        <img 
                          src={exp.logo} 
                          alt="" 
                          className={`w-full h-full ${exp.company.includes('IRIS') ? 'scale-110' : 'object-cover'}`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = document.createElement('span');
                            fallback.className = 'w-full h-full flex items-center justify-center text-2xl bg-accent/10';
                            fallback.textContent = '💼';
                            target.parentNode?.insertBefore(fallback, target);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-heading font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
