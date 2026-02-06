export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-emerald-100">
            Our mission is to bridge the gap between orphanages and opportunities,
            creating pathways for children to thrive.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-emerald-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Our Mission</h2>
              <p className="text-emerald-800">
                To connect orphanages with companies and educational institutions,
                creating sustainable mentorship programs that empower children with
                the skills, knowledge, and opportunities they need to succeed in life.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Our Vision</h2>
              <p className="text-emerald-800">
                A world where every child from an orphanage has access to quality mentorship,
                education, and career opportunities, enabling them to reach their full potential
                and contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="font-bold text-emerald-900 mb-2">Compassion</h3>
              <p className="text-emerald-800 text-sm">
                We approach every child and partner with empathy and understanding.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-emerald-900 mb-2">Collaboration</h3>
              <p className="text-emerald-800 text-sm">
                We believe in the power of partnerships to create lasting change.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold text-emerald-900 mb-2">Excellence</h3>
              <p className="text-emerald-800 text-sm">
                We strive for the highest standards in all our programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">🌲</div>
              <h3 className="font-bold text-emerald-900 mb-2">Growth</h3>
              <p className="text-emerald-800 text-sm">
                We are committed to continuous improvement and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-emerald-800">
            <p className="mb-6">
              The Orphanage Mentoring Initiative was founded with a simple yet powerful belief:
              every child deserves the opportunity to dream big and achieve their goals,
              regardless of their background.
            </p>
            <p className="mb-6">
              We recognized that while many orphanages provide essential care and shelter,
              children often lack access to professional mentorship, career guidance, and
              educational opportunities that could transform their futures.
            </p>
            <p className="mb-6">
              By building bridges between orphanages, forward-thinking companies, and
              educational institutions, we create a support ecosystem that nurtures talent,
              builds confidence, and opens doors to new possibilities.
            </p>
            <p>
              Today, we continue to expand our network, reaching more children and creating
              more impactful partnerships. Together with our partners, we are writing new
              stories of hope and success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
