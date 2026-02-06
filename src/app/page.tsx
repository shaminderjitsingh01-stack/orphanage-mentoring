import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-28 md:py-36 px-4 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-emerald-900/70"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Empowering Futures Through
            <span className="text-amber-400"> Mentorship</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-4xl mx-auto">
            Connecting orphanages with companies and educational institutions to create
            meaningful mentorship opportunities and brighter futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partner/orphanages" className="btn-secondary">
              Register Your Orphanage
            </Link>
            <Link href="/partner/companies" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-800 font-semibold py-3 px-6 rounded-lg transition-colors">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-800">50+</div>
              <div className="text-emerald-900">Orphanages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-800">30+</div>
              <div className="text-emerald-900">Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-800">20+</div>
              <div className="text-emerald-900">Education Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-800">500+</div>
              <div className="text-emerald-900">Children Mentored</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">How It Works</h2>
            <p className="text-emerald-800 max-w-2xl mx-auto">
              Our platform connects three key stakeholders to create impactful mentorship programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Orphanages */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Orphanages</h3>
              <p className="text-emerald-800 mb-4">
                Register your orphanage to connect children with mentors from leading companies
                and access educational resources.
              </p>
              <Link href="/partner/orphanages" className="text-emerald-700 font-semibold hover:text-emerald-600">
                Register Now →
              </Link>
            </div>

            {/* Companies */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Companies</h3>
              <p className="text-emerald-800 mb-4">
                Partner with us to provide mentorship, internships, and career guidance
                to young people from orphanages.
              </p>
              <Link href="/partner/companies" className="text-amber-700 font-semibold hover:text-amber-600">
                Partner With Us →
              </Link>
            </div>

            {/* Education */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Education Institutes</h3>
              <p className="text-emerald-800 mb-4">
                Collaborate with us to provide scholarships, training programs,
                and educational opportunities.
              </p>
              <Link href="/partner/education" className="text-teal-700 font-semibold hover:text-teal-600">
                Collaborate Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-emerald-200 text-lg mb-8">
            Join our network of partners and help us create opportunities for children
            who deserve a chance to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Get In Touch
            </Link>
            <Link href="/newsletter" className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 font-semibold py-3 px-6 rounded-lg transition-colors">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
