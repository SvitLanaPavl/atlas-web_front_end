FROM ruby:2.7
ENV TZ=America/Chicago
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update --fix-missing
RUN apt-get upgrade -y --fix-missing
RUN apt-get install -y docker.io git openssh-server curl nodejs npm
RUN apt-get install -y ruby2.7 ruby2.7-dev
RUN gem install sass -v 3.7.4
WORKDIR /app