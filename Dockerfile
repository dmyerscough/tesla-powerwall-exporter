FROM node:16.14.2-alpine3.14 AS stage1
COPY src/ /app/src
COPY ["package.json", "package-lock.json", "server.mjs", "/app/"]
WORKDIR /app
RUN npm install --only=production

FROM node:16.14.2-alpine3.14
COPY --from=stage1 /app /app
WORKDIR /app
EXPOSE 8080
CMD ["npm", "run", "start"]
