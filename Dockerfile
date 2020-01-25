FROM node:13

WORKDIR /timetables

COPY package*.json ./

RUN npm install --silent

EXPOSE 3000

COPY . .

CMD ["npm",  "start"]