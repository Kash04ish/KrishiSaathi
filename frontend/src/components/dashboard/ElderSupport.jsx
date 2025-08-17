import mela from '../../assets/mela.png';
import satsang from '../../assets/satsang.png';
import healthcamp from '../../assets/healthcamp.png';

const events = [
  {
    title: "Village Mela",
    subtitle: "Every Weekend",
    location: "250 m (Community Ground)",
    image: mela
  },
  {
    title: "Farmers' Health Camp",
    subtitle: "Next Camp: Friday",
    location: "500 m (PHC)",
    image: healthcamp,
  },
  {
    title: "Satsang & Kisan Sabha",
    subtitle: "Tomorrow",
    location: "Panchayat Bhawan",
    image: satsang
  },
];

const ElderSupport = () => {
  return (
    <div className="px-6 pt-6">
      <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-8 rounded-xl shadow">
        <p className="text-lg font-semibold text-teal-700">🌾 You are valued in your family and your village.</p>
        <p className="text-sm text-teal-600 mt-1">KrishiSaathi is here to support your wellbeing and community life.</p>
      </div>

      {/* Local Events Section */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">🎉 Village Events & Activities</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Stay connected with your community</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(({ title, subtitle, location, image }, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white border shadow hover:shadow-md transition"
            >
              <img src={image} alt={title} className="w-full h-40 object-cover" />
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{subtitle}</p>
                <p className="text-sm text-gray-500">📍 Location: {location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-blue-50 border border-blue-300 p-4 rounded-xl mt-10 shadow text-center">
        <h3 className="font-semibold text-blue-800 mb-2">Need to Talk?</h3>
        <p className="text-sm text-blue-600 mb-3">Call a family member, neighbor, or KrishiSaathi volunteer for support.</p>
        <a href="tel:+919876543210">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
            📞 Call Now
          </button>
        </a>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl mt-10 shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">🌻 Village Companion Corner</h3>
        <ul className="text-sm space-y-2 text-gray-600">
          <li>🎵 <a href="https://www.youtube.com/watch?v=Tx9t6XRUdcs" target="_blank" className="text-teal-600 hover:underline">Listen to folk songs & bhajans</a></li>
          <li>📖 “Share a farming memory…” → write one sweet story from your field</li>
          <li>😂 Joke of the day: Why did the scarecrow win an award? Because he was outstanding in his field!</li>
        </ul>
      </div>
    </div>
  );
};

export default ElderSupport;