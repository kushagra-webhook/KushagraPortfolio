import { motion } from 'framer-motion';

interface QuickActionsProps {
  onActionClick: (text: string) => void;
  isVisible?: boolean;
}

export const QuickActions = ({ onActionClick, isVisible = true }: QuickActionsProps) => {
  const quickActions = [
    {
      id: 'help',
      text: 'How can you help me?',
      icon: '🤔',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'projects',
      text: 'Tell me about your projects',
      icon: '💻',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'contact',
      text: 'How can I contact you?',
      icon: '📞',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'about',
      text: 'Tell me about yourself',
      icon: 'ℹ️',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  if (!isVisible) return null;

  return (
    <motion.div
      className="grid grid-cols-2 gap-3 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {quickActions.map((action) => (
        <motion.button
          key={action.id}
          onClick={() => onActionClick(action.text)}
          className={`px-3 py-2 rounded-lg bg-gradient-to-r ${action.color} text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <span className="line-clamp-2 text-center">{action.text}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};
