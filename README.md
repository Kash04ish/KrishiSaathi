DEPLOYED LINK: 
🌾 KrishiSaathi – Voice-First AI Farming Companion for Bharat

Whether you’re in a village or a city, getting the right farming advice, crop care support, and govt. scheme updates should be simple, fast, and stress-free.

KrishiSaathi is a multilingual voice assistant that helps farmers understand crop health, fertilizer usage, weather updates, and market prices, while also sending timely irrigation and pest-control reminders – even on low-end phones and slow networks.

✨ Features

Voice-Based Interaction – Farmers talk to the assistant in their preferred language.

Snap & Understand Farm Inputs – Upload images of crops, fertilizers, or pests for instant insights.

Smart Reminders – Cron-based engine alerts farmers about irrigation, fertilization, and spraying schedules.

Bilingual Experience – Fully functional in Hindi and English (transliteration + TTS). (More local languages in next phase).

AI Chat Support – Conversational AI for crop advisory, weather updates, and soil care.

Govt. Scheme Guidance – Farmers get voice-based assistance in understanding subsidies, Yojnas, and loans.

Crop Health & Pest Alerts – AI provides early warnings on pest risks and crop stress.

🛠️ Tech Stack Overview
Layer	Technology / Tool
Frontend	ReactJS + Tailwind CSS + Vite
Backend	Node.js, Express.js, Python
Database	MongoDB
AI Services	OpenAI API (chat + analysis)
STT (Voice)	Vosk + Python WebSocket Server
TTS (Voice)	OpenAI Text-to-Speech API
Scheduler	node-cron for irrigation & spray reminders
Auth	Clerk (frontend user management)
Deployment	Vercel (frontend) + Railway / Localhost (backend)
🚀 Run Locally

For FRONTEND:

Folder Map
frontend/
├── public/             
├── src/
│   ├── assets/          
│   ├── components/     
│   │   └── dashboard/
│   ├── pages/           
│   ├── App.jsx          
│   ├── main.jsx        
├── index.html          
├── tailwind.config.js   
├── vite.config.mjs     
└── package.json  

Prerequisites

Node.js (v18+ recommended)

npm or yarn

Setup Instructions
# Clone the repository
git clone https://github.com/<your-org>/KrishiSaathi.git
cd KrishiSaathi/frontend

# Install dependencies
npm install

# Start the dev server
npm run dev


For BACKEND

Tech stack
Layer	What we used
STT	Vosk models served via Python WebSocket (python/stt_server.py)
Chat	GPT-4o-mini through Express wrapper (chat.js)
TTS	OpenAI TTS endpoint (tts.js)
Data	MongoDB + Mongoose for crops, reminders, schemes
Scheduler	Node-cron job fires irrigation/fertilizer reminders (scheduler/*.js)
Setup Instructions
# clone & install JS deps
git clone https://github.com/<your-org>/KrishiSaathi.git
cd KrishiSaathi && npm install

# Python venv (for STT)
python3 -m venv .venv && source .venv/bin/activate
pip install -r python/requirements.txt

# Copy .env.sample to .env and fill keys

# Run services in two shells
python python/stt_server.py     # STT micro-service
npm start                       # API server on :8080


Default endpoints: /chat, /tts, /api/crop/analyze, /api/reminders, /api/schemes.

📂 Folder map
backend/        Express API
  models/       Mongoose schemas
  routes/       Feature routers
  scheduler/    Cron jobs
python/         Vosk STT service

🌍 Additional Feature (Tested Locally)

We tested Local Events (Agri-Fairs / Mandi Integration) & Website Translate (LibreTranslate).

These are not in main repo as APIs weren’t free. We ran them via Docker for local testing.

Self-host LibreTranslate with Docker
docker pull libretranslate/libretranslate
docker run -p 5000:5000 libretranslate/libretranslate


API runs at: http://localhost:5000

🚜 Nearby Agri-Fairs API (Ticketmaster Integration Demo)

This API fetches nearby Krishi Melas / Agri events based on farmer’s location.

Example Request
GET /events/nearby?lat=28.6139&lon=77.2090&radius=15

💡 Use Cases

Crop disease & pest early detection

Fertilizer & pesticide dosage guidance

Govt. schemes explained in simple terms

Market price updates for crops

Irrigation reminders for water efficiency

Weather-based risk alerts

Farmer community support via voice