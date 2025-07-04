import { useState } from "react"
import { SkillBar } from "./SkillBar"
import { cn } from "../lib/utils"
const skills=[
    //frontend
    {name:"HTML/CSS", level: 95, category:"frontend/GUI"}, 
    {name:"React", level: 50, category:"frontend/GUI"},
    {name:"Tailwind CSS", level: 70, category:"frontend/GUI"},
    {name:"Scene Builder", level: 90, category:"frontend/GUI"},
    {name:"Qt", level: 90, category:"frontend/GUI"},
    // {name:"Windows Forms", level: 90, category:"frontend/GUI"},



    //backend
    {name:"Springboot", level: 80, category:"backend"},
    {name:"OracleDB", level: 90, category:"backend"},
    {name:"MySQL", level: 95, category:"backend"},
    {name:"MongoDB", level: 75, category:"backend"},
    //grphics 
    {name:"OpenGL", level: 80, category:"graphics"},
    {name:"Blender", level: 70, category:"graphics"},
    {name:"SFML", level: 90, category:"graphics"},

    //tools
    {name:"Git/Github", level: 90, category:"tools"},
    {name:"Visual Studio", level: 95, category:"tools"},
    {name:"VS Code", level: 80, category:"tools"},
    {name:"IntelliJ", level: 95, category:"tools"},
    {name:"Anaconda", level: 70, category:"tools"},
    {name:"Figma", level: 70, category:"tools"},
    {name:"Canva", level: 80, category:"tools"}, 
    {name:"CMake", level: 75, category:"tools"}, 
    {name:"Postman", level: 85, category:"tools"},  
 
 
]

const categories=["all","frontend/GUI","backend","graphics","tools"]

export const SkillsSection=()=>{
    const[activeCategory, setActiveCategory]=useState("all")
    const filteredSkills=skills.filter((skill)=>activeCategory==="all" || skill.category===activeCategory)
    return (
    <section id="skills" className="  pt-20 px-4 relative min-h-screen snap-start flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">My <span className="accent">Skills</span></h2>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((category,key)=>(
                    <button key={key}
                    onClick={()=>setActiveCategory(category)}
                     className={
                        cn("button-class-sm font-color capitalize", 
                        activeCategory===category ? "button-class-sm-selected":"button-class-sm font-color"
                     )}>{category}</button>
                ))}
            </div>
            <div className=" grid lg:grid-cols-7 grid-cols-2 md:grid-cols-4 gap-8 ">
                {
                    filteredSkills.map((skill,key)=>(
                        <div key={key} className="nav-bg card-hover p-6 rounded-lg shadow-xs md:max-w-md lg:w-36">
                            <div className="text-left mb-4 ">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                        </div>
                            <SkillBar level={skill.level} />


                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    )
}