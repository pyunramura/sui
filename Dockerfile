FROM busybox

LABEL maintainer="Pyun Ramura"

WORKDIR /opt/html

COPY . /opt/html

EXPOSE 8080

ENTRYPOINT [ "httpd", "-f", "-v", "-p", "8080" ]
