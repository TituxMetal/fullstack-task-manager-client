FROM node:10-alpine AS builder

WORKDIR /app/build

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

FROM node:10-alpine AS runtime

WORKDIR /app/prod

COPY --from=builder /app/build/.next ./.next
COPY --from=builder /app/build/server ./server
COPY --from=builder /app/build/node_modules ./node_modules
COPY --from=builder /app/build/static ./static
COPY --from=builder /app/build/index.js ./
COPY --from=builder /app/build/package.json ./

EXPOSE 3000

ENV NODE_ENV production

CMD ["yarn", "start"]
