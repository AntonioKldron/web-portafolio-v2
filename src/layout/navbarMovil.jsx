import React, { useState, useEffect } from "react";
import {
    AiOutlineUser,
    AiOutlineTool,
    AiOutlineSchedule,
    AiOutlineFolderOpen,
    AiOutlineRead, 
  } from "react-icons/ai";

  const sections = [
    { id: "sobre-mi",       icon: AiOutlineUser,        label: "Sobre mí" },
    { id: "herramientas",   icon: AiOutlineTool,        label: "Herramientas" },
    { id: "experiencia",    icon: AiOutlineSchedule,    label: "Experiencia" },
    { id: "proyectos",      icon: AiOutlineFolderOpen,  label: "Proyectos" },
    { id: "formacion",      icon: AiOutlineRead,        label: "Formación" },
  ];

const SidebarButton = ({ icon: Icon, isActive, onClick, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    title={label}
    className={`
      flex items-center justify-center
      rounded-full border-2 border-gray-700
      bg-gradient-to-br from-gray-800 to-gray-900
      shadow-sm text-indigo-400
      transition-all duration-300 ease-in-out
      hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800
      hover:border-indigo-500 hover:shadow-md hover:scale-110
      focus:outline-none
      ${isActive ? "border-indigo-500 bg-gradient-to-br from-indigo-900 to-indigo-800 shadow-lg text-indigo-300 scale-110" : ""}
      w-12 h-12
      mb-3
    `}
  >
    <Icon size={20} />
  </button>
);

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("sobre-mi");

  useEffect(() => {
    const onScroll = () => {
      let current = "sobre-mi";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = section.id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      className="
        fixed
        top-1/3
        right-2
        z-50
        flex flex-col
        items-center
        bg-transparent
        lg:hidden
      "
    >
      {sections.map(({ id, icon, label }) => (
        <SidebarButton
          key={id}
          icon={icon}
          label={label}
          isActive={activeSection === id}
          onClick={() => scrollToSection(id)}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
