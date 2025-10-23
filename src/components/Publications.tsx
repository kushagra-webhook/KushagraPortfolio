import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: 'Domain-Specific Conversational AI for IRIS MITWPU: From Research Paper to Production',
    authors: 'Kushagra Singh, Brandon Cerejo, Samanyu Bhate, Taksh Dhabalia',
    conference: 'IEEE International Conference on Information, Communication and Computing Technology (ICoICC) 2025',
    description: [
      'Developed and compared Retrieval-Augmented Generation (RAG) and Fine-Tuned Transformer approaches for domain-specific chatbot implementation.',
      'Implemented RAG pipeline using LangChain, HuggingFace embeddings, FAISS, and LLaMA-3 70B model via Groq API.',
      'Built fine-tuned DistilBERT model optimized for question-answering tasks with comprehensive evaluation metrics.',
      'Successfully deployed hybrid approach on official IRIS MIT-WPU website, handling real queries with 0.92 BERTScore accuracy.'
    ],
    link: 'https://ieeexplore.ieee.org/document/11052088',
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
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
            Publications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 gradient-card border-l-4 border-l-accent">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-muted-foreground font-mono text-sm mb-1">
                        {pub.authors}
                      </p>
                      <p className="text-primary font-medium text-sm">
                        {pub.conference}
                      </p>
                    </div>
                    
                    <ul className="space-y-2">
                      {pub.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="shadow-md hover:shadow-glow transition-all">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on IEEE Xplore
                      </a>
                    </Button>
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
