FROM debian:10

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
    && apt-get install -y curl unzip \
    && apt-get -y autoclean

#Install some dependencies

# install nvm

RUN touch ~/.bashrc && chmod +x ~/.bashrc
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN . ~/.nvm/nvm.sh && source ~/.bashrc && nvm install node

#Install some dependencies
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

# Install apigeecli
# https://github.com/apigee/apigeecli

RUN curl -L https://raw.githubusercontent.com/apigee/apigeecli/main/downloadLatest.sh | sh -
RUN mv $HOME/.apigeecli/bin/apigeecli /usr/local/sbin/

# install apigeelint
# https://github.com/apigee/apigeelint

# RUN npm install -g apigeelint