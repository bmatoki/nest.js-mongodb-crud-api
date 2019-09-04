FROM node:8.12.0-alpine
# Create a working directory 
WORKDIR /usr/src/app
# Install deps
COPY ./package* ./
RUN npm install && \
    npm cache clean --force
COPY . .
# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3000
EXPOSE 9229
# Start the app
CMD ["npm","run","start:prod"]