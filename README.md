# 🌐 Proyecto Web: Conversión de Slide Interactivo

Este proyecto es una página web que convierte un **slide interactivo creado originalmente con jQuery y plugins antiguos** a **JavaScript moderno (vanilla JS)**, eliminando toda dependencia de bibliotecas externas.

## 🧠 ¿Qué hace este proyecto?

- Muestra una diapositiva (slide) interactiva.
- El comportamiento antes se manejaba con jQuery y plugins como `.dialog()`, `.swap()`, etc.
- Ahora todo se controla usando **JavaScript puro**, sin librerías externas.
- Es una práctica de modernización de código, ideal para aprender a migrar proyectos legacy.

🔧 Reemplazo de jQuery y plugins
Este proyecto reemplaza funcionalidades comunes de jQuery usando solo JavaScript moderno. Aquí algunos ejemplos:

jQuery / Plugin Original	Funcionalidad	Reemplazo en JS Moderno
$(element).dialog()	Mostrar ventana emergente	<dialog> nativo o manejo manual con classList
$(element).draggable()	Arrastrar elementos	mousedown / mousemove / mouseup + style.transform
$(element).sortable()	Reordenar elementos	dragstart, dragover, drop APIs
$(element).swap()	Intercambiar contenido	Función personalizada con DOM (replaceChild, etc.)

🧪 Todos los reemplazos fueron probados para asegurar el mismo comportamiento sin usar jQuery.

## 📁 Estructura del proyecto

/tu-proyecto
├── index.html # Slide y estructura de la página
├── style.css # Estilos visuales del slide
├── script.js # Lógica interactiva reescrita en JS moderno
├── .gitignore
├── package.json
└── package-lock.json


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