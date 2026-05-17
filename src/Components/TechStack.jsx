import { Link } from "react-router-dom";

function TechStack() {
  const skills = [
    {
      name: "HTML",
      level: "Strong foundation",
      icon: "fa-brands fa-html5",
      color: "text-orange-400",
    },
    {
      name: "CSS",
      level: "Layouts and styling",
      icon: "fa-brands fa-css3-alt",
      color: "text-blue-400",
    },
    {
      name: "JavaScript",
      level: "DOM and logic",
      icon: "fa-brands fa-js",
      color: "text-yellow-300",
    },
    {
      name: "React",
      level: "Components and state",
      icon: "fa-brands fa-react",
      color: "text-sky-400",
    },
    {
      name: "Tailwind CSS",
      level: "Responsive UI",
      icon: "fa-solid fa-wind",
      color: "text-cyan-300",
    },
    {
      name: "Git",
      level: "Version control",
      icon: "fa-brands fa-git-alt",
      color: "text-red-400",
    },
    {
      name: "GitHub",
      level: "Projects and deploy",
      icon: "fa-brands fa-github",
      color: "text-white",
    },
    {
      name: "Responsive Design",
      level: "Mobile-first pages",
      icon: "fa-solid fa-mobile-screen",
      color: "text-emerald-400",
    },
  ];

  const learningSkills = [
    {
      name: "C++",
      level: "basic",
      icon: "fa-solid fa-code",
      color: "text-blue-300",
    },
    {
      name: "C#",
      level: "Currently learning",
      icon: "fa-solid fa-code",
      color: "text-purple-300",
    },
    {
      name: "Python",
      level: "Currently learning",
      icon: "fa-brands fa-python",
      color: "text-yellow-300",
    },
    {
      name: "Java",
      level: "Currently learning",
      icon: "fa-brands fa-java",
      color: "text-red-300",
    },
    {
      name: "Oracle Database",
      level: "Currently learning",
      icon: "fa-solid fa-database",
      color: "text-red-400",
    },
    {
      name: "Microsoft Access",
      level: "Currently learning",
      icon: "fa-solid fa-table",
      color: "text-pink-300",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 px-4 pt-28 pb-20 text-white">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-sky-300"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back to Home
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sky-400 font-semibold uppercase tracking-wide">
            Skills
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Tech Stack
          </h1>

          <p className="mt-5 text-slate-300 leading-relaxed">
            Tools and technologies I use to build responsive, clean, and
            user-friendly frontend websites.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white">
            Frontend Skills
          </h2>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-400/70 hover:bg-white/[0.07]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-2xl ${skill.color}`}
                >
                  <i className={skill.icon}></i>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold text-white">
            Currently Learning
          </h2>

          <p className="mt-3 text-slate-400">
            Programming and database topics I am studying to improve my
            foundation as a developer.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningSkills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-400/70 hover:bg-white/[0.07]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-2xl ${skill.color}`}
                >
                  <i className={skill.icon}></i>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-bold text-sky-400">
            Current Focus
          </h2>

          <p className="mt-4 text-slate-300 leading-relaxed">
            I am improving my React skills by building reusable components,
            dynamic pages, product filtering, cart logic, and responsive layouts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechStack;