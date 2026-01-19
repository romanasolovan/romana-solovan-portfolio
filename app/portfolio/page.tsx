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
    <main className={css.pageContainer}>
      <section className="pagePanel">
        <div className="containerWide">
          <ProjectList projects={projects} columns={2} />
        </div>
      </section>
    </main>
  );
}
