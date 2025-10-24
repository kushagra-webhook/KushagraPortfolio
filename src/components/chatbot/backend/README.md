# Portfolio Chatbot Backend

This folder contains the backend for the RAG-style chatbot integrated into Kushagra's portfolio website.

## Setup Instructions

1. **Install Dependencies**:
   ```
   pip install -r requirements.txt
   ```

2. **Generate Embeddings**:
   Run the script to generate embeddings from your portfolio content:
   ```
   python precompute_embeddings.py
   ```
   This will create:
   - `embeddings.pkl`: Contains the text data and embeddings
   - `faiss.index`: The FAISS index for similarity search

3. **Run the Flask Server**:
   ```
   python chatbot.py
   ```

## API Endpoints

- `POST /api/chat`: Send a message to the chatbot
  ```json
  {
    "message": "Tell me about Kushagra's projects",
    "user_id": "optional-user-id-from-auth"
  }
  ```

- `GET /api/health`: Health check endpoint

## Frontend Integration

The frontend components in `src/components/chatbot` are already configured to connect to this Flask backend running on port 5800.

## Environment Variables

Ensure these variables are set in your `.env.local` file:
```
FLASK_APP=src/components/chatbot/backend/chatbot.py
FLASK_ENV=production
CHATBOT_PORT=5800
GROQ_API_KEY=your-groq-api-key
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
HF_API_TOKEN=your-huggingface-token
HF_API_URL=https://router.huggingface.co/hf-inference/models/sentence-transformers/all-MiniLM-L6-v2/pipeline/feature-extraction
```