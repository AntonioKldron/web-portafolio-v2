export const ProfileHeader = ({ foto, nombre, apellido, rol }) => (
  <header className="flex flex-col items-center lg:items-start relative z-10">
    <div className="relative mb-8 group">
      <div className="absolute -inset-1 bg-gradient-to-tr from-primary-accent to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000" />
      <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full border-2 border-main-border p-1.5 bg-main-bg overflow-hidden">
        <img src={foto} alt={nombre} className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
      </div>
    </div>

    <div className="space-y-1 text-center lg:text-left">
      <h1 className="text-3xl lg:text-4xl font-black text-main-text tracking-tighter uppercase italic leading-none">
        {nombre} <br /> 
        <span className="text-primary-accent not-italic font-light">{apellido}</span>
      </h1>
      <span className="
          text-[10px] 
          font-mono 
          tracking-[0.4em] 
          uppercase 
          pt-2 
          block
          bg-gradient-to-b from-blue-900 via-blue-700 to-cyan-600
          bg-clip-text
          text-transparent
          font-medium
        ">
          {rol}
      </span>
    </div>
  </header>
);