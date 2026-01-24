// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useMotionValue,
//   useMotionTemplate,
//   AnimatePresence,
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
//   Download,
//   Trophy,
//   Phone,
//   X,
//   Loader2,
// } from "lucide-react";

// /**
//  * KHUSHI BANSAL PORTFOLIO
//  * Theme: Premium Deep Slate (Dense/Fruitful Layout)
//  * Update: Mobile Responsiveness (375x667px optimized)
//  */
// //--- 1. Custom Toast Component ---
// const Toast = ({ message, isVisible, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, y: 50, scale: 0.3 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 20, scale: 0.5 }}
//           className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700"
//         >
//           <CheckCircle2 className="text-emerald-500" size={24} />
//           <span className="font-bold text-sm">{message}</span>
//           <button onClick={onClose} className="ml-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
//             <X size={18} />
//           </button>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // --- 2. Custom Success Modal Component ---
// const SuccessModal = ({ isOpen, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
//           />
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0, y: 20 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.9, opacity: 0, y: 20 }}
//             className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-white/10 text-center"
//           >
//             <button 
//               onClick={onClose}
//               className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors"
//             >
//               <X size={20} />
//             </button>
//             <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
//               <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />
//             </div>
//             <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
//               Message Sent!
//             </h3>
//             <p className="text-slate-600 dark:text-slate-300 mb-8 text-sm leading-relaxed">
//               Thanks for reaching out, <b>Khushi</b> will get back to you soon.
//             </p>
//             <button
//               onClick={onClose}
//               className="w-full py-3.5 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
//             >
//               Close
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };
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
//     links: {
//       live: "#",
//       repo: "https://github.com/KhushiBansal",
//     },
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
//     links: {
//       live: "#",
//       repo: "https://github.com/KhushiBansal",
//     },
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
//     icon: <Heart size={18} />,
//     image:
//       "https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80",
//     links: {
//       live: "#",
//       repo: "https://github.com/KhushiBansal",
//     },
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
//     links: {
//       live: "#",
//       repo: "https://github.com/KhushiBansal",
//     },
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
//     links: {
//       live: "#",
//       repo: "https://github.com/KhushiBansal",
//     },
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
//     details: "Rank 1 in College | Rank 18 in GGSIPU | CGPA: 9.52",
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
//     { name: "Next.js", icon: Globe, status: "Learning" },
//     { name: "Tailwind CSS", icon: Layout },
//     { name: "HTML/CSS", icon: Code },
//     { name: "JavaScript", icon: Terminal },
//   ],
//   "Backend & Cloud": [
//     { name: "Node.js", icon: Server },
//     { name: "Express.js", icon: Zap },
//     { name: "MongoDB", icon: Database },
//     { name: "Prisma", icon: Database },
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

//     const particleCount = window.innerWidth < 768 ? 20 : 60; // Reduced for mobile performance
//     const connectionDistance = window.innerWidth < 768 ? 100 : 150;
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
//         this.x = (this.x + width) % width;
//         this.y = (this.y + height) % height;

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
//     <div className="w-full overflow-hidden bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-white/5 py-4 md:py-6 backdrop-blur-sm relative z-20">
//       <motion.div
//         className="flex gap-8 md:gap-16 w-max"
//         animate={{ x: [0, -1500] }}
//         transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
//       >
//         {marqueeItems.map((tech, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-2 md:gap-3 opacity-70 hover:opacity-100 transition-opacity"
//           >
//             <tech.icon
//               size={16}
//               className="text-blue-600 dark:text-blue-400 md:w-5 md:h-5"
//             />
//             <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
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
//             <a href={project.links.live} target="_blank" rel="noreferrer">
//               <ExternalLink
//                 size={18}
//                 className="text-slate-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
//               />
//             </a>
//           </div>
//           <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
//             {project.subtitle}
//           </p>
//         </div>

//         <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
//           {project.description}
//         </p>

//         <div className="space-y-2 pt-6 border-t border-slate-100 dark:border-white/5 mb-6">
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

//         <div className="flex gap-3 mt-auto">
//           <a
//             href={project.links.repo}
//             target="_blank"
//             rel="noreferrer"
//             className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
//           >
//             <Github size={14} /> View Code
//           </a>
//           <a
//             href={project.links.live}
//             target="_blank"
//             rel="noreferrer"
//             className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-600/20 transition-colors"
//           >
//             <ExternalLink size={14} /> Live Demo
//           </a>
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
//       body.style.background = "#020617";
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       root.style.colorScheme = "light";
//       body.style.background = "#fafafa";
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);
// // --- Form State Logic ---
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [showToast, setShowToast] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch("https://formspree.io/f/xkogvren", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         setShowModal(true);
//         setShowToast(true);
//         setTimeout(() => setShowToast(false), 5000);
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       alert("Error sending message.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <div
//       className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${
//         darkMode ? "bg-slate-950" : "bg-[#fafafa]"
//       }`}
//     >
//       <NetworkBackground darkMode={darkMode} />
//       <AmbientOrbs />

//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-violet-600 z-[100] origin-left"
//         style={{ scaleX }}
//       />

//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* HERO SECTION 
//             Changes: 
//             - min-h set to handle content overflow on mobile
//             - Padding adjusted for mobile readability
//         */}
//         <section className="min-h-screen lg:min-h-[750px] flex flex-col justify-center relative pt-24 pb-32 lg:pt-20 lg:pb-32">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full flex-grow">
//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="flex flex-col justify-center"
//             >
//               <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
//                 <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 shrink-0 group mx-auto md:mx-0">
//                   <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
//                   <img
//                     src="./pic2.jpeg"
//                     alt="Khushi"
//                     className="relative w-full h-full rounded-full object-cover border-2 border-white dark:border-white/10"
//                   />
//                 </div>
//                 <div className="text-center md:text-left">
//                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3 backdrop-blur-sm">
//                     <span className="relative flex h-2 w-2">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
//                       <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
//                     </span>
//                     <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
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

//               <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white mb-6 text-center md:text-left">
//                 FULL STACK
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400 block">
//                   ENGINEER.
//                 </span>
//               </h1>

//               <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium max-w-lg text-center md:text-left mx-auto md:mx-0">
//                 Architecting scalable web solutions with a focus on security,
//                 performance, and pixel-perfect user experiences.
//               </p>

//               <div className="flex items-center justify-center md:justify-start gap-6 mb-6">
//                 <a
//                   href="https://www.linkedin.com/in/khushi-bansal-3ba067263"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   <Linkedin size={20} /> LinkedIn
//                 </a>
//                 <a
//                   href="https://github.com/Khushibansal777"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   <Github size={20} /> GitHub
//                 </a>
//               </div>

//               <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
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
//                     className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
//                 <a
//                   href="#projects"
//                   className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg hover:shadow-xl text-sm"
//                 >
//                   View Projects <ChevronRight size={18} />
//                 </a>
//                 <a
//                   href="./resume.pdf"
//                   download="Khushi_Bansal_Resume.pdf"
//                   className="px-8 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-300 dark:border-white/10 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white text-sm flex items-center gap-2"
//                 >
//                   Download Resume <Download size={18} />
//                 </a>
//               </div>
//             </motion.div>

//             {/* ✨ COMPACT GRID LAYOUT (Bento Style) */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="flex flex-col gap-6 h-full"
//             >
//               {/* --- TOP ROW (Split 40% | 60%) --- */}
//               <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
//                 {/* LEFT COLUMN: Ranks + Certification (Stack) */}
//                 <div className="md:col-span-2 flex flex-col gap-4 h-full">
//                   {/* Card 1: Ranks */}
//                   <div className="flex-[1.2] p-5 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group min-h-[220px]">
//                     <div className="absolute top-0 right-0 p-16 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
//                     <div className="relative z-10 flex flex-col h-full justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
//                           <Award size={16} className="text-yellow-300" />
//                         </div>
//                         <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100 opacity-90">
//                           Consistently Ranked Top
//                         </span>
//                       </div>
//                       <div className="space-y-1 my-2">
//                         <div className="flex items-baseline justify-between">
//                           <h3 className="text-3xl font-black leading-none tracking-tight">
//                             Rank 01
//                           </h3>
//                           <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">
//                             College
//                           </span>
//                         </div>
//                         <div className="w-full h-px bg-white/10 my-1"></div>
//                         <div className="flex items-baseline justify-between">
//                           <h3 className="text-xl font-bold leading-none text-blue-100">
//                             Rank 18
//                           </h3>
//                           <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
//                             GGSIPU Univ.
//                           </span>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md">
//                           <Sparkles size={12} className="text-yellow-300" />
//                           <span className="text-xs font-bold text-white">
//                             CGPA: 9.52
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Card 2: Python Data Science */}
//                   <a
//                     href="https://drive.google.com/file/d/1cs76M3uAhSrrXF2aetG3qYO1U-S4Lfgc/view"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex-1 p-5 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-center cursor-pointer min-h-[140px]"
//                   >
//                     <div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-500 transition-colors">
//                       <ArrowUpRight size={18} />
//                     </div>
//                     <div className="relative z-10">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
//                           <BarChart3 size={18} />
//                         </div>
//                         <div className="flex flex-col">
//                           <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                             NPTEL Certification
//                           </span>
//                           <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
//                             IIT Madras • Jul-Aug '24
//                           </span>
//                         </div>
//                       </div>
//                       <h4 className="text-lg font-black text-slate-900 dark:text-slate-100 leading-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                         Python for Data Science
//                       </h4>
//                       <div className="flex gap-2">
//                         <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-[10px] font-bold uppercase flex items-center gap-1.5 group-hover:bg-amber-500/20 transition-colors">
//                           <Trophy size={12} /> Elite + Silver
//                         </span>
//                       </div>
//                     </div>
//                   </a>
//                 </div>

//                 {/* RIGHT COLUMN: Education Journey (Takes full height of top row) */}
//                 <div className="md:col-span-3 h-full">
//                   <div className="h-full px-6 pt-6 pb-10 rounded-3xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/5 backdrop-blur-sm flex flex-col justify-center min-h-[380px]">
//                     <h4 className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-8">
//                       Education Journey
//                     </h4>
//                     <div className="flex flex-col gap-8">
//                       {education.map((edu, i) => (
//                         <div key={i} className="flex gap-4 relative">
//                           {i !== education.length - 1 && (
//                             <div className="absolute left-[5px] top-3 bottom-[-34px] w-0.5 bg-slate-200 dark:bg-white/10"></div>
//                           )}
//                           <div className="mt-1 w-3 h-3 rounded-full bg-blue-500 shrink-0 ring-4 ring-white dark:ring-slate-900 z-10"></div>
//                           <div>
//                             <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">
//                               {edu.degree}
//                             </p>
//                             <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
//                               {edu.institution}
//                             </p>
//                             <p className="text-[10px] font-mono text-slate-400 mt-1">
//                               {edu.period}
//                             </p>
//                             <span className="inline-block mt-2 px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-[10px] font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
//                               {edu.details}
//                             </span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* --- BOTTOM ROW: SIH Finalist (Full Width) --- */}
//               <div className="w-full">
//                 <div className="p-1 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
//                   <div className="h-full px-8 py-6 rounded-[22px] bg-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
//                     {/* Background Decor */}
//                     <div className="absolute -right-10 -bottom-10 text-white/10 rotate-12 transform group-hover:scale-110 transition-transform duration-700">
//                       <Trophy size={180} />
//                     </div>

//                     {/* Left Content */}
//                     <div className="relative z-10 flex-1">
//                       <div className="flex items-center gap-3 mb-3">
//                         <span className="px-3 py-1 rounded-full bg-white/20 border border-white/20 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
//                           <Trophy size={14} className="text-yellow-300" />{" "}
//                           National Finalist
//                         </span>
//                         <span className="text-white/60 text-xs font-medium uppercase tracking-wider">
//                           Top 0.1% Teams
//                         </span>
//                       </div>
//                       <h3 className="text-3xl md:text-4xl font-black text-white leading-none mb-2">
//                         SIH 2025
//                       </h3>
//                       <p className="text-blue-100 text-sm font-medium leading-relaxed max-w-xl">
//                         Led a team of 6 to the Grand Finale of Smart India
//                         Hackathon, selected among 1.41 lakh teams nationwide.
//                         Architected the 'Health Buddy' platform.
//                       </p>
//                     </div>

//                     {/* Right Stats / Action */}
//                     <div className="relative z-10 flex flex-col items-end gap-2">
//                       <div className="text-right">
//                         <p className="text-4xl font-black text-white leading-none">
//                           1.4L+
//                         </p>
//                         <p className="text-blue-200 text-xs uppercase font-bold tracking-widest">
//                           Teams Competed
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* ✨ MARQUEE (Fixed Position: Bottom-0) */}
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen max-w-[100vw] z-30">
//             <TechMarquee />
//           </div>
//         </section>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* PROJECTS SECTION */}
//         <section id="projects" className="pt-12 pb-24">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
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

//             <div className="mt-16 lg:mt-0">
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
//                           className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm transition-all hover:border-blue-500/50 hover:shadow-md relative overflow-hidden"
//                         >
//                           {s.status === "Learning" && (
//                             <div className="absolute top-0 right-0 p-1">
//                               <span className="flex h-2 w-2">
//                                 <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-amber-400 opacity-75"></span>
//                                 <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
//                               </span>
//                             </div>
//                           )}

//                           <s.icon
//                             size={18}
//                             className={`${
//                               s.status === "Learning"
//                                 ? "text-amber-500"
//                                 : "text-blue-600 dark:text-blue-400"
//                             }`}
//                           />
//                           <div className="flex flex-col">
//                             <span className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-none">
//                               {s.name}
//                             </span>
//                             {s.status === "Learning" && (
//                               <span className="text-[9px] font-bold text-amber-500 uppercase tracking-wider mt-1">
//                                 Learning
//                               </span>
//                             )}
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

// <section id="contact" className="py-24 md:py-32 relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 dark:to-slate-950 -z-10" />
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-16">
//               <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="inline-block p-4 rounded-2xl bg-white dark:bg-white/5 shadow-xl mb-6 text-blue-600 dark:text-blue-400">
//                 <Mail size={32} />
//               </motion.div>
//               <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-slate-100">Let's Connect</h2>
//               <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">Open to full-time opportunities and freelance collaborations. Let's build something exceptional.</p>
//             </div>
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-12 shadow-2xl border border-slate-100 dark:border-white/5">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Name</label>
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600" />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center justify-between">
//                     <span>Contact Number</span>
//                     <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Optional</span>
//                   </label>
//                   <div className="relative">
//                     <div className="absolute top-1/2 -translate-y-1/2 left-6 text-slate-400"><Phone size={18} /></div>
//                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full pl-14 pr-6 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600" />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
//                   <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project..." className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"></textarea>
//                 </div>
//                 <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed">
//                   {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Sending...</> : <>Send Message <Send size={20} /></>}
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </section>

//         <footer className="py-12 border-t border-slate-200 dark:border-white/5 text-center">
//           <h2 className="text-[15vw] md:text-[12vw] font-black text-slate-100 dark:text-white/5 leading-none select-none pointer-events-none tracking-tighter">
//             KHUSHI
//           </h2>
//           <div className="flex justify-center gap-8 mt-[-3vw] relative z-10">
//             <a
//               // This link forces a "Compose" window in Gmail
//               href="https://mail.google.com/mail/?view=cm&fs=1&to=khushibansal787@gmail.com"
//               target="_blank"
//               rel="noreferrer"
//               className="p-3 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/20"
//             >
//               <Mail size={20} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/khushi-bansal-3ba067263"
//               className="p-3 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
//             >
//               <Linkedin size={20} />
//             </a>
//             <a
//               href="https://github.com/Khushibansal777"
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
// <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
//       <Toast message="Message sent successfully!" isVisible={showToast} onClose={() => setShowToast(false)} />
//     </div>
//   );
// }
//option
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Award,
  Code, // <--- Added this back
  BookOpen,
  ShoppingCart,
  Users,
  Heart,
  CheckCircle2,
  Send,
  Sparkles,
  Terminal,
  Database,
  Layers,
  Globe,
  Cpu,
  Zap,
  PenTool,
  GitBranch,
  BarChart3,
  Binary,
  Layout,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Server,
  Cloud,
  Download,
  Trophy,
  Phone,
  X,
  Loader2,
  Medal,
  Maximize2,
} from "lucide-react";


//--- 1. Custom Toast Component ---
const Toast = ({ message, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <CheckCircle2 className="text-emerald-500" size={20} />
          <span className="font-bold text-sm">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- 2. Custom Success Modal Component ---
// --- 2. Custom Success Modal Component ---
const SuccessModal = ({ isOpen, onClose }) => {
  // Particle component for the "confetti" explosion
  const Particle = ({ angle, delay, distance }) => (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: Math.cos(angle * (Math.PI / 180)) * distance,
        y: Math.sin(angle * (Math.PI / 180)) * distance,
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
        times: [0, 0.2, 1],
      }}
      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 z-0"
    />
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 25 },
            }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-white/10 text-center overflow-hidden"
          >
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-b from-blue-500/5 via-transparent to-transparent opacity-50" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-600 dark:hover:text-white rounded-full transition-colors z-20"
            >
              <X size={20} />
            </button>

            {/* Icon Animation Container */}
            <div className="relative mb-6 flex justify-center items-center">
              {/* Particles/Confetti */}
              {[...Array(8)].map((_, i) => (
                <Particle
                  key={i}
                  angle={i * 45}
                  delay={0.2}
                  distance={60}
                />
              ))}

              {/* Main Icon Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
                className="relative z-10 w-20 h-20 bg-gradient-to-tr from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20 rounded-full flex items-center justify-center border-[3px] border-white dark:border-slate-800 shadow-xl"
              >
                <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-pulse" />
                <CheckCircle2
                  className="text-emerald-500 dark:text-emerald-400 drop-shadow-sm"
                  size={40}
                  strokeWidth={2.5}
                />
              </motion.div>
            </div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                Message Sent!
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed px-4">
                Thanks for reaching out! <br />
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  Khushi
                </span>{" "}
                has received your message and will get back to you shortly.
              </p>

              {/* Action Button */}
              <button
                onClick={onClose}
                className="group relative w-full py-3.5 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-bold text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Done <ArrowUpRight size={16} />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- 3. Image Lightbox Modal ---
const ImageModal = ({ isOpen, image, title, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl max-h-full flex flex-col items-center"
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
               <img
                src={image}
                alt={title}
                className="w-auto max-h-[80vh] object-contain"
              />
            </div>
            <p className="mt-3 text-white font-bold text-sm">{title}</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Static Data ---

const projectData = [
  {
    title: "Health Buddy",
    subtitle: "SIH 2025 Grand Finalist",
    description:
      "A 4-tier mental wellbeing hub connecting therapists and users.",
    tags: ["React", "Node.js", "WebRTC", "Socket.io", "ML"],
    highlights: [
      "Anonymous Login",
      "Role-based secure workflows",
      "AI-driven ethical monitoring",
    ],
    icon: <Heart size={16} />,
    image:
      "./soulspace.png",
    links: {
      live: "https://www.youtube.com/watch?v=V39ldwAi-Fg", // Put your video link here
      repo: null, // setting to null hides the button
      liveLabel: "Demo Video", // Custom label for this project
    },
  },
  {
    title: "Modern LMS",
    subtitle: "Deployed on Azure",
    description:
      "Full-stack Learning Management System with multi-role architecture (Super Admin, Instructor, User).",
    tags: ["Azure", "Nginx", "React", "Node.js", "MongoDB"],
    highlights: [
      "Scalable Production Deployment",
      "Certificate Generation",
      "Course Builder Module inclusing Videos , Quizes , Assignments",
    ],
    icon: <BookOpen size={16} />,
    image:
      "./lms.png",
    links: {
      live: null, // Hides "Live Demo"
      repo: null, // Hides "View Code"
    },
  },
  {
    title: "Women Safety App",
    subtitle: "3rd Position @ Tech Fest",
    description:
      "Real-time distress alert system enabling women to broadcast SOS to emergency contacts.",
    tags: ["MERN Stack", "JWT", "Google Maps API"],
    highlights: [
      "Real-time SOS Broadcasting",
      "Pincode-specific Alerts",
      "Google Maps API Integration",
    ],
    icon: <Heart size={16} />,
    image:
      "./womensafety.png",
    links: {
      live: "https://women-safety-2b3z.vercel.app/",
      repo: "https://github.com/Khushibansal777/Women-Safety",
    },
  },
  {
    title: "Electronics Hub",
    subtitle: "B2B/B2C Marketplace",
    description:
      "Responsive e-commerce platform with B2B bulk enquiry support. Features admin-to-user quotation.",
    tags: ["React", "Node.js", "EmailJS", "JWT"],
    highlights: [
      "Automated Quotation System",
      "Admin Dashboard approves the order , can manage categories on platform",
      "Supports B2C , B2B Bulk Enquiries",
    ],
    icon: <ShoppingCart size={16} />,
    image:
      "./electromart.png",
    links: {
      live: "https://electromart-phdr-1bvij9ekw-khushi-bansals-projects-35607dc9.vercel.app/",
      repo: "https://github.com/Khushibansal777/Electromart",
    },
  },
  {
    title: "Employee Mgmt",
    subtitle: "Enterprise Dashboard",
    description:
      "Frontend-focused system for workforce tracking. Implemented role-based authentication.",
    tags: ["React", "Tailwind CSS", "Auth"],
    highlights: [
      "Role-Based Access Control",
      "Task Categorization",
      "Interactive Dashboards",
    ],
    icon: <Users size={16} />,
    image:
      "./ems.png",
    links: {
      live: "https://employee-management-system-frontend-iota.vercel.app/",
      repo: "https://github.com/Khushibansal777/Employee-Management-system-frontend",
    },
  },
];

const certifications = [
  {
    title: "Software Intern",
    issuer: "Opsight AI Pvt Ltd",
    date: "July 2025– November 2025",
    credentialId: "MERN Stack Specialization",
    image:
      "./testimonial.png",
    color: "from-purple-500 to-violet-600",
  },
  
  {
    title: "Python for Data Science",
    issuer: "NPTEL (IIT Madras)",
    date: "Jul - Aug 2024",
    credentialId: "Elite + Silver Medal",
    image:
      "./ds.png", 
    color: "from-yellow-400 to-amber-600",
  },
  {
    title: "Smart India Hackathon",
    issuer: "Ministry of Education",
    date: "November 2025– December 2025",
    credentialId: "National Grand Finalist",
    image:
      "./sih.jpg",
    color: "from-blue-500 to-indigo-600",
  },
  
  {
    title: "Project Competition Winner",
    issuer: "Technical Festival",
    date: "May 2025",
    credentialId: "3rd Position (RANI Project)",
    image:
      "./techexpo.jpg",
    color: "from-emerald-400 to-green-600",
  },
  
  
  {
    title: "Basic Data Structures & Algos using Python",
    issuer: "NPTEL (IIT Madras)",
    date: "Jul - Sep 2024",
    credentialId: "Elite Certified",
    image:
      "./dsa.png",
    color: "from-rose-500 to-pink-600",
  },
];

const experiences = [
  {
    role: "Software Intern",
    company: "Opsight AI Pvt. Ltd.",
    location: "Noida, New Delhi",
    period: "July 2025 — September 2025",
    description:
      "Contributed to enterprise AI solutions. Focused on optimizing frontend architecture and refining user interaction layers for production-grade applications.",
  },
  {
    role: "Team Lead & Finalist",
    company: "SIH 2025 (Smart India Hackathon)",
    location: "Ongole, Andhra Pradesh",
    period: "Nov 2025 — Dec 2025",
    description:
      "Led a team of 6 members to the Grand Finale, selected among 1.41 lakh national teams. Architected the 'Health Buddy' platform.",
  },
  {
    role: "Technical Member",
    company: "Proximus HMRITM Society",
    location: "New Delhi",
    period: "Mar 2024 — June 2025",
    description:
      "Organized major events including SIH internal hackathons and coding competitions. Designed circulars and proposals.",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "HMR Institute of Tech & Mgmt",
    period: "2022 — 2026",
    details: "Rank 1 in College | Rank 18 in GGSIPU | CGPA: 9.52",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "CBSE Board",
    period: "2022",
    details: "Score: 94.6% (Academic Excellence)",
  },
  {
    degree: "Secondary (X)",
    institution: "CBSE Board",
    period: "2020",
    details: "Score: 92.6% (Academic Excellence)",
  },
];

const techArsenal = {
  "Core & Frontend": [
    { name: "React.js", icon: Code },
    { name: "Next.js", icon: Globe, status: "Learning" },
    { name: "Tailwind CSS", icon: Layout },
    { name: "HTML/CSS", icon: Code },
    { name: "JavaScript", icon: Terminal },
  ],
  "Backend & Cloud": [
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Zap },
    { name: "MongoDB", icon: Database },
    { name: "Prisma", icon: Database },
    { name: "Azure", icon: Cloud },
    { name: "Nginx", icon: Layers },
  ],
  "Data & Tools": [
    { name: "Python", icon: Binary },
    { name: "Pandas/Numpy", icon: BarChart3 },
    { name: "Git/GitHub", icon: GitBranch },
    { name: "C/C++", icon: Cpu },
    { name: "Figma", icon: PenTool },
  ],
};

// --- Visual Components ---

const NetworkBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];

    const particleCount = window.innerWidth < 768 ? 20 : 60; // Reduced for mobile performance
    const connectionDistance = window.innerWidth < 768 ? 100 : 150;
    const mouseDistance = 250;

    let mouse = { x: null, y: null };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 1;
        this.baseColor = darkMode ? "rgba(255, 255, 255," : "rgba(0, 0, 0,";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.x = (this.x + width) % width;
        this.y = (this.y + height) % height;

        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseDistance) {
            const force = (mouseDistance - distance) / mouseDistance;
            this.x += (dx / distance) * force * 0.6;
            this.y += (dy / distance) * force * 0.6;
          }
        }
      }

      draw() {
        ctx.fillStyle = `${this.baseColor} ${darkMode ? 0.3 : 0.1})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      handleResize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance;
            ctx.strokeStyle = darkMode
              ? `rgba(100, 149, 237, ${opacity * 0.15})`
              : `rgba(0, 0, 0, ${opacity * 0.08})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [darkMode]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};

const AmbientOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[120px]" />
  </div>
);

const Navbar = ({ darkMode, setDarkMode }) => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-white/70 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 transition-colors duration-500"
  >
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
        K
      </div>
      <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-slate-100">
        KHUSHI.
      </span>
    </div>

    <div className="flex items-center gap-6">
      <div className="hidden md:flex gap-8 text-xs font-bold text-slate-600 dark:text-slate-300">
        <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Work</a>
        <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-slate-900 dark:text-white"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  </motion.nav>
);

const TechMarquee = () => {
  const allTech = [
    ...techArsenal["Core & Frontend"],
    ...techArsenal["Backend & Cloud"],
    ...techArsenal["Data & Tools"],
  ];
  const marqueeItems = [...allTech, ...allTech, ...allTech];

  return (
    <div className="w-full overflow-hidden bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-white/5 py-4 md:py-6 backdrop-blur-sm relative z-20">
      <motion.div
        className="flex gap-8 md:gap-16 w-max"
        animate={{ x: [0, -1500] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        {marqueeItems.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 md:gap-3 opacity-70 hover:opacity-100 transition-opacity"
          >
            <tech.icon
              size={14}
              className="text-blue-600 dark:text-blue-400 md:w-5 md:h-5"
            />
            <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SectionHeading = ({ title, subtitle, badge }) => (
  <div className="mb-10 md:mb-12 relative z-10">
    {badge && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
          {badge}
        </span>
      </motion.div>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-slate-900 dark:text-slate-100"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
    >
      {subtitle}
    </motion.p>
  </div>
);

// --- COMPACT PROJECT CARD ---
// reduced scaling/sizes as requested
const ProjectCard = ({ project }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 z-10 flex flex-col backdrop-blur-sm"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* COMPACT: Reduced Image Height to h-40 */}
      <div className="relative h-40 overflow-hidden bg-slate-100 dark:bg-white/5 border-b border-slate-100 dark:border-white/5 shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />

        <div className="absolute top-3 right-3 p-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg">
          {project.icon}
        </div>

        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 pr-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[9px] font-bold text-white uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* COMPACT: Reduced Padding to p-4 */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            {/* Conditional External Link in Title */}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer">
                <ExternalLink
                  size={16}
                  className="text-slate-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                />
              </a>
            )}
          </div>
          <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-white/5 mb-4">
          {project.highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-[10px] font-medium text-slate-600 dark:text-slate-400"
            >
              <CheckCircle2
                size={12}
                className="text-blue-500 shrink-0 mt-0.5"
              />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* UPDATED BUTTONS SECTION */}
        <div className="flex gap-2 mt-auto">
          {/* Only show View Code if repo link is present */}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[10px] font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            >
              <Github size={12} /> View Code
            </a>
          )}

          {/* Only show Live Demo/Video if live link is present */}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold hover:bg-blue-600/20 transition-colors"
            >
              <ExternalLink size={12} />{" "}
              {project.links.liveLabel || "Live Demo"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPACT CAROUSEL COMPONENT ---
// Keeps the small card width and 4:3 image ratio
const CertificationsCarousel = ({ onSelectImage }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -280 : 280;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Navigation Buttons */}
      <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button
          onClick={() => scroll("left")}
          className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform text-slate-700 dark:text-white"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button
          onClick={() => scroll("right")}
          className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform text-slate-700 dark:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Draggable/Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 pt-2 px-2 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[260px] md:min-w-[300px] snap-center"
          >
            <div 
              onClick={() => onSelectImage(cert)}
              className="h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-pointer"
            >
              {/* Image Container - Aspect Ratio 4:3 */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900/50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-full text-white">
                        <Maximize2 size={20} />
                    </div>
                </div>

                <div
                  className={`absolute top-3 left-3 w-8 h-8 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-lg z-10`}
                >
                  <Medal size={16} />
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                    {cert.date}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate max-w-[160px]">
                    {cert.credentialId}
                  </span>
                  <div className="p-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = document.body;

    if (darkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      body.style.background = "#020617";
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      body.style.background = "#fafafa";
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkogvren", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setShowModal(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${
        darkMode ? "bg-slate-950" : "bg-[#fafafa]"
      }`}
    >
      <NetworkBackground darkMode={darkMode} />
      <AmbientOrbs />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-violet-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Container: Using max-w-6xl for that "80% zoom" feeling (tighter than 7xl) */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION - Tighter Vertical Alignment */}
        <section className="min-h-screen lg:min-h-[600px] flex flex-col justify-center relative pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-10 items-center w-full flex-grow">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-5 mb-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 shrink-0 group mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <img
                    src="./pic2.jpeg"
                    alt="Khushi"
                    className="relative w-full h-full rounded-full object-cover border-2 border-white dark:border-white/10"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-2 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                      Open to Work
                    </span>
                  </div>
                  <h2 className="text-xl font-bold leading-none">
                    <span className="text-slate-500 dark:text-slate-400">
                      Hi, I'm{" "}
                    </span>
                    <span className="text-slate-900 dark:text-slate-100">
                      Khushi Bansal.
                    </span>
                  </h2>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white mb-4 text-center md:text-left">
                FULL STACK
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400 block">
                  ENGINEER.
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium max-w-lg text-center md:text-left mx-auto md:mx-0">
                Architecting scalable web solutions with a focus on security,
                performance, and pixel-perfect user experiences.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-5 mb-5">
                <a
                  href="https://www.linkedin.com/in/khushi-bansal-3ba067263"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href="https://github.com/Khushibansal777"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={18} /> GitHub
                </a>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {[
                  "React",
                  "Node.js",
                  "Azure",
                  "Python",
                  "MongoDB",
                  "Next.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg hover:shadow-xl text-xs"
                >
                  View Projects <ChevronRight size={14} />
                </a>
                <a
                  href="./resume.pdf"
                  download="Khushi_Bansal_Resume.pdf"
                  className="px-6 py-3 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-300 dark:border-white/10 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white text-xs flex items-center gap-2"
                >
                  Download Resume <Download size={14} />
                </a>
              </div>
            </motion.div>

            {/* ✨ COMPACT GRID LAYOUT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2 flex flex-col gap-4 h-full">
                  {/* Card 1: Ranks */}
                  <div className="flex-[1.2] p-4 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group min-h-[180px]">
                    <div className="absolute top-0 right-0 p-12 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-white/10 backdrop-blur-md rounded border border-white/20">
                          <Award size={14} className="text-yellow-300" />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-blue-100 opacity-90">
                          Top Ranker
                        </span>
                      </div>
                      <div className="space-y-1 my-2">
                        <div className="flex items-baseline justify-between">
                          <h3 className="text-2xl font-black leading-none tracking-tight">
                            Rank 01
                          </h3>
                          <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wider">
                            College
                          </span>
                        </div>
                        <div className="w-full h-px bg-white/10 my-1"></div>
                        <div className="flex items-baseline justify-between">
                          <h3 className="text-lg font-bold leading-none text-blue-100">
                            Rank 18
                          </h3>
                          <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">
                            GGSIPU
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/10 border border-white/20 backdrop-blur-md">
                          <Sparkles size={10} className="text-yellow-300" />
                          <span className="text-[10px] font-bold text-white">
                            CGPA: 9.52
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Python Data Science */}
                  <a
                    href="https://drive.google.com/file/d/1cs76M3uAhSrrXF2aetG3qYO1U-S4Lfgc/view"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-center cursor-pointer min-h-[120px]"
                  >
                    <div className="absolute top-3 right-3 text-slate-300 group-hover:text-blue-500 transition-colors">
                      <ArrowUpRight size={16} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-blue-500/10 rounded text-blue-600 dark:text-blue-400">
                          <BarChart3 size={14} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            NPTEL Cert
                          </span>
                        </div>
                      </div>
                      <h4 className="text-base font-black text-slate-900 dark:text-slate-100 leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Python for Data Science
                      </h4>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-[9px] font-bold uppercase flex items-center gap-1 group-hover:bg-amber-500/20 transition-colors">
                          <Trophy size={10} /> Elite + Silver
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="md:col-span-3 h-full">
                  <div className="h-full px-5 pt-5 pb-8 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/5 backdrop-blur-sm flex flex-col justify-center min-h-[320px]">
                    <h4 className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-6">
                      Education Journey
                    </h4>
                    <div className="flex flex-col gap-4">
                      {education.map((edu, i) => (
                        <div key={i} className="flex gap-3 relative">
                          {i !== education.length - 1 && (
                            <div className="absolute left-[4.5px] top-2 bottom-[-20px] w-0.5 bg-slate-200 dark:bg-white/10"></div>
                          )}
                          <div className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 ring-4 ring-white dark:ring-slate-900 z-10"></div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-tight">
                              {edu.degree}
                            </p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                              {edu.institution}
                            </p>
                            <p className="text-[9px] font-mono text-slate-400 mt-0.5">
                              {edu.period}
                            </p>
                            <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-[9px] font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                              {edu.details}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="p-1 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  <div className="h-full px-6 py-5 rounded-[12px] bg-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden group">
                    <div className="absolute -right-8 -bottom-8 text-white/10 rotate-12 transform group-hover:scale-110 transition-transform duration-700">
                      <Trophy size={140} />
                    </div>

                    <div className="relative z-10 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-white/20 border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                          <Trophy size={12} className="text-yellow-300" />{" "}
                          National Finalist
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-none mb-1">
                        SIH 2025
                      </h3>
                      <p className="text-blue-100 text-xs font-medium leading-relaxed max-w-lg">
                        Led a team of 6 to the Grand Finale of Smart India
                        Hackathon, selected among 1.41 lakh teams.
                      </p>
                    </div>

                    <div className="relative z-10 flex flex-col items-end gap-1">
                      <div className="text-right">
                        <p className="text-3xl font-black text-white leading-none">
                          1.4L+
                        </p>
                        <p className="text-blue-200 text-[10px] uppercase font-bold tracking-widest">
                          Teams Competed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-screen max-w-[100vw] z-30">
            <TechMarquee />
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* PROJECTS SECTION */}
        <section id="projects" className="pt-28 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <SectionHeading
              badge="Portfolio"
              title="Featured Projects"
              subtitle="Scalable applications built with modern stacks."
            />
            <div className="hidden md:block mb-6">
              <a
                href="https://github.com/Khushibansal777"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
              >
                View GitHub Profile <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="py-16 border-t border-slate-200 dark:border-white/5"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                title="Professional Journey"
                subtitle="Roles where I've made an impact."
              />
              <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 md:pl-10">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -left-[3rem] md:-left-[3.15rem] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 dark:bg-slate-800 border-[3px] border-white dark:border-slate-900 group-hover:bg-blue-600 transition-colors" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 block group-hover:text-blue-600 transition-colors">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <SectionHeading
                title="Technical Arsenal"
                subtitle="Tools & Technologies I work with."
              />
              <div className="space-y-8">
                {Object.entries(techArsenal).map(([category, skills], i) => (
                  <div key={i}>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                      <span className="w-6 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {skills.map((s, j) => (
                        <motion.div
                          key={j}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm transition-all hover:border-blue-500/50 hover:shadow-md relative overflow-hidden"
                        >
                          {s.status === "Learning" && (
                            <div className="absolute top-0 right-0 p-0.5">
                              <span className="flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                              </span>
                            </div>
                          )}

                          <s.icon
                            size={16}
                            className={`${
                              s.status === "Learning"
                                ? "text-amber-500"
                                : "text-blue-600 dark:text-blue-400"
                            }`}
                          />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-none">
                              {s.name}
                            </span>
                            {s.status === "Learning" && (
                              <span className="text-[8px] font-bold text-amber-500 uppercase tracking-wider mt-0.5">
                                Learning
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CERTIFICATIONS SECTION --- */}
        <section className="py-16 border-t border-slate-200 dark:border-white/5">
          <SectionHeading
            badge="Credentials"
            title="Testimonials & Certifications"
            subtitle="Recognitions for technical excellence."
          />
          <CertificationsCarousel onSelectImage={setSelectedCert} />
        </section>

        <section id="contact" className="py-20 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 dark:to-slate-950 -z-10" />
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block p-3 rounded-xl bg-white dark:bg-white/5 shadow-xl mb-4 text-blue-600 dark:text-blue-400"
              >
                <Mail size={24} />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-slate-900 dark:text-slate-100">
                Let's Connect
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
                Open to full-time opportunities and freelance collaborations.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-10 shadow-2xl border border-slate-100 dark:border-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center justify-between">
                    <span>Contact Number</span>
                    <span className="text-[9px] uppercase text-slate-400 font-bold tracking-wider">
                      Optional
                    </span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400">
                      <Phone size={16} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:ring-2 ring-blue-500 outline-none transition-all dark:text-white font-medium resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-slate-900 dark:bg-blue-600 text-white rounded-lg font-bold text-base hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        <footer className="py-10 border-t border-slate-200 dark:border-white/5 text-center">
          <h2 className="text-[12vw] md:text-[10vw] font-black text-slate-100 dark:text-white/5 leading-none select-none pointer-events-none tracking-tighter">
            KHUSHI
          </h2>
          <div className="flex justify-center gap-6 mt-[-2vw] relative z-10">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=khushibansal787@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/20"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-bansal-3ba067263"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Khushibansal777"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
          <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Engineered in New Delhi, India
          </p>
        </footer>
      </div>
      
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      <ImageModal 
        isOpen={!!selectedCert} 
        image={selectedCert?.image} 
        title={selectedCert?.title} 
        onClose={() => setSelectedCert(null)} 
      />

      <Toast
        message="Message sent successfully!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}