import { motion } from "framer-motion";
import projects from "../pages/Projects";

export default function Home() {
  const skills = [
    "JavaScript",
    "PHP",
    "SQL",
    "Node.js",
    "Express.js",
    "Laravel",
    "React.js",
    "MongoDB",
    "PostgreSQL",
    "WebSocket",
    "WebRTC",
    "JWT",
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Samir Gouda 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-lg max-w-2xl"
        >
          Software Engineer | Backend Developer | MERN Stack
        </motion.p>

        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-6 py-2 rounded font-semibold"
          >
            View Projects
          </a>

          <a
            href="/Samir_Resume.pdf"
            download
            className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>

        <p className="text-gray-600 leading-7">
          Backend-focused Software Engineer with 1+ year experience in Laravel,
          PostgreSQL, and MERN stack. Skilled in REST APIs, JWT authentication,
          real-time applications (WebRTC, WebSocket), and production deployment.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-10 bg-gray-100 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-10 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>

        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-xl font-semibold">
            Software Engineer – Silicon Techlab
          </h3>

          <p className="text-gray-500 mb-4">Feb 2025 – Present</p>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Developed backend using Laravel & PostgreSQL</li>
            <li>Built REST APIs with validation & error handling</li>
            <li>Integrated payment gateway securely</li>
            <li>Optimized DB queries and improved performance</li>
          </ul>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-10 bg-gray-100"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-gray-600 mb-3">{proj.description}</p>

                <div className="flex gap-3">
                  <a
                    href={proj.github}
                    target="_blank"
                    className="text-blue-600"
                  >
                    GitHub
                  </a>

                  <a
                    href={proj.live}
                    target="_blank"
                    className="text-green-600"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="p-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>

        <p className="mb-2">📧 samirgouda439@gmail.com</p>

        <a
          href="https://www.linkedin.com/in/samira-gouda-416b28253/"
          target="_blank"
          className="text-blue-600 underline block"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/samirgouda64?tab=repositories"
          target="_blank"
          className="text-gray-800 underline block mt-2"
        >
          GitHub Profile
        </a>
      </motion.section>
    </div>
  );
}
