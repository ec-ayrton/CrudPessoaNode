# Imagem base
FROM node:16-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o resto dos arquivos para o diretório de trabalho
COPY . .

# Expor a porta que a aplicação estará rodando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
