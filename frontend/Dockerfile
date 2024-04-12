FROM node:lts-alpine

RUN apk --no-cache add curl

WORKDIR /app
COPY pack*.json ./
COPY tsconfig.json tsconfig.json
COPY nuxt.config.ts nuxt.config.ts

RUN npm i

COPY app.vue app.vue
COPY server server
COPY public public
COPY pages pages
COPY components components
COPY types types
COPY contexts contexts

CMD npm run dev