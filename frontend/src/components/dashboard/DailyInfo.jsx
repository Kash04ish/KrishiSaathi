import { useNavigate } from "react-router-dom";

const DailyInfo = () => {
  const navigate = useNavigate();
  const handleGoToScanner = () => {
    navigate("/scanner"); 
  };
  return (
    <div id="daily-info" className="bg-gray-50 p-6 pt-6 pb-10">
      <div className="flex flex-wrap gap-8 justify-center">

        {/* Crop Activity Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-80 max-h-96 overflow-y-auto flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 mb-1">🌾 Crop Activity</h2>
          <p className="text-sm text-gray-500 mb-4">Today’s farm schedule & quick search</p>

          <div className="space-y-4 text-sm text-gray-700">
            {[
              { name: "Wheat Sowing", detail: "Field 2", time: "7:30 AM" },
              { name: "Irrigation", detail: "Canal water", time: "2:15 PM" },
              { name: "Pesticide Spray", detail: "Bio-insecticide", time: "6:00 PM" },
            ].map((task, idx) => (
              <div key={idx} className="flex justify-between">
                <div>
                  <p className="font-medium">{task.name}</p>
                  <p className="text-xs text-gray-500">{task.detail}</p>
                </div>
                <p className="text-sm">{task.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-2">
            <input
              type="text"
              placeholder="Search crops/pesticides..."
              className="w-full border rounded px-3 py-2 text-sm focus:outline-teal-500"
            />
            <button
              onClick={handleGoToScanner}
              className="w-full border rounded px-3 py-2 text-sm flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
            >
              <span>📷 Scan Crop/Pesticides</span> 
            </button>
          </div>
        </div>

        {/* Weather Trends Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-80">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-1">🌦️ Weather Trends</h2>
          <p className="text-sm text-center text-gray-500 mb-4">Temperature (°C) this week</p>

          <div className="text-center text-2xl mb-4">🌤️ 32°C</div>

          <div className="flex items-end justify-between h-32">
            {[30, 32, 31, 33, 34, 32, 31].map((val, idx) => (
              <div
                key={idx}
                className="w-6 bg-blue-400 rounded"
                style={{ height: `${val * 3}px` }}
              ></div>
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Irrigation Overview Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-80">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-1">💧 Irrigation Overview</h2>
          <p className="text-sm text-center text-gray-500 mb-4">Hours irrigated per day</p>

          <div className="flex items-end justify-between h-32">
            {[1, 1.5, 2, 1.2, 1.8, 2, 1.6].map((val, idx) => (
              <div
                key={idx}
                className="w-6 bg-teal-400 rounded"
                style={{ height: `${val * 30}px` }}
              ></div>
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Farm Reminders Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-80">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-1">⏰ Farm Reminders</h2>
          <p className="text-sm text-center text-gray-500 mb-4">Upcoming tasks</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><span className="font-medium">Tomorrow:</span> Field weeding at 8:00 AM</li>
            <li><span className="font-medium">Friday:</span> Soil test in Field 1</li>
            <li><span className="font-medium">Saturday:</span> Market visit for seeds</li>
          </ul>
        </div>

        {/* Crop Progress Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-80">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-1">📈 Crop Progress</h2>
          <p className="text-sm text-center text-gray-500 mb-4">Growth status</p>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Wheat</span>
              <span>Healthy</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Rice</span>
              <span>Needs irrigation</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Mustard</span>
              <span>Flowering</span>
            </div>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-inner px-6 py-5 text-center mt-8 border border-dashed border-teal-300">
          <h2 className="text-xl font-semibold text-red-800 mb-2">🚧 More Farm Updates Coming Soon</h2>
          <p className="text-sm text-gray-600">
            Stay tuned for features like Crop Disease Alerts, Market Price Tracker, and more KrishiSaathi insights. Your farm, continuously evolving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyInfo;