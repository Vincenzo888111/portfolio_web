function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "kornvathanak@gmail.com",
      href: "mailto:kornvathanak@gmail.com",
      icon: "fa-solid fa-envelope",
    },
    {
      label: "Phone",
      value: "+855 87 77 49 11",
      href: "tel:+85587774911",
      icon: "fa-solid fa-phone",
    },
    {
      label: "GitHub",
      value: "github.com/vincenzo888111",
      href: "https://github.com/vincenzo888111",
      icon: "fa-brands fa-github",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 md:p-10 shadow-2xl shadow-black/20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sky-400 font-semibold uppercase tracking-wide">
                Contact
              </p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Let’s talk about junior developer opportunities.
              </h2>

              <p className="mt-5 text-slate-300 leading-relaxed">
                I am ready for my first professional role and open to learning,
                teamwork, and contributing to frontend development projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Frontend Development
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  React
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Responsive UI
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "GitHub" ? "_blank" : undefined}
                  rel={item.label === "GitHub" ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/70 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 text-xl">
                    <i className={item.icon}></i>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="text-lg font-semibold text-white group-hover:text-sky-400">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}

              <a
                href="mailto:kornvathanak@gmail.com"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
              >
                Send Email
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;