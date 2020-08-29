FROM node:14

WORKDIR /home-automation

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]