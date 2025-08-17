const Footer = () => (
  <footer className="bg-green-50 text-gray-800 py-10 px-6 mt-10 border-t border-green-200">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      
      {/* Column 1: Brand Info */}
      <div>
        <h4 className="text-2xl font-bold text-teal-700">KrishiSaathi</h4>
        <p className="mt-2 text-gray-600">
          Your voice-first AI farming companion. Helping farmers make smarter, safer, and timely decisions.
        </p>
        <p className="mt-4 text-xs text-gray-500">© 2025 KrishiSaathi. All rights reserved.</p>
      </div>

      {/* Column 2: Links */}
      <div>
        <h5 className="text-md font-semibold mb-3">Quick Links</h5>
        <ul className="space-y-2 text-gray-600">
          <li><a href="/dashboard" className="hover:text-green-700">Farm Dashboard</a></li>
          <li><a href="/assistant" className="hover:text-green-700">AI Assistant</a></li>
          <li><a href="/scanner" className="hover:text-green-700">Pesticide Scanner</a></li>
          <li><a href="/market" className="hover:text-green-700">Market Prices</a></li>
          <li><a href="/login" className="hover:text-green-700">Login</a></li>
        </ul>
      </div>

      {/* Column 3: Newsletter */}
      <div>
        <h5 className="text-md font-semibold mb-3">Stay Updated</h5>
        <p className="text-gray-600 mb-3">
          Subscribe to get crop care tips, market updates & app news:
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
