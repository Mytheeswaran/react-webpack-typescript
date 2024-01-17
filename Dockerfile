FROM node:18.0.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN yarn

# add app
COPY . ./

# start app
CMD ["yarn", "start"]

# --------------------Watch in progress-----------
# https://www.youtube.com/watch?v=5grbXvV_DSk --> Docker Networking Tutorial, ALL Network Types explained!
# https://www.youtube.com/watch?v=bKFMS5C4CG0 --> Docker networking is CRAZY!! 


# https://docs.docker.com/network/ --> docker documentation on networking
# https://www.freecodecamp.org/news/how-to-dockerize-a-react-application/#:~:text=The%20host%20port%20represents%20the,the%20image%20name%20and%20tag.