export default function WhoWeServe() {
  const specialties = [
    {
      category: 'Primary Care',
      items: ['Family Medicine', 'Internal Medicine', 'Pediatrics'],
      delay: 'delay-100'
    },
    {
      category: 'Specialty Clinics',
      items: ['Orthopedics', 'Cardiology', 'ENT'],
      delay: 'delay-100'
    },
    {
      category: 'Behavioral Health',
      items: ['Psychiatry', 'ABA Therapy', 'Mental Health'],
      delay: 'delay-200'
    },
    {
      category: 'Post-Acute',
      items: ['Home Health', 'SNF / Hospice', 'Physical Therapy'],
      delay: 'delay-200'
    }
  ];

  return (
    <section id="who-we-serve" className="py-24 px-6 md:px-10 lg:px-20 bg-[#fbfbfc] border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 fade-in-up">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium tracking-tight text-gray-900 text-balance">Who We Serve</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {specialties.map((specialty) => (
            <div key={specialty.category} className={`fade-in-up ${specialty.delay}`}>
              <h4 className="text-[clamp(1.05rem,1.75vw,1.15rem)] font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">{specialty.category}</h4>
              <ul className="space-y-3 text-[clamp(0.9rem,1.25vw,1rem)] text-gray-500">
                {specialty.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}