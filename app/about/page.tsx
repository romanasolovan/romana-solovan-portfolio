import AboutSection from "@/components/Sections/AboutSection/AboutSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-8">About Me</h1>
        <AboutSection showViewMore={false} />

        <div className="mt-16 space-y-6">
          <h2 className="text-3xl font-bold mb-6">My Journey</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey in web development started with a curiosity about how
            websites work, and has evolved into a career focused on creating
            beautiful, performant user interfaces.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Over the years, I&apos;ve worked on projects ranging from small
            business websites to large-scale enterprise applications, always
            with a focus on user experience and code quality.
          </p>
        </div>
      </div>
    </div>
  );
}
