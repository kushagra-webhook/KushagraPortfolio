import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { projects } from "@/data/projects";

type FilterType = 'all' | 'ai-ml' | 'web-dev' | 'embedded';

export function Projects() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.domain === filter);

  const getDomainColor = (domain: string) => {
    switch(domain) {
      case 'ai-ml': return 'text-ai-ml border-ai-ml/30 bg-ai-ml/5';
      case 'web-dev': return 'text-web-dev border-web-dev/30 bg-web-dev/5';
      case 'embedded': return 'text-embedded border-embedded/30 bg-embedded/5';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-7xl mx-auto">
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
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className="transition-all"
            >
              <Filter className="mr-2 h-4 w-4" />
              All Projects
            </Button>
            <Button
              variant={filter === 'ai-ml' ? 'default' : 'outline'}
              onClick={() => setFilter('ai-ml')}
              className={filter === 'ai-ml' ? '' : 'hover:bg-ai-ml/10 hover:text-ai-ml hover:border-ai-ml'}
            >
              AI/ML
            </Button>
            <Button
              variant={filter === 'web-dev' ? 'default' : 'outline'}
              onClick={() => setFilter('web-dev')}
              className={filter === 'web-dev' ? '' : 'hover:bg-web-dev/10 hover:text-web-dev hover:border-web-dev'}
            >
              Full-Stack
            </Button>
            <Button
              variant={filter === 'embedded' ? 'default' : 'outline'}
              onClick={() => setFilter('embedded')}
              className={filter === 'embedded' ? '' : 'hover:bg-embedded/10 hover:text-embedded hover:border-embedded'}
            >
              Embedded
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 gradient-card group">
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge className={getDomainColor(project.domain)} variant="outline">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-mono">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.points.slice(0, 3).map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 pt-4">
                    {project.link && (
                      <Button size="sm" variant="outline" asChild className="flex-1 hover:shadow-md transition-all">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
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
