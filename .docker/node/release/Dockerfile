FROM node:20-alpine AS builder

USER node
WORKDIR /home/node

COPY --chown=node:node . .
RUN npm ci
RUN npm run build app-one

##### STAGE 2 #####
##### REDUCE SIZE DOCKER IMAGE #####

FROM node:20-alpine as prod

ENV NODE_ENV production

COPY --chown=node:node --from=builder /home/node/.npm ./.npm
COPY --chown=node:node --from=builder /home/node/dist ./dist
COPY --chown=node:node --from=builder /home/node/package-lock.json ./package-lock.json
COPY --chown=node:node --from=builder /home/node/package.json ./package.json

RUN npm ci --omit=dev
RUN rm -rf .npm
