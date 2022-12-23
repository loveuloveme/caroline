FROM node:16 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci --production

COPY . .

RUN npm run build

FROM nginx:1.12-alpine as prod

COPY --from=builder /app/build /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;"]