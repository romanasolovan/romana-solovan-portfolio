import css from "./AboutPage.module.css";

export const metadata = {
  title: "About | Romana Solovan",
  description:
    "Learn more about Romana Solovan's journey as a front-end developer - her values, interests, and what makes her unique.",
};

export default function AboutPage() {
  return (
    <div className={css.pageContainer}>
      {/* ========================================
          HEADER - QUOTE SECTION
          ======================================== */}
      <header className={css.quoteHeader}>
        <blockquote className={css.blockquote}>
          <p className={css.quoteText}>
            You are only limited by weakness of attention and poverty of
            imagination.
          </p>
          <footer className={css.quoteFooter}>
            <cite className={css.quoteCite}>— William James</cite>
          </footer>
        </blockquote>
      </header>

      {/* ========================================
          MAIN CONTENT - TWO COLUMN LAYOUT
          ======================================== */}
      <section className={css.mainSection}>
        <div className={css.twoColumnGrid}>
          {/* ========== LEFT COLUMN - PERSONAL ========== */}
          <article className={css.column}>
            <div className={css.columnContent}>
              <h2 className={css.columnTitle}>What Makes Me Different</h2>

              <p className={css.paragraph}>
                I am deeply curious by nature and motivated by growth. I learn
                best through experience — by exploring, experimenting, and
                stepping into unfamiliar environments.
              </p>

              <p className={css.paragraph}>
                My journey has been shaped by change, self-reflection, and a
                willingness to challenge myself. This mindset led me to change
                my career path and discover what I could build by combining
                creativity, discipline, and curiosity.
              </p>

              <h3 className={css.subheading}>A Few Things About Me</h3>

              <ul className={css.factsList}>
                <li className={css.factItem}>
                  <span className={css.bullet}>→</span>
                  <span className={css.factText}>
                    My first language for reading and writing was Portuguese,
                    which later made learning new languages easier. My current
                    goal is to speak Spanish fluently.
                  </span>
                </li>

                <li className={css.factItem}>
                  <span className={css.bullet}>→</span>
                  <span className={css.factText}>
                    Movement plays a big role in my life — I enjoy dancing,
                    weight training, yoga, and boxing.
                  </span>
                </li>

                <li className={css.factItem}>
                  <span className={css.bullet}>→</span>
                  <span className={css.factText}>
                    Traveling fuels my curiosity. I love discovering new
                    cultures, meeting people, and seeing the world from
                    different perspectives.
                  </span>
                </li>

                <li className={css.factItem}>
                  <span className={css.bullet}>→</span>
                  <span className={css.factText}>
                    Creative hobbies like crocheting, playing the keyboard and
                    singing bowl, cooking, and gardening help me slow down and
                    stay balanced.
                  </span>
                </li>

                <li className={css.factItem}>
                  <span className={css.bullet}>→</span>
                  <span className={css.factText}>
                    I value presence and intention — whether I am learning
                    something new, creating, or simply observing the world
                    around me.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* ========== RIGHT COLUMN - PROFESSIONAL ========== */}
          <article className={css.column}>
            <div className={css.columnContent}>
              <h2 className={css.columnTitle}>My Professional Values</h2>

              <p className={css.paragraph}>
                My professional approach is shaped by empathy, structure, and a
                strong understanding of how people learn and interact with new
                ideas.
              </p>

              <p className={css.paragraph}>
                My background in education taught me patience, clarity, and the
                importance of meeting users where they are. Today, I apply these
                principles to building thoughtful, user-centered digital
                experiences.
              </p>

              <ul className={css.valuesList}>
                <li className={css.valueItem}>
                  <span className={css.bullet}>→</span>
                  <div className={css.valueContent}>
                    <strong className={css.valueLabel}>Open mindset:</strong>
                    <span className={css.valueText}>
                      I approach problems with curiosity and stay open to new
                      ideas and perspectives.
                    </span>
                  </div>
                </li>

                <li className={css.valueItem}>
                  <span className={css.bullet}>→</span>
                  <div className={css.valueContent}>
                    <strong className={css.valueLabel}>
                      Creative problem-solving:
                    </strong>
                    <span className={css.valueText}>
                      I use creativity to simplify complex ideas and design
                      clear, effective solutions.
                    </span>
                  </div>
                </li>

                <li className={css.valueItem}>
                  <span className={css.bullet}>→</span>
                  <div className={css.valueContent}>
                    <strong className={css.valueLabel}>
                      Clear communication:
                    </strong>
                    <span className={css.valueText}>
                      I value honest, respectful communication and collaboration
                      within a team.
                    </span>
                  </div>
                </li>

                <li className={css.valueItem}>
                  <span className={css.bullet}>→</span>
                  <div className={css.valueContent}>
                    <strong className={css.valueLabel}>
                      User-centered thinking:
                    </strong>
                    <span className={css.valueText}>
                      I constantly ask what the user truly needs and how my work
                      can support them better.
                    </span>
                  </div>
                </li>

                <li className={css.valueItem}>
                  <span className={css.bullet}>→</span>
                  <div className={css.valueContent}>
                    <strong className={css.valueLabel}>Growth mindset:</strong>
                    <span className={css.valueText}>
                      I see mistakes and challenges as essential steps toward
                      learning and improvement.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
