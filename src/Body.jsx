import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ReactSVG from "./assets/ReactSVG.svg";
import express from "./assets/express.svg";
import mongoDB from "./assets/mongoDB.svg";
import nodeJS from "./assets/nodeJS.svg";
import bootstrap from "./assets/bootstrap.svg";
import mui from "./assets/mui.svg";
import tailwind from "./assets/tailwind.svg";
import firebase from "./assets/firebase.svg";
import php from "./assets/php.svg";
import laravel from "./assets/laravel.svg";
import mysql from "./assets/mysql.svg";
import github from "./assets/github.svg";
import BlobAnimation from "./BlobAnimation";
import SkillProgress from "./SkillProgress";
import emailjs from "emailjs-com";

import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
} from "@mui/material";
import { SpeedDial, SpeedDialAction, Chip } from "@mui/material";
import {
  WhatsApp,
  Mail,
  LinkedIn,
  Link,
  Menu,
  Close,
  Translate,
  GitHub,
  Download,
  Public,
} from "@mui/icons-material";
import TechSkills from "./TechSkills";
const Body = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const sectionRefs = useRef([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };
  const cardsData = [
    {
      image: "./models/neoncube.png",
      title: "NeonCube - Company Showcase Website",
      techUsed:
        "React.js, Bootstrap, Intersection Observer API, Scroll Animations",
      description: `
        Designed and developed NeonCube, a company showcase website, with a clean and modern interface.
        Used React.js for dynamic rendering and Bootstrap for responsive layout design.
        Implemented smooth scroll animations with the Intersection Observer API to highlight sections as the user scrolls.
        The website showcases the company's services, portfolio, and contact information, all in a highly interactive and visually appealing manner.
      `,
    },
    {
      image: "./models/chatapp1.png",
      title: "Chatfo - Real-Time Chat Application",
      techUsed:
        "React.js, Material-UI, Tailwind CSS, Zustand, Firebase, Cloudinary",
      description: `
        Designed and developed Chatfo, a real-time chat app with secure Google Authentication using Firebase.
        Implemented profile customization, real-time messaging, message deletion, and online user status tracking.
        Built a responsive interface with Material-UI and Tailwind CSS, and used Zustand for efficient state management.
        Integrated Firebase Firestore for a scalable backend to support real-time operations.
      `,
    },
    {
      image: "./models/x-clone.png",
      title: "X-Clone - Social Media Platform",
      techUsed:
        "MERN Stack, TanStack (React Query), Tailwind CSS, DaisyUI, JWT Authentication, Cloudinary, Custom Hooks",
      description: `
        Built X-Clone, a Twitter-like social media platform with features like liking, commenting, following, and posting.
        Integrated JWT authentication for secure login/signup and used TanStack for efficient data fetching.
        Designed a responsive UI with Tailwind CSS and DaisyUI, and optimized media uploads with Cloudinary.
        Utilized custom hooks for reusable logic and built a scalable backend with Node.js and Express.
      `,
    },
  ];

  const actions = [
    {
      icon: <WhatsApp />,
      name: "WhatsApp",
      link: "https://web.whatsapp.com/send?phone=6369064948",
    },
    {
      icon: <Mail />,
      name: "Email",
      link: "mailto:dwaynedevaq96@gmail.com",
    },
    {
      icon: <LinkedIn />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/pandithevan-g-309177220/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfoawn8", // your service ID
        "template_puyyp1t", // your template ID
        form.current,
        "5mjZ1OkR3XNjZ0JYV" // your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          // Reset the form fields
          document.getElementById("yourname").value = "";
          document.getElementById("emailaddress").value = "";
          document.getElementById("mobilenumber").value = "";
          document.getElementById("fourthInput").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };
  // Intersection Observer with optimized logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => {
      sectionRefs.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Three.js Animation with optimized rendering
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const container = document.getElementById("torus-container");

    if (container) {
      container.appendChild(renderer.domElement);
    }

    const updateCanvasSize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();

    // Create stars
    const createStarTexture = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const size = 64;
      canvas.width = size;
      canvas.height = size;

      context.beginPath();
      context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, false);
      context.fillStyle = "white";
      context.fill();
      context.closePath();

      return new THREE.CanvasTexture(canvas);
    };

    const createStars = (numStars) => {
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const sizes = [];
      const colors = [];

      for (let i = 0; i < numStars; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.sqrt(Math.random()) * 1000;
        const x = radius * Math.sin(angle);
        const y = radius * Math.cos(angle);
        const z = (Math.random() - 0.5) * 5000;

        positions.push(x, y, z);
        sizes.push(Math.random() * 1.2 + 0.3);
        colors.push(Math.random(), Math.random(), Math.random());
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const material = new THREE.PointsMaterial({
        size: 1,
        map: createStarTexture(),
        transparent: true,
        vertexColors: true,
        sizeAttenuation: true,
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);
    };

    createStars(50000);//here the count of starts
    camera.position.z = 1000;

    const animate = () => {
      if (scene.children.length) {
        scene.children[0].rotation.x += 0.0001;
        scene.children[0].rotation.y += 0.0001;
        scene.children[0].rotation.z += 0.00001;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (container) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        icon={<Link color="" />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, "_blank")}
          />
        ))}
      </SpeedDial>
      <div
        className="w-full  p-5 bg-gradient-to-r from-[#6a1b9a] to-[#051522]"
        style={{
          backdropFilter: "blur(20px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box>
          <div className="flex justify-end">
            {/* Menu Icon for Mobile/Tablet */}
            <Menu
              sx={{
                zIndex: 2,
                fontSize: "50px",
                color: "white",
                cursor: "pointer",
                display: { xs: "block", sm: "block", md: "none" },
              }}
              onClick={toggleDrawer}
            />

            {/* Drawer for Mobile/Tablet */}
            <Drawer
              anchor="left"
              open={open}
              onClose={toggleDrawer}
              sx={{
                width: "100%",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: "100%",
                  bgcolor: "transparent",
                  backdropFilter: "blur(30px)",
                  position: "relative",
                },
              }}
            >
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  position: "absolute",
                  zIndex: 20,
                  top: 10,
                  right: 10,
                  color: "#F24464",
                }}
              >
                <Close sx={{ fontSize: "3em" }} />
              </IconButton>

              <List sx={{ padding: "15px", marginTop: "60px" }}>
                {[
                  "Home",
                  "About",
                  "Education",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((text) => (
                  <ListItem
                    key={text}
                    sx={{
                      height: "100px",
                      fontSize: "2.25em",
                      fontWeight: "900",
                      textAlign: "center",
                      fontFamily: "mali",
                      color: "white",
                      padding: "20px",
                      margin: "0 10px",
                      "&:hover": {
                        color: "#F2B705",
                        transform: "translateX(30px) scale(1.2)",
                        zIndex: 1,
                        fontFamily: "Montserrat",
                      },
                      transition: "all 0.3s ease-in-out",
                      "@media (max-width: 600px)": {
                        "&:active": {
                          color: "#BF2C38",
                        },
                      },
                    }}
                    onClick={() => {
                      const section = document.getElementById(
                        text.toLowerCase()
                      );
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        toggleDrawer();
                      }
                    }}
                  >
                    {text}
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>

          {/* Navigation Links for Larger Screens (MD and above) */}
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 20px",
            }}
          >
            <div className="flex-1">
              <h1 className="text-3xl font-roboto text-orange-400  font-bold ">
                P<span className="text-white">ortfolio</span>
              </h1>
            </div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                fontFamily: "Montserrat",
                padding: "10px 20px",
              }}
            >
              {[
                "Home",
                "About",
                "Education",
                "Skills",
                "Projects",
                "Contact",
              ].map((text) => (
                <Box
                  key={text}
                  sx={{
                    padding: "10px 15px",
                    color: "#BFBFBF",
                    zIndex: 1,
                    "&:hover": {
                      color: "white",
                      transform: "scale(1.1)",
                      cursor: "pointer",
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                  onClick={() => {
                    const section = document.getElementById(text.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {text}
                </Box>
              ))}
            </Box>
            <div></div>
          </Box>
        </Box>
        {/* Section 1 */}

        {/* Section 2 */}
        <div ref={addToRefs} className="section section-2 lg:mt-5 " id="home">
          <div className="w-[320px] lg:w-full  mt-5 md:w-[500px] mx-auto lg:px-20 p-5 bg-transparent shadow-lg">
            <div className="lg:flex flex-row-reverse justify-center gap-40 items-center bg-transparent">
              <div className=" lg:w-80 lg:h-80 mt-5  mx-auto relative  lg:mx-0 mb-3">
                <BlobAnimation />
                <img
                  src="./models/dnbg.png"
                  alt="Profile"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="lg:w-[500px]">
                <div className="">
                  <h1
                    ref={addToRefs}
                    className="lg:text-white text-slate-900 text-center lg:text-start text-3xl font-semibold font-mali section section-1"
                  >
                    Hi, I'm
                  </h1>
                  <div>
                    <h1
                      ref={addToRefs}
                      className=" text-center lg:text-start text-5xl font-bold section section-5 text-slate-300"
                    >
                      Pandithevan
                    </h1>
                  </div>
                </div>
                <div className="">
                  <h1 className="  lg:text-5xl text-5xl font-semibold font-baloo text-center  mt-2 lg:text-start ">
                    <span className="text-stroke">FullStack Developer</span>
                  </h1>

                  <div class="h2box">
                    {" "}
                    <h2></h2>
                  </div>
                </div>
                <p className="lg:text-start text-center text-lg font-light text-white font-mali mt-4">
                  "Passionate and eager full-stack developer, blending
                  creativity and technical expertise to craft innovative,
                  seamless, and impactful digital solutions."
                </p>

                <div className="flex justify-center lg:justify-start gap-6 lg:gap-3 my-3 z-30">
                  <a
                    href="https://www.linkedin.com/in/pandithevan-g-309177220/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn
                      sx={{
                        fontSize: "50px",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          color: "#ffff",
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  </a>

                  <a
                    href="https://github.com/Pandithevan96"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub
                      sx={{
                        fontSize: "50px",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          color: "#ffff",
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  </a>

                  <a
                    href="mailto:dwaynedevaq96@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail
                      sx={{
                        fontSize: "50px",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          color: "#ffff",
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  </a>
                </div>
                <div className="mt-3 items-center flex justify-center lg:justify-start">
                  <a
                    href="https://drive.google.com/file/d/1yK09nqW2PZ4LTo2ifhT9NgipePpCzDsM/view?usp=drive_link"
                    target="_blank"
                  >
                    <button className="relative px-8 py-4 text-xl font-semibold  text-white uppercase border-4 border-transparent rounded-full group hover:border-white hover:text-white transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500  opacity-50 blur-md group-hover:opacity-100 transition-all duration-500 rounded-full"></div>
                      <span className="relative z-10">
                        <Download /> Download CV
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-3 flex gap-5 bg-[#D9D3B4] p-5 flex-wrap rounded-md">
              <p className="w-full text-2xl">
                What i do <span className="text-red-500  font-raleway">?</span>
              </p>
              <Chip
                label="Web Develeopment"
                variant="outlined"
                sx={{ color: "black", borderColor: "black" }}
              />
              <Chip
                label="software Develeopment"
                variant="outlined"
                sx={{ color: "black", borderColor: "black" }}
              />
            </div>
          </div>
        </div>
        {/* About me section */}
        <div
          id="about"
          ref={addToRefs}
          className="w-[300px] md:w-[750px] mt-5 lg:w-[950px] xl:w-[1250] mx-auto p-5 bg-transparent shadow-lg section section-2"
        >
          <h5 className="text-slate-100 font-quicksand font-bold text-2xl">
            About{" "}
            <span className="text-red-500  font-montserrat text-2xl">Me</span>
          </h5>

          <div className="lg:flex">
            <img
              src="./models/web.png"
              alt=""
              className="w-52 h-52 lg:w-80 lg:h-80 section section-6"
              ref={addToRefs}
            />
            <div className="flex flex-col gap-3 text-white font-montserrat">
              <h4 className="text-xl lg:text-2xl font-dancing-script underline underline-offset-4">
                I'm a Full Stack Developer
              </h4>
              <p className="">
                ⚡I am a passionate full-stack developer dedicated to crafting
                seamless user experiences through creative and efficient
                solutions. I thrive on turning complex challenges into simple,
                aesthetic interfaces that engage users.
              </p>
              <p>
                ⚡My expertise spans across various platforms, with a strong
                focus on building scalable and maintainable applications. I
                always strive for excellence in both front-end and back-end
                development, ensuring high performance and smooth functionality.
              </p>
              <p>
                ⚡With a keen eye for design and a problem-solving mindset, I
                approach each project with enthusiasm and creativity, delivering
                results that not only meet but exceed expectations.
              </p>
            </div>
          </div>
        </div>
        <div
          id="education"
          ref={addToRefs}
          className="w-[300px] md:w-[750px] lg:w-[950px] xl:w-[1250] mt-5  mx-auto p-5 bg-slate-200 shadow-lg section section-1"
        >
          <h5 className="text-slate-800 font-quicksand font-bold text-2xl">
            Education
          </h5>
          <div className="lg:flex justify-evenly">
            <img
              src="./models/edu.png"
              alt=""
              className=" h-52 lg:w-80 lg:h-80 section section-6"
              ref={addToRefs}
            />
            <div>
              <div className="border-b-2  my-3 py-3   rounded-md bg-slate-700 p-3">
                <h5 className="text-slate-50 font-quicksand font-semi text-2xl">
                  Degree
                </h5>
                <h4 className="text-[#a7daf0] font-montserrat font-bold text-lg">
                  BE Mechanical Engineering
                </h4>
                <h6 className="text-[#c4d9da] font-raleway font-semibold text-md">
                  Mountzion College of Engineering & Technology
                </h6>
              </div>
              <div className="border-b-2  my-3 py-3 border  bg-slate-100 rounded-md p-3 ">
                <h5 className="text-slate-800 font-quicksand font-semi text-2xl">
                  Certification
                </h5>
                <h4 className="text-[#5d5999] font-montserrat font-bold text-lg">
                  Frontend Developer
                </h4>
                <h6 className="text-slate-700 font-raleway font-semibold text-md">
                  Login 360
                </h6>
              </div>
              <div className="border-b-2  my-3 py-3 border  bg-slate-50 rounded-md p-3 ">
                <h5 className="text-slate-800 font-quicksand font-semi text-2xl">
                  Internship
                </h5>
                <h4 className="text-[#F2780C] font-montserrat font-bold text-lg">
                  Full Stack Developer
                </h4>
                <h6 className="text-slate-700 font-raleway font-semibold text-md">
                  Dynamic Liquids
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* Section  */}
        <div
          id="skills"
          ref={addToRefs}
          className="w-[300px] md:w-[750px] mt-5 lg:w-[950px] xl:w-[1250] mx-auto p-5 bg-neutral-800 shadow-lg section section-1 "
        >
          <h5 className="text-slate-100 font-quicksand font-bold text-2xl">
            Familiar With
          </h5>
          <div className="flex flex-wrap gap-8 justify-center">
            <img
              ref={addToRefs}
              className="section section-3"
              src={mongoDB}
              alt="MongoDB"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={ReactSVG}
              alt="React"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={express}
              alt="Express"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={nodeJS}
              alt="NodeJS"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={bootstrap}
              alt="Bootstrap"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={mui}
              alt="MUI"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={tailwind}
              alt="Tailwind"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={firebase}
              alt="Firebase"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={php}
              alt="PHP"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={laravel}
              alt="Laravel"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={mysql}
              alt="MySQL"
              width={80}
              height={80}
            />
            <img
              ref={addToRefs}
              className="section section-3"
              src={github}
              alt="Github"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div
          ref={addToRefs}
          className="w-[300px] md:w-[750px] mt-5 lg:w-[950px] xl:w-[1250] lg: mx-auto   shadow-lg section section-1"
        >
          <TechSkills />
        </div>
        <div
          ref={addToRefs}
          className="w-[300px] md:w-[750px] mt-5 lg:w-[950px] xl:w-[1250] mx-auto  bg-transparent shadow-lg section section-1"
        >
          <SkillProgress />
        </div>
        <div
        id="projects"
          ref={addToRefs}
          className="w-[300px] md:w-[750px] lg:w-[950px] mt-5  mx-auto py-5 bg-transparent shadow-lg section section-1"
        >
          <h5 className="text-slate-100 font-quicksand font-bold text-2xl px-5">
            Projects
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="card  bg-slate-100 shadow-md rounded-lg overflow-hidden relative "
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-image h-[80%] object-fill  w-full"
                />

                {/* Content */}
                <div className="card-content p-4  z-10  absolute top-[80%] w-full h-[100%]">
                  <div>
                    <h3 className="card-title text-xl font-semibold text-gray-200 mb-2 font-dancing-script ">
                      {card.title}
                    </h3>
                    <h5 className="card-title text-sm font-semibold text-gray-400 mb-2 font-montserrat">
                      {card.techUsed}
                    </h5>

                    <p className="card-description text-xs font-mali text-gray-600 ">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex gap-2 border border-slate-700 my-1 p-2 justify-center">
                    <div className=" ">👉</div>
                    <a href="">
                      <Public className="public cursor-pointer z-20 " />
                    </a>
                  </div>
                </div>

                {/* Border and Shadow Effects */}
                <div className="absolute inset-0 border-2 border-transparent rounded-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="contact"
          ref={addToRefs}
          className="w-[300px] md:w-[750px] lg:w-[950px] mt-5 mx-auto bg-transparent shadow-lg section section-1"
        >
          <h5 className="text-slate-100 font-quicksand px-5 font-bold text-2xl">
            Contact <span className="text-red-500 font-montserrat">Me</span>
          </h5>
          <div className="xl:flex">
            <div>
              <img
                src="./models/contact.png"
                alt=""
                className="w-52 h-52 lg:w-80 lg:h-80 section section-6"
                ref={addToRefs}
              />
              <h3 className="lg:text-2xl font-poppins font-bold md:w-full md:text-3xl lg:w-[500px] p-5 text-slate-100">
                "Contact me to explore how I can contribute to your team and
                bring innovative solutions to life!"
              </h3>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-3 mt-3 max-w-lg lg:w-[600px] mx-auto p-5"
            >
              {/* Name */}
              <div className="space-y-2">
                <input
                  id="yourname"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-4">
                <input
                  id="emailaddress"
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-4">
                <input
                  id="mobilenumber"
                  type="text"
                  name="user_phone"
                  placeholder="Mobile Number"
                  className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Email Subject */}
              <div className="space-y-4">
                <input
                  id="fourthInput"
                  type="text"
                  name="subject"
                  placeholder="Email Subject"
                  className="w-full p-3 border-2 border-white rounded-md text-gray-700 placeholder-gray-500 focus:border-white focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="space-y-4">
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  placeholder="Enter Your Message Here"
                  className="w-full p-3 border-2 border-white rounded-md text-gray-00 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full bg-[#10162F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-500 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Remaining Sections */}
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            ref={addToRefs}
            className={`section section-${index + 4}`}
          />
        ))}

        <div
          id="torus-container"
          style={{
            position: "fixed",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
};

export default Body;
