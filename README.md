# GlueX

### Requerimientos

1. Php >= 8.1.x
2. Node >= 18.x
3. Npm >= 9.8.x

### Instalación, configuración y compilado

Ejecutar los siguientes comandos:

`npm install`

`npm run build`

Configurar en enviar_correo.php el mailFrom con el que se enviara el correo

Ejemplo: `$mailFrom = soporte@domain.com`

### Despliegue

1. Subir el contenido de la carpeta dist a publi_html
2. Subir el archivo enviar_correo.php a publi_html
