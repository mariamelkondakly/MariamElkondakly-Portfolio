import { Bot, Briefcase, Code, User, Users } from "lucide-react"

export const AboutSection=()=>{
    return (
    <section id="about" className="  pt-20 px-4 relative min-h-screen snap-start flex items-center justify-center">
        {" "}
        <div className=" mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">About <span className="accent">Me</span></h2>
            <div className="grid grid-rows-1 md:grid-rows-2 items-center gap-12 md:gap-0">
                <div className="md:grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="space-y-2 nav-bg p-5 rounded-2xl card-hover">
                    <h3 className="text-xl md:text-2xl font-semibold accent">My Vision & Mission</h3>
                    <p className="text-md md:text-lg ">I believe that every detail matters — every small experiment, every big milestone, and every line of code has shaped who I am and what I’m capable of.</p>

                    <p className="text-md md:text-lg ">I specialize in crafting digital experiences that are not only functionally efficient but also aesthetically pleasing.

I’m passionate about building systems from scratch, thoughtfully planning upcoming projects, and continuously exploring the ever-evolving world of tech.</p>
                </div>
                <div className="hidden md:block -100 grid-cols-1 gap-1">
                    <div className="p-6 card-hover">
                    <div className="flex items-start gap-4">
                        {/* Icon inside nav-bg circle */}
                        <div className="p-3 rounded-full nav-bg">
                        <Code className="h-5 w-5" />
                        </div>

                        {/* Text block */}
                        <div className="text-left">
                        <h4 className="font-semibold text-md">Web Development</h4>
                        <p>Fullstack deployed webapps</p>
                        </div>
                    </div>
                    </div>

                    <div className="p-6 card-hover">
                    <div className="flex items-start gap-4">
                        {/* Icon inside nav-bg circle */}
                        <div className="p-3 rounded-full nav-bg">
                        <Users className="h-5 w-5" />
                        </div>

                        {/* Text block */}
                        <div className="text-left">
                        <h4 className="font-semibold text-md">Project Management</h4>
                        <p>Leadership and accountability</p>
                        </div>
                    </div>
                    </div>

                    <div className="p-6 card-hover">
                    <div className="flex items-start gap-4">
                        {/* Icon inside nav-bg circle */}
                        <div className="p-3 rounded-full nav-bg">
                        <Bot className="h-5 w-5" />
                        </div>

                        {/* Text block */}
                        <div className="text-left">
                        <h4 className="font-semibold text-md">AI & NLP</h4>
                        <p>Classifictaion and regression apps</p>
                        </div>
                    </div>
                    </div>


                </div>
                </div>
                <div className="space-y-2 nav-bg p-5 rounded-2xl card-hover">
                    <h3 className="text-xl md:text-2xl font-semibold accent">Background</h3>
                    <p className="text-md md:text-lg ">Attended School at Saint claire's College till the graduation with honours and as the top achiever of my grade in the Mathematics section in August 2022. From 2018 to 2022 I'd been consistently attending french courses at the IFE and I successfully obtained the DELF B2 in Novemeber 2022, proving advanced proficiency in the French language</p>
                    <p className="text-md md:text-lg ">I chose Computer Science as my major at Ain Shams University. My graduation is due July 2026 and I am so overwhelmed with excitement for what's to come afterwards. When I am not studying I am probably reading a novel, drawing, learning a new language  or exploring a city.</p>
                </div>
                <div className=" md:hidden grid grid-cols-1 gap-1">
                    <div className="p-6 card-hover">
                    <div className="flex items-start gap-4">
                        {/* Icon inside nav-bg circle */}
                        <div className="p-3 rounded-full nav-bg">
                        <Code className="h-5 w-5" />
                        </div>

                        {/* Text block */}
                        <div className="text-left">
                        <h4 className="font-semibold text-md">Web Development</h4>
                        <p>Fullstack deployed webapps</p>
                        </div>
                    </div>
                    </div>

                    <div className="p-6 card-hover">
                    <div className="flex items-start gap-4">
                        {/* Icon inside nav-bg circle */}
                        <div className="p-3 rounded-full nav-bg">
                        <Users className="h-5 w-5" />
                        </div>

                        {/* Text block */}
                        <div className="text-left">
                        <h4 className="font-semibold text-md">Project Management</h4>
                        <p>Leadership and accountability</p>
                        </div>
                    </div>
                    </div>

                    <div className="p-6 card-hover">
                    <div className="flex items-start gap-4">
                        {/* Icon inside nav-bg circle */}
                        <div className="p-3 rounded-full nav-bg">
                        <Bot className="h-5 w-5" />
                        </div>

                        {/* Text block */}
                        <div className="text-left">
                        <h4 className="font-semibold text-md">AI & NLP</h4>
                        <p>Classifictaion and regression apps</p>
                        </div>
                    </div>
                    </div>


                </div>
            </div>
        </div>
    </section>)
}