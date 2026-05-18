export default function Testimonials() {
  const testimonials = [
    {
      quote: "B12 Health completely transformed our clinical workflow. We reduced admin time by 40% and our clinicians can now focus entirely on patient care instead of paperwork.",
      metric: "40% less admin time",
      author: "Dr. Sarah Chen",
      role: "Medical Director",
      clinic: "Northside Family Clinic",
      initials: "SC"
    },
    {
      quote: "The implementation was seamless. We went from evaluation to full deployment in just 2 weeks. The entire revenue cycle is now automated and accurate.",
      metric: "2-week setup",
      author: "James Okafor",
      role: "Practice Manager",
      clinic: "Summit Behavioral Health",
      initials: "JO"
    },
    {
      quote: "Patient intake accuracy jumped to 99%. We no longer have to manually correct data entry errors. B12 Health handles it all upfront with clinical precision.",
      metric: "99% accuracy",
      author: "Dr. Maria Reyes",
      role: "Lead Physician",
      clinic: "Coastal Pediatrics",
      initials: "MR"
    }
  ];

  return (
    <section id="who-we-serve" className="py-24 px-6 md:px-10 lg:px-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 fade-in-up">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-tight text-gray-900 text-balance leading-tight">What our customers say</h2>
          <p className="text-gray-500 mt-4 text-[clamp(0.95rem,1.75vw,1.15rem)] text-pretty">Healthcare leaders trust B12 to simplify their operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col fade-in-up ${
                index === 0 ? '' : index === 1 ? 'delay-100' : 'delay-200'
              }`}
            >
              <div className="text-blue-600 text-5xl mb-4 leading-none">"</div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-[clamp(0.95rem,1.5vw,1.05rem)] text-pretty">{testimonial.quote}</p>

              <div className="mb-6">
                <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonial.metric}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-xs text-gray-400">{testimonial.clinic}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}