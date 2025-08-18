KrishiSaathi - Voice-First AI Farming Companion for Bharat

Bringing AI to every farmer’s pocket - even on low-end phones & slow networks.

Whether you’re in a village or a city, getting the right farming advice, crop care support, and government scheme updates should be simple, fast, and stress-free.

KrishiSaathi is a multilingual voice assistant that helps farmers with crop health, fertilizer usage, weather updates, market prices, and government schemes, while also sending timely irrigation and pest-control reminders.

Features

Voice-Based Interaction - Farmers can speak in their preferred language (Hindi & English supported).

Snap & Understand Farm Inputs - Upload images of crops, fertilizers, or pests for instant AI insights.

Smart Reminders - Cron-based engine alerts farmers about irrigation, fertilization, and spraying schedules.

Bilingual Experience - Works in Hindi & English (transliteration + TTS). More regional languages coming soon.

AI Chat Support - Conversational AI for crop advisory, weather updates, and soil care.

Govt. Scheme Guidance - Voice-based help for subsidies, Yojnas, and agri-loans.

Crop Health & Pest Alerts - AI gives early warnings on pest risks and crop stress.

Tech Stack
Layer	Technology / Tool
Frontend	ReactJS, Tailwind CSS, Vite
Backend	Node.js, Express.js, Python
Database	MongoDB + Mongoose
AI Services	OpenAI API (Chat + Analysis)
Speech-to-Text	Vosk + Python WebSocket Server
Text-to-Speech	OpenAI TTS API
Scheduler	node-cron (for reminders)
Auth	Clerk (user management)
Deployment	Vercel (Frontend), Railway/Localhost (Backend)
Getting Started

Frontend Setup

'''bash
# Clone repository
git clone https://github.com/<your-org>/KrishiSaathi.git
cd KrishiSaathi/frontend

# Install dependencies
npm install

# Start development server
npm run dev
'''

Frontend Structure

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

Backend Setup

'''bash
# Clone repository & install deps
git clone https://github.com/<your-org>/KrishiSaathi.git
cd KrishiSaathi
npm install

# Python virtual env (for STT)
python3 -m venv .venv && source .venv/bin/activate
pip install -r python/requirements.txt

# Setup environment
cp .env.sample .env   # add keys & configs

# Run services
# 1. Start STT micro-service
python python/stt_server.py

# 2. Start Express API
npm start   # runs on :8080
'''

Backend Structure

backend/
├── models/        # Mongoose schemas
├── routes/        # API routes
├── scheduler/     # Cron jobs
├── python/        # Vosk STT service
└── server.js      # Main Express API


API Endpoints

/chat → AI farming Q&A

/tts → Text-to-speech service

/api/crop/analyze → Crop/pest image analysis

/api/reminders → Irrigation/fertilizer reminders

/api/schemes → Government schemes

Additional (Experimental Features)

We tested the following locally with Docker (not in main repo due to free API limits):

Website Translate - LibreTranslate API for multi-language support.

docker pull libretranslate/libretranslate
docker run -p 5000:5000 libretranslate/libretranslate
# API at http://localhost:5000


Nearby Agri-Fairs API - Fetches Krishi Melas / Agri events near farmer’s location.

GET /events/nearby?lat=28.6139&lon=77.2090&radius=15

Use Cases

Early detection of crop disease & pests

Irrigation reminders for water efficiency

Fertilizer & pesticide dosage guidance

Market price updates for crops

Simplified explanation of govt. schemes

Weather-based risk alerts

Farmer community support via voice

Roadmap

Add more Indian regional languages

Offline mode (SMS/IVR fallback for voice)

Integration with agri-market APIs for live mandi prices

AI-powered soil & fertilizer optimization

Contributing

We welcome contributions! Please fork this repo, create a branch, and submit a pull request.

License

This project is licensed under the MIT License.