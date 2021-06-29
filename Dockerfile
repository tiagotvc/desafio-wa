FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install


COPY  . /usr/src/app


EXPOSE 3005

VOLUME [ "/usr/src/app/node_modules" ]


CMD ["npm" , "start"]