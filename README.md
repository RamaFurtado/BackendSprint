Para correr el proyecto
1. Instalar dependencias con npm install
2. Crear un archivo .env con los siguientes datos(LO QUE CORRESPONDAN A LA BASE DE ATLAS): 
MONGO_URI= MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<baseDeDatos>?retryWrites=true&w=majority
PORT=3001
3. Ejecutar node src/server.js
