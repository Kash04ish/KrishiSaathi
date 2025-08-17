import VoiceImg from '../assets/b.png';
import MedScannerImg from '../assets/c.png';
import DashboardImg from '../assets/d.png';
import SehatSathiLogo from '../assets/e.png';
import frontImg from '../assets/a.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaHeartbeat } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="h-screen text-center bg-white-100 py-4 px-4" >
        <img
          src={frontImg}
          alt="Elderly woman talkking to SehatSathi"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />
        <div className="min-h-0.5 flex items-center justify-center px-4 pt-30 pb-4">
        <h2 className="text-3xl md:text-6xl font-bold text-center text-black-800 max-w-2xl ">
            AI with a Heart, For the Hands that Feed.
        </h2>
        </div>

       {/* Animated Heart Divider */}
        <div className="hidden md:flex flex-row items-center justify-center gap-16 mx-2 text-green-600">
          <div className="flex flex-col items-center">
            <div className="animate-ping inline-flex h-3 w-3 rounded-full bg-green-400 mb-1"></div>
            <FaHeartbeat className="text-2xl animate-bounce" />
            <div className="text-xs font-medium text-gray-500 mt-1">Synced with Care</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="animate-ping inline-flex h-3 w-3 rounded-full bg-green-400 mb-1"></div>
            <FaHeartbeat className="text-2xl animate-bounce" />
            <div className="text-xs font-medium text-gray-500 mt-1">Synced with Care</div>
          </div>
        </div>

        <p className="mt-3 text-gray-600  text-xl max-w-2xl mx-auto pb-10">
          KrishiSaathi is a voice-first AI Agri Companion for farmers. Get insights on sowing, crop care, pest control, govt. schemes & market trends — in your own language.
        </p>
        <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-4">
        <Link to="/assistant">
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition cursor-pointer">
            Talk to KrishiSaathi AI Assistant
          </button>
        </Link>

        <Link to="/offline">
          <button
            onClick={() => console.log("Navigate to Offline")}
            className="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-100 transition cursor-pointer"
          >
            Try Scanner
          </button>
        </Link>
      </div>
        
      </section>

      {/* Features Section */}
      <section className="bg-white py-8 text-center">
        <h2 className="text-5xl font-bold mb-15">Smart Agriculture Management, Tailored For Farmers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {[
            {
              title: 'Voice-first Farm Guidance',
              desc: 'Ask questions in Hindi, English, Bengali, Marathi & more. Get timely advice in your own language.',
              img: VoiceImg,
              btn: 'Explore Voice Assistant'
            },
            {
              title: 'Pest & Crop Diagnosis',
              desc: 'Scan pesticide labels, identify crop diseases & get AI-powered safe usage instructions.',
              img: MedScannerImg,
              btn: 'Check Crop Health'
            },
            {
              title: 'Market & Govt Schemes',
              desc: 'Stay updated on mandi prices, subsidies & schemes relevant to your farm.',
              img: DashboardImg,
              btn: 'View Updates'
            }
          ].map((feature, i) => (
            <div key={i} className="border p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
              <img src={feature.img} alt={feature.title} className="my-4 rounded-md w-full" />
              <button
                onClick={() => {
                  if (feature.btn.includes("Voice")) navigate("/assistant");
                  else if (feature.btn.includes("Scan")) navigate("/scanner");
                  else if (feature.btn.includes("Dashboard")) navigate("/dashboard");
                }}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition cursor-pointer"
              >{feature.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Img + Language Section */}
      <section className="bg-white-50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex-1 text-center">
            <h4 className="text-2xl font-semibold ">See KrishiSaathi in Action</h4>
            <img src={SehatSathiLogo} alt="Demo" className="rounded mx-auto w-70 h-75" />
            <p className="mt-4 text-md text-gray-600">
              Watch how our AI assistant empowers farmers with simple, voice-based farm insights and crop diagnosis.
            </p>
          </div>
          <div className="flex-1 text-center">
            <h4 className="text-2xl font-semibold mb-4">Choose Your Language</h4>
            <select className="border px-8 py-2 mb-4 rounded">
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
              <option>Marathi</option>
              <option>Bengali</option>
            </select>
            <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
              KrishiSaathi ensures farmers get trusted advice in their own dialects & languages, respecting culture & context.
                This allows our assistant to communicate clearly and understand regional concerns.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg text-left max-w-sm mx-auto">
                <h5 className="font-medium mb-2 text-teal-700">Why Language Matters</h5>
                <ul className="list-disc text-sm text-gray-600 ml-4 space-y-1">
                <li>Clearer understanding of Agri guidance</li>
                <li>Faster response and less confusion</li>
                <li>Comfort for farmers unfamiliar with English</li>
                </ul>
            </div>

            <button className="mt-6 bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 text-sm">
                Apply Language Preference
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Feature Section */}
      <section className="text-center py-10 bg-white">
        <h4 className="text-3xl text-red-500 font-semibold">Upcoming Feature: Choose Your Saathi’s Voice</h4>
        <p className="text-gray-500 mt-2">
          Coming soon: A voice that sounds like family — so your companion truly feels like your own.
        </p>
        <p className="text-sm font-bold text-gray-800 mt-2">
          Powered By HeyGen
        </p>
      </section>

      {/* Testimonial Section - Just For Branding */}
      <section className="bg-white-50 py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-green-900">What Farmers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote: 'KrishiSaathi gave me timely sowing advice in Marathi. I saved my crop this season!',
              name: 'Ramesh Patil',
              city: 'Maharashtra'
            },
            {
              quote: 'Earlier I wasted money on pesticides. Now I know correct dosage with AI safety checks.',
              name: 'Sita Devi',
              city: 'Bihar'
            },
            {
              quote: 'Getting mandi prices in Hindi saved me from middlemen. More profit for my family.',
              name: 'Harpreet Singh',
              city: 'Punjab'
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-left">
              <blockquote className="italic">"{t.quote}"</blockquote>
              <p className="mt-2 text-sm font-semibold text-teal-700">
                {t.name}, {t.city}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section - Just for Brand */}
      <section className="bg-white text-center py-10">
        <h3 className="text-3xl font-bold mb-6">Our Valued Partners</h3>
        <div className="flex justify-center flex-wrap gap-6">
          <img src={p1} alt="P1" className="w-20" />
          <img src={p2} alt="P2" className="w-20" />
          <img src={p3} alt="P3" className="w-20" />
          <img src={p4} alt="P4" className="w-20" />
          <img src={p5} alt="P5" className="w-20" />
        </div>
      </section>
    </div>
  );
};

export default Home;
