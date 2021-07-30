FROM mcr.microsoft.com/playwright:v1.13.1-focal

# Switch to non-root user
RUN useradd --create-home --user-group fast
USER fast

ENV NODE_ENV production
WORKDIR /home/fast/app

COPY --chown=fast:fast . .

RUN yarn install --immutable && \
    yarn build && \
    yarn cache clean --mirror

ENTRYPOINT ["yarn", "start"]
