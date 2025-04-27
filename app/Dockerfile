# Stage 1 - Install Node server
FROM node:18-alpine AS server
WORKDIR .
COPY ./package*.json ./
RUN npm install
COPY .. .
EXPOSE 3000
CMD ["npm", "start"]
