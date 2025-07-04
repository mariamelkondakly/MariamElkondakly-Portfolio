import { SiScala } from "react-icons/si";
import { TbCircleLetterCFilled, TbBrandCpp, TbBrandCSharp, TbSql } from "react-icons/tb";
import { FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SkillBar } from "./SkillBar";
import { TiHtml5 } from "react-icons/ti";
const PLanguages = [
  { name: "Java", logo: FaJava },
  { name: "", logo: TbBrandCpp },
  { name: "", logo: TbCircleLetterCFilled },
  { name: "", logo: TbBrandCSharp },
  { name: "Python", logo: FaPython },
  { name: "", logo: TbSql },
  { name: "JavaScript", logo: IoLogoJavascript },
  { name: "Scala", logo: SiScala },
  { name: "HTML", logo: TiHtml5 },

];

const SLanguages=[
    {name: "Arabic: ", level: 100, type: "Native"},
    {name: "English: ", level: 95, type: "Bilingual/Native"},
    {name: "French: ", level: 75, type: "Advanced/B2"}

]

export const LanguagesSection = () => {
  return (
    <section id="languages" className="pt-20 px-4 relative min-h-screen snap-start flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 ">
          <div className="space-y-2 nav-bg rounded-2xl card-hover p-12">
            <h3 className="text-xl md:text-2xl font-semibold accent mb-12">Programming Languages</h3>

            <div className="grid  grid-cols-3 gap-6">
            {PLanguages.map(({ name, logo: Icon }, key) => {
                const isEmpty = name === "";
                return (
                    <div
                    key={key}
                    className="nav-bg card-hover flex flex-col items-center justify-center rounded-xl p-4 shadow-xs h-24"
                    >
                    <Icon size={32} className={isEmpty ? "" : "mb-2"} />
                    {!isEmpty && (
                        <h3 className="font-semibold text-md">{name}</h3>
                    )}
                    </div>
                );
            })}
                    
            </div>
          </div>
          <div className="space-y-2 nav-bg rounded-2xl card-hover p-9">
            <h3 className="text-xl md:text-2xl font-semibold accent mb-12">Spoken Languages</h3>

            <div className="grid grid-cols-1 gap-6">
            {SLanguages.map((language, key) => {
                return (
                    <div
                    key={key}
                    className="text-start nav-bg card-hover flex flex-col justify-center rounded-xl p-4 shadow-xs h-26"
                    >
                    <h3 className="font-semibold mb-2"><span className="text-glow accent-2 text-xl">{language.name}</span> <span className="text-sm">{language.type}</span></h3>
                    <SkillBar level={language.level} />
                    
                    </div>
                );
            })}
                    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
