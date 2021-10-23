FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

# MongoDB Connection via Docker
ENV DATABASE_URL=mongodb://mongo:27017/subscribers

EXPOSE 8080

CMD [ "npm", "start" ]