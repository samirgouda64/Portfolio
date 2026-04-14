import wanderlust from "../assets/wanderlust.png";
import Workzen from "../assets/workzen.png";
import videocall from "../assets/apnavideo.png";

const projects = [
  {
    id: 1,
    title: "Wanderlust – Hotel Booking",
    description: "MERN app with JWT & Cloudinary",
    image: wanderlust,
    github: "https://github.com/samirgouda64/Wanderlust",
    live: "https://wanderlust-frontend-4oz6.onrender.com"
  },
  {
    id: 2,
    title: "ApnaVideoCall",
    description: "WebRTC + WebSocket app",
    image: videocall,
    github: "https://github.com/samirgouda64/Apna_video_call",
    live: "https://apnavideocall-onkf.onrender.com/"
  },
  {
    id: 3,
    title: "Workzen Technology",
    description: "Employee Management System with Laravel",
    image: Workzen,
    github: "https://github.com/samirgouda64/laravel_project",
    live: ""
  }
];

export default projects;