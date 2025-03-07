import React from "react";

interface NavbarProps {
  activeCourses: number;
  completedCourses: number;
}

const Navbar: React.FC<NavbarProps> = ({ activeCourses, completedCourses }) => {
  return (
    <nav className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="container mx-auto flex justify-center items-center bg-white p-6 rounded-lg shadow">
        {/* Sección de Cursos Activos */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-gray-500 text-sm">Cursos Activos</span>
          <span className="text-2xl font-bold text-gray-900">{activeCourses}</span>
        </div>

        {/* Separador */}
        <div className="h-10 w-px bg-gray-300"></div>

        {/* Sección de Cursos Completados */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-gray-500 text-sm">Cursos Completados</span>
          <span className="text-2xl font-bold text-gray-900">{completedCourses}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
