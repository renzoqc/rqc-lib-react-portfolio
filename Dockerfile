# Utiliza la imagen base de Node.js
FROM node:18.16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package.json package-lock.json /app/

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . /app

# declara variables de entorno
ENV APP_ENV value

# Compila el proyecto
RUN npm run build

# Expone el puerto 3000 (puedes cambiarlo si tu aplicaci�n usa otro puerto)
EXPOSE 3010

# Define el comando de inicio del contenedor
CMD ["npm", "start"]