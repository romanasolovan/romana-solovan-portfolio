import { projects } from "@/data/projects";
import ProjectList from "@/components/Projects/ProjectList/ProjectList";
import PageReveal from "@/components/Site/PageReveal";
import css from "./PortfolioPage.module.css";

export const metadata = {
  title: "Portfolio | Romana Solovan",
  description:
    "Explore Romana Solovan's portfolio of web development projects.",
};

export default function PortfolioPage() {
  return (
    <PageReveal
      title="All Projects"
      subtitle={`A comprehensive collection of my work — ${projects.length} projects`}
    >
      <div className={css.pageContainer}>
        <section className={css.pageContent}>
          <div className="containerWide">
            <ProjectList projects={projects} columns={2} />
          </div>
        </section>
      </div>
    </PageReveal>
  );
}
