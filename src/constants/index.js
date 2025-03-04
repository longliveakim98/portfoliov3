export const HERO_CONTENT = `I am passionate on becoming a full-stack developer and a graduate of Universiti Perlis Malaysia (UniMAP), with a strong foundation in both front-end and back-end development. On the front end, I specialize in React.js, Tailwind CSS, and Framer Motion to create dynamic and visually appealing user interfaces. On the back end, I have experience working with Laravel, Node.js, and Express.js, along with databases like MongoDB, SQLite, and PostgreSQL to build robust and scalable applications. Continuously striving to learn and improve, I am always exploring new technologies to enhance my skills and develop impactful digital solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile self-taught full-stack developer with a strong passion for building efficient and user-friendly web applications. My journey into web development started with a deep curiosity about how things work, which led me to independently learn and explore various technologies, including React, Laravel, Node.js, Firebase, MySQL, PostgreSQL, and MongoDB.

As a self-learner, I am always eager to take on new challenges, continuously improving my skills and staying up to date with the latest industry trends. I thrive in collaborative environments and enjoy solving complex problems to create high-quality solutions.

I am currently looking for an opportunity to apply my knowledge in a professional setting, contribute to real-world projects, and grow as a developer.

Outside of coding, I enjoy staying active and exploring new technologies.`;

export const PROJECTS = [
  {
    id: 1,
    title: "MERN REACT ADMIN DASHBOARD",
    des: "MERN React Admin Dashboard is a powerful and modern admin panel built with the MERN stack, designed for efficient data management and analytics. The frontend is developed using React with Material UI for a sleek and responsive design, while Material UI Data Grid enables seamless data handling with sorting, filtering, and pagination. Nivo Charts provide rich data visualizations, and state management is streamlined using Redux Toolkit and Redux Toolkit Query. On the backend, Node.js and Express.js handle server-side logic and API requests, while Mongoose and MongoDB manage structured data efficiently. With its feature-rich interface and scalable architecture, MERN React Admin Dashboard is ideal for managing users, products, analytics, and business operations in an intuitive and visually appealing manner.",
    img: "/mern-dashboard.png",
    iconLists: [
      { icon: "/re.svg", alt: "ReactJs" },
      { icon: "/tail.svg", alt: "Tailwind" },
      { icon: "/ts.svg", alt: "Typescript" },
      { icon: "/nivo.png", alt: "Nivo Charts" },
      { icon: "/mongodb.svg", alt: "MongoDB" },
      { icon: "/", alt: "Framer Motion" },
    ],
    liveDemo: "https://mern-react-admin-dashboard-ten.vercel.app",
    github: "https://github.com/longliveakim98/MERN-React-Admin-Dashboard",
  },
  {
    id: 2,
    title: "OdaFit - The ultimate gym training app",
    des: "Oda-Fit is a dynamic and interactive fitness application built with React, Tailwind CSS, and Framer Motion. Designed to provide a personalized workout experience, Oda-Fit generates workout routines based on the user’s specific fitness goals and focus areas. With a sleek and responsive UI, smooth animations, and an intuitive interface, users can easily explore tailored exercises that help them stay on track with their fitness journey. Whether aiming for strength, endurance, flexibility, or overall wellness, Oda-Fit adapts to individual needs, making fitness more engaging and accessible.",
    img: "/odaFit.png",
    iconLists: [
      { icon: "/re.svg", alt: "ReactJs" },
      { icon: "/tail.svg", alt: "Tailwind" },
      { icon: "/mongodb.svg", alt: "Framer Motion" },
    ],
    liveDemo: "https://oda-fit.vercel.app/",
    github: "https://github.com/longliveakim98/oda-fit",
  },
  {
    id: 3,
    title: "The Blog",
    des: "The Blog is a modern Laravel React Inertia application designed for effortless content creation. Built under HERD with an SQLite backend, it leverages the power of Laravel for backend processing and React with Inertia.js for a smooth, single-page app experience. Styled with Tailwind CSS, The Blog offers a clean and responsive interface. Users can create, edit, and delete posts containing rich text paragraphs and images, making it an intuitive and efficient platform for blogging.",
    img: "/theblog.png",
    iconLists: [
      { icon: "/re.svg", alt: "ReactJs" },
      { icon: "/tail.svg", alt: "Tailwind" },
      { icon: "/laravel.svg", alt: "Laravel" },
      { icon: "/sqlite-whitebg.svg", alt: "SQLite" },
    ],
    link: "",
    github: "https://github.com/longliveakim98/the_blog_inertia",
  },
  {
    id: 4,
    title: "Spotify Clone",
    des: "A full-stack web application built with React (Tailwind CSS) on the frontend and Node.js/Express.js with MongoDB on the backend. It features JWT-based authentication, allowing users to register, log in, and manage their profiles. Users can create, update, and delete playlists, each containing an ID, name, description, and image. The app also supports a post and comment system with threaded replies, dynamic navigation, file uploads, and infinite scrolling for posts. Data is managed using React state and stored in MongoDB. The UI is styled with React Bootstrap and Tailwind CSS, ensuring a smooth and responsive experience.",
    img: "/SpotifyC169.png",
    iconLists: [
      { icon: "/re.svg", alt: "ReactJs" },
      { icon: "/tail.svg", alt: "Tailwind" },
      { icon: "/laravel.svg", alt: "Laravel" },
      { icon: "/sqlite-whitebg.svg", alt: "SQLite" },
      { icon: "/mongodb.svg", alt: "Framer Motion" },
    ],
    liveDemo: "https://spotify-clone-full-stack-alpha.vercel.app",
    adminPage: "https://spotify-clone-full-stack-mwn2.vercel.app",
    github: "https://github.com/longliveakim98/SpotifyCloneFullStack",
  },
];

export const CONTACT = {
  address: "17, Lorong Cakera Purnama 12/1 42300 Puncak Alam, Selangor ",
  phoneNo: "+60 11-3798 7725",
  email: "mohdaimanhakim.98@gmail.com",
};

export const PROJECTS2 = [
  {
    id: 1,
    title: "MERN REACT ADMIN DASHBOARD",
    description: {
      overview: [
        "MERN React Admin Dashboard is a powerful and modern admin panel built with the MERN stack.",
        "Designed for efficient data management and analytics.",
      ],
      frontend: [
        "Developed using React with Material UI for a sleek and responsive design.",
        "Material UI Data Grid enables seamless data handling with sorting, filtering, and pagination.",
        "Nivo Charts provide rich data visualizations.",
        "State management is streamlined using Redux Toolkit and Redux Toolkit Query.",
      ],
      backend: [
        "Node.js and Express.js handle server-side logic and API requests efficiently.",
        "Mongoose and MongoDB manage structured data efficiently.",
      ],
      features: [
        "Ideal for managing users, products, analytics, and business operations.",
        "Provides an intuitive and visually appealing interface with a scalable architecture.",
      ],
    },
    img: "/mern-dashboard.png",
    technologies: [
      { icon: "/re.svg", alt: "ReactJs" },
      { icon: "/tail.svg", alt: "Tailwind" },
      { icon: "/ts.svg", alt: "Typescript" },
      { icon: "/nivo.png", alt: "Nivo Charts" },
      { icon: "/mongodb.svg", alt: "MongoDB" },
      { icon: "/mongodb.svg", alt: "Framer Motion" },
    ],
    liveDemo: "https://mern-react-admin-dashboard-ten.vercel.app",
    github: "https://github.com/longliveakim98/MERN-React-Admin-Dashboard",
  },
  {
    id: 2,
    title: "OdaFit - The ultimate gym training app",
    description: {
      overview: [
        "Oda-Fit is a dynamic and interactive fitness application built with React, Tailwind CSS, and Framer Motion.",
        "Designed to provide a personalized workout experience.",
      ],
      frontend: [
        "Sleek and responsive UI with smooth animations for an engaging experience.",
        "Intuitive interface allows users to explore tailored exercises easily.",
      ],
      features: [
        "Generates workout routines based on the user’s specific fitness goals and focus areas.",
        "Helps users stay on track with their fitness journey.",
        "Adapts to individual needs, whether the goal is strength, endurance, flexibility, or overall wellness.",
        "Makes fitness more engaging and accessible.",
      ],
    },
    img: "/odaFit.png",
    technologies: [
      { icon: "/re.svg", alt: "ReactJs" },
      { icon: "/tail.svg", alt: "Tailwind" },
      { icon: "/mongodb.svg", alt: "Framer Motion" },
    ],
    liveDemo: "https://oda-fit.vercel.app/",
    github: "https://github.com/longliveakim98/oda-fit",
  },
  {
    id: 3,
    title: "The Blog",
    description: {
      overview: [
        "The Blog is a modern Laravel React Inertia application designed for effortless content creation.",
        "Built under HERD with an SQLite backend.",
      ],
      frontend: [
        "Uses React with Inertia.js for a smooth, single-page app experience.",
        "Styled with Tailwind CSS for a clean and responsive interface.",
      ],
      backend: [
        "Leverages Laravel for backend processing.",
        "Uses SQLite as the database.",
      ],
      features: [
        "Users can create, edit, and delete posts.",
        "Supports rich text paragraphs and images.",
        "Provides an intuitive and efficient platform for blogging.",
      ],
    },
    img: "/theblog.png",
    technologies: [
      { icon: "/re.svg", alt: "ReactJs" },
      { icon: "/tail.svg", alt: "Tailwind" },
      { icon: "/laravel.svg", alt: "Laravel" },
      { icon: "/sqlite-whitebg.svg", alt: "SQLite" },
    ],
    liveDemo: "",
    github: "https://github.com/longliveakim98/the_blog_inertia",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description: {
      overview: [
        "A full-stack web application built with React (Tailwind CSS) on the frontend and Node.js/Express.js with MongoDB on the backend.",
      ],
      authentication: [
        "Features JWT-based authentication.",
        "Allows users to register, log in, and manage their profiles.",
      ],
      playlists: [
        "Users can create, update, and delete playlists.",
        "Each playlist contains an ID, name, description, and image.",
      ],
      features: [
        "Dynamic navigation for a seamless user experience.",
        "File uploads for enhanced content sharing.",
      ],
      backend: [
        "Data is managed using React state and stored in MongoDB.",
        "UI is styled with React Bootstrap and Tailwind CSS for a smooth and responsive experience.",
      ],
    },
    img: "/SpotifyC169.png",
    technologies: [
      { icon: "/re.svg", alt: "ReactJs" },
      { icon: "/tail.svg", alt: "Tailwind" },
      { icon: "/laravel.svg", alt: "Laravel" },
      { icon: "/sqlite-whitebg.svg", alt: "SQLite" },
      { icon: "/mongodb.svg", alt: "Framer Motion" },
    ],
    liveDemo: "https://spotify-clone-full-stack-alpha.vercel.app",
    adminPage: "https://spotify-clone-full-stack-mwn2.vercel.app",
    github: "https://github.com/longliveakim98/SpotifyCloneFullStack",
  },
];
