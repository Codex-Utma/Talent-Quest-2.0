interface Curso {
  imagen: string;
  nombre: string;
  progreso: number;
}

interface CursosActivosProps {
  cursos: Curso[];
}

const CursosActivos: React.FC<CursosActivosProps> = ({ cursos }) => {
    return (
      <div className="grid grid-cols-12 gap-6 mt-6 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pl-12 flex justify-center">
        <section className="col-span-12 lg:col-span-12 xl:col-span-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900">Cursos Activos</h2>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {cursos.map((curso, index) => (
                <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                  <img className="h-48 w-full object-cover" src={curso.imagen} alt={curso.nombre} />
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{curso.nombre}</h3>
                    <p className="mt-2 text-sm text-gray-500">{curso.progreso}% completado</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  
  export default CursosActivos;
  