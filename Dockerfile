### Builder
FROM circleci/node:14-browsers as builder

RUN mkdir /home/circleci/app
WORKDIR /home/circleci/app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .
RUN yarn build

### Runtime
FROM nginx:stable as app

ENV CONFIG_FILE_PATH /app/config/app.json

# This tool converts env vars into json to be injected into the config
ADD https://s3.amazonaws.com/se-com-docs/bins/json_env /usr/local/bin/
RUN chmod +x /usr/local/bin/json_env

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .docker/expires.conf /etc/nginx/conf.d/expires.conf
COPY .docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

RUN mkdir /app
COPY --from=builder /home/circleci/app/dist /app

ENTRYPOINT ["entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
