FROM centos:centos7

# Inclusão node e npm
# Versão recomendada ao fazer instalação de outras versões
RUN curl -fsSL https://rpm.nodesource.com/setup_14.x | bash - && \
    yum install -y nodejs

# Update npm for latest version
# Atualização necessária para instalar o apigeelint
RUN npm install -g npm@latest
