# 📁 Estructura del Proyecto — Factus Frontend (Angular)

Este documento describe la arquitectura y organización de carpetas utilizada en el proyecto Factus Frontend, siguiendo buenas prácticas para Angular 18 con standalone components.

## 🏗️ Estructura General

```
factus-frontend/
├── .angular/               
├── .editorconfig           
├── .gitignore              
├── .vscode/                
├── angular.json            
├── node_modules/           
├── package-lock.json       
├── package.json            
├── public/                 
│   └── favicon.ico         
├── README.md               
├── src/
│   ├── index.html          
│   ├── main.ts             
│   ├── styles.css          
│   └── app/
│       ├── app.config.ts   
│       ├── app.css         
│       ├── app.html        
│       ├── app.routes.ts   
│       ├── app.spec.ts     
│       ├── app.ts          
│
│       ├── core/                   
│       │   ├── guards/            
│       │   ├── interceptors/      
│       │   ├── layouts/           
│       │   ├── models/            
│       │   └── services/          
│
│       ├── modules/               
│       │   └── auth/              
│       │       ├── auth.routes.ts 
│       │       └── pages/         
│       │           └── login/     
│       │               ├── login.css
│       │               ├── login.html
│       │               ├── login.spec.ts
│               └── login.ts
│
│       └── shared/                
│           ├── components/        
│           ├── directives/        
│           ├── pipes/             
│           └── utils/             
│
├── tsconfig.app.json              
├── tsconfig.json                  
└── tsconfig.spec.json             
```

## 📦 Descripción de Carpetas

### src/

Código fuente principal del proyecto.

### app/

Contiene toda la lógica y estructura central de Angular.

#### 🧠 Core

**src/app/core/**

Aquí va todo lo que es central, global y único:

- **guards/** → CanActivate, CanMatch, etc.
- **interceptors/** → JWT interceptor, manejo de errores, loaders.
- **layouts/** → Plantillas generales (LoginLayout, DashboardLayout).
- **models/** → Interfaces y tipos (User, AuthResponse, Invoice...).
- **services/** → Servicios globales como AuthService, ApiService, StorageService.

#### 🔌 Modules

**src/app/modules/**

Cada módulo representa una funcionalidad grande y aislada.

**Ejemplo: Auth Module**

```
modules/auth/
├── auth.routes.ts
├── pages/
│   └── login/
│       ├── login.ts
│       ├── login.html
│       ├── login.css
│       └── login.spec.ts
```

Usa rutas propias y standalone components.

#### ♻️ Shared

**src/app/shared/**

Todo lo reutilizable a lo largo del proyecto:

- **components/** → tablas, botones, modales, inputs…
- **directives/** → validadores, permisos, focus…
- **pipes/** → formateo de moneda, fechas…
- **utils/** → helpers JS/TS como manejo de fechas o generar UUID.

### 🔧 Archivos de Configuración

- **app.routes.ts** → Rutas principales (lazy loading).
- **app.config.ts** → Configuración de providers globales.
- **main.ts** → Bootstrap de la aplicación.

### 📜 Estilos

- **styles.css** → Estilos globales.
- **app.css** → Estilos del componente raíz.
- **login.css**, etc. → Estilos por página.
