FROM node:8

RUN mkdir /backend 
COPY package*.json /backend/
COPY app /backend
COPY index.js /backend

RUN cd /backend
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]