export default function Features() {
  const features = [
    {
      title: 'Clinical workflows that just flow.',
      description: 'We replace disjointed legacy tools with an interconnected infrastructure designed to compound your efficiency. No endless dropdowns, no forced migrations.'
    },
    {
      title: 'Intuitive tech + clinical expertise.',
      description: 'Built by technologists who understand care. We combine top-tier AI engineering with real clinical advisory boards to ensure every feature serves the people on the floor.'
    },
    {
      title: 'Patient confidentiality as a priority.',
      description: 'HIPAA compliant, End-to-End Encrypted, and SOC 2 Type II Certified. We secure your data so you can focus entirely on patient outcomes.'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        <div className="md:w-1/2 w-full fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-8 leading-tight">
            Taking care of healthcare.
          </h2>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title}>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 w-full fade-in-up delay-100">
          <div className="bg-gray-50 rounded-3xl p-2 border border-gray-100 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1576091160550-2173ff94031d?auto=format&fit=crop&w=800&q=80" alt="Modern Clinical Workflow" className="w-full h-[500px] object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}