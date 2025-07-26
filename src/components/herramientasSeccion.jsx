import React from "react";
import Slider from "react-slick";
import TechCard from "../components/herramientasCarta"; 

// Importa los íconos (Ahora sin SiVisualstudiocode ni SiWamp)
import { FaReact, FaGitAlt, FaDocker, FaAngular, FaDatabase, FaLinux } from "react-icons/fa";
import { 
  SiJavascript, 
  SiPython, 
  SiDotnet, 
  SiPostgresql, 
  SiDjango, 
  SiGithub, 
  SiSupabase 
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { MdOutlineDataUsage } from "react-icons/md"; 


export default function StackSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        arrows: false, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  const categorias = [
    {
      title: "Lenguajes de Programación",
      items: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiPython />, name: "Python" },
        { icon: <TbSql />, name: "SQL" },
        { icon: <SiDotnet />, name: "C# / .NET" },
      ],
    },
    {
      title: "Frameworks y Librerías",
      items: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaAngular />, name: "Angular" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <MdOutlineDataUsage />, name: "Django REST Framework" }, 
        { icon: <SiDotnet />, name: ".NET DLLs" },
      ],
    },
    {
      title: "Bases de Datos",
      items: [
        { icon: <FaDatabase />, name: "SQL Server" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiSupabase />, name: "Supabase" }, 
      ],
    },
    {
      title: "Cloud e Infraestructura",
      items: [
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaLinux />, name: "Linux" },
        { icon: <SiSupabase />, name: "Supabase (BaaS)" },
      ],
    },
    {
      title: "Herramientas",
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiGithub />, name: "GitHub" },
        { icon: <FaDatabase />, name: "SSMS" }, 
      ],
    },
  ];

  return (
    <section className="
      w-full 
      h-full                
      flex flex-col                
      px-4 py-4             
      bg-gray-900           
      text-indigo-100       
      rounded-xl            
      shadow-lg             
      max-w-4xl mx-auto     
      overflow-hidden       
    ">
        <div className="justify-between items-center mt-8 w-full">
            <h2 className="text-3xl font-bold text-center text-indigo-400 mb-4"> 
                Stack Tecnológico
            </h2>

            <div className="flex flex-col justify-start flex-grow"> 
            {categorias.map((categoria, idx) => (
                <div key={idx} className="mb-2 last:mb-0"> {/* Reducido de mb-4 a mb-2 */}
                <h3 className="text-sm font-semibold text-gray-400 mb-1 text-center"> {/* Reducido de text-base a text-sm y mb-2 a mb-1, color más sutil */}
                    {categoria.title}
                </h3>
                <Slider {...settings}>
                    {categoria.items.map((tech, i) => (
                    <TechCard key={i} icon={tech.icon} name={tech.name} />
                    ))}
                </Slider>
                </div>
            ))}
            </div>            
        </div>

    </section>
  );
}