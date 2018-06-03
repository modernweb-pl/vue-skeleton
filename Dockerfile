FROM node:8.11

# Add Tini
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

ENV NODE_ENV production

USER node

RUN mkdir ~/app
WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm i

COPY dist dist
COPY server server

CMD ["node","./server/bin/www"]
