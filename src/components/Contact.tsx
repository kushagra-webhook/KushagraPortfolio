import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const titleOptions = [
    'Mr.',
    'Mrs.',
    'Ms.',
    'Miss',
    'Dr.',
    'Prof.',
    'Hon.',
    'Sir',
    'Ma\'am'
  ];
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.title || !formData.name || !formData.email || !formData.message) {
      setNotificationType('error');
      setNotificationMessage('Please fill in all required fields.');
      setShowNotification(true);
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotificationType('error');
      setNotificationMessage('Please enter a valid email address.');
      setShowNotification(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const body = new FormData();
      body.append('title', formData.title);
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('subject', formData.subject);
      body.append('message', formData.message);
      files.forEach((file) => body.append('files', file));

      const baseUrl =
        import.meta.env.VITE_PUBLIC_APP_URL ||
        import.meta.env.VITE_APP_URL ||
        import.meta.env.NEXT_PUBLIC_APP_URL ||
        '';
      const absoluteUrl = baseUrl
        ? `${String(baseUrl).replace(/\/$/, '')}/api/contact`
        : '/api/contact';

      const res = await fetch(absoluteUrl.startsWith('http') ? absoluteUrl : '/api/contact', {
        method: 'POST',
        body,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(data.error || 'Failed to send message');
      }

      setNotificationType('success');
      setNotificationMessage('Message sent successfully! I will get back to you soon.');
      setShowNotification(true);

      // Reset form
      setFormData({ title: '', name: '', email: '', subject: '', message: '' });
      setFiles([]);
    } catch (error: any) {
      setNotificationType('error');
      setNotificationMessage(error.message || 'Something went wrong while sending your message.');
      setShowNotification(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-0.5 sm:px-6">
      <div className="container mx-auto max-w-[99.5vw] sm:max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="text-4xl font-bold text-center mb-4"
            style={{
              background: 'linear-gradient(135deg, hsl(217 91% 55%), hsl(174 72% 45%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="title" className="block text-sm font-medium">
                    Title *
                  </label>
                  <div className="relative">
                    <select
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 pl-3 pr-8 text-sm transition-all duration-200 rounded-md appearance-none bg-background/30 backdrop-blur-sm border border-white/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none cursor-pointer text-foreground"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }}
                    >
                      <option value="" className="bg-background/90 text-foreground" disabled>Select title</option>
                      {titleOptions.map((title) => (
                        <option key={title} value={title} className="bg-background/90 text-foreground">
                          {title}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 md:col-span-5">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-background"
                  />
                </div>
                <div className="space-y-2 md:col-span-5">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <div>
                <label htmlFor="files" className="block text-sm font-medium mb-2">
                  Attachments
                </label>
                <div className="relative">
                  <Input
                    id="files"
                    type="file"
                    onChange={handleFileChange}
                    multiple
                    className="bg-background cursor-pointer h-13 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer file:transition-colors"
                  />
                </div>
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-background rounded-lg"
                      >
                        <span className="text-sm truncate flex-1">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-destructive hover:text-destructive/80 ml-2"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Notification Modal */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
              onClick={() => setShowNotification(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  {notificationType === 'success' ? (
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-red-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">
                    {notificationType === 'success' ? 'Success!' : 'Error'}
                  </h3>
                  <p className="text-muted-foreground mb-6">{notificationMessage}</p>
                  <Button
                    onClick={() => setShowNotification(false)}
                    className="w-full"
                  >
                    Okay
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
