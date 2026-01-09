// import AboutSection from "@/components/Sections/AboutSection/AboutSection";
import AboutCtaSection from "@/components/Sections/AboutSection/AboutCtaSection";
import css from "./AboutPage.module.css";

export const metadata = {
  title: "About | Romana Solovan",
  description: "Learn more about my journey as a front-end developer.",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <p className="page-subtitle">
          My journey, interests, and passion for front-end development
        </p>
      </div>

      <div className="page-content">
        {/* Main About Section with carousel and intro */}
        {/* <AboutSection showViewMore={false} /> */}

        {/* What Makes Me Different Section */}
        <section className={css.differentSection}>
          <div className={css.container}>
            <h2 className={css.heading}>What Makes Me Different?</h2>
            <p className={css.intro}>
              My path into front-end development is shaped by curiosity,
              creativity, and a strong focus on people. Everything I build is
              influenced by how I learn, move through the world, and connect
              with others.
            </p>

            <div className={css.values}>
              <div className={css.valueItem}>
                <div className={css.valueIcon}>🧠</div>
                <h3 className={css.valueTitle}>Human-first mindset</h3>
                <p className={css.valueText}>
                  My background in early childhood education taught me how
                  people learn, explore, and feel safe with new ideas. I bring
                  that same empathy into software — designing interfaces that
                  are intuitive, accessible, and respectful of the user.
                </p>
              </div>

              <div className={css.valueItem}>
                <div className={css.valueIcon}>🌱</div>
                <h3 className={css.valueTitle}>Curiosity-driven growth</h3>
                <p className={css.valueText}>
                  I learn best through experience. Traveling, adapting to new
                  cultures, and learning new languages have trained me to stay
                  flexible, observant, and open — qualities that translate
                  directly into how I approach new technologies and challenges.
                </p>
              </div>

              <div className={css.valueItem}>
                <div className={css.valueIcon}>🎨</div>
                <h3 className={css.valueTitle}>Creativity beyond code</h3>
                <p className={css.valueText}>
                  Outside of development, I express creativity through dancing,
                  crocheting, photography, filming, and video editing. These
                  practices sharpen my sense of rhythm, structure, and visual
                  balance — all of which influence how I design and build
                  interfaces.
                </p>
              </div>
            </div>

            <div className={css.personal}>
              <h3 className={css.subheading}>A little more about me</h3>
              <ul className={css.personalList}>
                <li className={css.personalItem}>
                  <span className={css.bullet}>→</span>I love exploring new
                  places and cultures — travel keeps me curious and grounded.
                </li>
                <li className={css.personalItem}>
                  <span className={css.bullet}>→</span>
                  Dancing and playing the piano help me stay present and
                  disciplined.
                </li>
                <li className={css.personalItem}>
                  <span className={css.bullet}>→</span>I enjoy slow, focused
                  hobbies like reading and crocheting, which reflect my patience
                  and attention to detail.
                </li>
                <li className={css.personalItem}>
                  <span className={css.bullet}>→</span>
                  Learning new languages and skills is a constant part of my
                  life, both professionally and personally.
                </li>
                <li className={css.personalItem}>
                  <span className={css.bullet}>→</span>I care deeply about
                  education and inspiring young minds — leading by example has
                  always been important to me.
                </li>
              </ul>
            </div>

            <div className={css.closing}>
              <p className={css.closingText}>
                {/* All of this shapes how I work: calmly, thoughtfully, and with
                intention. I do not just write code — I build experiences that
                feel clear, human, and meaningful. */}
                `You are only limited by weakness of attention and powerty of
                imagination.`
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section with Contact Form Modal */}
        <AboutCtaSection />
      </div>
    </div>
  );
}
