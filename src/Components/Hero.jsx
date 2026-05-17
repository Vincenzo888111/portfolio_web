import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/image1.png";

function Hero() {
  const skills = ["React", "JavaScript", "Tailwind CSS", "Responsive UI"];

  const profileItems = [
    {
      label: "Target Position",
      value: "Entry-Level Frontend Developer",
    },
    {
      label: "Interested Industry",
      value: "Banking and Fintech",
    },
    {
      label: "Location",
      value: "Phnom Penh, Cambodia",
    },
  ];

  const stats = [
    {
      number: "3",
      label: "Projects",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
    },
    {
      number: "2",
      label: "Certificates",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      number: "100%",
      label: "Ready",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen px-4 pt-28 pb-16 flex items-center bg-[radial-gradient(circle_at_top_right,#0ea5e933,transparent_35%),radial-gradient(circle_at_bottom_left,#22c55e22,transparent_30%)]"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Available for Entry-Level Frontend Developer Role
          </p>

          <div className="mt-6 min-h-[160px] md:min-h-[220px]">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I’m <span className="text-sky-400">Vathanak</span>
              <br />

              <span className="text-3xl md:text-5xl text-slate-200">
                <TypeAnimation
                  sequence={[
                    "Entry-Level Frontend Developer",
                    2000,
                    "React Learner",
                    2000,
                    "Frontend Enthusiast",
                    2000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </h1>
          </div>

          <p className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed">
            I build clean and responsive web interfaces using React, JavaScript,
            and Tailwind CSS. I am interested in digital products, business
            systems, and creating reliable user experiences for real customers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:border-sky-400 hover:text-sky-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="rounded-2xl bg-slate-900 p-6">
              <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Candidate Profile</p>
                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Vathanak
                  </h2>
                </div>

                <img
                  src={profileImg}
                  alt="Vathanak profile"
                  className="h-24 w-24 rounded-full border-2 border-sky-400/40 object-cover"
                />
              </div>

              <div className="mt-6 space-y-4">
                {profileItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-white/5 p-4 border border-white/5"
                  >
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="mt-1 font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {stats.map((item) => (
                  <div key={item.label} className={`rounded-xl ${item.bg} p-4`}>
                    <p className={`text-2xl font-bold ${item.color}`}>
                      {item.number}
                    </p>
                    <p className="text-xs text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 shadow-xl md:block">
            <p className="text-sm text-slate-400">Current Focus</p>
            <p className="font-semibold text-sky-400">React + Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;