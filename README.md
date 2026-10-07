# Mi Portafolio (Vite + React)

Migración de un HTML básico (`html-original/`) a una aplicación React creada con Vite y publicada en GitHub Pages.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run deploy   # publica dist/ en la rama gh-pages
```

## Estructura

- `src/App.jsx`: composición de la página.
- `src/components/`: `Header`, `SobreMi`, `Proyectos`, `Contacto`, `Footer`.
- `html-original/`: HTML y CSS de partida, como referencia.

## Publicación

Reemplaza `usuario` en `homepage` (package.json) por tu usuario de GitHub, y asegúrate de que `base` en `vite.config.js` coincide con el nombre del repositorio.
