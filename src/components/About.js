import React from "react";
import aboutImage from '../assets/family.jpg';

const About = () => {
    return (
    <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center font-sans">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-charcoal">
                Welcome, my name is Corey.
                <br className="hidden lg:inline-block" />I really love developing and building new projects.
                </h1>
                <p className="mb-8 leading-relaxed">
                    I am a dedicated husband and father to a beautiful three-year-old daughter.  
                    I am currently a full-time student with a passion for software development, cybersecurity
                    and systems administration.  With a focus on developing my skills as a full stack developer, 
                    I have discovered an interest in cloud computing and web applications.  As a former aviation  
                    mechanic and Criminal Justice graduate, I enjoy building new projects, learning new 
                    technologies and working with tools in my spare time.  As an avid dog and outdoor lover, 
                    I have been a dog dad to (Ellen) Ripley for 5 years and we are often out exploring 
                    the Island trails as a family.
                </p>
                <div className="flex justify-center">
                <a
                    href="https://www.linkedin.com/in/g-corey-bennett-5a7bab234/"
                    className="inline-flex text-charcoal bg-lime dark:text-lime dark:bg-charcoal border-0 py-2 px-6 focus:outline-none hover:bg-dark-lime hover:text-light-lime dark:hover:bg-light-gray dark:hover:text-charcoal rounded text-lg">
                    Work With Me
                </a>
                <a
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        const projectsSection = document.getElementById("projects");
                        projectsSection.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="ml-4 inline-flex text-charcoal bg-lime dark:text-lime dark:bg-charcoal border-0 py-2 px-6 focus:outline-none hover:bg-dark-lime hover:text-light-lime dark:hover:bg-light-gray dark:hover:text-charcoal rounded text-lg">
                    See My Past Work
                </a>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                className="about-image object-cover object-center rounded"
                alt="hero"
                src={aboutImage}
                />
            </div>
        </div>
    </section>
    );
}

export default About;