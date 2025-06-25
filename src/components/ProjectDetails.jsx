import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-auto backdrop-blur-sm max-sm:p-4">
          <motion.div
              className="relative w-full max-w-2xl mx-auto my-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 max-h-[90vh] max-sm:max-h-[95vh] overflow-hidden"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
          >
              <button
                  onClick={closeModal}
                  className="absolute p-2 rounded-sm top-3 right-3 bg-midnight hover:bg-gray-500 z-10 max-sm:top-2 max-sm:right-2"
              >
                  <img
                      src={`${import.meta.env.BASE_URL}assets/close.svg`}
                      className="w-6 h-6 max-sm:w-5 max-sm:h-5"
                  />
              </button>
              <img
                  src={`${import.meta.env.BASE_URL}${image}`}
                  alt={title}
                  className="w-full h-auto max-sm:h-[180px] rounded-t-2xl object-cover"
              />
              <div className="p-8 max-sm:p-4 max-sm:text-sm overflow-y-auto max-h-[60vh] max-sm:max-h-[50vh]">
                  <h5 className="mb-2 text-2xl font-bold text-white">
                      {title}
                  </h5>
                  <p className="mb-3 font-normal text-neutral-400 text-wrap">
                      {description}
                  </p>
                  {subDescription.map((subDesc, index) => (
                      <p
                          key={index}
                          className="mb-3 font-normal text-neutral-400"
                      >
                          {subDesc}
                      </p>
                  ))}
                  <div className="flex items-center justify-between mt-4 max-sm:flex-col max-sm:items-start max-sm:gap-4">
                      <div className="flex gap-3 flex-wrap">
                          {tags.map((tag) => (
                              <img
                                  key={tag.id}
                                  src={`${import.meta.env.BASE_URL}${tag.path}`}
                                  alt={tag.name}
                                  className="rounded-lg size-10 max-sm:size-8 hover-animation"
                              />
                          ))}
                      </div>
                      <a
                          className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation max-sm:self-end"
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          View Project{' '}
                          <img
                              src={`${
                                  import.meta.env.BASE_URL
                              }assets/arrow-up.svg`}
                              className="size-4"
                          />
                      </a>
                  </div>
              </div>
          </motion.div>
      </div>
  );
};

export default ProjectDetails;
