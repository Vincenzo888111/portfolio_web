function Services() {
  const strengths = [
    {
      title: "Frontend Development",
      text: "Building responsive websites using React, JavaScript, HTML, CSS, and Tailwind CSS.",
    },
    {
      title: "UI Implementation",
      text: "Turning designs into clean and user-friendly web pages.",
    },
    {
      title: "Learning Mindset",
      text: "Ready to learn from senior developers and improve through real projects.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-sky-400">Strengths</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {strengths.map((item) => (
            <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;