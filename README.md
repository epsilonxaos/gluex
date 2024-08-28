# GlueX

[![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
![image](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)

### 📝 Requerimientos

1. PHP >= 8.1.x
2. Node >= 18.x
3. NPM >= 9.8.x

### 💻 Instalación, configuración y compilado

Ejecutar los siguientes comandos:

```sh
npm install
```

```sh
npm run build
```

### ✉️ Configuración del envío de correo

Crear el archivo `.env`

```sh
cp .env.example .env
```

En el archivo `.env`, configurar las variables SMTP.

```
MAIL_HOST=smtp.host.com
MAIL_PORT=465
MAIL_USERNAME=soporte@test.com
MAIL_PASSWORD=secret
MAIL_FROM_ADDRESS=soporte@test.com
MAIL_TO_ADDRESS=contacto@etest.com
MAIL_FROM_NAME=Glue X
```

Instalar vendors

```sh
composer install
```

### 🚀 Despliegue a producción

1. Subir el contenido de la carpeta `dist` a `public_html`.
2. Subir el archivo `enviar_correo.php` a `public_html`.
3. Subir carpeta vendor a `public_html`.
