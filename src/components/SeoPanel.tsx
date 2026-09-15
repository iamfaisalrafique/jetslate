"use client";


interface SeoPanelProps {
  title: string;
  description: string;
  content: string;
  slug: string;
  focusKeyword: string;
}

export default function SeoPanel({
  title,
  description,
  content,
  slug,
  focusKeyword,
}: SeoPanelProps) {
  let score = 0;
  let checks: { label: string; passed: boolean }[] = [];

  if (!focusKeyword) {
    score = 0;
    checks = [
      { label: "Focus keyword is not set", passed: false }
    ];
  } else {
    const keywordLower = focusKeyword.toLowerCase();
    const titleLower = title.toLowerCase();
    const descLower = description.toLowerCase();
    const slugLower = slug.toLowerCase();
    const contentLower = content.toLowerCase();

    checks = [
      {
        label: "Keyword in SEO Title",
        passed: titleLower.includes(keywordLower)
      },
      {
        label: "Keyword in Meta Description",
        passed: descLower.includes(keywordLower)
      },
      {
        label: "Keyword in URL/Slug",
        passed: slugLower.includes(keywordLower)
      },
      {
        label: "Keyword in first 10% of content",
        passed: contentLower.substring(0, Math.max(200, Math.floor(contentLower.length * 0.1))).includes(keywordLower)
      },
      {
        label: "Title length (~50-60 characters)",
        passed: title.length >= 40 && title.length <= 65
      },
      {
        label: "Meta description length (~150-160 characters)",
        passed: description.length >= 120 && description.length <= 170
      },
      {
        label: "Content length check (>300 words)",
        passed: content.split(/\s+/).filter(Boolean).length >= 300
      }
    ];

    const passedCount = checks.filter(c => c.passed).length;
    score = Math.round((passedCount / checks.length) * 100);
  }

  const scoreColor = score < 50 ? "bg-red-500 text-white" : score < 80 ? "bg-yellow-500 text-black" : "bg-green-500 text-white";

  return (
    <div className="bg-[#161616] p-6 rounded-2xl border border-[#2E2E2E] space-y-6 text-[#F8F5EF]">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-[#C9A84C]">On-Page SEO Analysis</h3>
        <div className={`text-sm font-extrabold px-3 py-1 rounded-full ${scoreColor}`}>
          Score: {score}/100
        </div>
      </div>
      
      <div className="w-full bg-[#2E2E2E] rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-300 ${score < 50 ? 'bg-red-500' : score < 80 ? 'bg-yellow-500' : 'bg-green-500'}`}
          style={{ width: `${score}%` }}
        />
      </div>

      <div className="space-y-3">
        {checks.map((check, idx) => (
          <div key={idx} className="flex items-start space-x-3 text-sm">
            <span>{check.passed ? "✅" : "❌"}</span>
            <span className={check.passed ? "text-gray-700" : "text-gray-400"}>
              {check.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
