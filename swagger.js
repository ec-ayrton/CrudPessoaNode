const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Minha API',
            version: '1.0.0',
            description: 'Descrição da minha API'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local'
            }
        ]
    },
    apis: ['./src/routes/*.js', './swagger.yaml'], // caminho para os arquivos com as rotas da sua API
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
