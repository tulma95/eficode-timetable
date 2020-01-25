FROM node:13

WORKDIR /timetables

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm",  "start"]