import React from "react";
import { projects } from "../data/data.js";

//
// Projects Data: This file contains an array of project objects used to display information about different projects on the website.

// The `projects` array consists of objects with the following properties for each project:
// - id: A unique identifier for the project.
// - title: The title or name of the project.
// - subtitle: A subtitle or brief description of the project.
// - description: A detailed description of the project, including the technologies used and its features.
// - image: The image representing the project, displayed as a thumbnail or visual representation.
// - link: A link to the project's live demo, repository, or website for users to explore further.
// - credit: Attribution information for the image used in the project's representation.

// Each project object provides information about a specific project or application, including projects built with React, AWS, MongoDB, Unity, C#, Swift, etc. The descriptions highlight the features, technologies, and functionalities of each project.

// The `projects` array can be used to dynamically render project cards or sections on the website, displaying information about each project along with relevant images and links.

const Projects = ({isMobile}) => {
    return (
        <section className="text-light-gray bg-charcoal dark:bg-light-gray font-sans">
            <div className="container px-5 py-10 mx-auto text-center flex flex-col justify-between">
                <div className="flex flex-col w-full">
                    <h1 className="text-6xl title-font font-sans mb-16 text-white font-bold dark:text-black">
                    Projects I've Built
                    </h1>
                    <p className="md:w-1/2 lg:w-2/3 text-xl mx-auto m-4 p-8 leading-relaxed text-base dark:text-black">
                    School and personal projects I have built using various languages and tech stacks.
                    </p>
                </div>
                <div id="projects" className="flex flex-wrap cursor-default justify-evenly -m-2 p-8">
                    {projects.map((project) => (
                        <a href={isMobile ? project.link : null} key={project.image} className="sm:w-1/2 w-full p-6">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-lime bg-black opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-lime mb-1">
                                    {project.subtitle}
                                    </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">{project.title}</h1>
                                            <p className="leading-relaxed">{project.description} <br/>
                                                <span className="text-lime">{project.credit}</span>
                                            </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects;