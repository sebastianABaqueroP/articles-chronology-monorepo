# First Stage: to install and build dependences
FROM node:14 AS build
WORKDIR /usr/project
COPY . ./
RUN npm install
COPY . ./
RUN npm run build-client

# Second Stage: Setup command to run the app using linghtweight node image
FROM node:14-alpine
WORKDIR /usr/project
COPY --from=build /usr/project ./
EXPOSE 3333
CMD [ "npm", 'run', "start:client"]
