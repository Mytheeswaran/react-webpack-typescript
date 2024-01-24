FROM node:18.0.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]

# --------------------Watch in progress-----------
# https://www.youtube.com/watch?v=5grbXvV_DSk --> Docker Networking Tutorial, ALL Network Types explained!
# https://www.youtube.com/watch?v=bKFMS5C4CG0 --> Docker networking is CRAZY!! 


# https://docs.docker.com/network/ --> docker documentation on networking
# https://www.freecodecamp.org/news/how-to-dockerize-a-react-application/#:~:text=The%20host%20port%20represents%20the,the%20image%20name%20and%20tag.

# Multi stage 
# https://medium.com/@mohamedbenkhemiswork576/how-to-dockerize-a-react-app-with-multi-stage-build-and-nginx-minimize-react-image-size-by-80-33a09ae20118

# build a react with asset folder
# https://webpack.js.org/guides/asset-modules/