import { FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/projects/oda.png";
import * as motion from "motion/react-client";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.a
          initial={{ x: -100, opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          whileHover={{
            x: [0, 100],
            rotate: 180,
            transition: {
              duration: 1,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          transition={{ duration: 0.5 }}
          href="/"
          aria-label="Home"
        >
          <img src={logo} className="mx-2" width={50} height={50} alt="logo" />
        </motion.a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/longliveakim98"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/longliveakim/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
