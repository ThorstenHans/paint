FROM node:14-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:alpine 
COPY nginx.conf /etc/nginx/nginx.conf 
COPY --from=build /app/build /usr/share/nginx/html 
