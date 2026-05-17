function Footer() {
  const links = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/vincenzo888111",
      icon: "fa-brands fa-github",
    },
    {
      name: "Email",
      href: "mailto:kornvathanak@gmail.com",
      icon: "fa-solid fa-envelope",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-white">Vathanak Portfolio</p>
          <p className="mt-1 text-sm text-slate-400">
            © 2026 Vathanak. Built with React and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 transition hover:text-sky-400"
            >
              {link.name}
            </a>
          ))}

          <div className="hidden h-5 w-px bg-white/10 md:block"></div>

          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.name === "GitHub" ? "_blank" : undefined}
              rel={item.name === "GitHub" ? "noreferrer" : undefined}
              aria-label={item.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;