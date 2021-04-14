FROM node:14-alpine

RUN mkdir -p /home/react_test

WORKDIR /home/react_test

COPY package.json /home/react_test

RUN npm install

COPY . /home/react_test

EXPOSE 3000

CMD ["npm", "start"]