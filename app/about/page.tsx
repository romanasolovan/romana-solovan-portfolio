import AboutSection from "@/components/Sections/AboutSection/AboutSection";

export const metadata = {
  title: "About | Romana Solovan",
  description:
    "Learn more about Romana Solovan's journey as a front-end developer.",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      {/* <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          My journey, skills, and passion for front-end development
        </p>
      </div> */}

      <div className="page-content">
        {/* Main About Section */}
        <AboutSection showViewMore={false} />

        {/* My Journey Section */}
        <section className="section section-dark">
          <div className="section-container">
            <h2 className="section-heading">My Journey</h2>
            <div className="content-grid">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-icon">🎓</span>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Early Childhood Education</h3>
                  <p className="timeline-description">
                    Started my career working with children, developing
                    patience, communication skills, and a deep understanding of
                    how people learn and interact with new concepts. This
                    foundation taught me to break down complex ideas into
                    simple, understandable pieces.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-icon">💡</span>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">
                    Discovering Web Development
                  </h3>
                  <p className="timeline-description">
                    Made the transition to web development, bringing my
                    user-focused mindset to building digital products. I
                    realized that creating intuitive interfaces requires the
                    same empathy and attention to detail I used when working
                    with children.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-icon">🚀</span>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Front-End Developer Today</h3>
                  <p className="timeline-description">
                    Now specializing in React, Next.js, and TypeScript, I build
                    clean, accessible, and performant web applications. My
                    background in education makes me especially passionate about
                    creating user experiences that are intuitive and delightful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Strengths Section */}
        <section className="section section-darker">
          <div className="section-container">
            <h2 className="section-heading">My Strengths</h2>
            <div className="strengths-grid">
              <div className="strength-card">
                <div className="strength-icon">👥</div>
                <h3 className="strength-title">User-Focused Thinking</h3>
                <p className="strength-description">
                  Coming from education, I always put the user first. I think
                  about accessibility, intuitive design, and how people actually
                  interact with interfaces.
                </p>
              </div>

              <div className="strength-card">
                <div className="strength-icon">🎯</div>
                <h3 className="strength-title">Attention to Detail</h3>
                <p className="strength-description">
                  I care deeply about the small things—proper spacing, smooth
                  animations, semantic HTML, and clean, maintainable code that
                  other developers enjoy working with.
                </p>
              </div>

              <div className="strength-card">
                <div className="strength-icon">🔄</div>
                <h3 className="strength-title">Adaptability</h3>
                <p className="strength-description">
                  Transitioning careers taught me how to learn quickly and adapt
                  to new challenges. I am comfortable picking up new
                  technologies and methodologies.
                </p>
              </div>

              <div className="strength-card">
                <div className="strength-icon">🤝</div>
                <h3 className="strength-title">Clear Communication</h3>
                <p className="strength-description">
                  I can explain technical concepts in plain language, making
                  collaboration with designers, stakeholders, and other
                  developers smooth and productive.
                </p>
              </div>

              <div className="strength-card">
                <div className="strength-icon">📚</div>
                <h3 className="strength-title">Organized Approach</h3>
                <p className="strength-description">
                  My teaching background gave me strong organizational skills. I
                  write well-structured code, document thoroughly, and keep
                  projects organized from start to finish.
                </p>
              </div>

              <div className="strength-card">
                <div className="strength-icon">💪</div>
                <h3 className="strength-title">Patience & Problem-Solving</h3>
                <p className="strength-description">
                  Debugging and problem-solving require patience—something I
                  developed working with young learners. I approach challenges
                  methodically and stay calm under pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get to Know Me Section */}
        <section className="section section-dark">
          <div className="section-container">
            <h2 className="section-heading">Get to Know Me</h2>
            <p className="section-intro">
              Beyond code, here are a few things that make me who I am
            </p>

            <div className="facts-grid">
              <div className="fact-card">
                <span className="fact-emoji">☕</span>
                <p className="fact-text">
                  <strong>Coffee enthusiast</strong> — I start every coding
                  session with a fresh cup. Bonus points if it is a pour-over.
                </p>
              </div>

              <div className="fact-card">
                <span className="fact-emoji">📖</span>
                <p className="fact-text">
                  <strong>Always learning</strong> — Currently exploring
                  advanced TypeScript patterns and diving deeper into
                  accessibility best practices.
                </p>
              </div>

              <div className="fact-card">
                <span className="fact-emoji">🌍</span>
                <p className="fact-text">
                  <strong>From Ukraine</strong> — Based in Lviv, bringing a
                  global perspective to every project I work on.
                </p>
              </div>

              <div className="fact-card">
                <span className="fact-emoji">🎨</span>
                <p className="fact-text">
                  <strong>Design-minded</strong> — I love the intersection of
                  design and code. A pixel-perfect implementation brings me
                  genuine joy.
                </p>
              </div>

              <div className="fact-card">
                <span className="fact-emoji">🌱</span>
                <p className="fact-text">
                  <strong>Growth mindset</strong> — My career transition taught
                  me that it is never too late to pursue what you are passionate
                  about.
                </p>
              </div>

              <div className="fact-card">
                <span className="fact-emoji">🎮</span>
                <p className="fact-text">
                  <strong>Problem solver at heart</strong> — Whether it is a
                  coding challenge or a puzzle game, I love breaking down
                  complex problems into manageable pieces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-darker">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or have a project in mind? I&apos;d
              love to hear from you.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-semibold text-lg"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all font-semibold text-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
