export default function Dyslexia({ isDyslexic, setIsDyslexic }: { isDyslexic: boolean | null; setIsDyslexic: (value: boolean) => void }) {

    const handleChange = (value: boolean) => {
        setIsDyslexic(value);
        localStorage.setItem('isDyslexic', JSON.stringify(value));
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <h2 className="text-xl font-bold mb-4">¿Eres disléxico?</h2>
            <div className="flex gap-4">
                <button
                    onClick={() => handleChange(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Sí
                </button>
                <button
                    onClick={() => handleChange(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                    No
                </button>
            </div>
            {isDyslexic !== null && (
                <p className="mt-4 text-lg">
                    {isDyslexic ? "Gracias por compartirlo." : "Entendido, gracias por responder."}
                </p>
            )}
        </div>
    );
}
