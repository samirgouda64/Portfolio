export default function Skills() {
  const skills = [
    "JavaScript", "PHP", "SQL",
    "Node.js", "Express.js", "Laravel",
    "React.js", "MongoDB", "PostgreSQL",
    "WebSocket", "WebRTC", "JWT",
    "Git", "Postman", "Cloudinary"
  ];

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>

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
    </div>
  );
}