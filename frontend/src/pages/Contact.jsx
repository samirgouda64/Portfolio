import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10 text-center"
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>

      <p className="text-gray-600 mb-4">samirgouda439@gmail.com</p>

      <a
        href="https://www.linkedin.com/in/samira-gouda/"
        target="_blank"
        className="text-blue-600 underline"
      >
        LinkedIn Profile
      </a>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Send Message
      </motion.button>
    </motion.div>
  );
}