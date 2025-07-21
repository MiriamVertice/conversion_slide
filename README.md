# 🌐 Proyecto Web: Conversión de Slide Interactivo

Este proyecto es una página web que convierte un **slide interactivo creado originalmente con jQuery y plugins antiguos** a **JavaScript moderno (vanilla JS)**, eliminando toda dependencia de bibliotecas externas.

## 🧠 ¿Qué hace este proyecto?

- Muestra una diapositiva (slide) interactiva.
- El comportamiento antes se manejaba con jQuery y plugins como `.dialog()`, `.swap()`, etc.
- Ahora todo se controla usando **JavaScript puro**, sin librerías externas.
- Es una práctica de modernización de código, ideal para aprender a migrar proyectos legacy.

🔧 Reemplazo de jQuery y plugins
Este proyecto reemplaza funcionalidades comunes de jQuery y jQuery UI usando solo JavaScript moderno. Aquí algunos ejemplos:

jQuery / Plugin Original	Funcionalidad	Reemplazo en JS Moderno
$(element).dialog()	Mostrar ventana emergente	<dialog> nativo o manejo manual con classList
$(element).draggable()	Arrastrar elementos	mousedown / mousemove / mouseup + style.transform
$(element).sortable()	Reordenar elementos	dragstart, dragover, drop APIs
$(element).swap()	Intercambiar contenido	Función personalizada con DOM (replaceChild, etc.)

🧪 Todos los reemplazos fueron probados para asegurar el mismo comportamiento sin usar jQuery.

## 📁 Estructura del proyecto

/tu-proyecto
conversion_slides/
│
├── README.md                          # Documentación del proyecto
│
├── slide1/                            # Slide 1: "Ejercicio interactivo de reordenación" cuidados auxiliares de enfermeria en procesos nefrourologicos - u16. slide 16
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── /media/
│       └── multiple_intelligences.png
│
├── slide2/                            # Slide 2: Animación visual con transformación. Curso Inteligencias Múltiples(imagen de prueba). Slide 2
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── /media/
│       └── multiple_intelligences.png
│
├── slide3/                            # Slide 3: Autoevaluación interactiva. Curso Inteligencias Múltiples(imagen y audio de prueba)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── /media/
│   │   └── lapiz_amco.png
│   └── /resources/
│       └── test-audio.mp3
│
└── slide4/                            # (Opcional) Futuro slide adicional
    ├── index.html
    ├── style.css
    ├── script.js
    └── /media/
        └── ejemplo.png

├── .gitignore
├── package.json
└── package-lock.json

EJEMPLO SLIDE 1

Descripción:
Actividad interactiva en la que el usuario debe ordenar 6 frases relacionadas con el contenido de la unidad. Una vez ordenadas, puede hacer clic en el botón “Comprobar” para validar si el orden es correcto. También se incluye un botón para reiniciar la actividad y volver a intentarlo.

Funcionalidad:

Arrastrar y soltar elementos para cambiar el orden.

Comprobación automática del orden correcto.

Mensaje de resultado (éxito o error).

Reinicio de la actividad.

EJEMPLO SLIDE 2

📝 Descripción:
Actividad visual en la que se presenta una imagen ilustrativa (imagen de prueba) sobre el concepto de las inteligencias múltiples.
Al cargar la actividad, la imagen realiza una animación de rotación y escala para captar la atención del usuario.

⚙️ Funcionalidad:
Animación de rotación de la imagen (720°).

Animación de zoom desde escala 0 hasta escala 1.

Ejecución automática de la animación al iniciar el slide.

Propósito visual y motivacional como introducción al tema.

EJEMPLO SLIDE 3

📝 Descripción:
Actividad interactiva en la que el usuario escucha una cita de Howard Gardner (audio no original) y reflexiona sobre el concepto de inteligencias múltiples.
Incluye una sección de brainstorming con dinámica colaborativa, seguida de una autoevaluación con 13 criterios.
La actividad se considera completada una vez que el usuario ha respondido a todos los criterios.

⚙️ Funcionalidad:
Reproductor de audio con botones play, pause y stop.

Botones para desplegar secciones:

Dinámica grupal con roles y objetivos.

Autoevaluación personal tipo test (13 ítems).

Registro de selección para cada ítem del test.

Validación de actividad completa (todos los ítems marcados).

Mensaje de éxito animado con confirmación.


## 🚀 Cómo usar

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/tu-repo.git
Abre index.html en tu navegador para probar el slide interactivo.

✅ Puedes usar Live Server en VS Code para ver los cambios automáticamente.
⚙️ Tecnologías utilizadas
HTML5

CSS3

JavaScript (ES6+)

📌 Objetivo del proyecto
Este proyecto es parte de una transición de código heredado con jQuery hacia una versión moderna y sostenible usando únicamente tecnologías nativas del navegador.

🧙‍♀️ Autora
Miriam Ibáñez Muñoz