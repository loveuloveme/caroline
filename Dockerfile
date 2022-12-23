FROM node:16 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

FROM node:16

WORKDIR /app

COPY --from=builder /app/build ./build

CMD [ "npm", "run", "start" ]