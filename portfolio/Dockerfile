ARG NODE_VERSION=18.19.1

# Use node alpine as base image
FROM node:${NODE_VERSION}-alpine as base

# Set the working directory
WORKDIR /usr/src/app

#Copy package.json and package-lock.json
COPY package*.json ./

# Temporarily use root to install dependencies
USER root

# Install dependencies
RUN npm install

# Change ownership of the /usr/src/app directory to the node user
RUN chown -R node:node /usr/src/app

# Revert back to non-root user
USER node

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 5173 

# Start the application
CMD ["npm", "run", "dev"]
