import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { PROJECTS } from "../constants";
import * as motion from "motion/react-client";
import { SiMongodb, SiSqlite, SiTypescript } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, i) => (
          <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
              viewport={{ once: true }}
            >
              <img
                src={project.img}
                alt="Project preview"
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl ">{project.title}</h3>
              <p className="mb-4 text-stone-400 ">{project.des}</p>
              <div className="flex gap-2">
                {project.iconLists.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech.alt === "ReactJs" && (
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{
                          rotate: 360,
                          transition: {
                            duration: 1,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                          },
                        }}
                        className="h-4 w-4 flex items-center justify-center"
                      >
                        <RiReactjsLine className="text-cyan-500" />
                      </motion.div>
                    )}

                    {tech.alt === "Tailwind" && (
                      <motion.div
                        initial="initial"
                        whileHover="hovered"
                        className="h-4 w-4 whitespace-nowrap overflow-hidden relative"
                      >
                        <motion.div
                          variants={{
                            initial: { x: 0 },
                            hovered: { x: ["-100%", 0, "100%"] },
                          }}
                          transition={{
                            duration: 3,
                          }}
                          className="flex items-center justify-center"
                        >
                          <RiTailwindCssFill className="text-blue-500" />
                        </motion.div>
                        <motion.div
                          variants={{
                            initial: { x: 0 },
                            hovered: { x: ["100%", 0, "-100%"] },
                          }}
                          transition={{
                            duration: 3,
                          }}
                          className="flex items-center justify-center absolute inset-0"
                        >
                          <RiTailwindCssFill className="text-blue-500" />
                        </motion.div>
                        <motion.div
                          variants={{
                            initial: { opacity: 0, scale: 1 },
                            hovered: { opacity: 1.5, scale: [1.5, 1] },
                          }}
                          transition={{
                            delay: 3,
                            duration: 3,
                          }}
                          className="flex items-center justify-center absolute inset-0"
                        >
                          <RiTailwindCssFill className="text-blue-500" />
                        </motion.div>
                      </motion.div>
                    )}

                    {tech.alt === "Typescript" && (
                      <motion.div
                        initial={{ opacity: 0.5 }}
                        whileHover={{
                          opacity: 1.5,
                          transition: { duration: 0.3 },
                        }}
                        className="h-4 w-4 flex items-center justify-center"
                      >
                        <SiTypescript className="text-blue-600" />
                      </motion.div>
                    )}

                    {tech.alt === "Nivo Charts" && (
                      <motion.div
                        initial={{ y: 0, scale: 1 }}
                        whileHover={{
                          y: -30,
                          scale: 3.5,
                          transition: {
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "mirror",
                          },
                        }}
                        className="h-4 w-4 flex items-center justify-center"
                      >
                        <img src="/nivo.png" alt="Nivo Charts" className="" />
                      </motion.div>
                    )}

                    {tech.alt === "MongoDB" && (
                      <motion.div
                        initial={{ scale: 1, rotate: 0 }}
                        whileHover={{
                          rotate: [0, 45, 0, -45, 0],
                          scale: 1.1,
                          transition: {
                            duration: 3,
                            ease: "easeOut",
                            repeat: Infinity,
                          },
                        }}
                        className="h-4 w-4 flex items-center justify-center"
                      >
                        <SiMongodb className="text-7xl text-green-500" />
                      </motion.div>
                    )}

                    {tech.alt === "Laravel" && (
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{
                          rotate: [0, 10, -10, 0],
                          transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          },
                        }}
                        className="h-4 w-4 flex items-center justify-center"
                      >
                        <FaLaravel className="text-7xl text-red-500" />
                      </motion.div>
                    )}

                    {tech.alt === "SQLite" && (
                      <motion.div
                        initial={{ opacity: 0.7 }}
                        whileHover={{
                          opacity: 1,
                          scale: 1.1,
                          transition: { duration: 0.5, ease: "easeInOut" },
                        }}
                        className="h-4 w-4 flex items-center justify-center"
                      >
                        <SiSqlite className="text-7xl text-cyan-500" />
                      </motion.div>
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
