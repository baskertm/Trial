import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Globe,
  Smartphone,
  Mail,
  Search,
  LineChart,
  ClipboardList,
  Type,
  Users,
  PieChart,
  SmartphoneCharging,
  SplitSquareVertical,
  RefreshCcw
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const topics = [
  {
    icon: <Globe />, 
    title: "Website Building", 
    description: "Creating responsive, user-friendly websites.",
    insight: "Ensure your site is mobile-first, uses clean code, optimized assets, and fast load times to reduce bounce rate and boost SEO.",
    content: "Learn how to build SEO-friendly, mobile-optimized websites using HTML, CSS, React, and modern CMS tools like WordPress or Webflow."
  },
  {
    icon: <Type />, 
    title: "Content Marketing", 
    description: "Crafting compelling content to attract audiences.",
    insight: "Great content speaks to a specific audience's pain point, includes strong CTAs, and leverages storytelling with SEO integration.",
    content: "Explore blogging strategies, visual storytelling, video marketing, and how to create a content calendar that aligns with your funnel."
  },
  {
    icon: <Search />, 
    title: "SEO & Keyword Research", 
    description: "Optimizing visibility on search engines.",
    insight: "Use tools like SEMrush or Ahrefs. Focus on long-tail keywords, search intent, backlink profiles, and on-page optimization.",
    content: "Master technical SEO, on-page structure, link building, schema markup, and Google's search ranking signals."
  },
  {
    icon: <BarChart2 />, 
    title: "Digital Advertising", 
    description: "Running effective ad campaigns online.",
    insight: "Segment your audience precisely, A/B test visuals and copy, and track CTR, ROAS, and frequency for best performance.",
    content: "Learn how to run Google Ads, Facebook/Meta campaigns, display banners, retargeting strategies, and budget planning."
  },
  {
    icon: <ClipboardList />, 
    title: "Ad Copywriting", 
    description: "Writing persuasive ad copy that converts.",
    insight: "Craft copy using emotional triggers, address objections upfront, and include urgency or scarcity to boost conversion rates.",
    content: "Dive into headline formulas, call-to-action strategies, value propositions, and storytelling copywriting techniques."
  },
  {
    icon: <Users />, 
    title: "Social Media Marketing", 
    description: "Engaging users on social platforms.",
    insight: "Use platform-native features like Reels or Stories. Prioritize engagement metrics over follower count and adapt per channel.",
    content: "Plan campaigns for Instagram, X, LinkedIn, and TikTok. Create shareable content and schedule it with tools like Buffer or Hootsuite."
  },
  {
    icon: <PieChart />, 
    title: "Social Media Analytics", 
    description: "Measuring social media performance.",
    insight: "Use metrics like engagement rate, impressions, and sentiment analysis. Combine with audience demographic reports.",
    content: "Track KPIs across channels using native insights, Google Analytics, and third-party dashboards like Sprout Social or Hootsuite."
  },
  {
    icon: <Mail />, 
    title: "Email Marketing", 
    description: "Sending effective marketing emails.",
    insight: "Craft personalized subject lines, keep mobile formatting tight, and test delivery times for best open/click rates.",
    content: "Create newsletters, promotional drips, and lifecycle email flows with platforms like Mailchimp, Klaviyo, or ConvertKit."
  },
  {
    icon: <SplitSquareVertical />, 
    title: "Email Segmentation", 
    description: "Targeting audiences more effectively.",
    insight: "Segment based on user behavior, purchase history, or engagement frequency to drastically increase email ROI.",
    content: "Design segment logic using tags, actions, and predictive behaviors. Build highly personalized sequences."
  },
  {
    icon: <RefreshCcw />, 
    title: "Email Automation", 
    description: "Automating email campaigns smartly.",
    insight: "Build nurture sequences using trigger-based emails: welcome, cart abandonment, upsell, and win-back flows.",
    content: "Implement triggers, conditions, and workflows using platforms like ActiveCampaign, HubSpot, or Customer.io."
  },
  {
    icon: <Smartphone />, 
    title: "Mobile Optimization", 
    description: "Ensuring mobile-friendly experiences.",
    insight: "Use responsive design, lazy loading, and mobile-friendly UI/UX. Check Core Web Vitals regularly.",
    content: "Audit mobile performance, test with Google Lighthouse, and use AMP or PWA to enhance mobile delivery."
  },
  {
    icon: <SmartphoneCharging />, 
    title: "SMS Marketing", 
    description: "Reaching customers via text messages.",
    insight: "Keep SMS under 160 characters, include a clear CTA, and ensure compliance with opt-in regulations (TCPA/GDPR).",
    content: "Use platforms like Twilio or Attentive to run flash sales, appointment reminders, and win-back campaigns via SMS."
  },
  {
    icon: <Smartphone />, 
    title: "App Marketing", 
    description: "Promoting mobile applications.",
    insight: "Leverage ASO (App Store Optimization), push notifications, retargeting, and user lifecycle analytics to boost downloads.",
    content: "Promote apps with influencer campaigns, feature placements, and UA funnels across Facebook, TikTok, and Google UAC."
  },
  {
    icon: <LineChart />, 
    title: "Analytics & Measurement", 
    description: "Tracking success with data tools.",
    insight: "Set KPIs before launching campaigns. Use GA4, Data Studio, or Looker for dashboarding and performance storytelling.",
    content: "Measure ROI with marketing funnels, multi-touch attribution, real-time dashboards, and advanced visualization tools."
  }
];

export default function DigitalMarketingCandyLand() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6">
      <header className="text-center space-y-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Digital Marketing Candyland
        </motion.h1>
        <motion.p
          className="max-w-xl mx-auto text-lg md:text-xl text-indigo-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Explore bite-sized learning segments in a visually stunning world inspired by games and galaxy aesthetics.
        </motion.p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mt-12">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => toggleFlip(index)}
            className="cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {flippedIndex === index ? (
                <motion.div
                  key="back"
                  initial={{ rotateY: 180, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -180, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 border-none shadow-xl backdrop-blur-md p-4 rounded-2xl"
                >
                  <CardContent className="space-y-4 text-left">
                    <h2 className="text-xl font-semibold text-white">{topic.title} Details</h2>
                    <p className="text-indigo-300">{topic.content}</p>
                    <Button variant="outline" onClick={() => toggleFlip(index)} className="text-white border-white hover:bg-indigo-700">
                      Go Back
                    </Button>
                  </CardContent>
                </motion.div>
              ) : (
                <motion.div
                  key="front"
                  initial={{ rotateY: -180, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 180, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 border-none shadow-xl backdrop-blur-md p-4 rounded-2xl"
                >
                  <CardContent className="space-y-4 text-center">
                    <div className="text-indigo-400 text-4xl mx-auto">{topic.icon}</div>
                    <h2 className="text-xl font-semibold text-white">{topic.title}</h2>
                    <p className="text-sm text-indigo-200">{topic.insight}</p>
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>

      <div className="text-center mt-16">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Button variant="outline" className="text-white border-white hover:bg-indigo-700">
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
