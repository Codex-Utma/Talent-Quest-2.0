import Navbar from "./Components/NavbarProps";
import CursosActivos from "./Components/cursos";

const MisCursos = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className="bg-white shadow">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-custom text-custom border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium">Cursos</a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Proyecto</a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <i className="fas fa-bell"></i>
              </button>
              <div className="ml-3 relative flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://creatie.ai/ai/api/search-image?query=professional headshot of a young latin person smiling at camera"
                  alt="Usuario"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pl-12">
        <Navbar activeCourses={3} completedCourses={5} />
        <div>
          <CursosActivos cursos={[
            { imagen: "https://ai-public.creatie.ai/gen_page/logo_placeholder.png", nombre: "Curso de React", progreso: 30 },
            { imagen: "https://ai-public.creatie.ai/gen_page/logo_placeholder.png", nombre: "Curso de Vue", progreso: 60 },
            { imagen: "https://ai-public.creatie.ai/gen_page/logo_placeholder.png", nombre: "Curso de Angular", progreso: 90 },
            { imagen: "https://ai-public.creatie.ai/gen_page/logo_placeholder.png", nombre: "Curso de CSS", progreso: 90 }
          ]} />

        </div>
      </main>
    </div>
  );
};

export default MisCursos;