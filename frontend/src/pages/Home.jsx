import { motion } from "framer-motion";
import projects from "../pages/Projects";

export default function Home() {
  const skills = {
    frontend: ["React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "Laravel", "PHP"],
    database: ["MongoDB", "PostgreSQL", "SQL"],
    tools: ["JWT", "WebSocket", "Git", "REST API"],
  };

  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-700 text-white text-center px-4">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text">
            Samira Gouda
          </span>{" "}
          👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-lg max-w-2xl text-gray-200"
        >
          Full Stack Developer (MERN + Laravel) building scalable web apps 🚀
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-gray-300"
        >
          Frontend • Backend • APIs • Deployment
        </motion.p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/Samir_Resume.pdf"
            download
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
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
        className="p-12 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-600 leading-8 text-lg">
          I am a Full Stack Developer with experience in both frontend and backend technologies.
          I build responsive user interfaces using React and develop scalable backend systems
          using Node.js and Laravel. I specialize in REST APIs, authentication (JWT),
          real-time applications, and production deployment.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-12 bg-gray-100 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>

        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">

          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-3 capitalize text-blue-600">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white shadow px-4 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-12 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-xl p-6 rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-blue-600">
            Software Engineer – Silicon Techlab
          </h3>

          <p className="text-gray-500 mb-4">Feb 2025 – Present</p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Built full stack applications using Laravel</li>
            <li>Developed REST APIs and integrated frontend with backend</li>
            <li>Implemented JWT authentication and role-based access</li>
            <li>Worked with PostgreSQL databases</li>
            <li>Improved performance by optimizing backend queries</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-12 bg-gray-100"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {proj.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {proj.description}
                </p>

                <div className="flex gap-4">
                  <a href={proj.github} target="_blank" className="text-blue-600">
                    GitHub
                  </a>

                  {proj.live && proj.live !== "#" && (
                    <a href={proj.live} target="_blank" className="text-green-600">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="p-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Contact</h2>

        <p className="mb-2 text-lg">📧 samirgouda439@gmail.com</p>

        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/samira-gouda-416b28253/" target="_blank">
            LinkedIn
          </a>

          <a href="https://github.com/samirgouda64" target="_blank">
            GitHub
          </a>
        </div>
      </motion.section>
    </div>
  );
}