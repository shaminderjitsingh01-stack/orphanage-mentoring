import Link from 'next/link';

export default function PartnersPage() {
  // Placeholder partner data - in production, this would come from a database
  const orphanages = [
    { name: 'Sunshine Children\'s Home', location: 'Singapore', children: 45 },
    { name: 'Hope Haven Orphanage', location: 'Malaysia', children: 60 },
    { name: 'New Beginnings Center', location: 'Indonesia', children: 35 },
  ];

  const companies = [
    { name: 'TechCorp Solutions', industry: 'Technology', mentors: 15 },
    { name: 'Global Finance Ltd', industry: 'Finance', mentors: 10 },
    { name: 'HealthFirst Medical', industry: 'Healthcare', mentors: 8 },
    { name: 'BuildRight Construction', industry: 'Construction', mentors: 12 },
  ];

  const educationPartners = [
    { name: 'National University', type: 'University', programs: 'Engineering, Business' },
    { name: 'Tech Skills Academy', type: 'Vocational', programs: 'IT, Digital Marketing' },
    { name: 'Community College Plus', type: 'College', programs: 'Various Diplomas' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl text-blue-100">
            Together with our amazing partners, we are creating pathways for children
            to access mentorship, education, and opportunities.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Orphanages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500">30+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">20+</div>
              <div className="text-gray-600">Education Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Children Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Orphanages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Partner Orphanages</h2>
              <p className="text-gray-600 mt-2">Orphanages we work with to connect children with opportunities</p>
            </div>
            <Link href="/partner/orphanages" className="btn-primary hidden md:inline-block">
              Register Orphanage
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {orphanages.map((org, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{org.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{org.location}</p>
                <p className="text-blue-600 text-sm font-medium">{org.children} children</p>
              </div>
            ))}

            {/* More Coming Card */}
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
              <p className="text-gray-500 mb-2">And many more...</p>
              <Link href="/partner/orphanages" className="text-blue-600 font-medium hover:text-blue-700">
                Join our network →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Corporate Partners</h2>
              <p className="text-gray-600 mt-2">Companies providing mentorship and career opportunities</p>
            </div>
            <Link href="/partner/companies" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors hidden md:inline-block">
              Become a Partner
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{company.industry}</p>
                <p className="text-orange-600 text-sm font-medium">{company.mentors} mentors</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Partners */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Education Partners</h2>
              <p className="text-gray-600 mt-2">Institutions providing scholarships and training programs</p>
            </div>
            <Link href="/partner/education" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors hidden md:inline-block">
              Partner With Us
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {educationPartners.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{edu.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{edu.type}</p>
                <p className="text-green-600 text-sm font-medium">{edu.programs}</p>
              </div>
            ))}

            {/* More Coming Card */}
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
              <p className="text-gray-500 mb-2">Growing network...</p>
              <Link href="/partner/education" className="text-green-600 font-medium hover:text-green-700">
                Become a partner →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Network</h2>
          <p className="text-gray-300 text-lg mb-8">
            Whether you&apos;re an orphanage seeking support, a company looking to make an impact,
            or an educational institution wanting to provide opportunities - we&apos;d love to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partner/orphanages" className="btn-primary">
              Register Orphanage
            </Link>
            <Link href="/partner/companies" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Corporate Partnership
            </Link>
            <Link href="/partner/education" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Education Partnership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
