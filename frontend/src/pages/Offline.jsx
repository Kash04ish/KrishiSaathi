import { FaWifi, FaSms, FaDownload } from 'react-icons/fa';

const Offline = () => {
  const sendEmergencySMS = () => {
    const phoneNumber = "+919876543210";
    const message = "🚨 Emergency Alert from KrishiSaathi! Please respond ASAP.";
    const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">

      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* Offline Mode Header */}
        <div className="flex items-start gap-3 bg-white rounded-lg shadow-md p-6">
          <FaWifi className="text-teal-600 text-3xl mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-teal-700">Offline Mode Active</h2>
            <p className="text-gray-600 mt-1">
              Access essential KrishiSaathi features even without internet, powered by TinyML.
            </p>
          </div>
        </div>

        {/* Assistant Widget */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-lg font-semibold">Offline Farm Assistant</h3>
          <div className="bg-gray-50 border rounded-lg p-4 space-y-2">
            <p className="text-right text-sm text-gray-700">How do I protect my wheat crop from pests?</p>
            <p className="text-gray-800">
              Use neem-based bio-pesticides and monitor your field regularly. Remove affected plants and consult your local KrishiSaathi volunteer if needed.
            </p>
          </div>
          <input
            type="text"
            placeholder="Ask a farming question..."
            className="w-full border rounded p-2"
          />
          <p className="text-green-600 text-sm">Crop Status: <strong>Healthy</strong></p>
        </div>

        {/* Emergency SMS Trigger */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-lg font-semibold">Emergency SMS Trigger</h3>
          <p className="text-gray-600 text-sm">Send farm alerts to your trusted contacts instantly.</p>
          <button
            onClick={sendEmergencySMS}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition cursor-pointer"
          >
            <FaSms /> Trigger Emergency SMS
          </button>
          <div className="text-gray-700 text-sm space-y-1">
            <p>👤 Son, Raj Patel: +91 98765 43210</p>
            <p>👤 Daughter, Priya Sharma: +91 98887 76655</p>
            <p>👤 Village Doctor, Dr. Gupta: +91 90000 11111</p>
            <p>👤 Neighbor Farmer, Mohan Singh: +91 90011 22222</p>
          </div>
        </div>

        {/* Farm Resources */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-3">
          <h3 className="text-lg font-semibold">Offline Farm Resources</h3>
          {[
            'Managing Crop Pests',
            'Safe Fertilizer Usage',
            'First Aid for Farm Injuries',
            'Water Conservation Tips',
            'Weather Preparedness',
            'Market Price Awareness'
          ].map((title, i) => (
            <details key={i} className="bg-gray-50 rounded-lg p-3">
              <summary className="font-medium text-teal-700 cursor-pointer">{title}</summary>
              <p className="mt-1 text-gray-600 text-sm">Respective tips and details here...</p>
            </details>
          ))}
        </div>

        {/* PWA Installation */}
        <div className="flex items-start gap-3 bg-white rounded-lg shadow-md p-6">
          <FaDownload className="text-teal-600 text-2xl mt-1" />
          <div>
            <h4 className="font-semibold">Install KrishiSaathi PWA</h4>
            <p className="text-gray-600 text-sm mt-1">
              Install the app for full offline access and enhanced performance.
            </p>
            <button className="mt-3 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded">
              Learn More
            </button>
          </div>
        </div>

      </main>

    </div>
  );
};

export default Offline;