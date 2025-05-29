// pages/index.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Digital Marketing Explorer</h1>
        <p className="text-lg text-gray-600">Dive deep into the branches of Digital Marketing through an interactive tree</p>
      </header>

      <section className="max-w-4xl mx-auto text-center mb-12">
        <input
          type="text"
          placeholder="Search topics (e.g., SEO, Email Marketing)"
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </section>

      <section className="flex flex-col items-center space-y-4 mb-12">
        <Link href="/tree" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow hover:bg-blue-700">
          Explore the Digital Marketing Tree
        </Link>

        <a
          href="#genai"
          className="text-blue-600 hover:underline text-lg"
        >
          Explore Gen AI Tools for Digital Marketing ↓
        </a>
      </section>

      <section id="genai" className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Gen AI Tools for Each Digital Marketing Branch</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>SEO:</strong> Surfer SEO AI, NeuronWriter, Clearscope AI, Outranking
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>Content Marketing:</strong> Jasper AI, Copy.ai, Writesonic, Anyword
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>Social Media Marketing:</strong> Lately AI, Predis.ai, Ocoya, Flick AI
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>Email Marketing:</strong> Mailchimp Content Optimizer, Smartwriter.ai, Copy.ai Email Generator
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>Web Analytics:</strong> PaveAI (turns Google Analytics into insights), Narrator.ai
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>Affiliate Marketing:</strong> Affable.ai, PartnerStack AI insights
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>PPC / Paid Ads:</strong> AdCreative.ai, Pencil, Wordstream Smart Ads
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>E-commerce Marketing:</strong> Shopify Magic, CopyMonkey.ai, ChatGPT plugins for product descriptions
          </li>
        </ul>
      </section>
    </div>
  );
}