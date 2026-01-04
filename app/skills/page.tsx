import SkillsSection from "@/components/Sections/SkillsSection/SkillsSection";

export const metadata = {
  title: "Skills | Romana Solovan",
  description:
    "Technologies and tools that Romana Solovan works with professionally.",
};

export default function SkillsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Skills & Expertise</h1>
        <p className="page-subtitle">
          What I bring to the table as a developer
        </p>
      </div>

      <div className="page-content">
        <SkillsSection showViewMore={false} />
      </div>
    </div>
  );
}
