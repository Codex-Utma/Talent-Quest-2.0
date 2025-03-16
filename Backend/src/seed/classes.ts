import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fakeClasses() {
    try {
        await prisma.class.createMany({
            data: [
                {
                    name: "¿Qué es Git?",
                    description: "Aprende que es Git y como funciona",
                    moduleId: 13
                },
                {
                    name: "¿Qué es GitHub?",
                    description: "Aprende que es GitHub y como funciona",
                    moduleId: 13
                },
                {
                    name: "Casos de uso de Git",
                    description: "Aprende los casos de uso de Git",
                    moduleId: 13
                },
                {
                    name: "Comandos básicos de Git",
                    description: "Aprende los comandos básicos de Git",
                    moduleId: 14
                },
                {
                    name: "Comandos avanzados de Git",
                    description: "Aprende los comandos avanzados de Git",
                    moduleId: 14
                },
                {
                    name: "Comandos de GitHub",
                    description: "Aprende los comandos de GitHub",
                    moduleId: 14
                },
                {
                    name: "¿Qué es un Branch?",
                    description: "Aprende que es un Branch y como funciona",
                    moduleId: 15
                },
                {
                    name: "¿Qué es un Commit?",
                    description: "Aprende que es un Commit y como funciona",
                    moduleId: 15
                },
                {
                    name: "¿Qué es un Merge?",
                    description: "Aprende que es un Merge y como funciona",
                    moduleId: 15
                },
                {
                    name: "¿Qué es un Pull Request?",
                    description: "Aprende que es un Pull Request y como funciona",
                    moduleId: 15
                },
                {
                    name: "¿Qué es Python?",
                    description: "Aprende que es Python y como funciona",
                    moduleId: 16
                },
                {
                    name: "¿Qué es una variable?",
                    description: "Aprende que es una variable en Python",
                    moduleId: 16
                },
                {
                    name: "¿Qué es una función?",
                    description: "Aprende que es una función en Python",
                    moduleId: 16
                },
                {
                    name: "¿Qué es una lista?",
                    description: "Aprende que es una lista en Python",
                    moduleId: 17
                },
                {
                    name: "¿Qué es un diccionario?",
                    description: "Aprende que es un diccionario en Python",
                    moduleId: 17
                },
                {
                    name: "¿Qué es una tupla?",
                    description: "Aprende que es una tupla en Python",
                    moduleId: 17
                },
                {
                    name: "¿Qué es una clase?",
                    description: "Aprende que es una clase en Python",
                    moduleId: 18
                },
                {
                    name: "¿Qué es un objeto?",
                    description: "Aprende que es un objeto en Python",
                    moduleId: 18
                },
                {
                    name: "¿Qué es un método?",
                    description: "Aprende que es un método en Python",
                    moduleId: 18
                },
                {
                    name: "¿Qué es un constructor?",
                    description: "Aprende que es un constructor en Python",
                    moduleId: 18
                },
                {
                    name: "¿Qué es React?",
                    description: "Aprende qué es React y cómo funciona.",
                    moduleId: 19
                },
                {
                    name: "JSX y Renderizado",
                    description: "Descubre cómo funciona JSX y el renderizado en React.",
                    moduleId: 19
                },
                {
                    name: "Estado y Props",
                    description: "Aprende a manejar el estado y las props en React.",
                    moduleId: 19
                },
                {
                    name: "¿Qué es un Componente?",
                    description: "Aprende qué es un Componente en React.",
                    moduleId: 20
                },
                {
                    name: "Tipos de Componentes",
                    description: "Diferencias entre componentes funcionales y de clase en React.",
                    moduleId: 20
                },
                {
                    name: "Ciclo de Vida de los Componentes",
                    description: "Entiende cómo funciona el ciclo de vida en React.",
                    moduleId: 20
                },

                {
                    name: "¿Qué es un Hook?",
                    description: "Aprende qué es un Hook en React.",
                    moduleId: 21
                },
                {
                    name: "useState y useEffect",
                    description: "Aprende a manejar el estado y efectos en React con Hooks.",
                    moduleId: 21
                },
                {
                    name: "Custom Hooks",
                    description: "Crea tus propios Hooks personalizados en React.",
                    moduleId: 21
                },
                {
                    name: "useContext y Estado Global",
                    description: "Descubre cómo manejar el estado global con useContext.",
                    moduleId: 21
                },
                {
                    name: "¿Qué es Angular?",
                    description: "Introducción a Angular y su arquitectura.",
                    moduleId: 22
                },
                {
                    name: "Módulos y Componentes",
                    description: "Estructura de un proyecto Angular con módulos y componentes.",
                    moduleId: 22
                },
                {
                    name: "Enlace de Datos",
                    description: "Cómo funciona el data binding en Angular.",
                    moduleId: 22
                },
                {
                    name: "Creación de Componentes",
                    description: "Aprende a crear y estructurar componentes en Angular.",
                    moduleId: 23
                },
                {
                    name: "Comunicación entre Comps",
                    description: "Uso de @Input y @Output para la comunicación entre componentes.",
                    moduleId: 23
                },
                {
                    name: "Ciclo de Vida",
                    description: "Entiende los hooks del ciclo de vida de los componentes.",
                    moduleId: 23
                },
                {
                    name: "¿Qué son las Directivas?",
                    description: "Introducción a las directivas en Angular.",
                    moduleId: 24
                },
                {
                    name: "Directivas Estructurales",
                    description: "Uso de *ngIf, *ngFor y *ngSwitch en Angular.",
                    moduleId: 24
                },
                {
                    name: "Directivas Atributo",
                    description: "Cómo modificar estilos y comportamiento con directivas.",
                    moduleId: 24
                },
                {
                    name: "Directivas Personalizadas",
                    description: "Crea y usa directivas personalizadas en Angular.",
                    moduleId: 24
                }
            ]
        });
    } catch (error) {
        console.log(error);
        throw new Error("Error seeding classes");
    }
}

try {
    fakeClasses();
} catch (error) {
    console.log(error);
    throw new Error("Error seeding classes");
}
