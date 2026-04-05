import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-5 rounded shadow"
    >
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p>{project.description}</p>
    </motion.div>
  );
}