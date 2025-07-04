import { ArrowUp } from "lucide-react"

export const Footer=()=>{
    return (
    <footer className="snap-none py-12 px-4 nav-bg relative border-t mt-12 pt-8 flex flex-wrap justify-between items-center">
        {" "}
        <p className="text-sm accent">&copy; {new Date().getFullYear()} Mariam Elkondakly, All Rights Reserved.</p>
        <a href="#home"className="p-2 rounded-full bg"> <ArrowUp size={24}/></a>
    </footer>)
}