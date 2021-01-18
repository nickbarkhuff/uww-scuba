FROM node:14
WORKDIR /app
COPY package.json package-lock.json ./
COPY src src
COPY webpack webpack
RUN ["npm", "ci"]
RUN ["npm", "run", "build"]
CMD ["npm", "start"]
