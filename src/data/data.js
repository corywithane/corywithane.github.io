import Wordle from '../assets/wordle.jpg';
import Rreact from '../assets/react.jpg';
import Portfolio from '../assets/portfolio.png';
import Swift from '../assets/swift.jpg';
import Isla from '../assets/game.png';

export const projects = [
    {
    id: 0,
    title: "AWS - React NY Time Wordle",
    subtitle: "AWS, React & NoSQL",
    description:
    "The game, built with React, AWS Gateway API, and NoSQL, presents players with a grid of letters to form words.  Responsive UI, scalable backend, and fast NoSQL storage offer an engaging gaming experience.",    
    image: Wordle,
    link: "https://www.nytimes.com/games/wordle/index.html",
    credit:"Photo by Nils Huenerfuerst on Unsplash.com"
},
{
    id: 1,
    title: "React Message Board App, API & NoSQL",
    subtitle: "React, MongoDB",
    description:
    "Dynamic React-based message board app with MongoDB NoSQL database. Users post, view messages with real-time updates.  Express.js handles API requests for efficient data storage and retrieval.  Scalable and interactive.",
    image: Rreact,
    link: "https://react.dev/reference/react",
    credit:"Photo by Lautaro Andreani on Unsplash.com"
},
{
    id: 2,
    title: "Unity 2D Platformer",
    subtitle: "Unity, C#",
    description:
    "\"Isla June's Afternoon\" was a Unity-powered 2D platformer inspired by my daughter's love of collecting and eating cheese.  C# scripting for game logic, physics, and interactions.",
    image: Isla,
    link: "https://docs.unity3d.com/Manual/Unity2D.html",
    credit: "Photo taken by myself during development"
},
{
    id: 3,
    title: "Picture Blog App",
    subtitle: "Swift",
    description:
    "Swift-based photo blog app. Capture photos, add captions, and save favourites.  Create a personalized photo journal with a seamless user experience and interactive features.",
    image: Swift,
    link: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/",
    credit: "Photo by Maxim Hopman"
},
    {
    id: 4,
    title: "Portfolio Website",
    subtitle: "React, TailwindCSS, and GitHub",
    description: "Simple portfolio site",
    image: Portfolio,
    link: "https://www.nytimes.com/games/wordle/index.html",
},
];