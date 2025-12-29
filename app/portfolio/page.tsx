import { projects } from "@/data/projects";
import ProjectList from "@/components/Projects/ProjectList/ProjectList";

export const metadata = {
  title: "Portfolio | Romana Solovan",
  description:
    "Explore Romana Solovan's portfolio of web development projects.",
};

export default function PortfolioPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">All Projects</h1>
        <p className="page-subtitle">
          A comprehensive collection of my work ({projects.length} projects)
        </p>
      </div>

      <div className="page-content">
        <div className="section-container-wide">
          <ProjectList projects={projects} columns={3} />
        </div>
      </div>
    </div>
  );
}
