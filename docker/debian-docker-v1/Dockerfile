FROM debian:10

ARG DEBIAN_FRONTEND=noninteractive

# Install Install prerequisites

RUN apt-get update && apt-get install -y unzip\
    curl


# Install NVM
#
# NVM_VERSION=0.38.0 ; \

ENV NVM_DIR="$HOME/.nvm"
RUN NVM_VERSION=$(curl -Ls -o /dev/null -w %{url_effective} https://github.com/nvm-sh/nvm/releases/latest | sed -E 's/.+(tag\/v([0-9\.]+))/\2/g') ; \
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v${NVM_VERSION}/install.sh | bash

RUN { \
        echo 'set -e' ; \
		echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' ; \
		# echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' ; \
	} > $HOME/.profile 

#
# Install Node LTS
#
RUN source $HOME/.profile && \
    nvm install 14 && \
    nvm alias default 14 && \
    nvm install 12 && \
    nvm install 10 && \
    nvm install 8
    # nvm install 4 && \
