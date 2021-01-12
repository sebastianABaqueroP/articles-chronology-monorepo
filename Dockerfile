# First Stage: to install and build dependences
FROM node:14-alpine AS build

#ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
#ENV PATH=$PATH:/home/node/.npm-global/bin 

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
#WORKDIR /art-chrono

COPY . .
#COPY package*.json tslint.json nx.json ./

USER node

RUN npm install
#RUN npm install --only=production

COPY . ./
#COPY package*.json tslint.json nx.json ./

#RUN npm run build-api
CMD [ "npm", 'run', "build-api"]

WORKDIR /home/node/app
#COPY --from=build dist ./
COPY --from=build /home/node/app/dist ./dist

#RUN npm run build-api
CMD [ "npm", 'run', "start-api"]

# Second Stage: Setup command to run the app using linghtweight node image
#FROM node:14-alpine
#WORKDIR /home/node/app

#COPY --from=build /home/node/app ./
#COPY --from=build dist ./
#COPY --chown=node:node . .

#EXPOSE 3333

#CMD [ "npm", 'run', "start-api"]
#CMD [ "node apps/api/main.js " ]