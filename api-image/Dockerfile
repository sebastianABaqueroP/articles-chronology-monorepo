# First Stage: to install and build dependences
FROM node:14-alpine AS build

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
#WORKDIR /art-chrono
COPY . ./

USER node

RUN npm install

COPY . ./
#RUN npm run build-api
CMD [ "npm", 'run', "build-api"]

# Second Stage: Setup command to run the app using linghtweight node image
FROM node:14-alpine
WORKDIR /home/node/app
COPY --from=build /home/node/app/dist/ ./
EXPOSE 3333
#CMD [ "npm", 'run', "start-api"]
CMD [ "node apps/api/main.js " ]