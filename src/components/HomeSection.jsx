import { ArrowDown } from "lucide-react";

export const HomeSection= ()=>{
    return <section id="home" className=" relative min-h-screen snap-start flex flex-col items-center justify-center px-4">
        <div className=" max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow ">
                    <span className="opacity-0 fade-in">Hi, I'm</span>
                    <span className="accent opacity-0 ml-2 fade-in delay-1">Mariam</span>
                    <span className="accent-2 opacity-0 ml-2 fade-in delay-2">Elkondakly</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-color max-2-2xl mx-auto opacity-0 fade-in delay-3">
                   a creative full-stack developer with a deep love for art, creation, and all things beautifully built. 
Welcome to my space, and feel free to explore the pixels I’ve poured my heart into.
                </p>

                <div className="opacity-0 fade-in delay-4 p-5">
                    <a href="#projects" className="button-class font-color"> View My Work</a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5"/>
        </div>
    </section>;
}