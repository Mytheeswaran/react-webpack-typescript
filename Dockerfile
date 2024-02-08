# Stage 1: Build the React app
FROM node:lts as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Create the production image
FROM nginx:latest
COPY ./nginx.config /etc/nginx/conf.d/default.conf 
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# -----------------------Previous docker file without nginx and multistaging------------------

# FROM node:18.0.0-alpine
# WORKDIR /app
# # add `/app/node_modules/.bin` to $PATH
# # ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# RUN npm install
# COPY . ./
# CMD ["npm", "start"]