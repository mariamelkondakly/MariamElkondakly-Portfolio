import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems=[
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Languages", href: "#languages"},
    {name: "Projects", href: "#projects"},


]

export const Navbar=()=>{
    const [isScrolled, setIsScrolled]= useState(false);
    const [isMenuOpen, setIsMenuOpen]= useState(false);

    useEffect(()=>{
        const handleScroll =()=> {
            setIsScrolled(window.scrollY>10)
        }
        window.addEventListener("scroll",handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])
    
    return <nav className={cn(" fixed top-0 left-0 w-full z-40 transition-all duration-300 pl-20 pr-20 pt-6", 
        isScrolled? "pt-3 backdrop-blur-md shadow-xs": "pt-6"
    )}>
       

        <div className=" flex items-center justify-between">
            <a className= "text-lg md:text-xl font-bold flex mr-10 justify-between text-glow" href="#home">
                <span className="relative z-10  accent-2 transition-colors duration-700">
                <span className=" accent mr-0.5">Mariam</span> Elkondakly
                </span>
            </a>
            {/*desktop nav */}
            <div className="hidden relative md:flex items-center space-x-8">
                {navItems.map((item,key)=>(
                    <a key={key }href={item.href} className="hover-accent transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
                 <ThemeToggle/>
            </div>
            {/*mobile nav */}
            <div className="md:hidden flex items-center gap-2">
            <button onClick={()=>setIsMenuOpen((prev)=> !prev)} className=" p-2 z-50">
                {isMenuOpen? <X size={24}/> : <Menu size={24}/>}
            </button>
            <div >
            <ThemeToggle/>
            </div>
            </div>
            <div className={cn("fixed inset-0 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "tracking-all duration-300 md:hidden",
                isMenuOpen? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"
            )
                
            }>
            <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item,key)=>(
                    <a 
                    key={key }
                    href={item.href} 
                    className="hover-accent transition-colors duration-300"
                    onClick={()=>setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}

            </div>
            </div>

        </div>
    </nav>
}