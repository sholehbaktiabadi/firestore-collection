# Create node image v20.10.0
FROM node:20.10-alpine3.18

# Create app directory
WORKDIR /app

# Copy file to /app directory
COPY . /app

# install and build
RUN  npm install && npm i -g rimraf && npm run build

# run service
CMD ["npm", "run", "prod"]