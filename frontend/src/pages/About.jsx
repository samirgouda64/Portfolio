import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10 max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>

      <p className="text-gray-600 text-lg leading-7">
        Backend-focused Software Engineer with 1+ year of experience building scalable REST APIs using Laravel and PostgreSQL.
        I have hands-on experience in MERN stack development, real-time applications using WebRTC and WebSocket,
        and secure authentication using JWT.
        
        I specialize in API design, database optimization, and building production-ready applications.
      </p>
    </motion.div>
  );
}