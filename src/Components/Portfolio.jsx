import pizzaImg from "../assets/pizzaimg.png";
import phoneImg from "../assets/phoneimg.png";
import storeImg from "../assets/storeimg.png";

function Portfolio() {
  const projects = [
    {
      image: phoneImg,
      title: "Phone Product Website",
      type: "Product Landing Page",
      description:
        "A responsive website for displaying phone products with clean layout, product sections, and mobile-friendly design.",
      tech: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      link: "https://vincenzo888111.github.io/phonelabubu/",
    },
    {
      image: pizzaImg,
      title: "Pizza Ordering Website",
      type: "Food Business Website",
      description:
        "A food website project with product cards, menu sections, and simple user interface for browsing pizza items.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "https://vincenzo888111.github.io/pizza_project/",
    },
    {
      image: storeImg,
      title: "SmartTech Store",
      type: "React E-commerce Website",
      status: "In Progress",
      description:
        "A responsive e-commerce website for browsing tech products with product cards, search, filters, cart, quantity update, and checkout flow.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      link: "",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <p className="text-sky-400 font-semibold uppercase tracking-wide">
              Projects
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Selected Work
            </h2>
          </div>

          <p className="max-w-xl text-slate-300 leading-relaxed">
            These projects show my frontend practice, responsive layout skills,
            and progress as an entry-level developer.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-sky-400/70 hover:bg-white/[0.07]"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                {project.status && (
                  <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
                    {project.status}
                  </span>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-sky-400">
                  {project.type}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center font-semibold text-sky-400 transition hover:text-sky-300"
                  >
                    View Project
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ) : (
                  <p className="mt-6 font-semibold text-slate-500">
                    Coming Soon
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;