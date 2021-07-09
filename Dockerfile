FROM alpine:latest
RUN apk update
RUN apk add git
RUN apk add php8
RUN apk add php8-session
RUN ln -s /usr/bin/php8 /usr/bin/php