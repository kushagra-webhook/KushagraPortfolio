interface Skill {
  name: string;
  logo: string;
}

interface SkillCategories {
  [key: string]: Skill[];
}

export const skills: SkillCategories = {
  'Languages': [
    { name: 'Python', logo: '/images/python.png' },
    { name: 'C', logo: '/images/C.png' },
    { name: 'C++', logo: '/images/C++.png' },
    { name: 'Java', logo: '/images/java.jpg' },
    { name: 'JavaScript', logo: '/images/js.png' }
  ],
  'Databases': [
    { name: 'MySQL', logo: '/images/mysql.png' },
    { name: 'MongoDB', logo: '/images/mongodb.svg' },
    { name: 'PostgreSQL', logo: '/images/prostgresql.png' },
    { name: 'MongoDB Atlas', logo: '/images/mongodb.svg' }
  ],
  'Cloud & DevOps': [
    { name: 'AWS', logo: '/images/aws.png' },
    { name: 'Kubernetes', logo: '/images/k8.jpeg' },
    { name: 'Docker', logo: '/images/docker.svg' },
    { name: 'CI/CD Pipelines', logo: '/images/cicd.jpg' },
    { name: 'Minikube', logo: '/images/minikube.png' }
  ],
  'AI/ML Libraries': [
    { name: 'PyTorch', logo: '/images/pytorch.jpeg' },
    { name: 'OpenCV', logo: '/images/opencv.png' },
    { name: 'Pandas', logo: '/images/pandas.png' },
    { name: 'NumPy', logo: '/images/numpy.png' },
    { name: 'TensorFlow', logo: '/images/tensorflow.png' },
    { name: 'Scikit-Learn', logo: '/images/scikit.png' },
    { name: 'Tkinter', logo: '/images/tkinter.png' },
    { name: 'StreamLit', logo: '/images/stramlit.png' },
    { name: 'PyQt5', logo: '/images/pyqt5.jpg' },
    { name: 'NLTK', logo: '/images/nltk.png' },
    { name: 'spaCy', logo: '/images/spacy.webp' },
    { name: 'LangChain', logo: '/images/langchain.webp' },
    { name: 'HuggingFace', logo: '/images/huggingface.png' }
  ],
  'Big Data Technologies': [
    { name: 'Cloudera', logo: '/images/cloudera.webp' },
    { name: 'HDFS', logo: '/images/hdfs.png' },
    { name: 'Apache Pig', logo: '/images/pig.png' },
    { name: 'Hive', logo: '/images/hive.png' },
    { name: 'HBase', logo: '/images/hbase.png' },
    { name: 'Apache Spark', logo: '/images/spark.png' },
    { name: 'Kafka', logo: '/images/kafka.jpg' }
  ],
  'Web Development': [
    { name: 'Next.js', logo: '/images/next.png' },
    { name: 'React', logo: '/images/reacg.png' },
    { name: 'Node.js', logo: '/images/node.jpeg' },
    { name: 'Express.js', logo: '/images/express.png' },
    { name: 'Spring Boot', logo: '/images/springboot.jpeg' },
    { name: 'FastAPI', logo: '/images/fastapi.png' },
    { name: 'HTML', logo: '/images/html.png' },
    { name: 'CSS', logo: '/images/css.png' },
    { name: 'Bootstrap', logo: '/images/bootstrap.png' },
    { name: 'WebSockets', logo: '/images/websockets.png' }
  ],
  'Visualization Tools': [
    { name: 'Tableau', logo: '/images/tableau.png' },
    { name: 'Matplotlib', logo: '/images/matplotlib.png' },
    { name: 'Seaborn', logo: '/images/seaborn.png' }
  ],
  'Software & Tools': [
    { name: 'AutoCAD', logo: '/images/autocad.png' },
    { name: 'TinkerCAD', logo: '/images/Tinkercad.png' },
    { name: 'Jupyter', logo: '/images/jupyter.png' },
    { name: 'Linux', logo: '/images/linux.png' },
    { name: 'Selenium', logo: '/images/selenium.jpg' }
  ],
  'Electronics': [
    { name: 'Arduino', logo: '/images/arduino.png' },
    { name: 'Raspberry Pi', logo: '/images/raspberry.jpg' },
    { name: 'STM32', logo: '/images/stm.png' },
    { name: 'ESP32', logo: '/images/esp.png' },
    { name: 'Ultrasonic Sensors', logo: '/images/ultrasonic.webp' }
  ],
  'Generative AI': [
    { name: 'LLaMA-3', logo: '/images/llama3.jpg' },
    { name: 'Retrieval-Augmented Generation', logo: '/images/rag.jpg' }
  ]
};
