# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar tu proyecto con múltiples páginas en GitHub Pages.

## 📋 Prerrequisitos

- Tener una cuenta de GitHub
- Tener Git instalado en tu computadora
- Tener el repositorio `Calculadora_costo_energia` creado en GitHub

## 🔧 Pasos para Desplegar

### 1. Verificar la Estructura del Proyecto

Asegúrate de que tu proyecto tenga la siguiente estructura:

```
Calculadora_costo_energia/
├── index.html          # ✅ Página principal (portal)
├── .nojekyll          # ✅ Deshabilita Jekyll
├── app_1/
│   └── index.html     # ✅ Primera aplicación
└── app_2/
    └── index.html     # ✅ Segunda aplicación
```

### 2. Preparar el Repositorio Local

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# Verificar el estado de Git
git status

# Agregar todos los archivos nuevos
git add .

# Hacer commit de los cambios
git commit -m "feat: Add multi-page structure for GitHub Pages"

# Subir los cambios a GitHub
git push origin main
```

### 3. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/Moshua53/Calculadora_costo_energia`

2. Haz clic en **Settings** (Configuración) en la parte superior

3. En el menú lateral izquierdo, busca y haz clic en **Pages**

4. En la sección **Source** (Fuente):
   - **Branch**: Selecciona `main`
   - **Folder**: Selecciona `/ (root)`
   - Haz clic en **Save**

5. Espera unos minutos (1-5 minutos) para que GitHub Pages construya tu sitio

### 4. Verificar el Despliegue

Una vez que GitHub Pages termine de construir tu sitio, verás un mensaje como:

> ✅ Your site is live at https://moshua53.github.io/Calculadora_costo_energia/

### 5. Probar las Rutas

Verifica que todas las rutas funcionen correctamente:

- **Portal Principal**: 
  ```
  https://moshua53.github.io/Calculadora_costo_energia/
  ```

- **Calculadora Principal (App 1)**:
  ```
  https://moshua53.github.io/Calculadora_costo_energia/app_1/
  ```

- **Calculadora Avanzada (App 2)**:
  ```
  https://moshua53.github.io/Calculadora_costo_energia/app_2/
  ```

## 🔄 Actualizar el Sitio

Cada vez que hagas cambios y quieras actualizar el sitio:

```bash
# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de tus cambios"

# Subir a GitHub
git push origin main
```

GitHub Pages se actualizará automáticamente en 1-5 minutos.

## ⚠️ Solución de Problemas

### Problema: Las páginas no cargan correctamente

**Solución**: Verifica que:
- El archivo `.nojekyll` existe en la raíz
- Cada carpeta `app_1` y `app_2` tiene su propio `index.html`
- Los enlaces en el `index.html` principal usan rutas relativas (`./app_1/`, `./app_2/`)

### Problema: Los estilos o scripts no cargan

**Solución**: Asegúrate de que las rutas en tus archivos HTML sean relativas:
```html
<!-- ✅ Correcto -->
<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>

<!-- ❌ Incorrecto -->
<link rel="stylesheet" href="/style.css">
<script src="/script.js"></script>
```

### Problema: Error 404 en las rutas

**Solución**: 
- Verifica que los nombres de las carpetas sean exactamente `app_1` y `app_2` (minúsculas)
- Asegúrate de incluir la barra final en las URLs: `/app_1/` no `/app_1`

## 🎯 Consejos Adicionales

1. **Cache del navegador**: Si no ves los cambios inmediatamente, intenta:
   - Refrescar con `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)
   - Abrir en modo incógnito

2. **Tiempo de despliegue**: GitHub Pages puede tardar hasta 10 minutos en reflejar cambios

3. **Dominio personalizado**: Si quieres usar tu propio dominio, puedes configurarlo en Settings > Pages > Custom domain

## 📱 Compartir tu Sitio

Una vez desplegado, puedes compartir las siguientes URLs:

- Portal: `https://moshua53.github.io/Calculadora_costo_energia/`
- App 1: `https://moshua53.github.io/Calculadora_costo_energia/app_1/`
- App 2: `https://moshua53.github.io/Calculadora_costo_energia/app_2/`

## ✅ Checklist Final

- [ ] Estructura de carpetas correcta
- [ ] Archivo `.nojekyll` creado
- [ ] Cambios subidos a GitHub (`git push`)
- [ ] GitHub Pages configurado en Settings
- [ ] Sitio accesible en la URL de GitHub Pages
- [ ] Todas las rutas funcionan correctamente
- [ ] Enlaces del portal principal funcionan

---

¡Felicidades! 🎉 Tu sitio multi-página está desplegado en GitHub Pages.
