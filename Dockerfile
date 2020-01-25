FROM node:13

WORKDIR /timetables

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]