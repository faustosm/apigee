FROM redhat/ubi8

USER root
ENV HOME /home/jenkins
WORKDIR $HOME

# # Instalação do JDK 1.6 Oracle
# ENV JDK6_HOME $HOME/jdk1.6.0_211
# RUN curl -sS -Lk https://nexus.bvnet.bv/repository/raw/jdk/jdk-6u211-linux-x64.bin -o jdk6.bin && \
#     echo -e $"INSTALLER_UI=silent\n\
#     USER_INSTALL_DIR=$JDK6_HOME\n\
#     LICENSE_ACCEPTED=TRUE" >> response.properties && \
#     sh jdk6.bin -i silent -f response.properties > /dev/null 2>&1 && \
#     rm response.properties jdk6.bin 

# # Instalação do JDK 1.8 IBM
# ENV JDK8_HOME $HOME/jdk8-ibm
# RUN curl -sS -Lk https://nexus.bvnet.bv/repository/raw/ibm-java-sdk-8.0-7.20-x86_64-archive.bin -o jdk8.bin && \
#     echo -e $"INSTALLER_UI=silent\n\
#     USER_INSTALL_DIR=$JDK8_HOME\n\
#     LICENSE_ACCEPTED=TRUE" >> response.properties && \
#     sh jdk8.bin -i silent -f response.properties > /dev/null 2>&1 && \
#     rm response.properties jdk8.bin

# # Inclusão dos cacerts do BV
# RUN rm $JDK6_HOME/jre/lib/security/cacerts && \
#     ln -s /etc/pki/ca-trust/extracted/java/cacerts $JDK6_HOME/jre/lib/security/cacerts

# # Inclusão dos cacerts do BV
# RUN rm $JDK8_HOME/jre/lib/security/cacerts && \
#     ln -s /etc/pki/ca-trust/extracted/java/cacerts $JDK8_HOME/jre/lib/security/cacerts

# Inclusão node e npm



RUN curl -fsSL https://rpm.nodesource.com/setup_4.x | bash - && \
    yum install -y nodejs

# # Ajuste para uso java 11 ao acessar o remote.jar
# COPY run-jnlp-client /usr/local/bin/run-jnlp-client

# # Ajustes de permissões
# RUN chown -R 1001:0 $HOME $JDK6_HOME $JDK8_HOME /usr/lib/node_modules/ /usr/local/bin/run-jnlp-client && \
#     chmod -R g+rw $HOME $JDK6_HOME $JDK8_HOME /web/ /usr/lib/node_modules/ /usr/local/bin/run-jnlp-client && \
#     chmod +x /usr/local/bin/run-jnlp-client

# USER 1001
