import Sanscript from 'sanscript';
import { useState, useRef, useEffect } from "react";
import { FiMic, FiSend, FiAlertCircle } from "react-icons/fi";
import { GiPlantSeed, GiFertilizerBag, GiBugNet, GiFarmTractor, GiPlantWatering } from "react-icons/gi";
import { WiRaindrop } from "react-icons/wi";
import { FaRupeeSign, FaLandmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import.meta.env.VITE_API_URL;

const API_URL = import.meta.env.VITE_API_URL;

const Assistant = () => {
  //for navigation
  const navigate = useNavigate();
  const handleGoToDailyInfo = () => {
    navigate("/dashboard#daily-info"); 
  };

  // Default Message at first
  const [messages, setMessages] = useState([
    { from: "bot", text: "Namaste! KrishiSaathi here. How can I help you manage your farm today?" }
  ]);
  
  //connect to websocket stt_server audio

  const [partial, setPartial] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [inputText, setInputText] = useState("");

  const audioContextRef = useRef(null);
  const micStreamRef = useRef(null);
  const workletNodeRef = useRef(null);
  const sttWsRef = useRef(null);

  useEffect(() => () => stopRecording(), []);

  const [sttLang, setSttLang] = useState('en'); // 'en' or 'hi'
  
  const startRecording = async () => {
    const audioContext = new AudioContext({ sampleRate: 16000 });
    await audioContext.audioWorklet.addModule("/worklets/pcm-processor.js");

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const micSource = audioContext.createMediaStreamSource(stream);
    const worklet = new AudioWorkletNode(audioContext, "pcm-processor");

    // const ws = new WebSocket("ws://localhost:2700");
    // const ws = new WebSocket(`${import.meta.env.VITE_API_URL.replace(/^http/, 'ws')}/ws/stt`);
    const ws = new WebSocket(`${API_URL.replace(/^http/, 'ws')}/ws/stt`);


    // const ws = new WebSocket(
    //   process.env.NODE_ENV === 'production'
    //     ? "wss://<your-node-backend>.onrender.com/ws/stt"
    //     : "ws://localhost:8080/ws/stt"
    // );

    ws.binaryType = "arraybuffer";

    ws.onopen = () => {
      ws.send(JSON.stringify({ lang: sttLang }));

      worklet.port.onmessage = (e) => {
        if (ws.readyState === WebSocket.OPEN) ws.send(e.data);
      };
      micSource.connect(worklet);
      audioContextRef.current = audioContext;
      micStreamRef.current = stream;
      workletNodeRef.current = worklet;
      sttWsRef.current = ws;
      setIsRecording(true);
    };

ws.onmessage = (event) => {
  let jsonString;

  if (event.data instanceof ArrayBuffer) {
    const decoder = new TextDecoder('utf-8');
    jsonString = decoder.decode(event.data);
  } else {
    jsonString = event.data;
  }

  try {
    const { text, final } = JSON.parse(jsonString);

    console.log("STT raw:", text); 

    const isRoman = /^[a-zA-Z\s]+$/.test(text);
    const output = sttLang === 'hi'
      ? (isRoman ? Sanscript.t(text, 'itrans', 'devanagari') : text)
      : text;  

    console.log("STT converted:", output);

    if (!final) {
      setPartial(output);
    } else {
      setPartial('');
      stopRecording();
      sendToChat(output);
    }

  } catch (err) {
    console.error("Failed to parse WebSocket message:", err, jsonString);
  }
};


    // ws.onmessage = (event) => {
    //   const { text, final } = JSON.parse(event.data);

    //   console.log("STT raw:", text); 
     
    //     const isRoman = /^[a-zA-Z\s]+$/.test(text);
    //     const output = sttLang === 'hi'
    //       ? (isRoman ? Sanscript.t(text, 'itrans', 'devanagari') : text)
    //       : text;  

    //   console.log("STT converted:", output); 

    //   if (!final) setPartial(output);
    //   else {
    //     setPartial('');
    //     stopRecording();
    //     sendToChat(output);
    //   }
    // };
  };

  const stopRecording = () => {
    setIsRecording(false);
    setPartial("");
    workletNodeRef.current?.disconnect();
    audioContextRef.current?.close();
    micStreamRef.current?.getTracks()?.forEach(t => t.stop());
    sttWsRef.current?.close();
    audioContextRef.current = null;
    micStreamRef.current = null;
    workletNodeRef.current = null;
    sttWsRef.current = null;
  };

  const sendToChat = async (text) => {
    setMessages(prev => [...prev, { from: "user", text }]);
    setInputText("");
    try {
      const res = await fetch(`${VITE_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      // const { answer } = await res.json();
      const { answer, lang } = await res.json();
      setMessages(prev => [...prev, { from: "bot", text: answer }]);
      // playTTS(answer);
      playTTS(answer, lang); 
    } catch (err) {
      console.error("Chat error:", err.message);
    }
  };

  const playTTS = async (text, lang = "en") => {
    try {
      const res = await fetch(`${API_URL}/tts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ text })
        body: JSON.stringify({ text, lang }) 
      });
      const audioBlob = await res.blob();
      const audioURL = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioURL);
      audio.onended = () => URL.revokeObjectURL(audioURL);
      audio.play();
    } catch (err) {
      console.error("TTS fetch failed:", err);
    }
  };

   const chatRef = useRef(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);


  return (
    <div className="min-h-50 bg-gray-50 text-gray-900 font-sans p-6 flex flex-col md:flex-row gap-6">
      {/* Left Part: Chat Area  */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-4">💬 KrishiSaathi Assistant</h2>
        <div ref={chatRef} className="flex-1 overflow-y-auto space-y-4 pr-2 max-h-[400px]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-[75%] px-4 py-2 rounded-lg ${msg.from === "bot" ? "bg-gray-100" : "bg-blue-100 text-right"}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
          {partial && (
            <div className="text-sm italic text-gray-500">{partial}</div>
          )}
        </div>
        
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => (isRecording ? stopRecording() : startRecording())}
            className={`p-3 rounded-full shadow-md ${isRecording ? "bg-red-500 animate-pulse" : "bg-teal-600"} text-white`}
            title={isRecording ? "Stop Recording" : "Start Voice"}
          >
            <FiMic />
          </button>

          <input
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendToChat(inputText)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-md"
          />
          

          <button
            onClick={() => sendToChat(inputText)}
            className="bg-blue-600 text-white p-3 rounded-full shadow-md"
            title="Send"
          >
            <FiSend />
          </button>

        </div>
        <div className="flex items-center gap-2 mb-4 mt-2">
            <label className="text-sm font-medium"> 🗣️ Choose How Your Saathi Speaks:</label>
            <select
              value={sttLang}
              onChange={e => setSttLang(e.target.value)}
              className="border px-2 py-1 rounded text-sm"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
      </div>

      {/* Right Part: Sidebars */}
      <aside className="w-full md:w-80 space-y-6">
        <div
        onClick={handleGoToDailyInfo}
        className="cursor-pointer bg-white border rounded-xl shadow p-4 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-4">🌱 Daily Farm Timeline</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <GiPlantSeed className="mt-1 text-green-700" />
              <div>
                <p className="font-medium">Crop Sown</p>
                <p className="text-gray-500 text-xs">Wheat seeds planted • 07:30 AM</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <GiFertilizerBag className="mt-1 text-yellow-600" />
              <div>
                <p className="font-medium">Fertilizer Applied</p>
                <p className="text-gray-500 text-xs">Urea (safe dosage) • 10:00 AM</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <WiRaindrop className="mt-1 text-blue-500" />
              <div>
                <p className="font-medium">Irrigation</p>
                <p className="text-gray-500 text-xs">Field watered • 02:15 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <GiBugNet className="mt-1 text-orange-500" />
              <div>
                <p className="font-medium">Next Task</p>
                <p className="text-gray-500 text-xs">Pesticide spray due • 06:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white border rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold mb-3">⚡ Quick Actions</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <button className="border px-3 py-1 rounded hover:bg-gray-100 flex items-center gap-1">
              <GiPlantSeed  /> Ask Agri-Query
            </button>
            <button className="border px-3 py-1 rounded hover:bg-gray-100 flex items-center gap-1">
              <FaLandmark /> Govt. Schemes
            </button>
            <button className="border px-3 py-1 rounded hover:bg-gray-100 flex items-center gap-1">
              <GiFertilizerBag  /> Fertilizer & Pesticides Info 
            </button>
            <button className="border px-2 py-1 rounded hover:bg-gray-100 flex items-center gap-1">
              <FaRupeeSign  />  Market News
            </button>
            
            <button className="border px-2 py-1 rounded hover:bg-gray-100 flex items-center gap-1">
              <GiPlantWatering  /> Talk Crop Wellbeing

            </button>
          </div>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 text-sm text-yellow-800 rounded-md flex items-start gap-2">
          <FiAlertCircle className="mt-0.5" />
          <span>
            <strong>Alert:</strong> Farmer Ram missed his pesticide spray. 
          </span>
        </div>
      </aside>

    </div>
    
  );
};

export default Assistant;
