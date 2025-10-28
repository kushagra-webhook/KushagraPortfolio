import json
import os
import pickle
import sys
from pathlib import Path

import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

# Get the project root directory
project_root = Path(__file__).resolve().parents[4]
sys.path.append(str(project_root))


# Function to extract content from portfolio data
def extract_portfolio_content():
    portfolio_data = []

    # Load data from portfolio_dataset.json
    try:
        json_file_path = Path(__file__).parent / "portfolio_dataset.json"
        with open(json_file_path, "r", encoding="utf-8") as f:
            qa_data = json.load(f)

        # Extract answers from QA pairs
        for qa_pair in qa_data:
            portfolio_data.append(qa_pair["answer"])
    except Exception as e:
        print(f"Error loading portfolio_dataset.json: {e}")

    # About Kushagra
    portfolio_data.append(
        "Kushagra Singh is a Final Year Computer Science Engineering student at MIT World Peace University, Pune, passionate about building impactful tech solutions at the crossroads of Artificial Intelligence, Machine Learning, Web Application Development, and Embedded Systems. As the Technical Head of the IRIS Tech Club, he leads a team of developers delivering innovative projects. He's interested in the AI/ML and Software Developer domains."
    )

    # Try to load projects data
    try:
        # Read projects from the projects.ts file
        projects_file = project_root / "src" / "data" / "projects.ts"
        with open(projects_file, "r", encoding="utf-8") as f:
            content = f.read()

        # Extract project information using simple parsing
        projects_data = []
        current_project = {}
        in_project = False

        for line in content.split("\n"):
            if (
                "title:" in line
                and "{" in content.split("\n")[content.split("\n").index(line) - 1]
            ):
                in_project = True
                current_project = {"title": line.split("'")[1]}
            elif "category:" in line and in_project:
                current_project["category"] = line.split("'")[1]
            elif "domain:" in line and in_project:
                current_project["domain"] = line.split("'")[1]
            elif "github:" in line and in_project:
                current_project["github"] = line.split("'")[1]
            elif "tags:" in line and in_project:
                tags_text = line[line.find("[") : line.find("]") + 1]
                tags = [
                    tag.strip().strip("'") for tag in tags_text.strip("[]").split(",")
                ]
                current_project["tags"] = tags
            elif "points:" in line and in_project:
                current_project["points"] = []
            elif (
                "'" in line
                and "points:"
                in content.split("\n")[content.split("\n").index(line) - 1]
                and in_project
            ):
                current_project["points"].append(line.strip().strip(",").strip("'"))
            elif "]," in line and "points" in current_project and in_project:
                # End of points array
                projects_data.append(current_project)
                in_project = False

        # Add project information to portfolio data
        for project in projects_data:
            project_text = f"Project: {project.get('title', '')}\n"
            if "category" in project:
                project_text += f"Category: {project.get('category', '')}\n"
            if "domain" in project:
                project_text += f"Domain: {project.get('domain', '')}\n"
            if "tags" in project:
                project_text += f"Technologies: {', '.join(project.get('tags', []))}\n"
            if "github" in project:
                project_text += f"GitHub: {project.get('github', '')}\n"

            project_text += "Description:\n"
            for point in project.get("points", []):
                project_text += f"- {point}\n"
            portfolio_data.append(project_text)
    except Exception as e:
        print(f"Error extracting projects data: {e}")

    # Try to load skills data
    try:
        # Read skills from the skills.ts file
        skills_file = project_root / "src" / "data" / "skills.ts"
        if skills_file.exists():
            with open(skills_file, "r", encoding="utf-8") as f:
                skills_content = f.read()

            # Extract skills information
            skills_text = "Kushagra's Technical Skills:\n"

            # Parse the skills categories and names
            current_category = ""
            import re

            # Find all categories using regex
            categories = re.findall(r"'([^']+)':\s*\[", skills_content)

            for category in categories:
                skills_text += f"\nCategory: {category}\n"

                # Find skills in this category
                pattern = f"'{category}':\\s*\\[(.*?)\\],"
                category_content = re.search(pattern, skills_content, re.DOTALL)

                if category_content:
                    # Extract skill names
                    skill_names = re.findall(
                        r"name:\s*'([^']+)'", category_content.group(1)
                    )
                    if not skill_names:
                        skill_names = re.findall(
                            r'name:\s*"([^"]+)"', category_content.group(1)
                        )

                    for skill in skill_names:
                        skills_text += f"- {skill}\n"

            portfolio_data.append(skills_text)
    except Exception as e:
        print(f"Error extracting skills data: {e}")

    # Add additional portfolio information
    portfolio_data.append(
        "Kushagra Singh is a Final Year Computer Science Engineering student at MIT World Peace University, Pune. He's currently in his final year and is passionate about AI/ML and Software Development domains."
    )

    # Add detailed information about achievements
    portfolio_data.append(
        "Kushagra has earned several notable achievements including: Winner of the Mitsubishi UFJ Financial Group (MUFG) Hackathon 2025, Top 4 Finalist at the Bosch BOROSA Hackathon 2025, Top 100 out of 260,000+ participants at the Adobe Hackathon 2025, Top 25 Finalist at the Smart India Hackathon 2024, Finalist at HackMITWPU'24 Ideathon, and a published researcher in IEEE ICoICC 2025."
    )

    # Add professional experience details
    portfolio_data.append(
        "Kushagra has diverse professional experience as Technical Head at IRIS, MIT WPU (Aug 2024-Present), Machine Learning Research Associate at IIMT University (Jan 2025-Mar 2025), and ML Project Intern at Infosys Springboard (Oct 2024-Dec 2024)."
    )

    # Add leadership experience
    portfolio_data.append(
        "Kushagra has demonstrated strong leadership as the Technical Head of IRIS, MIT WPU's premier technical club, where he leads a team of 20+ developers across multiple technical domains, manages the club's website and technical infrastructure, organizes technical workshops and hackathons, and mentors junior members."
    )

    # Add information about publications
    portfolio_data.append(
        "Kushagra co-authored a research paper titled 'Domain-Specific Conversational AI for IRIS MITWPU: From Research Paper to Production' published in IEEE ICoICC 2025. The paper compares RAG and Fine-Tuned Transformer approaches for domain-specific chatbots."
    )

    # Add information about projects
    portfolio_data.append(
        "Kushagra's notable projects include: Adobe Hackathon Finalist (AI-powered PDF analysis platform), Mitsubishi Hackathon Winner (AI-Powered Superannuation Advisor Dashboard), Government Research Project (STIV-based Velocity Estimation for CWPRS), IRIS Club RAG Chatbot, Bosch Hackathon Finalist (Autonomous Traffic Management System), MedTech Diagnostic LLM Pipeline, and more."
    )

    # Add detailed project information
    portfolio_data.append(
        "DocsVerse is a document research chatbot Kushagra developed that combines OCR with RAG to enable intelligent document analysis and question-answering, processing multiple document formats and providing contextually relevant answers."
    )

    portfolio_data.append(
        "SynapTrack is an innovative project for Parkinson's disease detection using EEG analysis, implementing a hybrid deep learning model combining CNN and LSTM architectures to detect subtle patterns in brain activity, achieving 91% accuracy in early-stage detection."
    )

    portfolio_data.append(
        "The Airfield Wildlife Risk Classification project is a real-time bird detection system using computer vision with YOLOv8 for enhancing aviation safety, with a risk assessment algorithm evaluating factors like bird size, flock density, and flight patterns."
    )

    # Add programming languages information
    portfolio_data.append(
        "Kushagra is proficient in multiple programming languages including Python, JavaScript/TypeScript, Java, C/C++, SQL, and HTML/CSS"
    )

    # Add database expertise
    portfolio_data.append(
        "Kushagra is experienced with various database technologies including relational databases (MySQL, PostgreSQL, SQLite), NoSQL databases (MongoDB), vector databases (FAISS, ChromaDB), time-series databases (InfluxDB), and in-memory databases (Redis)."
    )

    # Add problem-solving approach
    portfolio_data.append(
        "Kushagra approaches problem-solving methodically by analyzing requirements, researching existing solutions, breaking down complex problems, prioritizing tasks, implementing iteratively, testing continuously, documenting the process, and emphasizing scalable solutions."
    )

    # Add learning approach
    portfolio_data.append(
        "Kushagra has a structured approach to learning new technologies by understanding fundamentals, following documentation, building proof-of-concept projects, exploring advanced features, participating in communities, teaching others, and contributing to open-source projects."
    )

    # Add career goals
    portfolio_data.append(
        "Kushagra's career goals include becoming an expert in AI/ML engineering, contributing to cutting-edge research, building products that solve real-world problems, leading technical teams, bridging academic research and industry implementation, and eventually founding a tech startup."
    )

    # Add interests outside technology
    portfolio_data.append(
        "Outside of technology, Kushagra enjoys playing table tennis, reading science fiction, exploring new technologies, mentoring junior students, listening to music, and travelling and exploring new places."
    )

    # Add strengths and areas for improvement
    portfolio_data.append(
        "Kushagra's strengths include technical versatility, strong problem-solving abilities, leadership skills, adaptability to new technologies, and communication skills. He's working to improve balancing perfectionism with pragmatic delivery, delegating tasks more effectively, and enhancing public speaking skills."
    )

    # Add contact information
    portfolio_data.append(
        "You can reach Kushagra through the following channels: Email: kushagraa.n@gmail.com, LinkedIn: https://www.linkedin.com/in/kushagra-anit-singh/, GitHub: https://github.com/kushagra-a-singh, Google Scholar: https://scholar.google.com/citations?user=upUymaUAAAAJ&hl=en, Linktree: https://linktr.ee/kushagra_singh. You can also use the contact form on his portfolio website."
    )

    # Add information about the portfolio website and chatbot development
    portfolio_data.append(
        "Kushagra built this entire portfolio website and chatbot system himself as a personal project to showcase his skills. The portfolio is built with Next.js 14, React, TypeScript, and Tailwind CSS, deployed on Vercel. The chatbot uses a RAG (Retrieval-Augmented Generation) system with Python Flask backend, FAISS vector database, HuggingFace embeddings, and Groq API with LLaMA-3 70B model, deployed on Render."
    )

    # Add detailed chatbot development information
    portfolio_data.append(
        "The chatbot system Kushagra developed includes: Python Flask backend with FAISS vector database for semantic search, HuggingFace all-MiniLM-L6-v2 embeddings for text similarity, Groq API integration with LLaMA-3 70B model for natural language responses, React/TypeScript frontend with real-time chat interface, Supabase integration for conversation logging, and deployment on Render for backend and Vercel for frontend."
    )

    # Add portfolio development details
    portfolio_data.append(
        "Kushagra's portfolio website features: Next.js 14 with React and TypeScript for modern Web Application Development, Tailwind CSS for responsive styling and dark mode support, Framer Motion for smooth animations and transitions, custom components and interactive sections, integrated contact forms and chatbot functionality, optimized performance with Next.js best practices, and automatic deployment through Vercel with GitHub integration."
    )

    # Add deployment and technical details
    portfolio_data.append(
        "The deployment strategy includes: Vercel for frontend hosting with global CDN and SSL certificates, Render for Python Flask backend hosting, FAISS vector database for efficient semantic search, HuggingFace API for text embeddings, Groq API for LLM responses, Supabase for conversation logging and analytics, and comprehensive error handling and health checks."
    )

    # Final guardrail hint content to bias retrieval strictly to portfolio scope
    portfolio_data.append(
        "This knowledge base is strictly about Kushagra Singh and his portfolio. It does not contain general programming help, code debugging, or unrelated information."
    )
    return portfolio_data


# Main execution
if __name__ == "__main__":
    print("Extracting portfolio content...")
    data = extract_portfolio_content()

    print(f"Extracted {len(data)} content items from portfolio")

    # Don't overwrite the original portfolio_dataset.json which contains QA pairs
    # Instead, save the raw text data to a different file for reference
    with open(
        Path(__file__).parent / "extracted_content.json", "w", encoding="utf-8"
    ) as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print("Generating embeddings with SentenceTransformer...")
    model = SentenceTransformer("all-MiniLM-L6-v2")
    embeddings = model.encode(data)

    print(f"Generated embeddings with shape: {embeddings.shape}")

    # Save embeddings
    with open(Path(__file__).parent / "embeddings.pkl", "wb") as f:
        pickle.dump({"data": data, "embeddings": embeddings}, f)

    # Create FAISS index
    dimension = embeddings.shape[1]
    index = faiss.IndexFlatL2(dimension)
    index.add(np.array(embeddings).astype("float32"))

    # Save FAISS index
    faiss.write_index(index, str(Path(__file__).parent / "faiss.index"))

    print("Embeddings and FAISS index saved successfully!")
    print("\nTo use the chatbot:")
    print("1. Make sure you have all required dependencies installed")
    print("2. Run the Flask server with: python chatbot.py")
    print("3. Access the chatbot through your portfolio website")
