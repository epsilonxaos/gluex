# GlueX

### Requerimientos

1. PHP >= 8.1.x
2. Node >= 18.x
3. NPM >= 9.8.x

### Instalación, configuración y compilado

Ejecutar los siguientes comandos:

```sh
npm install
```

```sh
npm run build
```

### Configuración del envío de correo

Crear el archivo `.env`

```sh
cp .env.example .env
```

En el archivo `.env`, configurar la variable `MAIL_FROM`.

Ejemplo:
`MAIL_FROM=soporte@domain.com`

### Despliegue

1. Subir el contenido de la carpeta `dist` a `public_html`.
2. Subir el archivo `enviar_correo.php` a `public_html`.
