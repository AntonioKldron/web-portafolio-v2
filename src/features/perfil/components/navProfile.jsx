export const ProfileNav = ({ menuItems, activeSection, onScrollTo }) => (
  <nav className="flex flex-col gap-6 py-10 relative z-10">
    {menuItems.map((item) => {
      const isActive = activeSection === item.id;
      return (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => { e.preventDefault(); onScrollTo(item.id); }}
          className={`group flex items-center gap-4 transition-all duration-500 ${
            isActive ? "translate-x-3" : "opacity-60 hover:opacity-100"
          }`}
        >
          <span className={`h-[2px] transition-all duration-500 ${
            isActive 
              ? "w-10 bg-primary-accent" 
              : "w-4 bg-gray-300 dark:bg-gray-700"
          }`} />
          <span className={`text-[10px] uppercase tracking-[0.4em] transition-colors ${
            isActive ? "text-primary-accent font-black" : "text-card-muted"
          }`}>
            {item.label}
          </span>
        </a>
      );
    })}
  </nav>
);
