function About() {
  const strengths = [
    "Careful with UI details",
    "Fast learner",
    "Teamwork mindset",
    "Interested in real business systems",
  ];

  const highlights = [
    {
      number: "3+",
      label: "Projects Built",
    },
    {
      number: "React",
      label: "Main Frontend Tool",
    },
    {
      number: "100%",
      label: "Learning Mindset",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="text-sky-400 font-semibold uppercase tracking-wide">
              About Me
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              A entry-level developer focused on clean frontend experiences.
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed">
              I am a entry-level frontend developer with hands-on practice building
              responsive websites using React, JavaScript, HTML, CSS, and
              Tailwind CSS. I enjoy improving layouts, solving small problems,
              and learning how professional applications are built.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              My goal is to start my first professional role in a technology
              team where I can learn from senior developers, contribute to real
              projects, and build digital products that are useful for users.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-2xl font-bold text-sky-400">
                    {item.number}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-bold text-sky-400">
              Career Goal
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              I want to grow in a professional technology environment where
              clean code, user experience, security, reliability, and teamwork
              are important every day.
            </p>

            <div className="mt-6 grid gap-4">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-sky-400/70"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <i className="fa-solid fa-check"></i>
                  </div>

                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Currently improving React, reusable components, dynamic pages,
                product filtering, cart logic, and responsive UI design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;