import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/#home" },
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#portfolio" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-950/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl ">
            <img src="src/assets/image1.png" alt="" className="w-15 h-10 rounded-[50%]" />
          </div>
          <span className="font-bold text-lg">Vathanak Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a key={item.name} href={item.link} className="text-slate-300 hover:text-sky-400">
              {item.name}
            </a>
          ))}

          {/* <Link to="/certificates" className="text-slate-300 hover:text-sky-400">
            Certificates
          </Link> */}

          <Link to="/techstack" className="text-slate-300 hover:text-sky-400">
            Tech Stack
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-slate-950">
          {menuItems.map((item) => (
            <a key={item.name} href={item.link} onClick={() => setOpen(false)}>
              {item.name}
            </a>
          ))}

          <Link to="/certificates" onClick={() => setOpen(false)}>
            Certificates
          </Link>

          <Link to="/techstack" onClick={() => setOpen(false)}>
            Tech Stack
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;