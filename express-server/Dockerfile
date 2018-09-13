# Create image based on the official Node 6 image from the dockerhub
FROM node:9.6.1

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
COPY package.json /usr/src/app/package.json
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 4400

# Serve the app
CMD ["npm", "start"]
