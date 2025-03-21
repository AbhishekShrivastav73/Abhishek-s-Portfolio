import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhishek Shrivastav",
  initials: "AS",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer with expertise in the MERN stack, specializing in building scalable and high-performance web applications.",
  summary:
    "Coming from a non-tech background, I embraced the challenge of learning web development and became a Full Stack Developer with expertise in the MERN stack. Through self-learning, hands-on projects, and continuous exploration, I mastered front-end and back-end technologies. I thrive on solving complex problems, optimizing performance, and building scalable applications. My journey reflects my passion for technology, adaptability, and relentless pursuit of excellence in web development.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Typescript",
    "Node.js",
    "Mongoose",
    "ExpressJS",
    "MongoDB",
    "Tailwind CSS",
    "PHP",
    "MySQL", 
    "Laravel"   
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abhishekshrivastav2121@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishek-shrivastav-27693523a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AbhiShr91419505",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Infoseek",
      href: "",
      badges: ['Working'],
      location: "On-site",
      title: "Junior Web Developer",
      logoUrl: "",
      start: "Dec 2024",
      end: "Present",
      description:
        "Full Stack Developer specializing in the MERN stack, building scalable and high-performance web applications. Experienced in React.js, Node.js, Express, and MongoDB, with additional expertise in WordPress backend, bug fixes, and optimizations. Also skilled in PHP, Laravel, and MySQL. Passionate about problem-solving and creating seamless user experiences.",
    },
   
  ],
  education: [
    {
      school: "University of Lucknow",
      href: "https://www.lkouniv.ac.in/",
      degree: "Masters in Commerce",
      logoUrl: "/university.webp",
      start: "2022",
      end: "2024",
    },
    {
      school: "University of Lucknow",
      href: "https://www.lkouniv.ac.in/",
      degree: "Bachelor's Degree of Commerce",
      logoUrl: "/university.webp",
      start: "2019",
      end: "2024",
    },
    {
      school: "Seventh-Day Adventist Inter College",
      href: "",
      degree: "Intermediate",
      logoUrl: "",
      start: "2017",
      end: "2019",
    },
   
  ],
  projects: [
    {
      title: "AI Powered Code Reviewer",
      href: "https://ai-powered-code-reviewer-rust.vercel.app",
      dates: "Web Project",
      active: true,
      description:
        "AI-Powered Code Reviewer – Built a web-based code review tool using MERN Stack and [Google Gemini API](https://gemini.google.com/) to analyze code quality, detect errors, and suggest optimizations. Features include real-time feedback, best practices recommendations, and performance improvements for multiple programming languages.",
      technologies: [
        "TailwindCSS",
        'Express JS',
        "React JS",
        "Node JS",
        "Google Gemini's API"
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-powered-code-reviewer-rust.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AbhishekShrivastav73/AI-powered-code-reviewer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai-powered.png",
      video:
      ""
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Code Nest",
      href: "https://code-nest-alpha.vercel.app",
      dates: "Product",
      active: true,
      description:
        "Code Nest (Web Development Learning Platform) is a comprehensive educational product designed to teach web development with structured chapters. It includes paid subscription models, an admin dashboard for content and user management, and metadata options for SEO optimization of each post/chapter. The platform ensures a seamless learning experience while enabling monetization and efficient administration.",
      technologies: [
        "Typescript",
        "React JS",
        "Mongoose",
        "Mongo DB",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://code-nest-alpha.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/code-nest.png",
      video: "",
    },
    {
      title: "Auth Boilerplate",
      href: "https://www.npmjs.com/package/auth-boilerplate-express",
      dates: "NPM Package",
      active: true,
      description:
        "A lightweight authentication boilerplate for MERN stack applications with JWT-based authentication, role-based access control (RBAC), and easy API setup. Now includes built-in Multer support for file uploads.",
      technologies: [
        "NPM",
        "Mongoose",
        "Express JS",
        "JWT",
        "Bcrypt"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/auth-boilerplate-express",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/npm-package.png",
      video: "",
    },
   
  ],
  hackathons: [
    
    
    {
      "title": "REIMAGINE Hackathon",
      "dates": "July 2023",
      "location": "Sheryians Coding School",
      "description": "Competed in all 3 rounds of the REIMAGINE Hackathon, reaching the final stage. Redesigned the NIKE and Xbox websites with modern UI/UX, leveraging GSAP, Three.js, and SASS to create immersive and interactive experiences.",
      "icon": "code",
      "image": "https://your-image-link.com/reimagine-hackathon.png",
      "links": []
    },    
    
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },

  ],
} as const;
