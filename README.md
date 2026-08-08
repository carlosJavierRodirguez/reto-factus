# Factus

Frontend en Angular que consume la **API Factus**, la API de facturación electrónica de la empresa **Halltec**. Esta aplicación es la interfaz web para operar dicha API (autenticación, gestión de facturación, etc.), sin lógica de negocio propia en el backend: todo el procesamiento de facturación vive del lado de la API consumida.

## Tecnologías utilizadas

- **[Angular 21](https://angular.dev/)** — standalone components (sin `NgModule`), control de flujo moderno (`@if`, `@for`) y signals como sistema de reactividad.
- **TypeScript**
- **Reactive Forms** (`@angular/forms`) — formularios con validación reactiva (ej. login).
- **Angular Router** — ruteo de páginas del lado del cliente (SPA, sin SSR).
- **[Vitest](https://vitest.dev/)** — pruebas unitarias.
- **[Vercel](https://vercel.com/)** — hosting y despliegue continuo.

## Estructura del proyecto

```text
factus/
├── public/                    # Assets estáticos (favicon, etc.)
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   └── login/         # Pantalla de login (formulario reactivo)
│   │   │       ├── login.ts
│   │   │       ├── login.html
│   │   │       └── login.css
│   │   ├── app.ts              # Componente raíz (bootstrap, <router-outlet>)
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.config.ts       # Providers globales (router, etc.)
│   │   └── app.routes.ts       # Definición de rutas
│   ├── index.html              # HTML raíz, monta <app-root>
│   ├── main.ts                 # Punto de entrada (bootstrapApplication)
│   └── styles.css              # Estilos globales
├── angular.json                 # Configuración del CLI / build
├── package.json
└── vercel.json                  # Configuración de despliegue en Vercel
```

A medida que crezca la app, cada dominio funcional (facturas, clientes, etc.) se organizará como una carpeta propia dentro de `src/app/`, siguiendo el mismo patrón que `auth/login`.

## Consumo de la API Factus

Esta aplicación es exclusivamente **frontend**: no expone ni implementa lógica de facturación electrónica propia. Toda esa lógica corresponde a la **API Factus de Halltec**, contra la cual esta app hará las peticiones (autenticación, emisión de documentos, consultas, etc.) mediante `HttpClient`.

## Variables de entorno

La app necesita credenciales de la **API Factus** para autenticarse. Estas credenciales las provee **Halltec** (dueña de la API); este proyecto no las genera.

1. Copia `factus/.env.example` como `factus/.env`.
2. Completa los valores con los datos entregados por Halltec.

| Variable        | Descripción                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| `URL_API`       | URL base de la API Factus. Sandbox: `https://api-sandbox.factus.com.co`. Producción: la entrega Halltec.   |
| `CLIENT_ID`     | Identificador de cliente (Client ID) para autenticación OAuth. Provisto por Halltec.                       |
| `CLIENT_SECRET` | Secreto de cliente (Client Secret) para autenticación OAuth. Provisto por Halltec.                         |

> ⚠️ `factus/.env` está en `.gitignore` y nunca debe commitearse: contiene credenciales reales entregadas por Halltec.

## Servidor de desarrollo

```bash
ng serve
```

Abre `http://localhost:4200/`. La app recarga automáticamente al modificar archivos fuente.

## Generación de código

```bash
ng generate component nombre-componente
```

Para ver todos los schematics disponibles:

```bash
ng generate --help
```

## Build de producción

```bash
ng build
```

Genera los artefactos en `dist/factus/browser/`, optimizados para producción.

## Pruebas unitarias

```bash
ng test
```

Ejecuta las pruebas con [Vitest](https://vitest.dev/).

## Despliegue

El proyecto está **desplegado en Vercel**. La configuración de build está en [`vercel.json`](./vercel.json):

- **Build command**: `npm run build`
- **Output directory**: `dist/factus/browser`
- **Rewrites**: todas las rutas redirigen a `index.html` para que el enrutamiento del lado del cliente (Angular Router) funcione correctamente en una SPA sin SSR (ej. al refrescar `/login`).

Al importar el repositorio en Vercel, el **Root Directory** debe apuntar a `factus/`, ya que el proyecto Angular vive en esa subcarpeta y no en la raíz del repositorio.

## Recursos adicionales

- [Guía de uso de Factus (Halltec)](./Guia-uso-factus_Halltec.pdf) — guía en PDF, provista por Halltec, sobre el uso de la API Factus.
- Para más información sobre Angular CLI, incluyendo referencia de comandos, visita [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
