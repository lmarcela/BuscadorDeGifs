this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Buscador de Gifs

Disponible en https://lmarcela.github.io/BuscadorDeGifs/

GUIA:
1. Crear archivo para desplegar en producción: npm run build
2. Descargar http server: npm install --global http-server
3. correr proyecto de build: cd build > http-server -o
4. subir a gitHubPages: coger carpeta build y renombrar a docs

PRUEBAS:
1. npm i --save-dev enzyme enzyme-adapter-react-16 --> Instalar Enzyme
2. Configurar enzyme en setupTests.js
3. npm install --save-dev enzyme-to-json --> Instalar Enzyme-to-json
4. Configurar enzyme-to-json en setupTests.js
5. npm run test --> Para correr todas las pruebas
6. npm install --save-dev @testing-library/react-hooks --> Instalar react-hooks-testing-library
