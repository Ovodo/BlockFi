# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "start"]
