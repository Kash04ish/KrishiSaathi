import { useState } from "react";

const AIHealthUpdate = () => {
  const [openSection, setOpenSection] = useState(["farm", "weather"]);
  const [dateFilter, setDateFilter] = useState("today");
  const [typeFilter, setTypeFilter] = useState("all");

  const toggleSection = (section) => {
    setOpenSection((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const Section = ({ id, title, children }) => (
    <div className="bg-white border rounded-md shadow-sm last:mb-0 mb-4 overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        aria-expanded={openSection.includes(id)}
        className="w-full flex justify-between items-center text-left px-5 py-3 bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <span className="font-semibold text-gray-800 text-base">{title}</span>
        <span className="text-xl text-gray-600">
          {openSection.includes(id) ? "−" : "+"}
        </span>
      </button>

      {openSection.includes(id) && (
        <div className="px-5 py-4 text-sm text-gray-700 bg-gray-50 space-y-2">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="px-4 md:px-8 pt-6 pb-0">
      {/* 🔍 Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-gray-600">Date</label>
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="border rounded px-3 py-2 text-sm bg-white focus:outline-none"
          >
            <option value="today">Today</option>
            <option value="week">Past 7 Days</option>
            <option value="month">This Month</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-gray-600">Update Type</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border rounded px-3 py-2 text-sm bg-white focus:outline-none"
          >
            <option value="all">All</option>
            <option value="farm">Farm</option>
            <option value="weather">Weather</option>
            <option value="advice">Advice</option>
          </select>
        </div>
      </div>

      {/* Sections */}
      <Section id="farm" title="Farm Activity Snapshot">
        <p>🌱 गेहूं की बुवाई पूरी हुई — 07:30 AM</p>
        <p>🧪 यूरिया खाद डाली गई — 10:00 AM</p>
        <p>💧 सिंचाई की गई — 02:15 PM</p>
        <p>🪲 अगला कार्य: कीटनाशक छिड़काव — 06:00 PM</p>
      </Section>

      <Section id="weather" title="Weather & Field Conditions">
        <p>🌤️ आज हल्की धूप है, तापमान 32°C</p>
        <p>💧 मिट्टी में नमी अच्छी है, सिंचाई की आवश्यकता नहीं</p>
        <p>🌬️ हवा की गति सामान्य</p>
      </Section>

      <Section id="advice" title="AI Farming Tips">
        <p>🌾 फसल की बढ़वार के लिए सप्ताह में एक बार खाद डालें।</p>
        <p>🚰 पौधों को सुबह या शाम को पानी दें, दोपहर में नहीं।</p>
        <p>🪲 कीट दिखें तो तुरंत जैविक कीटनाशक का प्रयोग करें।</p>
      </Section>

      <Section id="reminders" title="Farm Reminders & Progress">
        <p>⏰ अगला कार्य: खेत की निराई — कल सुबह 8 बजे</p>
        <p>📊 फसल की स्थिति: स्वस्थ</p>
      </Section>
    </div>
  );
};

export default AIHealthUpdate;