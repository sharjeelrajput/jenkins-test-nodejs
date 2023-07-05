FROM node:slim
WORKDIR /app/sharjeel/nodeapp/
COPY . .
RUN npm install
EXPOSE 4001
# CMD node index.js
CMD [ "node", "server.js" ]
