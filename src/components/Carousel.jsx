import { AnimatePresence, MotionConfig } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import { PROJECTS2 } from "../constants";
import { FaLaravel } from "react-icons/fa";
import { SiMongodb, SiSqlite, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";

const Carousel = () => {
  const [current, setCurrent] = useState(1);
  const [activeDescriptionKey, setActiveDescriptionKey] = useState("");

  const onPrev = () =>
    setCurrent((prev) => (prev > 0 ? prev - 1 : PROJECTS2.length - 1));
  const onNext = () =>
    setCurrent((prev) => (prev < PROJECTS2.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    if (PROJECTS2[current]?.description) {
      const keys = Object.keys(PROJECTS2[current].description).filter(
        (key) => key !== "overview"
      );
      if (keys.length > 0) setActiveDescriptionKey(keys[0]);

      const interval = setInterval(() => {
        setActiveDescriptionKey((prevKey) => {
          const currentIndex = keys.indexOf(prevKey);
          return keys[(currentIndex + 1) % keys.length];
        });
      }, 10000); // Cycle every 3 seconds

      return () => clearInterval(interval);
    }
  }, [current]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 3, ease: "easeIn" }}
      className="md:flex flex-col items-center justify-center min-h-screen px-4 py-12 hidden gap-20"
    >
      <motion.h2
        initial={{ y: -400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className=" text-4xl"
      >
        Projects
      </motion.h2>
      <MotionConfig transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}>
        <div className="relative w-full max-w-7xl ">
          {/* Image Container */}
          <motion.div
            animate={{ translateX: `-${current * 100}% ` }}
            className="flex gap-4 flex-nowrap transition-transform ease-in-out items-center relative "
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
          >
            {PROJECTS2.map((project, i) => (
              <div key={i} className="relative w-full flex-shrink-0  ">
                {/* Image */}
                <motion.img
                  src={project.img}
                  alt={`Slide ${i}`}
                  className="w-full max-w-full h-auto object-cover rounded-lg aspect-square xl:aspect-[16/9]"
                  animate={{
                    opacity: i === current ? [1, 0.2] : 0.2,
                    transition: { duration: 4, ease: "easeInOut" },
                  }}
                />

                {/* Title Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center flex-col   bg-opacity-30 text-white md:text-2xl font-semibold p-4 rounded-lg"
                  animate={{ opacity: i === current ? 1 : 0 }}
                  transition={{ duration: 1, delay: 4 }}
                >
                  <div>
                    <h2 className="text-4xl font-bold mb-4 text-center">
                      {project.title}
                    </h2>
                    {project.description?.overview && (
                      <div className="mb-4 max-w-4xl">
                        <ul className="text-2xl gap-2 flex flex-col">
                          {project.description.overview.map((point, idx) => (
                            <li key={idx}> {point}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Description - Showing One Key at a Time */}
                    <AnimatePresence>
                      <div className="relative w-full h-[300px] flex items-center justify-center">
                        {activeDescriptionKey && (
                          <motion.div
                            key={activeDescriptionKey}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1 }}
                            className="absolute w-full h-full flex flex-col items-center justify-center text-center"
                          >
                            <motion.h3 className="text-3xl  font-bold capitalize mb-5">
                              {activeDescriptionKey}
                            </motion.h3>
                            <div className=" flex flex-col lg:flex-row text-lg lg:text-2xl gap-2 ">
                              {Array.isArray(
                                project.description[activeDescriptionKey]
                              ) &&
                                project.description[activeDescriptionKey].map(
                                  (point, idx) => (
                                    <motion.p
                                      animate={{
                                        x: [-400 * idx, 0],
                                        opacity: [0, 1],
                                      }}
                                      transition={{
                                        duration: 1,
                                        delay: 1 * idx,
                                      }}
                                      className="border py-4 px-2 rounded-lg "
                                      key={idx}
                                    >
                                      {point}
                                    </motion.p>
                                  )
                                )}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </AnimatePresence>

                    <div className="flex gap-2">
                      {project.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 rounded bg-stone-900 p-2 text-lg font-medium text-stone-300"
                        >
                          {tech.alt === "ReactJs" && (
                            <motion.div
                              initial={{ rotate: 0 }}
                              animate={{
                                rotate: [0, 360, 0, 0],
                                transition: {
                                  duration: 1,
                                  ease: "easeInOut",
                                  repeat: Infinity,
                                  repeatType: "loop",
                                },
                              }}
                              className="  flex items-center justify-center"
                            >
                              <RiReactjsLine className="text-cyan-500 h-8 w-8" />
                            </motion.div>
                          )}

                          {tech.alt === "Tailwind" && (
                            <motion.div
                              initial="initial"
                              animate="hovered"
                              className=" whitespace-nowrap overflow-hidden relative"
                            >
                              <motion.div
                                variants={{
                                  initial: { x: 0 },
                                  hovered: { x: ["-100%", 0, "100%"] },
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatType: "loop",
                                }}
                                className="flex items-center justify-center"
                              >
                                <RiTailwindCssFill className="text-blue-500 w-8 h-8" />
                              </motion.div>
                              <motion.div
                                variants={{
                                  initial: { x: 0 },
                                  hovered: { x: ["100%", 0, "-100%"] },
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatType: "loop",
                                }}
                                className="flex items-center justify-center absolute inset-0"
                              >
                                <RiTailwindCssFill className="text-blue-500 w-8 h-8" />
                              </motion.div>
                              <motion.div
                                variants={{
                                  initial: { opacity: 0, scale: 1 },
                                  hovered: {
                                    opacity: 0.6,
                                    scale: [1.5, 1],
                                  },
                                }}
                                transition={{
                                  delay: 3,
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                }}
                                className="flex items-center justify-center absolute inset-0"
                              >
                                <RiTailwindCssFill className="text-blue-500 w-8 h-8" />
                              </motion.div>
                            </motion.div>
                          )}

                          {tech.alt === "Typescript" && (
                            <motion.div
                              animate={{
                                rotate: [180, -90, 0],
                                transition: {
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  ease: "circInOut",
                                },
                              }}
                              className=" flex items-center justify-center"
                            >
                              <SiTypescript className="text-blue-600 w-8 h-8" />
                            </motion.div>
                          )}

                          {tech.alt === "Framer Motion" && (
                            <motion.div
                              animate={{
                                opacity: [0.3, 1.5, 0.5, 1],

                                y: [5, -5, 5, -5, 5],
                                transition: {
                                  duration: 2,
                                  repeat: Infinity,

                                  repeatType: "reverse",
                                  ease: "circInOut",
                                },
                              }}
                              className="flex items-center justify-center"
                            >
                              <TbBrandFramerMotion className="text-purple-500 w-8 h-8" />
                            </motion.div>
                          )}

                          {tech.alt === "Nivo Charts" && (
                            <motion.div
                              animate={{
                                opacity: [1, 2, 0],
                                transition: {
                                  duration: 2,
                                  ease: "circInOut",
                                  repeat: Infinity,
                                  repeatType: "mirror",
                                },
                              }}
                              className="h-8 w-8 flex items-center justify-center"
                            >
                              <img
                                src="/nivo.png"
                                alt="Nivo Charts"
                                className=""
                              />
                            </motion.div>
                          )}

                          {tech.alt === "MongoDB" && (
                            <motion.div
                              initial={{ scale: 1, rotate: 0 }}
                              animate={{
                                rotate: [0, 45, 0, -45, 0],
                                scale: 1.1,
                                transition: {
                                  duration: 3,
                                  ease: "easeOut",
                                  repeat: Infinity,
                                },
                              }}
                              className=" flex items-center justify-center"
                            >
                              <SiMongodb className="text-7xl text-green-500 h-8 w-8" />
                            </motion.div>
                          )}

                          {tech.alt === "Laravel" && (
                            <motion.div
                              animate={{
                                rotate: [0, 10, -10, 0],
                                transition: {
                                  duration: 0.5,
                                  ease: "easeInOut",
                                  repeat: Infinity,
                                },
                              }}
                              className=" flex items-center justify-center"
                            >
                              <FaLaravel className="text-7xl text-red-500 h-8 w-8" />
                            </motion.div>
                          )}

                          {tech.alt === "SQLite" && (
                            <motion.div
                              initial={{ opacity: 0.7 }}
                              animate={{
                                opacity: 1,
                                scale: 1.1,
                                transition: {
                                  duration: 2,
                                  ease: "easeInOut",
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                },
                              }}
                              className=" flex items-center justify-center"
                            >
                              <SiSqlite className="text-7xl text-cyan-500 h-8 w-8" />
                            </motion.div>
                          )}

                          <span>{tech.alt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
            <motion.button
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800/50 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 cursor-pointer "
              onClick={onPrev}
            >
              <img src="/arrow5.svg" className="w-6 sm:w-10 rotate-180" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800/50 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 cursor-pointer"
              onClick={onNext}
            >
              <img src="/arrow5.svg" className="w-6 sm:w-10" />
            </motion.button>
          </div>
          {PROJECTS2.map(
            (project, i) =>
              i === current && (
                <div
                  key={project.id || i} // Ensure a unique key for React
                  className="mt-10 flex flex-col gap-4 z-20 items-center justify-center "
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <div className="flex gap-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 px-4 py-2 rounded-lg cursor-pointer z-50 pointer-events-auto"
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.id === 4 && (
                      <a
                        href="https://spotify-clone-full-stack-mwn2.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 px-4 py-2 rounded-lg cursor-pointer z-50"
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        Admin Page
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 px-4 py-2 rounded-lg cursor-pointer z-50"
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                  <div>
                    The deployment may take 1-3 minutes to restart if the site
                    has been inactive. Please allow some time for the server to
                    spin up. 🚀
                  </div>
                </div>
              )
          )}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {PROJECTS2.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === index ? "bg-white scale-105" : "bg-gray-600"
              }`}
              onClick={() => setCurrent(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </MotionConfig>
    </motion.div>
  );
};

export default Carousel;
