# 🌐 Proyecto Web: Conversión de Slide Interactivo

## 🧠 ¿Qué hace este proyecto?

Este proyecto muestra varias diapositivas (slides) interactivas convertidas desde una versión antigua que utilizaba jQuery, jQuery UI y plugins obsoletos.
Ahora, todo el comportamiento ha sido reescrito usando JavaScript moderno puro, sin depender de librerías externas ni frameworks.

Es una práctica de modernización de código ideal para aprender a migrar proyectos legacy y reutilizarlos en entornos actuales.

🔧 Reemplazo de jQuery, jQuery UI y plugins
Este proyecto reemplaza funcionalidades comunes de jQuery/jQuery UI usando únicamente JavaScript moderno. Aquí algunos ejemplos:

jQuery / Plugin original	Funcionalidad	Reemplazo en JS moderno
$(element).dialog()	Mostrar ventana emergente	<dialog> nativo o classList para mostrar/ocultar
$(element).draggable()	Arrastrar elementos	mousedown / mousemove / mouseup + style.transform
$(element).sortable()	Reordenar elementos	APIs de dragstart, dragover, drop
$(element).swap()	Intercambiar contenido	Función personalizada con replaceChild, etc.

🎬 Ejemplos de Slides Convertidos

📌 EJEMPLO SLIDE 1

📝 Descripción:
Actividad interactiva en la que el usuario debe ordenar 6 frases relacionadas con el contenido de la unidad.
Una vez ordenadas, puede hacer clic en el botón “Comprobar” para validar si el orden es correcto.
También se incluye un botón para reiniciar la actividad.

⚙️ Funcionalidad:

Arrastrar y soltar elementos para cambiar el orden.

Comprobación automática del orden correcto.

Mensaje de resultado (éxito o error).

Reinicio de la actividad.

![Vista del slide 1 convertido](image.png)


📌 EJEMPLO SLIDE 2

📝 Descripción:
Actividad visual en la que se presenta una imagen ilustrativa (imagen de prueba) sobre el concepto de las inteligencias múltiples.
Al cargar la actividad, la imagen realiza una animación de rotación y escala para captar la atención del usuario.

⚙️ Funcionalidad:

Animación de rotación de la imagen (720°).

Animación de zoom desde escala 0 hasta escala 1.

Ejecución automática de la animación al iniciar el slide.

Propósito visual y motivacional como introducción al tema.

![Vista del slide 2 convertido](image-2.png)


📌 EJEMPLO SLIDE 3

📝 Descripción:
Actividad interactiva en la que el usuario escucha una cita de Howard Gardner (audio de prueba) y reflexiona sobre el concepto de inteligencias múltiples.
Incluye una sección de brainstorming colaborativo, seguida de una autoevaluación personal con 13 criterios.
La actividad se considera completada una vez que el usuario ha respondido a todos los ítems.

⚙️ Funcionalidad:

Reproductor de audio con botones play, pause y stop.

Botones para mostrar u ocultar secciones.

Dinámica grupal con roles y objetivos.

Test interactivo de 13 ítems autoevaluables.

Validación automática (comprobación de que todos los ítems están marcados).

Mensaje de éxito animado con confirmación.

![Vista del slide 3 convertido](image-1.png)

🧪 Todos los reemplazos fueron probados para asegurar el mismo comportamiento sin usar jQuery.

## 📁 Estructura del proyecto

/tu-proyecto
└── conversion_slides/
    ├── README.md                        # Documentación del proyecto
    ├── .gitignore
    ├── package.json
    ├── package-lock.json

    ├── slide1/                          # Slide 1: "Ejercicio interactivo de reordenación"
    │   ├── index.html
    │   ├── style.css
    │   ├── script.js
    │   └── media/
    │       └── multiple_intelligences.png

    ├── slide2/                          # Slide 2: Animación visual con transformación
    │   ├── index.html
    │   ├── style.css
    │   ├── script.js
    │   └── media/
    │       └── multiple_intelligences.png

    ├── slide3/                          # Slide 3: Autoevaluación interactiva
    │   ├── index.html
    │   ├── style.css
    │   ├── script.js
    │   ├── media/
    │   │   └── lapiz_amco.png
    │   └── resources/
    │       └── test-audio.mp3

    └── slide4/                          # (Opcional) Futuro slide adicional
        ├── index.html
        ├── style.css
        ├── script.js
        └── media/
            └── ejemplo.png





## 🚀 Cómo usar

1. Clona este repositorio:
```bash
git clone https://github.com/MiriamVertice/conversion_slide.git
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