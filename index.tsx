// pages/index.tsx
import { useState } from "react";
import { ChevronDown, ChevronRight, Folder } from "lucide-react";

const topics = [
  {
    label: "Search Engine Marketing (SEM)",
    children: [
      {
        label: "SEO",
        children: [
          { label: "On-Page SEO", content: "On-Page SEO involves optimizing elements on your website..." },
          { label: "Off-Page SEO", content: "Off-Page SEO involves building backlinks..." },
          { label: "Technical SEO", content: "Technical SEO ensures your website is crawlable and indexable..." },
        ],
      },
      {
        label: "Paid Search",
        children: [
          { label: "Google Ads", content: "Google Ads allows you to run paid campaigns..." },
        ],
      },
    ],
  },
  {
    label: "Content Marketing",
    children: [
      { label: "Blogs", content: "Blogging drives traffic and builds authority..." },
      { label: "Videos", content: "Video marketing is engaging and highly shareable..." },
    ],
  },
  {
    label: "Social Media Marketing",
    children: [
      { label: "Facebook", content: "Use Facebook Pages and Ads for audience targeting..." },
      { label: "Instagram", content: "Instagram marketing uses visuals, reels, and influencers..." },
      { label: "Twitter", content: "Engage through trending topics, threads, and mentions..." },
      { label: "LinkedIn", content: "LinkedIn is powerful for B2B networking and ads..." },
    ],
  },
  {
    label: "Other Channels",
    children: [
      { label: "Email Marketing", content: "Send personalized emails for retention..." },
      { label: "Affiliate Marketing", content: "Earn commissions by promoting others' products..." },
      { label: "Influencer Marketing", content: "Leverage creators with reach and trust..." },
      { label: "Mobile Marketing", content: "Reach users via SMS, push notifications, in-app ads..." },
      { label: "Video Marketing", content: "YouTube, TikTok and more for rich engagement..." },
      { label: "Display Advertising", content: "Use banner ads on networks and retargeting..." },
      { label: "Remarketing", content: "Re-engage visitors who didn't convert..." },
      { label: "Analytics", content: "Measure and optimize with data from tools like GA4..." },
      { label: "Conversion Optimization", content: "Improve UI, messaging and funnel performance..." },
      { label: "CRM & Retention", content: "Keep customers loyal via automation, segmentation..." },
    ],
  },
];

function TreeItem({ node }: { node: any }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="ml-4 mt-2">
      <div
        className="cursor-pointer flex items-center gap-2 text-blue-700 hover:underline"
        onClick={() => setOpen(!open)}
      >
        {node.children ? (
          open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
        ) : null}
        <Folder className="w-4 h-4" />
        <span className="font-medium">{node.label}</span>
      </div>
      {open && (
        <div className="ml-4 mt-2 border-l border-gray-200 pl-4">
          {node.children ? (
            node.children.map((child: any, i: number) => <TreeItem key={i} node={child} />)
          ) : (
            <div className="text-gray-600 text-sm mt-1">{node.content}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Digital Marketing Family Tree 🌐</h1>
        <p className="text-center text-gray-600 mb-8">Click through the threads below to reveal each branch and its detailed insights.</p>
        <div>
          {topics.map((node, index) => (
            <TreeItem key={index} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}
