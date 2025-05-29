import { useState } from "react";

const treeData = [ { title: "Search Engine Marketing (SEM)", children: [ { title: "SEO", children: [ { title: "On-Page SEO", content: "Optimize individual pages for keywords, tags, and structure." }, { title: "Off-Page SEO", content: "Earn backlinks, improve authority, and build trust externally." }, { title: "Technical SEO", content: "Ensure site is crawlable, fast, and indexed correctly." }, ], }, { title: "Paid Search", children: [ { title: "Google Ads", content: "Run PPC campaigns to appear in top search results." }, ], }, ], }, { title: "Content Marketing", children: [ { title: "Blogs", content: "Write helpful articles that solve user problems." }, { title: "Videos", content: "Educate, entertain, and convert with visual content." }, ], }, { title: "Social Media Marketing", children: [ { title: "Instagram", content: "Visual platform for stories, reels, and influencer partnerships." }, { title: "LinkedIn", content: "Perfect for B2B audience and recruiting." }, ], }, ];

function ZenNode({ node }: { node: any }) { const [open, setOpen] = useState(false);

return ( <div className="ml-4 mt-3"> <button onClick={() => setOpen(!open)} className="text-left w-full bg-white hover:bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 shadow-sm transition-all" > <div className="font-medium text-gray-800">{node.title}</div> </button>

{open && (
    <div className="ml-4 mt-2 border-l pl-4 border-gray-200">
      {node.children ? (
        node.children.map((child: any, idx: number) => <ZenNode key={idx} node={child} />)
      ) : (
        <p className="text-gray-600 text-sm mt-2">{node.content}</p>
      )}
    </div>
  )}
</div>

); }

export default function ZenTree() { return ( <main className="min-h-screen bg-[#f9fafb] p-6"> <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100"> <h1 className="text-3xl font-bold text-center text-[#3b3b3b] mb-6">\u272f Digital Marketing Zen Tree</h1> <p className="text-center text-gray-500 mb-6">Click on any thread to calmly explore its depth.</p> {treeData.map((node, i) => ( <ZenNode key={i} node={node} /> ))} </div> </main> ); }

