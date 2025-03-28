import React from "react";
import { usePDF } from "react-to-pdf";
import Profile from "../../assets/profile.jpeg"

export default function Resume() {
  const { toPDF, targetRef } = usePDF({
    filename: "kapil-adhikari-resume.pdf",
    page: { margin: 20 },
    method: "save",
    resolution: 2,
    quality: 1,
  });
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
    ],
    backend: ["Python", "Django", "Flask"],
    database: ["MySQL", "SQLite", "MongoDB"],
    devops: ["Linux", "Git", "Docker"],
  };
  const contacts = {
    email: "kapiladhikari2060@gmail.com",
    phone: "+977 9823451101",
    github: "https://github.com/adhikarikapil",
    linkedin: "https://www.linkedin.com/in/kapil-adhikari-081906357/",
    twitter: "https://x.com/_Ad_Kapil",
    instagram: "https://instagram.com/kapil._.adhikari",
  };
  return (
    <main className="min-h-screen bg-[#f3f4f6] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Download Button */}
        <div className="mb-4 text-center">
          <button
            onClick={() => toPDF()}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </button>
        </div>
        {/* Resume Content */}
        <div
          ref={targetRef}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-white">
                <img
                  src= {Profile}
                  alt="Kapil Adhikari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-4xl font-bold">Kapil Adhikari</h1>
                <p className="text-2xl mt-2.5 ">Fullstack Developer</p>
                <p className="text-xl mt-2 text-[#bfdbfe]">
                  📍 Nepal • 🎓 Kathmandu University
                </p>
                {/* Contact Info */}
                <div className="text-xl mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-white">
                    <svg
                      className="w-5 h-5 opacity-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="font-medium">{contacts.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <svg
                      className="w-5 h-5 opacity-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="font-medium">{contacts.phone}</span>
                  </div>
                </div>
                {/* Social Links */}
                <div className="flex gap-3 mt-3">
                  <a
                    href={contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#e2e8f0] transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 opacity-100"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#e2e8f0] transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 opacity-100"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={contacts.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#e2e8f0] transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 opacity-100"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={contacts.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#e2e8f0] transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 opacity-100"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="p-8">
            {/* About Me Section */}
            <section id="about" className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-[#1f2937] mb-4">
                About Me
              </h2>
              <p className="text-[#4b5563] max-w-2xl mx-auto">
                A passionate fullstack developer with 1 year of experience,
                currently pursuing studies at Kathmandu University. I am a quick
                learner who thrives on new challenges and opportunities for
                growth. Strong team player with excellent collaboration skills
                and a commitment to continuous learning.
              </p>
            </section>
            {/* Skills Section */}
            <section id="skills" className="mb-8">
              <h2 className="text-2xl font-bold text-[#1f2937] mb-4 text-center">
                Technical Skills
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#2563eb] mb-2 text-center">
                    Frontend Development
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#dbeafe] text-[#1e40af] rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2563eb] mb-2 text-center">
                    Backend Development
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#dbeafe] text-[#1e40af] rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2563eb] mb-2 text-center">
                    Databases
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.database.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#dbeafe] text-[#1e40af] rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2563eb] mb-2 text-center">
                    DevOps & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.devops.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#dbeafe] text-[#1e40af] rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Experience Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1f2937] mb-4 text-center">
                Professional Experience
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="border-l-4 border-[#2563eb] pl-4">
                  <h3 className="text-xl font-semibold text-[#1f2937]">
                    Fullstack Developer
                  </h3>
                  <p className="text-[#6b7280]">1 Year of Experience</p>
                  <ul className="mt-2 list-disc list-inside text-[#4b5563]">
                    <li>
                      Developed and maintained full-stack web applications using
                      React, Python, and various databases
                    </li>
                    <li>
                      Collaborated with team members to implement new features
                      and improve existing functionality
                    </li>
                    <li>
                      Worked with modern development tools and practices
                      including Git, Docker, and agile methodologies
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* Education Section */}
            <section id="education" className="mb-8">
              <h2 className="text-2xl font-bold text-[#1f2937] mb-4 text-center">
                Education
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#1f2937]">
                    Computer Science
                  </h3>
                  <p className="text-[#2563eb]">Kathmandu University</p>
                  <p className="text-[#6b7280]">Current Student</p>
                  <p className="text-[#4b5563] mt-2">
                    Studing on software development and modern web technologies
                  </p>
                </div>
              </div>
            </section>
            {/* Projects Section */}
            <section id="projects">
              <h2 className="text-2xl font-bold text-[#1f2937] mb-4 text-center">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#1f2937] text-center">
                    Personal Portfolio Website
                  </h3>
                  <p className="text-[#4b5563] mt-2 text-center">
                    Modern, responsive portfolio website built with React and
                    modern web technologies. Features smooth animations,
                    responsive design, and interactive components.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 justify-center">
                    <span className="text-sm text-[#2563eb]">#React</span>
                    <span className="text-sm text-[#2563eb]">#JavaScript</span>
                    <span className="text-sm text-[#2563eb]">#CSS</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#1f2937] text-center">
                    Web Design Projects
                  </h3>
                  <p className="text-[#4b5563] mt-2 text-center">
                    Collection of web design projects showcasing UI/UX skills
                    and modern design principles.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 justify-center">
                    <span className="text-sm text-[#2563eb]">#WebDesign</span>
                    <span className="text-sm text-[#2563eb]">#UI/UX</span>
                    <span className="text-sm text-[#2563eb]">#Frontend</span>
                  </div>
                </div>
              </div>
                <div className="last-container m-10">
                  <div className="border rounded-lg p-4 text-center w-full">
                    <h3 className="text-lg font-semibold text-[#1f2937] text-center">
                      More
                    </h3>
                    <p className="text-[#4b5563] mt-2 text-center">
                      I have worked on many projects and here you can find it.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 justify-center">
                      <span className="text-sm text-[#2563eb]">
                        <a href="https://github.com/adhikarikapil">Find More Projects (Github)</a>
                      </span>
                    </div>
                  </div>
                </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
