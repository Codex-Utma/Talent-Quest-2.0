import Navbar from "./Components/NavbarProps";
import CursosActivos from "./Components/cursos";

const MisCursos = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

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
