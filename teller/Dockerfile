FROM node:7.10-alpine
RUN apk add --no-cache nginx && rm -rf /var/cache/apk/*
ADD package.json /var/lib/nginx/html/
WORKDIR /var/lib/nginx/html
RUN npm install
ADD . /var/lib/nginx/html/
RUN npm run build
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /run/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
