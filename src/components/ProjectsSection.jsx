import { ArrowRight, ExternalLink, Github, Video } from "lucide-react"

const projects=[
    {
        id: 1,
        title: "IDAll: An E-Commerce Webapp",
        role: "Backend engineer",
        description: "This is a deployed webapp.",
        stack:"Angular, MySQL and Java Springboot.",
        image: "/projects/idall.png",
        tags:["Springboot", "Java", "MySQL", "Teamwork", "Deployment", "Web"],
        url: [{name: "Website",href:"https://idall.co/"}]
    },
    {
        id: 2,
        title: "Documented: Your Timeless Digital Archive",
        role:"Fullstack engineer",
        description: "the graduation project of my summer internship in Atos.",
        stack:"Java springboot, MySQL, MongoDB and React.",
        image: "/projects/documented.png",
        tags:["Springboot", "Java", "MySQL", "MongoDB","React", "Web"],
        url: [{name: "Github",href:"https://github.com/mariamelkondakly/DocumentManagementSystem"}],
    },
    {
        id: 3,
        title: "Sawah: A travel Management System",
        role: "software developer",
        description: "part of a team of 6 for the OOP course. UI/UX from Figma.",
        stack: "Java, JavaFX and Scene Builder.",
        image: "/projects/sawah.png",
        tags:["Java", "Desktop Software", "Teamwork", "Figma", "Scene Builder"],
        url: [{name: "Github",href:"https://github.com/mostafahakim03/Travel_Management_System"}],

    },
    {
        id: 4,
        title: "Guide Me: Route Finder Remake",
        role: "software developer",
        description: "a part of a team of 7 for the Data Structures course. UI/UX from Figma.",
        stak: "C++ and Qt Creator.",
        image: "/projects/guideMe.png",
        tags:["C++", "Desktop Software", "Teamwork", "Figma", "Qt"],
        url: [{name: "Github",href:"https://github.com/mariamelkondakly/GuideMe"}],
    },
    {
        id: 5,
        title: "The Autumn Attic",
        role: "software developer",
        description: "A solo Leisurely created library managemenet, a UI recreation of my first console app project.",
        stack: "C++, MySQL, and SFML",
        image: "/projects/library.jpg",
        tags:["C++", "Desktop Software", "SFML", "MySql"],
        url: [{name: "Github",href:"https://github.com/mariamelkondakly/Library_sfml"}],
    },
    {
        id: 6,
        title: "IMDB Recreated",
        role: "software developer",
        description: "a part of a team of 5 for the Software Engineering course.",
        stack: "C#, Windows Forms, and OrcaleDB",
        image: "/projects/imdb.png",
        tags:["C#", "Desktop Software", "Teamwork", "Windows Forms", "OrcaleDB"],
        url: [{name: "Github",href:"https://github.com/mariamelkondakly/Library_sfml"}],
    },
    {
        id: 7,
        title: "Image Segmentator",
        role: "software developer",
        description: "a part of a team of 5 for the Algorithms course.",
        stack: "C#, Windows Forms",
        image: "/projects/algo.jpg",
        tags:["C#", "Desktop Software", "Teamwork", "Windows Forms"],
        url: [{name: "Github",href:"https://github.com/mariamelkondakly/Image_Segmentation_Project"}],
    },
    {
        id: 8,
        title: "The Tiny Language Compiler",
        role: "software developer",
        description: "a part of a team of 4 for the Compiler Theory course.",
        stack: "C#, Windows Forms",
        image: "/projects/compiler.png",
        tags:["C#", "Desktop Software", "Teamwork", "Windows Forms"],
        url: [{name: "Github",href:"https://github.com/mariamelkondakly/TINY_Compiler"}],
    },
    {
        id: 9,
        title: "FOS: A Mini Operating System",
        role: "System developer",
        description: "a part of a team of 6 for the Operating Systems course.",
        stack: "C, Windows Forms",
        image: "/projects/OS.png",
        tags:["C", "Desktop Software", "Teamwork"],
        url: [{name: "Github",href:"https://github.com/mariamelkondakly/OS_Project"}],
    },
    {
        id: 10,
        title: "Movie Sentiment Analyser",
        role: "AI developer",
        description: "a part of a team of 6 for the NLP course.",
        stack: "Python, Anaconda",
        image: "/projects/sentiment.png",
        tags:["python", "AI", "Teamwork", "Anaconda", "Jupyter Notebook"],
        url: [{name: "Github",href:"https://github.com/Natural-Language-Processing-25/Sentiment-Analysis-of-movie-reviews"}],
    },
    {
        id: 11,
        title: "Life Through The Eyes of Time",
        role: "Graphic Designer",
        description: "a part of a team of 6 for the Graphics course.",
        stack: "Blender",
        image: "/projects/time.png",
        tags:["Teamwork","Blender", "Graphics"],
        url: [{name: "Github",href:"https://github.com/BlenderGraphicsTeam/Time_Theme_Blender_video"},
            , {name: "Video",href:"https://drive.google.com/file/d/1uQH3TQxaZEliohPj4KGWWlcCMWP_3o3M/view?usp=sharing"}
        ]
    },
    {
        id: 12,
        title: "A Github.io deployment",
        role: "Frontend Developer",
        description: "a solo restaurant mockup website for the John Hopkins Coursera course.",
        stack: "Javascript, HTML, CSS",
        image: "/projects/github.png",
        tags:["HTML","JavaScript", "CSS","GitHub", "Web"],
        url: [{name: "Github",href:"https://mariamelkondakly.github.io/module5-solution/#"}],
    },

]


export const ProjectSection=()=>{
    return(
        <section id="projects" className="pt-20 px-4 relative min-h-screen snap-start flex items-center justify-center">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-glow">Featured <span className="accent">Projects</span></h2>
            <p className="text-md  text-muted-color mb-12 mx-auto text-center">Here are some of my recent projects, carefully crafted with attention to detail, preformance and user experience.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    projects.map((project, key)=>(
                        <div key={key} className="nav-bg group card-hover rounded-lg overflow-hidden shadow-xs">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap mb-2 gap-2">
                                    {
                                        project.tags.map((tag)=>(
                                            <span className="px-2 py-1 font-medium rounded-full border accent">{tag}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1 p-3">{project.title}</h3>
                            <p className="text-md mb-1.5 pl-3 pr-3">{project.description}</p>
                            <p className="text-sm mb-0.5 pl-3 pr-3"><span className="accent">Role:</span><span className="text-glow ml-1">{project.role}</span></p>
                            <p className="text-sm mb-4 pl-3 pr-3"><span className="accent">Stack:</span><span className="text-glow ml-1">{project.stack}</span></p>
                            <div className="flex justify-between items-center px-4 pb-4">
                                <div className="hover:accent-2 flex space-x-3">
                                    {project.url?.map((link, i) => {
                                    if (link.name === "Website") {
                                        return (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="accent hover:text-glow transition-colors duration-300"
                                            title="Visit Website"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        );
                                    }
                                    if (link.name === "Github") {
                                        return (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="accent hover:text-glow transition-colors duration-300"
                                            title="View Source"
                                        >
                                            <Github size={20} />
                                        </a>
                                        );
                                    }
                                    if (link.name === "Video") {
                                        return (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="accent hover:text-glow transition-colors duration-300"
                                            title="Watch Demo"
                                        >
                                            <Video size={20}/>
                                        </a>
                                        );
                                    }
                                    return null;
                                    })}
                                </div>
                                </div>

                        </div>
                    ))
                }
            </div>
            <div className="text-center mt-12">
                <a className="button-class font-color w-fit flex items-center mx-auto gap-2 mb-5" href="https://github.com/mariamelkondakly" target="_blank">
                    Check My Github <ArrowRight/>
                </a>
            </div>
            </div>
        </section>
    )
}