// import { Link } from "react-router-dom";

// function Certificates() {
//   const certificates = [
//     {
//       title: "Frontend Development Certificate",
//       provider: "Your School / Platform Name",
//       year: "2025",
//     },
//     {
//       title: "Web Design Certificate",
//       provider: "Your School / Platform Name",
//       year: "2025",
//     },
//   ];

//   return (
//     <section className="min-h-screen pt-28 px-4">
//       <div className="max-w-5xl mx-auto">
//         <Link to="/" className="text-sky-400 hover:underline">
//           Back to Home
//         </Link>

//         <h1 className="mt-8 text-4xl font-bold text-sky-400">Certificates</h1>
//         <p className="mt-4 text-slate-300">
//           Certificates and learning achievements from my frontend development journey.
//         </p>

//         <div className="mt-10 grid md:grid-cols-2 gap-6">
//           {certificates.map((item) => (
//             <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-6">
//               <h2 className="text-xl font-semibold">{item.title}</h2>
//               <p className="mt-2 text-slate-300">{item.provider}</p>
//               <p className="mt-2 text-sky-400">{item.year}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certificates;