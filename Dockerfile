FROM mcr.microsoft.com/playwright:v1.12.3-focal

ENV NODE_ENV production
WORKDIR /root/fast-speed-test

COPY ./package.json ./yarn.lock ./

RUN yarn install --frozen-lockfile --production && \
    yarn cache clean

COPY . .

ENTRYPOINT ["node", "src/main.js"]
