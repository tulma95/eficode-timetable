FROM node:13

WORKDIR /timetables

COPY package*.json ./

RUN npm install --silent

COPY . .

CMD ["npm",  "run", "start-heroku"]