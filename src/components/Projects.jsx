import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiSqlite, SiTypescript } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import * as motion from "motion/react-client";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4 px-4 sm:px-8 md:px-12 lg:px-16 md:hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-10 text-center text-3xl md:text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, i) => (
          <div key={i} className="flex flex-col lg:flex-row gap-6 items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-sm"
              viewport={{ once: true }}
            >
              <img
                src={project.img}
                alt="Project preview"
                className="w-full h-auto rounded shadow-lg"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full max-w-lg text-center lg:text-left"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-stone-400 mb-4">{project.des}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {project.iconLists.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-stone-900 p-2 rounded-lg text-sm text-stone-300 shadow"
                  >
                    {tech.alt === "ReactJs" && (
                      <RiReactjsLine className="text-cyan-500 text-lg" />
                    )}
                    {tech.alt === "Tailwind" && (
                      <RiTailwindCssFill className="text-blue-500 text-lg" />
                    )}
                    {tech.alt === "Typescript" && (
                      <SiTypescript className="text-blue-600 text-lg" />
                    )}
                    {tech.alt === "Framer Motion" && (
                      <TbBrandFramerMotion className="text-purple-500 text-lg" />
                    )}
                    {tech.alt === "MongoDB" && (
                      <SiMongodb className="text-green-500 text-lg" />
                    )}
                    {tech.alt === "Laravel" && (
                      <FaLaravel className="text-red-500 text-lg" />
                    )}
                    {tech.alt === "SQLite" && (
                      <SiSqlite className="text-cyan-500 text-lg" />
                    )}
                    <span>{tech.alt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
