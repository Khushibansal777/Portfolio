// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useMotionValue,
//   useMotionTemplate,
// } from "framer-motion";
// import {
//   Sun,
//   Moon,
//   Github,
//   Linkedin,
//   Mail,
//   ArrowUpRight,
//   Award,
//   Code,
//   BookOpen,
//   ShoppingCart,
//   Users,
//   Heart,
//   CheckCircle2,
//   Send,
//   Sparkles,
//   Terminal,
//   Database,
//   Layers,
//   Globe,
//   Cpu,
//   ShieldCheck,
//   Zap,
//   PenTool,
//   GitBranch,
//   BarChart3,
//   Binary,
//   Layout,
//   ChevronRight,
//   ExternalLink,
//   Server,
//   Cloud,
//   MapPin,
//   Briefcase,
//   GraduationCap,
//   FileJson,
//   Palette,
//   FileType,
//   MonitorPlay,
//   Box,
//   Braces,
//   Trophy
// } from "lucide-react";

// /**
//  * KHUSHI BANSAL PORTFOLIO - "Ultimate Professional Hybrid v7 - Refined Compact"
//  * Updates:
//  * 1. Layout: Main container restricted to max-w-7xl with increased padding for side spacing.
//  * 2. Hero Left: Avatar restricted to max-w-sm to appear smaller.
//  * 3. Hero Right: Stats cards padding and height reduced for a compact look.
//  */

// // --- Static Data ---

// const projectData = [
//   {
//     title: "Health Buddy",
//     subtitle: "SIH 2025 Grand Finalist",
//     description:
//       "A 4-tier mental wellbeing hub connecting therapists and users via secure WebRTC video systems. Integrated ML-based monitoring pipeline to analyze conversations for ethical interactions.",
//     tags: ["React", "Node.js", "WebRTC", "Socket.io", "ML"],
//     highlights: [
//       "Real-time video consultations",
//       "Role-based secure workflows",
//       "AI-driven ethical monitoring",
//     ],
//     icon: <Heart size={20} />,
//     image:
//       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
//     color: "from-pink-500 to-rose-500",
//   },
//   {
//     title: "Modern LMS",
//     subtitle: "Deployed on Azure",
//     description:
//       "Full-stack Learning Management System with multi-role architecture (Super Admin, Instructor, User). Deployed on Azure VM with Nginx reverse proxy for high availability.",
//     tags: ["Azure", "Nginx", "React", "Node.js", "MongoDB"],
//     highlights: [
//       "Scalable Production Deployment",
//       "Certificate Generation",
//       "Course Builder Module",
//     ],
//     icon: <BookOpen size={20} />,
//     image:
//       "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     title: "Women Safety App",
//     subtitle: "3rd Position @ Tech Fest",
//     description:
//       "Real-time distress alert system enabling women to broadcast SOS to emergency contacts and nearby users via pincode-based notifications.",
//     tags: ["MERN Stack", "JWT", "Google Maps API"],
//     highlights: [
//       "Real-time SOS Broadcasting",
//       "Pincode-specific Alerts",
//       "Secure REST APIs",
//     ],
//     icon: <ShieldCheck size={20} />,
//     image:
//       "https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80",
//     color: "from-purple-500 to-violet-500",
//   },
//   {
//     title: "Electronics Hub",
//     subtitle: "B2B/B2C Marketplace",
//     description:
//       "Responsive e-commerce platform with B2B bulk enquiry support. Features an admin-to-user quotation system via email for bulk orders.",
//     tags: ["React", "Node.js", "EmailJS", "JWT"],
//     highlights: [
//       "Automated Quotation System",
//       "Admin Dashboard",
//       "B2B Bulk Enquiries",
//     ],
//     icon: <ShoppingCart size={20} />,
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
//     color: "from-orange-500 to-amber-500",
//   },
//   {
//     title: "Employee Mgmt",
//     subtitle: "Enterprise Dashboard",
//     description:
//       "Frontend-focused system for workforce tracking. Implemented role-based authentication and task categorization (Accepted, Completed, Failed).",
//     tags: ["React", "Tailwind CSS", "Auth"],
//     highlights: [
//       "Role-Based Access Control",
//       "Task Categorization",
//       "Interactive Dashboards",
//     ],
//     icon: <Users size={20} />,
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
//     color: "from-emerald-500 to-teal-500",
//   },
// ];

// const experiences = [
//   {
//     role: "Software Intern",
//     company: "Opsight AI Pvt. Ltd.",
//     location: "Noida, New Delhi",
//     period: "July 2025 — Nov 2025",
//     description:
//       "Contributed to enterprise AI solutions. Focused on optimizing frontend architecture and refining user interaction layers for production-grade applications.",
//     type: "Internship",
//   },
//   {
//     role: "Team Lead & Finalist",
//     company: "SIH 2025 (Smart India Hackathon)",
//     location: "Ongole, Andhra Pradesh",
//     period: "Nov 2025 — Dec 2025",
//     description:
//       "Led a team of 6 members to the Grand Finale, selected among 1.41 lakh national teams. Architected the 'Health Buddy' platform.",
//     type: "Competition",
//   },
//   {
//     role: "Technical Member",
//     company: "Proximus HMRITM Society",
//     location: "New Delhi",
//     period: "Mar 2024 — June 2025",
//     description:
//       "Organized major events including SIH internal hackathons and coding competitions. Designed circulars and proposals, ensuring effective technical communication.",
//     type: "Volunteering",
//   },
// ];

// const education = [
//   {
//     degree: "B.Tech in Computer Science",
//     institution: "HMR Institute of Tech & Mgmt",
//     period: "2022 — 2026",
//     details: "Rank 1 in College | Rank 18 in GGSIPU | CGPA: 9.5",
//   },
//   {
//     degree: "Senior Secondary (XII)",
//     institution: "CBSE Board",
//     period: "2022",
//     details: "Score: 94.6% (Academic Excellence)",
//   },
//   {
//     degree: "Secondary (X)",
//     institution: "CBSE Board",
//     period: "2020",
//     details: "Score: 92.6% (Academic Excellence)",
//   },
// ];

// const techArsenal = {
//   "Web Development": [
//     { name: "HTML5", icon: FileType },
//     { name: "CSS3", icon: Palette },
//     { name: "Tailwind", icon: Layout },
//     { name: "Bootstrap", icon: Box },
//     { name: "JavaScript", icon: Braces },
//     { name: "JSON", icon: FileJson },
//     { name: "React.js", icon: Code },
//     { name: "Next.js", icon: Globe },
//     { name: "Node.js", icon: Server },
//     { name: "Express", icon: Zap },
//     { name: "MongoDB", icon: Database },
//     { name: "Prisma", icon: Layers },
//     { name: "Git/GitHub", icon: GitBranch },
//     { name: "Figma", icon: PenTool },
//   ],
//   "Python & Data Science": [
//     { name: "Python", icon: Binary },
//     { name: "Numpy", icon: BarChart3 },
//     { name: "Pandas", icon: Database },
//     { name: "Matplotlib", icon: BarChart3 },
//     { name: "Seaborn", icon: Sparkles },
//   ],
//   "Tools & Deployment": [
//     { name: "VS Code", icon: Terminal },
//     { name: "C / C++", icon: Cpu },
//     { name: "Power BI", icon: BarChart3 },
//     { name: "Vercel", icon: Cloud },
//     { name: "Render", icon: Cloud },
//     { name: "Railway", icon: Server },
//   ],
// };

// // --- Visual Components ---

// const NetworkBackground = ({ darkMode }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let width, height;
//     let particles = [];

//     const particleCount = window.innerWidth < 768 ? 40 : 80;
//     const connectionDistance = 150;
//     const mouseDistance = 250;

//     let mouse = { x: null, y: null };

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     const handleMouseMove = (e) => {
//       mouse.x = e.x;
//       mouse.y = e.y;
//     };

//     const handleMouseLeave = () => {
//       mouse.x = null;
//       mouse.y = null;
//     };

//     class Particle {
//       constructor() {
//         this.x = Math.random() * width;
//         this.y = Math.random() * height;
//         this.vx = (Math.random() - 0.5) * 0.4;
//         this.vy = (Math.random() - 0.5) * 0.4;
//         this.size = Math.random() * 1.5 + 1;
//         this.baseColor = darkMode ? "rgba(255, 255, 255," : "rgba(0, 0, 0,";
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;
//         if (this.x < 0 || this.x > width) this.vx *= -1;
//         if (this.y < 0 || this.y > height) this.vy *= -1;

//         if (mouse.x != null) {
//           let dx = mouse.x - this.x;
//           let dy = mouse.y - this.y;
//           let distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < mouseDistance) {
//             const force = (mouseDistance - distance) / mouseDistance;
//             this.x += (dx / distance) * force * 0.6;
//             this.y += (dy / distance) * force * 0.6;
//           }
//         }
//       }

//       draw() {
//         ctx.fillStyle = `${this.baseColor} ${darkMode ? 0.3 : 0.1})`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     const init = () => {
//       handleResize();
//       particles = [];
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle());
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);
//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });

//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < connectionDistance) {
//             const opacity = 1 - dist / connectionDistance;
//             ctx.strokeStyle = darkMode
//               ? `rgba(100, 149, 237, ${opacity * 0.15})`
//               : `rgba(0, 0, 0, ${opacity * 0.08})`;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//       requestAnimationFrame(animate);
//     };

//     init();
//     animate();

//     window.addEventListener("resize", init);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseout", handleMouseLeave);
//     return () => {
//       window.removeEventListener("resize", init);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseout", handleMouseLeave);
//     };
//   }, [darkMode]);

//   return (
//     <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
//   );
// };

// const AmbientOrbs = () => (
//   <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//     <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[120px]" />
//     <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[120px]" />
//   </div>
// );

// const Navbar = ({ darkMode, setDarkMode }) => (
//   <motion.nav
//     initial={{ y: -100 }}
//     animate={{ y: 0 }}
//     className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5"
//   >
//     <div className="flex items-center gap-3">
//       <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
//         K
//       </div>
//       <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 hidden sm:block">
//         KHUSHI BANSAL
//       </span>
//     </div>

//     <div className="flex items-center gap-4">
//       <div className="hidden md:flex gap-1">
//         {[
//           { name: "Work", href: "#projects" },
//           { name: "Experience", href: "#experience" },
//           { name: "Contact", href: "#contact" },
//         ].map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             className="px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-all"
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//       >
//         {darkMode ? <Sun size={16} /> : <Moon size={16} />}
//       </button>
//     </div>
//   </motion.nav>
// );

// const TechMarquee = () => {
//   const allTech = [
//     ...techArsenal["Web Development"],
//     ...techArsenal["Python & Data Science"],
//     ...techArsenal["Tools & Deployment"],
//   ];
//   const marqueeItems = [...allTech, ...allTech];

//   return (
//     <div className="w-full overflow-hidden bg-slate-100/50 dark:bg-[#0a0a0a]/50 border-y border-slate-200 dark:border-white/5 py-4 backdrop-blur-sm relative z-20">
//       <motion.div
//         className="flex gap-12 w-max"
//         animate={{ x: [0, -2000] }}
//         transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
//       >
//         {marqueeItems.map((tech, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
//           >
//             <tech.icon size={18} className="text-blue-600 dark:text-blue-400" />
//             <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider whitespace-nowrap">
//               {tech.name}
//             </span>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// const SectionHeading = ({ title, subtitle, badge }) => (
//   <div className="mb-10 relative z-10">
//     {badge && (
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-blue-500/10 border border-blue-500/20"
//       >
//         <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
//         <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
//           {badge}
//         </span>
//       </motion.div>
//     )}
//     <motion.h2
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white"
//     >
//       {title}
//     </motion.h2>
//     <motion.p
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.1 }}
//       className="text-base text-slate-600 dark:text-slate-400 max-w-2xl"
//     >
//       {subtitle}
//     </motion.p>
//   </div>
// );

// // --- Enhanced Card Component ---
// const ProjectCard = ({ project }) => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({ currentTarget, clientX, clientY }) {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -5 }}
//       onMouseMove={handleMouseMove}
//       className="group relative h-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300"
//     >
//       {/* Spotlight Effect */}
//       <motion.div
//         className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-10"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(
//               650px circle at ${mouseX}px ${mouseY}px,
//               rgba(59, 130, 246, 0.1),
//               transparent 80%
//             )
//           `,
//         }}
//       />
      
//       {/* Active Border Glow */}
//       <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-blue-500/20 transition-all duration-300 z-20 pointer-events-none" />

//       {/* Image Section */}
//       <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-white/5">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
//         {/* Floating Tags */}
//         <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
//            <div className={`p-1.5 rounded-lg bg-gradient-to-br ${project.color} shadow-lg text-white`}>
//               {project.icon}
//            </div>
//            <div className="flex gap-1 flex-wrap justify-end max-w-[70%]">
//              {project.tags.slice(0, 3).map((tag, i) => (
//                 <span key={i} className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md border border-white/10 rounded">
//                     {tag}
//                 </span>
//              ))}
//            </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-5 relative z-10 flex flex-col h-[calc(100%-12rem)]">
//         <div className="mb-3">
//           <div className="flex items-center justify-between gap-3 mb-1">
//             <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
//                 {project.title}
//             </h3>
//             <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
//           </div>
//           <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
//             {project.subtitle}
//           </p>
//           <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
//             {project.description}
//           </p>
//         </div>

//         <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
//            <ul className="space-y-1.5">
//              {project.highlights.map((h, i) => (
//                 <li key={i} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400">
//                     <CheckCircle2 size={12} className="text-blue-500 shrink-0 mt-0.5" />
//                     <span>{h}</span>
//                 </li>
//              ))}
//            </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- Experience Row ---
// const ExperienceRow = ({ exp, index }) => {
//     return (
//         <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="relative pl-6 md:pl-0"
//         >
//             <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10" />
            
//             <div className={`md:flex items-start justify-between gap-8 group ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
//                 {/* Timeline Dot */}
//                 <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-blue-500 z-10 shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-transform duration-300 group-hover:scale-110" />

//                 {/* Date Side */}
//                 <div className={`hidden md:block w-1/2 pt-0.5 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
//                    <span className="inline-block px-2 py-0.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
//                      {exp.period}
//                    </span>
//                 </div>

//                 {/* Content Side */}
//                 <div className="w-full md:w-1/2 relative">
//                     {/* Mobile Date */}
//                     <span className="md:hidden inline-block mb-2 px-2 py-0.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
//                      {exp.period}
//                     </span>

//                     <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-colors shadow-sm">
//                         <div className="flex justify-between items-start mb-1">
//                              <div>
//                                 <h4 className="text-base font-bold text-slate-900 dark:text-white">
//                                     {exp.role}
//                                 </h4>
//                                 <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
//                                    <Briefcase size={12} /> {exp.company}
//                                 </p>
//                              </div>
//                              <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-white/5">
//                                  {exp.type === "Internship" ? <Zap size={14} className="text-amber-500"/> : 
//                                   exp.type === "Competition" ? <Award size={14} className="text-purple-500"/> :
//                                   <Users size={14} className="text-blue-500"/>}
//                              </div>
//                         </div>
//                         <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
//                             {exp.description}
//                         </p>
//                         <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-500">
//                              <MapPin size={10} /> {exp.location}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }

// // --- Main App ---

// export default function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("theme");
//       if (savedTheme) return savedTheme === "dark";
//       return window.matchMedia("(prefers-color-scheme: dark)").matches;
//     }
//     return true; // Default to dark for that premium feel
//   });
  
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     const body = document.body;
    
//     if (darkMode) {
//       root.classList.add("dark");
//       root.style.colorScheme = "dark";
//       body.style.background = "#020617"; // Slate 950
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       root.style.colorScheme = "light";
//       body.style.background = "#fafafa";
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <div className={`relative min-h-screen transition-colors duration-500 ${darkMode ? "bg-[#020617] text-white" : "bg-[#fafafa] text-slate-900"}`}>
      
//       {/* Dynamic Background FX */}
//       <NetworkBackground darkMode={darkMode} />
//       <AmbientOrbs />
      
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 z-[100] origin-left"
//         style={{ scaleX }}
//       />
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       <main className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-24">
        
//         {/* --- HERO SECTION --- */}
//         <section className="min-h-[80vh] flex flex-col justify-center pb-20">
//             <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
//                 {/* Left Content (Cols 5): Avatar & Intro */}
//                 <div className="lg:col-span-5 flex flex-col items-start text-left sticky top-28">
//                     {/* Avatar Tile moved to Left */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         className="w-full max-w-sm aspect-[4/3] lg:aspect-square relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 group mb-6 shadow-2xl"
//                     >
//                          <img 
//                             src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
//                             alt="Profile" 
//                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                          />
//                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
//                             <div>
//                                 <h3 className="text-white font-bold text-2xl">Khushi Bansal</h3>
//                                 <p className="text-white/70 text-sm flex items-center gap-2">
//                                   <MapPin size={14} /> New Delhi, India
//                                 </p>
//                             </div>
//                          </div>
//                     </motion.div>

//                     <motion.div 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.1 }}
//                         className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
//                     >
//                          <span className="relative flex h-2 w-2">
//                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
//                           <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
//                         </span>
//                         <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
//                             Available for hire
//                         </span>
//                     </motion.div>

//                     <motion.h1 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-4 text-slate-900 dark:text-white"
//                     >
//                         FULL STACK <br/>
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
//                             ENGINEER.
//                         </span>
//                     </motion.h1>

//                     <motion.p 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium"
//                     >
//                         I architect scalable digital solutions. Specializing in high-performance web applications, cloud infrastructure, and AI-integrated workflows.
//                     </motion.p>

//                     <motion.div 
//                          initial={{ opacity: 0, y: 20 }}
//                          animate={{ opacity: 1, y: 0 }}
//                          transition={{ delay: 0.4 }}
//                          className="flex flex-wrap gap-3 w-full"
//                     >
//                         <a href="#projects" className="flex-1 px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-bold text-center text-sm hover:scale-105 transition-transform shadow-xl hover:shadow-blue-500/20">
//                             View Works
//                         </a>
//                         <a 
//                             href="/resume.pdf" 
//                             target="_blank" 
//                             rel="noopener noreferrer" 
//                             download
//                             className="flex-1 px-5 py-3 bg-white border border-slate-200 text-slate-900 dark:bg-white/10 dark:text-white dark:border-white/10 rounded-xl font-bold text-center text-sm hover:bg-slate-50 dark:hover:bg-white/20 transition-colors shadow-sm"
//                         >
//                             Download Resume
//                         </a>
//                     </motion.div>
//                 </div>

//                 {/* Right Content (Cols 7): Stats & Detailed Education */}
//                 <div className="lg:col-span-7 w-full flex flex-col gap-4">
//                     {/* Stats Row 1: Academic & Certs */}
//                     <motion.div 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="grid md:grid-cols-2 gap-4"
//                     >
//                         {/* Card 1: Merged Academic Stats */}
//                         <div className="p-4 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group min-h-[140px] flex flex-col justify-between">
//                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
                            
//                             <div>
//                                 <div className="flex justify-between items-start mb-2">
//                                     <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest">Consistently ranked at the top</p>
//                                     <Award className="text-white/80" size={20} />
//                                 </div>
//                                 <div className="flex items-center gap-2 mb-2">
//                                     <h4 className="text-2xl font-black">Rank 1</h4>
//                                     <span className="inline-block px-2 py-0.5 rounded-md bg-white/20 text-[10px] font-bold uppercase tracking-wide">Present</span>
//                                 </div>
//                                 <p className="text-[11px] text-blue-100 leading-relaxed opacity-90">
//                                     Secured 1st rank in college and 18th rank in GGSIPU with a CGPA of 9.5., proving my ability to learn fast and stay ahead.
//                                 </p>
//                             </div>

//                             <div className="mt-3 pt-3 border-t border-white/10">
//                                  <p className="text-[10px] font-bold text-white uppercase tracking-wide">
//                                     HMR Institute of Technology & Management
//                                  </p>
//                             </div>
//                         </div>

//                         {/* Card 2: Certifications */}
//                         <div className="p-4 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:border-blue-500/30 transition-colors relative min-h-[140px] flex flex-col justify-between">
//                             <div>
//                                 <div className="flex items-center justify-between mb-3">
//                                      <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
//                                         <Sparkles size={20} />
//                                     </div>
//                                     <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-lg">
//                                         Jul - Aug 2024
//                                     </span>
//                                 </div>
//                                 <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">
//                                     Elite + Silver
//                                 </h4>
//                                 <p className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
//                                     Python for Data Science
//                                 </p>
//                             </div>
                            
//                             <div className="pt-3 border-t border-slate-100 dark:border-white/5">
//                                 <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
//                                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
//                                     NPTEL IIT Madras
//                                 </p>
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* Stats Row 2: SIH Finalist Card */}
//                     <motion.div 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.25 }}
//                         className="p-4 rounded-3xl bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg relative overflow-hidden group"
//                     >
//                         <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
                        
//                         <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
//                             <div className="flex gap-3 items-start">
//                                 <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm shrink-0">
//                                     <Trophy size={20} className="text-white" />
//                                 </div>
//                                 <div>
//                                     <div className="flex items-center gap-2 mb-1">
//                                         <h4 className="text-base font-black">SIH 2025 Grand Finalist</h4>
//                                         <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[9px] font-bold uppercase tracking-wider">National</span>
//                                     </div>
//                                     <p className="text-[11px] text-orange-50 font-medium mb-1">Smart India Hackathon • Ongole, AP • Nov-Dec 2025</p>
//                                     <p className="text-[11px] text-orange-100 max-w-lg leading-relaxed">
//                                         Recognized as Grand Finalist by leading a team of 6 members. Selected among top 1.41 Lakh+ national teams.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* Detailed Education Timeline */}
//                     <motion.div 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         className="p-5 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/5 backdrop-blur-sm"
//                     >
//                         <div className="flex items-center justify-between mb-6">
//                             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
//                                 <GraduationCap className="w-4 h-4 text-blue-500" /> Education Journey
//                             </h3>
//                             <span className="w-16 h-[1px] bg-slate-200 dark:bg-white/10"></span>
//                         </div>
                        
//                         <div className="space-y-6">
//                             {education.map((edu, i) => (
//                                 <div key={i} className="flex gap-4 relative group">
//                                     {/* Connecting Line */}
//                                     {i !== education.length - 1 && (
//                                         <div className="absolute left-[9px] top-3 bottom-[-24px] w-0.5 bg-slate-200 dark:bg-white/10 group-hover:bg-blue-500/30 transition-colors"></div>
//                                     )}
                                    
//                                     {/* Timeline Dot */}
//                                     <div className="mt-1.5 w-5 h-5 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-blue-500 shrink-0 z-10 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform"></div>
                                    
//                                     <div className="flex-grow">
//                                         <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-0.5">
//                                             <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                                                 {edu.degree}
//                                             </h4>
//                                             <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded-md whitespace-nowrap">
//                                                 {edu.period}
//                                             </span>
//                                         </div>
//                                         <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5">
//                                             {edu.institution}
//                                         </p>
//                                         <div className="inline-block px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-[10px] font-semibold text-blue-700 dark:text-blue-300">
//                                             {edu.details}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>

//         {/* --- TECH MARQUEE --- */}
//         <TechMarquee />

//         {/* --- PROJECTS --- */}
//         <section id="projects" className="py-20">
//             <SectionHeading 
//                 badge="Portfolio"
//                 title="Featured Works"
//                 subtitle="A collection of technically complex projects designed for scale."
//             />
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projectData.map((p, i) => (
//                     <ProjectCard key={i} project={p} />
//                 ))}
//             </div>
//         </section>

//         {/* --- COMBINED EXPERIENCE & TECH ARSENAL --- */}
//         <section id="experience" className="py-20 border-t border-slate-200 dark:border-white/5">
//              <div className="grid lg:grid-cols-2 gap-12">
                 
//                  {/* Left Column: Experience */}
//                  <div>
//                     <div className="mb-8">
//                         <SectionHeading 
//                             badge="Career"
//                             title="Professional Journey"
//                             subtitle="My progression through internships, leadership roles, and hackathons."
//                         />
//                     </div>
//                     <div className="space-y-8">
//                         {experiences.map((exp, i) => (
//                             <ExperienceRow key={i} exp={exp} index={i} />
//                         ))}
//                     </div>
//                  </div>

//                  {/* Right Column: Technical Arsenal (Compacted) */}
//                  <div>
//                      <div className="mb-8">
//                         <SectionHeading 
//                             badge="Expertise"
//                             title="Technical Arsenal"
//                             subtitle="The comprehensive stack of languages, frameworks, and tools I use."
//                         />
//                      </div>
//                      <div className="grid gap-6">
//                         {Object.entries(techArsenal).map(([cat, skills], i) => (
//                             <div key={i} className="bg-white dark:bg-[#0a0a0a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
//                                 <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-3 border-b border-slate-100 dark:border-white/5 pb-3">
//                                     {cat}
//                                 </h4>
//                                 <div className="flex flex-wrap gap-2">
//                                     {skills.map((skill, j) => (
//                                         <motion.div 
//                                             key={j} 
//                                             whileHover={{ scale: 1.05 }}
//                                             className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-blue-500/30 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 transition-colors cursor-default"
//                                         >
//                                             <skill.icon size={14} className="text-slate-500 dark:text-slate-400" />
//                                             <span className="font-semibold text-[11px] text-slate-700 dark:text-slate-200">
//                                                 {skill.name}
//                                             </span>
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                      </div>
//                  </div>

//              </div>
//         </section>

//         {/* --- CONTACT --- */}
//         <section id="contact" className="py-20 relative overflow-hidden rounded-3xl mb-12">
//             <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900/20 z-0">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900/40 dark:to-indigo-900/40 opacity-90" />
//                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
//             </div>
            
//             <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">
//                  <div className="text-white">
//                      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Let's build something extraordinary.</h2>
//                      <p className="text-blue-100 text-base mb-6 max-w-md">Open for opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                     
//                      <div className="flex gap-3">
//                          <a href="mailto:khushibansal787@gmail.com" className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white hover:text-blue-600 transition-all">
//                              <Mail size={20} />
//                          </a>
//                          <a href="https://linkedin.com/in/KhushiBansal" className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white hover:text-blue-600 transition-all">
//                              <Linkedin size={20} />
//                          </a>
//                          <a href="https://github.com/KhushiBansal" className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white hover:text-blue-600 transition-all">
//                              <Github size={20} />
//                          </a>
//                      </div>
//                  </div>

//                  <form className="bg-white dark:bg-[#0a0a0a] p-6 rounded-2xl shadow-2xl space-y-3">
//                      <div>
//                          <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block ml-1">Name</label>
//                          <input type="text" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" placeholder="John Doe" />
//                      </div>
//                      <div>
//                          <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block ml-1">Email</label>
//                          <input type="email" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" placeholder="john@example.com" />
//                      </div>
//                      <div>
//                          <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block ml-1">Message</label>
//                          <textarea rows="3" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-sm" placeholder="Tell me about your project..."></textarea>
//                      </div>
//                      <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
//                          Send Message <Send size={16} />
//                      </button>
//                  </form>
//             </div>
//         </section>

//         {/* --- FOOTER --- */}
//         <footer className="py-8 border-t border-slate-200 dark:border-white/5 text-center">
//             <h2 className="text-[10vw] font-black text-slate-100 dark:text-white/5 leading-none select-none pointer-events-none tracking-tighter">
//                 KHUSHI
//             </h2>
//             <div className="flex justify-center gap-6 mt-[-2vw] relative z-10">
//                 <a
//                 href="mailto:khushibansal787@gmail.com"
//                 className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
//                 >
//                 <Mail size={18} />
//                 </a>
//                 <a
//                 href="https://linkedin.com/in/KhushiBansal"
//                 className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
//                 >
//                 <Linkedin size={18} />
//                 </a>
//                 <a
//                 href="https://github.com/KhushiBansal"
//                 className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
//                 >
//                 <Github size={18} />
//                 </a>
//             </div>
//             <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                 © 2026 Engineered in New Delhi, India
//             </p>
//         </footer>

//       </main>
//     </div>
//   );
// }

//option
// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useMotionValue,
//   useMotionTemplate,
// } from "framer-motion";
// import {
//   Sun,
//   Moon,
//   Github,
//   Linkedin,
//   Mail,
//   ArrowUpRight,
//   Award,
//   Code,
//   BookOpen,
//   ShoppingCart,
//   Users,
//   Heart,
//   CheckCircle2,
//   Send,
//   GraduationCap,
//   Sparkles,
//   Terminal,
//   Database,
//   Layers,
//   Globe,
//   Cpu,
//   Smartphone,
//   ShieldCheck,
//   Zap,
//   PenTool,
//   GitBranch,
//   BarChart3,
//   Binary,
//   Layout,
//   ChevronRight,
//   ExternalLink,
//   Server,
//   Cloud,
//   Lock,
//   Menu,
// } from "lucide-react";

// /**
//  * KHUSHI BANSAL PORTFOLIO - "Premium Deep Slate Theme"
//  * * DESIGN FIXES:
//  * 1. Background is now Slate-950 (#020617) instead of Pure Black.
//  * 2. Cards use `bg-white/5` (Glass) instead of solid black.
//  * 3. Borders are softer to avoid the "wireframe" look.
//  */

// // --- Static Data ---

// const projectData = [
//   {
//     title: "Health Buddy",
//     subtitle: "SIH 2025 Grand Finalist",
//     description:
//       "A 4-tier mental wellbeing hub connecting therapists and users via secure WebRTC video systems. Integrated ML-based monitoring pipeline to analyze conversations for ethical interactions.",
//     tags: ["React", "Node.js", "WebRTC", "Socket.io", "ML"],
//     highlights: [
//       "Real-time video consultations",
//       "Role-based secure workflows",
//       "AI-driven ethical monitoring",
//     ],
//     icon: <Heart size={18} />,
//     image:
//       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
//   },
//   {
//     title: "Modern LMS",
//     subtitle: "Deployed on Azure",
//     description:
//       "Full-stack Learning Management System with multi-role architecture (Super Admin, Instructor, User). Deployed on Azure VM with Nginx reverse proxy for high availability.",
//     tags: ["Azure", "Nginx", "React", "Node.js", "MongoDB"],
//     highlights: [
//       "Scalable Production Deployment",
//       "Certificate Generation",
//       "Course Builder Module",
//     ],
//     icon: <BookOpen size={18} />,
//     image:
//       "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
//   },
//   {
//     title: "Women Safety App",
//     subtitle: "3rd Position @ Tech Fest",
//     description:
//       "Real-time distress alert system enabling women to broadcast SOS to emergency contacts and nearby users via pincode-based notifications.",
//     tags: ["MERN Stack", "JWT", "Google Maps API"],
//     highlights: [
//       "Real-time SOS Broadcasting",
//       "Pincode-specific Alerts",
//       "Secure REST APIs",
//     ],
//     icon: <ShieldCheck size={18} />,
//     image:
//       "https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80",
//   },
//   {
//     title: "Electronics Hub",
//     subtitle: "B2B/B2C Marketplace",
//     description:
//       "Responsive e-commerce platform with B2B bulk enquiry support. Features an admin-to-user quotation system via email for bulk orders.",
//     tags: ["React", "Node.js", "EmailJS", "JWT"],
//     highlights: [
//       "Automated Quotation System",
//       "Admin Dashboard",
//       "B2B Bulk Enquiries",
//     ],
//     icon: <ShoppingCart size={18} />,
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
//   },
//   {
//     title: "Employee Mgmt",
//     subtitle: "Enterprise Dashboard",
//     description:
//       "Frontend-focused system for workforce tracking. Implemented role-based authentication and task categorization (Accepted, Completed, Failed).",
//     tags: ["React", "Tailwind CSS", "Auth"],
//     highlights: [
//       "Role-Based Access Control",
//       "Task Categorization",
//       "Interactive Dashboards",
//     ],
//     icon: <Users size={18} />,
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
//   },
// ];

// const experiences = [
//   {
//     role: "Software Intern",
//     company: "Opsight AI Pvt. Ltd.",
//     location: "Noida, New Delhi",
//     period: "July 2025 — Nov 2025",
//     description:
//       "Contributed to enterprise AI solutions. Focused on optimizing frontend architecture and refining user interaction layers for production-grade applications.",
//   },
//   {
//     role: "Team Lead & Finalist",
//     company: "SIH 2025 (Smart India Hackathon)",
//     location: "Ongole, Andhra Pradesh",
//     period: "Nov 2025 — Dec 2025",
//     description:
//       "Led a team of 6 members to the Grand Finale, selected among 1.41 lakh national teams. Architected the 'Health Buddy' platform.",
//   },
//   {
//     role: "Technical Member",
//     company: "Proximus HMRITM Society",
//     location: "New Delhi",
//     period: "Mar 2024 — June 2025",
//     description:
//       "Organized major events including SIH internal hackathons and coding competitions. Designed circulars and proposals, ensuring effective technical communication.",
//   },
// ];

// const education = [
//   {
//     degree: "B.Tech in Computer Science",
//     institution: "HMR Institute of Tech & Mgmt",
//     period: "2022 — 2026",
//     details: "Rank 1 in College | Rank 18 in GGSIPU | CGPA: 9.5",
//   },
//   {
//     degree: "Senior Secondary (XII)",
//     institution: "CBSE Board",
//     period: "2022",
//     details: "Score: 94.6% (Academic Excellence)",
//   },
//   {
//     degree: "Secondary (X)",
//     institution: "CBSE Board",
//     period: "2020",
//     details: "Score: 92.6% (Academic Excellence)",
//   },
// ];

// const techArsenal = {
//   "Core & Frontend": [
//     { name: "React.js", icon: Code },
//     { name: "Next.js", icon: Globe },
//     { name: "Tailwind CSS", icon: Layout },
//     { name: "HTML/CSS", icon: Code },
//     { name: "JavaScript", icon: Terminal },
//   ],
//   "Backend & Cloud": [
//     { name: "Node.js", icon: Server },
//     { name: "Express.js", icon: Zap },
//     { name: "MongoDB", icon: Database },
//     { name: "Azure", icon: Cloud },
//     { name: "Nginx", icon: Layers },
//   ],
//   "Data & Tools": [
//     { name: "Python", icon: Binary },
//     { name: "Pandas/Numpy", icon: BarChart3 },
//     { name: "Git/GitHub", icon: GitBranch },
//     { name: "C/C++", icon: Cpu },
//     { name: "Figma", icon: PenTool },
//   ],
// };

// // --- Visual Components ---

// const NetworkBackground = ({ darkMode }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let width, height;
//     let particles = [];

//     const particleCount = window.innerWidth < 768 ? 30 : 60;
//     const connectionDistance = 150;
//     const mouseDistance = 250;

//     let mouse = { x: null, y: null };

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     const handleMouseMove = (e) => {
//       mouse.x = e.x;
//       mouse.y = e.y;
//     };

//     const handleMouseLeave = () => {
//       mouse.x = null;
//       mouse.y = null;
//     };

//     class Particle {
//       constructor() {
//         this.x = Math.random() * width;
//         this.y = Math.random() * height;
//         this.vx = (Math.random() - 0.5) * 0.4;
//         this.vy = (Math.random() - 0.5) * 0.4;
//         this.size = Math.random() * 1.5 + 1;
//         this.baseColor = darkMode ? "rgba(255, 255, 255," : "rgba(0, 0, 0,";
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;
//         if (this.x < 0 || this.x > width) this.vx *= -1;
//         if (this.y < 0 || this.y > height) this.vy *= -1;

//         if (mouse.x != null) {
//           let dx = mouse.x - this.x;
//           let dy = mouse.y - this.y;
//           let distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < mouseDistance) {
//             const force = (mouseDistance - distance) / mouseDistance;
//             this.x += (dx / distance) * force * 0.6;
//             this.y += (dy / distance) * force * 0.6;
//           }
//         }
//       }

//       draw() {
//         ctx.fillStyle = `${this.baseColor} ${darkMode ? 0.3 : 0.1})`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     const init = () => {
//       handleResize();
//       particles = [];
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle());
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);
//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });

//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < connectionDistance) {
//             const opacity = 1 - dist / connectionDistance;
//             ctx.strokeStyle = darkMode
//               ? `rgba(100, 149, 237, ${opacity * 0.15})`
//               : `rgba(0, 0, 0, ${opacity * 0.08})`;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//       requestAnimationFrame(animate);
//     };

//     init();
//     animate();

//     window.addEventListener("resize", init);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseout", handleMouseLeave);
//     return () => {
//       window.removeEventListener("resize", init);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseout", handleMouseLeave);
//     };
//   }, [darkMode]);

//   return (
//     <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
//   );
// };

// const AmbientOrbs = () => (
//   <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//     <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[120px]" />
//     <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[120px]" />
//   </div>
// );

// const Navbar = ({ darkMode, setDarkMode }) => (
//   <motion.nav
//     initial={{ y: -100 }}
//     animate={{ y: 0 }}
//     className="
// fixed top-0 left-0 right-0 z-50 flex items-center justify-between 
// px-6 py-4
// bg-white/70 dark:bg-slate-950/80 backdrop-blur-md 
// border-b border-slate-200/50 dark:border-white/5
// transition-colors duration-500 
// "
//   >
//     <div className="flex items-center gap-2">
//       <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg">
//         K
//       </div>
//       <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-slate-100">
//         KHUSHI.
//       </span>
//     </div>

//     <div className="flex items-center gap-6">
//       <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 dark:text-slate-300">
//         <a
//           href="#projects"
//           className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//         >
//           Work
//         </a>
//         <a
//           href="#experience"
//           className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//         >
//           Experience
//         </a>
//         <a
//           href="#contact"
//           className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//         >
//           Contact
//         </a>
//       </div>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-slate-900 dark:text-white"
//       >
//         {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//       </button>
//     </div>
//   </motion.nav>
// );

// const TechMarquee = () => {
//   const allTech = [
//     ...techArsenal["Core & Frontend"],
//     ...techArsenal["Backend & Cloud"],
//     ...techArsenal["Data & Tools"],
//   ];
//   const marqueeItems = [...allTech, ...allTech, ...allTech];

//   return (
//     <div className="w-full overflow-hidden bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-white/5 py-6 backdrop-blur-sm relative z-20">
//       <motion.div
//         className="flex gap-16 w-max"
//         animate={{ x: [0, -1500] }}
//         transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
//       >
//         {marqueeItems.map((tech, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
//           >
//             <tech.icon size={20} className="text-blue-600 dark:text-blue-400" />
//             <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
//               {tech.name}
//             </span>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// const SectionHeading = ({ title, subtitle, badge }) => (
//   <div className="mb-12 md:mb-16 relative z-10">
//     {badge && (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
//       >
//         <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
//         <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
//           {badge}
//         </span>
//       </motion.div>
//     )}
//     <motion.h2
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-slate-900 dark:text-slate-100"
//     >
//       {title}
//     </motion.h2>
//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.1 }}
//       className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
//     >
//       {subtitle}
//     </motion.p>
//   </div>
// );

// const ProjectCard = ({ project }) => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({ currentTarget, clientX, clientY }) {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -8, scale: 1.02 }}
//       className="group relative h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 z-10 flex flex-col backdrop-blur-sm"
//       onMouseMove={handleMouseMove}
//     >
//       <motion.div
//         className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-20"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(
//               600px circle at ${mouseX}px ${mouseY}px,
//               rgba(59, 130, 246, 0.08),
//               transparent 80%
//             )
//           `,
//         }}
//       />

//       <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-white/5 border-b border-slate-100 dark:border-white/5 shrink-0">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />

//         <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl">
//           {project.icon}
//         </div>

//         <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4">
//           {project.tags.slice(0, 3).map((tag) => (
//             <span
//               key={tag}
//               className="px-2 py-0.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider"
//             >
//               {tag}
//             </span>
//           ))}
//           {project.tags.length > 3 && (
//             <span className="px-2 py-0.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
//               +{project.tags.length - 3}
//             </span>
//           )}
//         </div>
//       </div>

//       <div className="p-8 flex flex-col flex-grow">
//         <div className="mb-4">
//           <div className="flex items-center justify-between mb-1">
//             <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//               {project.title}
//             </h3>
//             <ExternalLink
//               size={18}
//               className="text-slate-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100"
//             />
//           </div>
//           <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
//             {project.subtitle}
//           </p>
//         </div>

//         <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
//           {project.description}
//         </p>

//         <div className="space-y-2 pt-6 border-t border-slate-100 dark:border-white/5">
//           {project.highlights.map((h, i) => (
//             <div
//               key={i}
//               className="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"
//             >
//               <CheckCircle2
//                 size={14}
//                 className="text-blue-500 shrink-0 mt-0.5"
//               />
//               <span>{h}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- Main App ---

// export default function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("theme");
//       if (savedTheme) return savedTheme === "dark";
//       return window.matchMedia("(prefers-color-scheme: dark)").matches;
//     }
//     return false;
//   });

//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     const body = document.body;

//     if (darkMode) {
//       root.classList.add("dark");
//       root.style.colorScheme = "dark";
//       // ✨ CHANGED: Uses slate-950 for a deep rich blue-black instead of void black
//       body.style.background = "#020617";
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       root.style.colorScheme = "light";
//       body.style.background = "#fafafa";
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <div
//       className={`relative min-h-screen transition-colors duration-500 ${
//         // ✨ CHANGED: Background class
//         darkMode ? "bg-slate-950" : "bg-[#fafafa]"
//       }`}
//     >
//       {/* Background Layers */}
//       <NetworkBackground darkMode={darkMode} />
//       <AmbientOrbs />

//       {/* Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-violet-600 z-[100] origin-left"
//         style={{ scaleX }}
//       />

//       {/* Navbar */}
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* --- HERO (COMPACT & DENSE) --- */}
//         <section className="min-h-[85vh] flex items-center justify-center pt-32 pb-12">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full">
//             {/* Left Content: Photo + Text */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="flex flex-col justify-center h-full"
//             >
//               <div className="flex items-center gap-6 mb-8">
//                 {/* Integrated Avatar (Increased Size) */}
//                 <div className="relative w-36 h-36 lg:w-40 lg:h-40 shrink-0 group">
//                   <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
//                   <img
//                     src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
//                     alt="Khushi"
//                     className="relative w-full h-full rounded-full object-cover border-2 border-white dark:border-white/10"
//                   />
//                 </div>
//                 <div>
//                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-2 backdrop-blur-sm">
//                     <span className="relative flex h-2 w-2">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
//                       <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
//                     </span>
//                     <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
//                       Open to Work
//                     </span>
//                   </div>
//                   <h2 className="text-2xl font-bold leading-none">
//                     <span className="text-slate-500 dark:text-slate-400">
//                       Hi, I'm{" "}
//                     </span>
//                     <span className="text-slate-900 dark:text-slate-100">
//                       Khushi Bansal.
//                     </span>
//                   </h2>
//                 </div>
//               </div>

//               <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white mb-6">
//                 FULL STACK
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400 block">
//                   ENGINEER.
//                 </span>
//               </h1>

//               <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium max-w-lg">
//                 Architecting scalable web solutions with a focus on security,
//                 performance, and pixel-perfect user experiences.
//               </p>

//               {/* Tech Stack Strip */}
//               <div className="flex flex-wrap gap-2 mb-8">
//                 {[
//                   "React",
//                   "Node.js",
//                   "Azure",
//                   "Python",
//                   "MongoDB",
//                   "Next.js",
//                 ].map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href="#projects"
//                   className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg hover:shadow-xl text-sm"
//                 >
//                   View Projects <ChevronRight size={16} />
//                 </a>
//                 <a
//                   href="#contact"
//                   className="px-8 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-300 dark:border-white/10 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white text-sm"
//                 >
//                   Contact Me
//                 </a>
//               </div>
//             </motion.div>

//             {/* Right Content: Utilized for Distinctions/Stats */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="flex flex-col gap-6 pt-8 lg:pt-0"
//             >
//               {/* Highlight Card */}
//               <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl relative overflow-hidden">
//                 <div className="absolute top-0 right-0 p-12 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
//                 <div className="relative z-10">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 bg-white/20 rounded-xl">
//                       <Award size={24} />
//                     </div>
//                     <div>
//                       <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">
//                         Academic Excellence
//                       </p>
//                       <h3 className="text-2xl font-black">Rank 1</h3>
//                     </div>
//                   </div>
//                   <p className="text-blue-100 text-sm font-medium">
//                     HMR Institute of Technology (HMRITM)
//                   </p>
//                   <p className="text-blue-100 text-sm">CGPA: 9.5</p>
//                 </div>
//               </div>

//               {/* Specific NPTEL Certifications */}
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm">
//                   <Code className="text-green-500 mb-3" size={24} />
//                   <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
//                     Elite Certified
//                   </h4>
//                   <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">
//                     DSA using Python
//                   </p>
//                   <p className="text-[10px] text-slate-400 mt-0.5">
//                     IIT Madras NPTEL
//                   </p>
//                 </div>
//                 <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm">
//                   <Sparkles className="text-blue-500 mb-3" size={24} />
//                   <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
//                     Elite + Silver
//                   </h4>
//                   <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">
//                     Python for Data Science
//                   </p>
//                   <p className="text-[10px] text-slate-400 mt-0.5">
//                     IIT Madras NPTEL
//                   </p>
//                 </div>
//               </div>

//               {/* Expanded Education List */}
//               <div className="p-6 rounded-3xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/5 backdrop-blur-sm">
//                 <h4 className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-4">
//                   Education Journey
//                 </h4>
//                 <div className="space-y-5">
//                   {education.map((edu, i) => (
//                     <div key={i} className="flex gap-4 items-start relative">
//                       {/* Connecting Line */}
//                       {i !== education.length - 1 && (
//                         <div className="absolute left-[5px] top-2 bottom-[-20px] w-0.5 bg-slate-200 dark:bg-white/10"></div>
//                       )}
//                       <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 ring-4 ring-white dark:ring-slate-900 z-10"></div>
//                       <div>
//                         <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
//                           {edu.degree}
//                         </p>
//                         <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
//                           {edu.institution} • {edu.period}
//                         </p>
//                         <span className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-[10px] font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
//                           {edu.details}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* --- TECH MARQUEE --- */}
//       <TechMarquee />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* --- PROJECTS --- */}
//         <section id="projects" className="py-24">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//             <SectionHeading
//               badge="Portfolio"
//               title="Featured Projects"
//               subtitle="Scalable applications built with modern stacks."
//             />
//             <div className="hidden md:block mb-8">
//               <a
//                 href="https://github.com/KhushiBansal"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
//               >
//                 View GitHub Profile <ArrowUpRight size={16} />
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projectData.map((p, i) => (
//               <ProjectCard key={i} project={p} />
//             ))}
//           </div>
//         </section>

//         {/* --- EXPERIENCE --- */}
//         <section
//           id="experience"
//           className="py-24 border-t border-slate-200 dark:border-white/5"
//         >
//           <div className="grid lg:grid-cols-2 gap-20">
//             <div>
//               <SectionHeading
//                 title="Professional Journey"
//                 subtitle="Roles where I've made an impact."
//               />
//               <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 md:pl-12">
//                 {experiences.map((exp, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     className="relative group"
//                   >
//                     <div className="absolute -left-[3.35rem] md:-left-[3.85rem] top-2 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-900 group-hover:bg-blue-600 transition-colors" />
//                     <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block group-hover:text-blue-600 transition-colors">
//                       {exp.period}
//                     </span>
//                     <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
//                       {exp.role}
//                     </h4>
//                     <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-4">
//                       {exp.company}
//                     </p>
//                     <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
//                       {exp.description}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Skills */}
//             <div>
//               <SectionHeading
//                 title="Technical Arsenal"
//                 subtitle="Tools & Technologies I work with."
//               />
//               <div className="space-y-12">
//                 {Object.entries(techArsenal).map(([category, skills], i) => (
//                   <div key={i}>
//                     <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-3">
//                       <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
//                       {category}
//                     </h4>
//                     <div className="flex flex-wrap gap-3">
//                       {skills.map((s, j) => (
//                         <motion.div
//                           key={j}
//                           whileHover={{ scale: 1.05, y: -2 }}
//                           className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm transition-all hover:border-blue-500/50 hover:shadow-md"
//                         >
//                           <s.icon
//                             size={18}
//                             className="text-blue-600 dark:text-blue-400"
//                           />
//                           <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
//                             {s.name}
//                           </span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* --- CONTACT SECTION --- */}
//         <section id="contact" className="py-32 relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 dark:to-slate-950 -z-10" />
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-16">
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="inline-block p-4 rounded-2xl bg-white dark:bg-white/5 shadow-xl mb-6 text-blue-600 dark:text-blue-400"
//               >
//                 <Mail size={32} />
//               </motion.div>
//               <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-slate-100">
//                 Let's Connect
//               </h2>
//               <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
//                 Open to full-time opportunities and freelance collaborations.
//                 Let's build something exceptional.
//               </p>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-white/5"
//             >
//               <form
//                 action="https://formspree.io/f/xkogvren"
//                 method="POST"
//                 className="space-y-6"
//               >
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       placeholder="John Doe"
//                       className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       placeholder="john@example.com"
//                       className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     required
//                     rows="5"
//                     placeholder="Tell me about your project..."
//                     className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
//                 >
//                   Send Message <Send size={20} />
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </section>

//         {/* --- FOOTER --- */}
//         <footer className="py-12 border-t border-slate-200 dark:border-white/5 text-center">
//           <h2 className="text-[12vw] font-black text-slate-100 dark:text-white/5 leading-none select-none pointer-events-none tracking-tighter">
//             KHUSHI
//           </h2>
//           <div className="flex justify-center gap-8 mt-[-3vw] relative z-10">
//             <a
//               href="mailto:khushibansal787@gmail.com"
//               className="p-3 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
//             >
//               <Mail size={20} />
//             </a>
//             <a
//               href="https://linkedin.com/in/KhushiBansal"
//               className="p-3 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
//             >
//               <Linkedin size={20} />
//             </a>
//             <a
//               href="https://github.com/KhushiBansal"
//               className="p-3 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
//             >
//               <Github size={20} />
//             </a>
//           </div>
//           <p className="mt-10 text-xs font-bold text-slate-400 uppercase tracking-widest">
//             © 2026 Engineered in New Delhi, India
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// }