'use client'
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import confetti from "canvas-confetti";
export default function Home() {
  const experienceRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const aboutmeRef = useRef<HTMLElement | null>(null);
  const homeRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const resumeRef = useRef<HTMLElement | null>(null);

  // State to track visibility
  const [isExperienceVisible, setExperienceVisible] = useState(false);
  const [isProjectsVisible, setProjectsVisible] = useState(false);
  const [isAboutmeVisible, setAboutmeVisible] = useState(false);
  const [ishomeVisible, sethomeVisible] = useState(false);
  const [isSkillsVisible, setSkillsVisible] = useState(false);
  const [isResumeVisible, setResumeVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = [
      { ref: experienceRef, setVisible: setExperienceVisible, threshold: 0.3 },
      { ref: projectsRef, setVisible: setProjectsVisible, threshold: 0.1 }, // Only 10% for projects
      { ref: aboutmeRef, setVisible: setAboutmeVisible, threshold: 0.3 },
      { ref: homeRef, setVisible: sethomeVisible, threshold: 0.3 },
      { ref: skillsRef, setVisible: setSkillsVisible, threshold: 0.3 },
      { ref: resumeRef, setVisible: setResumeVisible, threshold: 0.3 },
    ];
  
    const observers = sections.map(({ ref, setVisible, threshold }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === ref.current) {
              setVisible(entry.isIntersecting);
            }
          });
        },
        { threshold }
      );
  
      if (ref.current) observer.observe(ref.current);
  
      return observer;
    });
  
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);
  

    useEffect(() => {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
      });
  
      setTimeout(() => {
        confetti.reset();
      }, 3000);
    }, []);

    useEffect(() => {console.log(menuOpen)}, [menuOpen]);


  
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-md">
        <nav className="text-white flex justify-between items-center px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
        <a href="#home-section" className="text-3xl text-[#ffb600] font-extrabold tracking-wide font-serif">
          Zayed Hasan
        </a>
        <button
          className="text-white lg:hidden focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >{!menuOpen  ?(<div>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span> </div>):(<div className="fixed top-4 right-4 w-6 h-6 cursor-pointer">
  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rotate-45"></span>
  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white -rotate-45"></span>
</div>
)}
        </button>
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <a href="#home-section" className="block text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono">
              Home
            </a>
            <a href="#about-section" className="block text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono">
              About
            </a>
            <a href="#resume-section" className="block text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono">
              Resume
            </a>
            <a href="#experience-section" className="block text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono">
              Services
            </a>
            <a href="#skills-section" className="block text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono">
              Skills
            </a>
            <a href="#projects-section" className="block text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono">
              Projects
            </a>
            <a href="#contact-section" className="block text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono">
              Contact
            </a>
          </div>
        )}
        <div className="hidden lg:flex space-x-12">
          <ul className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <li className="nav-item">
            <a href="#home-section" className="nav-link text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono ">
            Home
            </a>
            </li>
            <li className="nav-item">
          <a href="#about-section" className="nav-link text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono ">
            About
          </a>
            </li>
            <li className="nav-item">
          <a href="#resume-section" className="nav-link text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono ">
            Resume
          </a>
            </li>
            <li className="nav-item">
          <a href="#experience-section" className="nav-link text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono ">
            Services
          </a>
            </li>
            <li className="nav-item">
          <a href="#skills-section" className="nav-link text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono ">
            Skills
          </a>
            </li>
            <li className="nav-item">
          <a href="#projects-section" className="nav-link text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono ">
            Projects
          </a>
            </li>
            {/* <li className="nav-item">
          <a href="#blog-section" className="nav-link text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono ">
            My Blog
          </a>
            </li> */}
            <li className="nav-item">
          <a href="#contact-section" className="nav-link text-xl font-bold hover:text-yellow-500 transition duration-200 ease-in-out transform hover:text-2xl font-mono ">
            Contact
          </a>
            </li>
          </ul>
        </div>
          </div>
        </nav>
      </header>


      {/* Main Section */}
      <main className={`container mx-auto px-4 md:px-8 py-10 space-y-20 w-full max-w-screen overflow-hidden transition-transform duration-300 ${menuOpen ? 'transform translate-y-64' : ''}`}>
        {/* Hero Section */}
        {/* <section id="home-section" className="hero bg-black text-white h-screen flex items-center transition-opacity duration-700 ease-in-out opacity-0 hover:opacity-100 transform hover:scale-105"> */}
        <section
          id="home-section"
          ref={homeRef}
          className={`bg-black text-white py-20 mt-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform ${
            ishomeVisible
              ? "opacity-100 translate-y-0 scale-100 shadow-xl"
              : "opacity-0 translate-y-16 scale-95 shadow-md"
          }`}
        >
          <div className="container mx-auto px-6 lg:px-12 flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img 
          src="/storage/IMG_0463-removebg-preview.png" 
          alt="Self Picture"
          className="overflow-hidden shadow-lg lg:h-96 lg:w-96 h-80 w-80 bg-transparent object-cover" 
              />
            </div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 flex flex-col justify-center">
              <div className="text-center lg:text-left">
          <span className={`text-lg font-medium text-gray-400 transition-transform duration-1000 ${
            ishomeVisible ? "translate-x-0" : "translate-x-full"
          }`}>Hello!</span>
            <h1 className={`text-4xl font-extrabold mt-3 transition-transform duration-1000 delay-300 ${
            ishomeVisible ? "translate-x-0" : "translate-x-full"
            }`} style={{ fontFamily: 'Titillium Web, sans-serif' }}>
            I&apos;m <span className="text-[#ffb600]">Zayed Hasan</span>
            </h1>
          <h2 className={`text-2xl font-semibold text-gray-300 mt-4 transition-transform duration-1000 delay-600 ${
            ishomeVisible ? "translate-x-0" : "translate-x-full"
          }`}>
            A Software Engineer
          </h2>
          <div className="mt-6 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            {/* <a
              href="#"
              className="bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-primary-dark transition duration-300"
            >
              Hire Me
            </a> */}
            <a
              href="#experience-section"
              className="bg-transparent border border-white text-white font-medium py-3 px-6 rounded-md hover:text-gray-900 transition duration-300 hover:border-yellow-500 hover:text-yellow-500"
            >
              My Works
            </a>
          </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Me Section */}
        {/* <section id="about-section" className="bg-black text-white py-20 transition-opacity duration-700 ease-in-out opacity-0 hover:opacity-100 transform hover:scale-105"> */}
        <section
          id="about-section"
          ref={aboutmeRef}
          className={`bg-black text-white py-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform ${
            isAboutmeVisible
              ? "opacity-100 translate-y-0 scale-100 shadow-xl"
              : "opacity-0 translate-y-16 scale-95 shadow-md"
          }`}
        >
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffa200]">About Me</h2>
            <p className="text-lg md:text-xl text-white font-mono">
              Hi Everyone, I am Zayed Hasan from Dhaka, Bangladesh.
              Software Engineer who loves to transform ideas into reality using code.
              I am always eager to learn new things and look forward to gaining new experiences. I am enthusiastic about solving problems and overcoming challenges. Always ready to enjoy life.
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className="list-inside text-lg md:text-xl text-white font-mono mt-4">
              <li>👉 Playing Games</li>
              <li>👉 Reading Books</li>
              <li>👉 Travelling</li>
              <li>👉 Watching Movies</li>
            </ul>
          </div>
        </section>
        {/* Resume Section */}
        {/* <section id="resume-section" className="bg-black text-white py-20 transition-opacity duration-700 ease-in-out opacity-0 hover:opacity-100 transform hover:scale-105"> */}
        <section
          id="resume-section"
          ref={resumeRef}
          className={`bg-black text-white py-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform ${
            isResumeVisible
              ? "opacity-100 translate-y-0 scale-100 shadow-xl"
              : "opacity-0 translate-y-16 scale-95 shadow-md"
          }`}
        > 
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffa200]">Resume</h2>
            <p className="text-lg md:text-xl text-white mb-6 font-mono">
              Click the button below to view or download my resume.
            </p>
            <div className="flex justify-center space-x-4">
                <a
                href="/storage/Zayed_HasanCv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-primary-dark transition duration-300 hover:text-gray-900 hover:border-yellow-500 hover:text-yellow-500 transform hover:scale-105 hover:underline"
                >
                View Resume
                </a>
              <a
          href="/storage/Zayed_HasanCv.pdf"
          download
          className="bg-transparent border border-white text-white font-medium py-3 px-6 rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
              >
          Download Resume
              </a>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects-section" ref={projectsRef} className="bg-black text-white py-20">

          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#ffa200]">Projects</h2>
            <div className="space-y-8">
              
                  <div
                  className={`bg-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center 
                  transition-all duration-[1000ms] ease-out transform hover:scale-105 hover:z-10 hover:shadow-2xl 
                  motion-safe:animate-fade-in ${isProjectsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
                  >

                <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
                  <img
                    src="/storage/Screenshot 2025-02-03 024318.png"
                    alt="Project 1"
                    className="h-auto w-full rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 md:pl-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">Xpenzify</h3>
                  <p className="text-white mb-4 font-mono">
                    An expense management system with the following features:
                  </p>
                  <ul className="list-disc list-inside text-white space-y-2 font-mono">
                    <li className="list-disc mt-2">User Account Management: Users can create and manage their accounts securely.</li>
                    <li className="list-disc mt-2">Income & Expense Tracking: Users can log their income sources and categorize their expenses.</li>
                    <li className="list-disc mt-2">Role-Based Access: Different roles with specific permissions.</li>
                    <li className="list-disc mt-2">Searching: Efficient search functionality for transactions and records.</li>
                  </ul>
                    <div className="flex justify-between mb-4 mt-4">
                    <a href="https://github.com/Expense-Management-Angular-dotNet" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">GitHub</a>
                    {/* <a href="https://project1.com" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">Live Demo</a> */}
                    </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">AngularJS</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">Asp .Net</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">PostgreSql</span>
                  </div>
                </div>
              </div>
                <div
                className={`bg-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center 
                transition-all duration-[1000ms] ease-out transform hover:scale-105 hover:z-10 hover:shadow-2xl 
                motion-safe:animate-fade-in ${isProjectsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
                >
                <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
                  <img
                    src="/storage/Screenshot 2025-02-03 190124.png"
                    alt="Project 2"
                    className="h-auto w-full rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 md:pl-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">InternConnect</h3>
                  <p className="text-white mb-4 font-mono">
                    Web Application streamlining the Internship Management System simplifying application processes and placements for students at IUT.
                    <br />
                    Features:
                    </p>
                    <ul className="list-disc list-inside text-white space-y-2 font-mono">
                    <li className="list-disc mt-2">Student Account Management: Account creation, activation via email, and profile updates.</li>
                    <li className="list-disc mt-2">CV Submission & Matching: CV submission, automated sorting, and matching with companies using the stable marriage algorithm, followed by email notifications.</li>
                    <li className="list-disc mt-2">Report Handling: Submission, validation, and management of reports, including PDF uploads and viewing functionality.</li>
                    <li className="list-disc mt-2">Internship Status Tracking: A live status page to monitor internship progress.</li>
                    <li className="list-disc mt-2">Mentor Assessment System: Automated assessment form distribution via email, submission tracking, and response storage.</li>
                    <li className="list-disc mt-2">Grading System: Generation and management of student grades.</li>
                    <li className="list-disc mt-2">Automated Email Reminders: Email notifications for important deadlines and updates.</li>
                    </ul>
                    <div className="flex justify-between mb-4 mt-4">
                    <a href="https://github.com/lomatul/InternConnect" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">GitHub</a>
                    <a href="https://internconnect.netlify.app/" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">Live Demo</a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">ReactJS</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">ExpressJS</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">MongoDb</span>
                  </div>
                </div>
              </div>
              <div
                className={`bg-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center 
                transition-all duration-[1000ms] ease-out transform hover:scale-105 hover:z-10 hover:shadow-2xl 
                motion-safe:animate-fade-in ${isProjectsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
              >
                <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
                  <img
                    src="storage/Deal1.png"
                    alt="Project 3"
                    className="h-auto w-full rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 md:pl-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">DealIt</h3>
                  <p className="text-white mb-4 font-mono">
                    An advanced e-commerce platform with the following features:
                  </p>
                    <ul className="list-disc list-inside text-white space-y-2 font-mono">
                    <li className="list-disc mt-2">Advanced Product Exchange & Trading: Enables users to exchange, rent, and trade products seamlessly.</li>
                    <li className="list-disc mt-2">Comprehensive Search & Browsing: Advanced filtering and categorization for an optimized shopping experience.</li>
                    <li className="list-disc mt-2">Integrated Chat System: Real-time messaging for smooth buyer-seller communication.</li>
                    <li className="list-disc mt-2">Automated Contract Generation: Secure and legally binding contract creation upon transaction confirmation.</li>
                    <li className="list-disc mt-2">Seamless Transaction Workflow: Ensures a user-friendly and efficient trading process.</li>
                    </ul>
                    <div className="flex justify-between mb-4 mt-4">
                    <a href="https://github.com/GoonerMAK/DeaLIT" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">GitHub</a>
                    {/* <a href="https://project3.com" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">Live Demo</a> */}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">ReactJS</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">ExpressJS</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">MongoDb</span>
                  </div>
                </div>
              </div>
                <div
                  className={`bg-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center 
                  transition-all duration-[1000ms] ease-out transform hover:scale-105 hover:z-10 hover:shadow-2xl 
                  motion-safe:animate-fade-in ${isProjectsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
                >
                <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
                  <img
                    src="/storage/thikana.png"
                    alt="Project 1"
                    className="h-auto w-full rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 md:pl-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">Thikana web</h3>
                  <p className="text-white mb-4 font-mono">
                    My project is an all-in-one web platform designed to streamline the processes of purchasing, selling, renting, and leasing properties. It offers an efficient property search feature equipped with detailed filters and criteria, making it easier for users to find exactly what they&apos;re looking for.
                  </p>
                  <div className="flex justify-between mb-4 mt-4">
                    <a href="https://github.com/Zayed53/SPL-1" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">GitHub</a>
                    {/* <a href="https://project1.com" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">Live Demo</a> */}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">PHP</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">HTML</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">CSS</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">MySQL</span>
                  </div>
                </div>
              </div>
                <div
                  className={`bg-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center 
                  transition-all duration-[1000ms] ease-out transform hover:scale-105 hover:z-10 hover:shadow-2xl 
                  motion-safe:animate-fade-in ${isProjectsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
                >
                <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
                  <img
                    src="/storage/ClassBoking.png"
                    alt="Project 1"
                    className="h-auto w-full rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 md:pl-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">Class Booking System</h3>
                    <p className="text-white mb-4 font-mono">
                      A web platform that streamlines classroom scheduling, allowing users to view, search, and request bookings with role-based approvals for efficient allocation.
                    </p>
                    <ul className="list-disc list-inside text-white space-y-2 font-mono">
                      <li>Real-time Availability: View which classrooms are free or booked.</li>
                      <li>Classroom Search: Find schedules for a specific classroom on a chosen date.</li>
                      <li>Booking Requests: CRs can request classrooms for a specific time slot.</li>
                      <li>Approval System: Teachers can approve booking requests for their respective classes.</li>
                    </ul>
                    <div className="flex justify-between mb-4 mt-4">
                    <a href="https://github.com/lomatul/ClassBookingSystem" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">GitHub</a>
                    {/* <a href="https://project1.com" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">Live Demo</a> */}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">PHP</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">HTML</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">CSS</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">MySQL</span>
                  </div>
                </div>
              </div>
              <div
                  className={`bg-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center 
                  transition-all duration-[1000ms] ease-out transform hover:scale-105 hover:z-10 hover:shadow-2xl 
                  motion-safe:animate-fade-in ${isProjectsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
                >
                <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
                  <img
                    src="/storage/WinF.png"
                    alt="Project 1"
                    className="h-auto w-full rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 md:pl-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">Image Filter</h3>
                    <p className="text-white mb-4 font-mono">
                    A Windows image filtering program with editing tools, artistic effects, and face detection.
                    </p>
                    <ul className="list-disc list-inside text-white space-y-2 font-mono">
                      <li>Image Editing: Provides rotation, flipping, brightness, and contrast adjustments.</li>
                      <li>Artistic Effects: Includes negative, greyscale, posterization, and alpha effects.</li>
                      <li>Face Detection: Features face detection within images for enhanced functionality.</li>
                    </ul>
                    <div className="flex justify-between mb-4 mt-4">
                    <a href="https://github.com/Zayed53/image_filter" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">GitHub</a>
                    {/* <a href="https://project1.com" className="text-primary hover:underline text-blue-300 hover:scale-105 hover:text-blue-500">Live Demo</a> */}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">C#</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">WinForm</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">OpenCV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        
        {/* <section
        id="experience-section"
        ref={experienceRef}
        className="bg-black text-white py-20 transition-all duration-1000 ease-in-out transform opacity-0 translate-y-10 scale-95"
      > */}
        {/* <section
        id="experience-section"
        ref={experienceRef}
        className={`bg-black text-white py-20 transition-all duration-1000 ease-in-out transform ${
          isExperienceVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
        > */}
        <section
          id="experience-section"
          ref={experienceRef}
          className={`bg-black text-white py-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform ${
            isExperienceVisible
              ? "opacity-100 translate-y-0 scale-100 shadow-xl"
              : "opacity-0 translate-y-16 scale-95 shadow-md"
          }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#ffa200]">Experience</h2>
        <div className="space-y-8">
          <div className="bg-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center transition duration-700 ease-in-out transform hover:scale-105">
            <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
              <img
          src="/storage/images.png"
          alt="Company Logo"
          className="h-40 w-40 md:h-60 md:w-60 rounded-full transition duration-700 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">
          <a
            href="https://www.streamstech.com"
            className="text-primary hover:underline transition duration-700 ease-in-out transform hover:scale-105 hover:text-blue-300"
          >
            Streams Tech
          </a>
              </h3>
              <p className="text-white mb-4 font-mono">Intern Developer June 2024 - October 2024</p>
              <p className="text-white mb-4 font-mono">
          I contributed to a product called Spendplan, primarily used by our main stakeholder, Spendplana company based in the USA. My contributions included:
              </p>
              <ul className="list-disc list-inside text-white space-y-2 font-mono">
          <li>
            <strong>Cache Layer Database Update</strong>
            <ul className="list-disc list-inside pl-4">
              <li>
                Contributed to the development and enhancement of a cache layer database on the server side to meet evolving product requirements.
              </li>
              <li>
                Developed features for a major update that involved creating a cache layer database to improve data retrieval and server performance.
              </li>
            </ul>
          </li>
          <li>
            <strong>Robust Testing Suite Development</strong>
            <ul className="list-disc list-inside pl-4">
              <li>Developed a robust testing suite to improve code reliability and ensure stable software performance.</li>
              <li>
                Wrote unit and integration tests, specifically focusing on server-side functionality to catch edge cases and bugs early in the development process.
              </li>
              <li>Integrated automated testing into the CI/CD pipeline via a GitHub Actions file, significantly boosting testing efficiency.</li>
            </ul>
          </li>
          <li>
            <strong>Code Refactoring and Debugging</strong>
            <ul className="list-disc list-inside pl-4">
              <li>Refactored code and debugged server-side functionality to optimize performance and maintainability.</li>
              <li>Applied clean code principles and design patterns, ensuring code readability and scalability.</li>
            </ul>
          </li>
              </ul>
            </div>
          </div>
        </div>
            </div>
          </section>
        {/* Skills Section */}
        
        <section
          id="skills-section"
          ref={skillsRef}
          className={`bg-black text-white py-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform ${
            isSkillsVisible
              ? "opacity-100 translate-y-0 scale-100 shadow-xl"
              : "opacity-0 translate-y-16 scale-95 shadow-md"
          }`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#ffa200]">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Programming</h3>
            <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}>
            C, C++, C#, JavaScript, Java, Python, SQL
            </p>

              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Development Backend</h3>
          <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}>JavaScript, PHP, NodeJS</p>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Development Frontend</h3>
          <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}>ejs, HTML, ReactJS, AngularJs</p>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Database</h3>
          <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}>Oracle, MongoDB, Graph Database NEO4j, MySQL, Redis, PostgreSql</p>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">DevOps</h3>
          <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}>Microsoft Azure</p>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Tools, Libraries and Frameworks</h3>
          <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}>Git, OpenCV, JUnit, Jest, Asp .Net </p>
          <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}> Spring Boot, NextJs</p>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Problem Solving</h3>
          <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}>Solved coding problems on Codeforces </p>
          <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}> and Leetcode</p>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Others</h3>
          <p className={`text-white font-mono text-base md:text-lg overflow-hidden whitespace-nowrap  ${
            isSkillsVisible
              ? "animate-typing"
              : "opacity-0"
          }`}>Jira, Trello, Github Actions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stacks Section */}
        <section id="tech-stacks-section" className="bg-black text-white py-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="flex flex-wrap justify-center gap-8">
              <img src="/storage/icon/png-clipart-c-logo-c-programming-language-icon-letter-c-blue-logo.png" alt="C" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/cpp.png" alt="C++" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/Csharp.jpg" alt="C#" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/js.png" alt="JavaScript" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/java.png" alt="Java" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/python.jpg" alt="Python" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/sql.png" alt="SQL" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/php.png" alt="PHP" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/nodejs.jpg" alt="NodeJS" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/html.png" alt="HTML" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/react.webp" alt="ReactJS" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/angularjs.jpg" alt="AngularJs" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/dotnet.png" alt=".Net" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/nextjs.jpg" alt="nextjs" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/mongodb.png" alt="MongoDB" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/mysql.jpg" alt="MySQL" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/redis.png" alt="Redis" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/postgre.webp" alt="PostgreSql" className="h-24 w-24 rounded-lg animate-shake" />
              <img src="/storage/icon/git.png" alt="GitHub" className="h-24 w-24 rounded-lg animate-shake" />
            </div>
          </div>
        </section>
        {/* Contact Me Section */}
        <section id="contact-section" className="bg-black text-white py-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffa200]">Contact Me</h2>
            <p className="text-lg md:text-xl text-white mb-6 font-mono">
              Feel free to reach out to me through any of the platforms below.
            </p>
            <div className="flex flex-col items-center space-y-4">
                      <a
                        href="mailto:zayedhasan48@gmail.com"
                        className="text-xl font-medium text-primary hover:underline flex items-center space-x-2 transition-transform duration-300 hover:scale-105 hover:text-blue-300"
                      >
                        <img src="/storage/icon/email.png" alt="Email Icon" className="h-12 w-12" />
                        <span className="text-2xl font-mono">zayedhasan48@gmail.com</span>
                      </a>
                      <a
                        href="https://github.com/Zayed53"
                        className="text-xl font-medium text-primary hover:underline flex items-center space-x-2 transition-transform duration-300 hover:scale-105 hover:text-blue-300"
                      >
                        <img src="/storage/icon/githublink.webp" alt="GitHub Icon" className="h-12 w-12" />
                        <span className="text-2xl font-mono">Zayed53</span>
                      </a>
                      <a
                        href="www.linkedin.com/in/zayed-hasan-654605272"
                        className="text-xl font-medium text-primary hover:underline flex items-center space-x-2 transition-transform duration-300 hover:scale-105 hover:text-blue-300"
                      >
                        <img src="/storage/icon/linkedIn.webp" alt="LinkedIn Icon" className="h-12 w-12" />
                        <span className="text-2xl font-mono">Zayed Hasan</span>
                      </a>
            </div>
          </div>
        </section>
          {/* Footer Section */}
          <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <p className="text-sm md:text-base text-gray-400">
              &copy; {new Date().getFullYear()} Zayed Hasan. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
