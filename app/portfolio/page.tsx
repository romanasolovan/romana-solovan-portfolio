import { projects } from "@/data/projects";
import ProjectList from "@/components/Projects/ProjectList/ProjectList";
import css from "./PortfolioPage.module.css";

export const metadata = {
  title: "Portfolio | Romana Solovan",
  description:
    "Explore Romana Solovan's portfolio of web development projects.",
};

export default function PortfolioPage() {
  return (
    <div className={css.pageContainer}>
      {/* ========================================
          PAGE HEADER
          ======================================== */}
      <header className={css.pageHeader}>
        <h1 className={css.pageTitle}>All Projects</h1>
        <p className={css.pageSubtitle}>
          A comprehensive collection of my work — {projects.length} projects
        </p>
      </header>

      {/* ========================================
          PROJECTS GRID - 2 COLUMNS
          ======================================== */}
      <section className={css.pageContent}>
        <div className="containerWide">
          {" "}
          {/* NOTE: Using global containerWide */}
          <ProjectList projects={projects} columns={2} />{" "}
          {/* NOTE: 2 columns instead of 3 */}
        </div>
      </section>
    </div>
  );
}
