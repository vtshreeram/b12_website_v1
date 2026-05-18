export default function MetricsBanner() {
  const metrics = [
    { label: 'Data Accuracy', value: '99', unit: '%' },
    { label: 'Clinics Supported', value: '500', unit: '+' },
    { label: 'Admin Reduction', value: '40', unit: '%' },
    { label: 'Clinician Rating', value: '5/5', unit: null }
  ];

  return (
    <section className="bg-[#fbfbfc] relative z-20 pb-20 -mt-10 fade-in-up">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-medium tracking-tight text-gray-900 leading-tight">Empowering leading<br />healthcare providers.</h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-3xl font-semibold text-gray-900 mb-1">
                  {metric.value}
                  {metric.unit && <span className="text-blue-600">{metric.unit}</span>}
                </div>
                <div className="text-sm text-gray-500 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}