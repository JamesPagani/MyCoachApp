# PRODUCTION CONTAINER USING UBUNTU BIONIC BEAVER HOSTING A MEAN STACK APP
FROM node:14.4-alpine

# Installing the Node dependencies
WORKDIR /MyCoachApp
COPY ./package.json /MyCoachApp/
COPY ./frontend/package.json /MyCoachApp/frontend/
RUN npm install \ 
    && cd frontend \
    && npm install && \
    npm install -g @angular/cli
COPY . /MyCoachApp
RUN cd frontend \
    && ng build --prod
ENV NODE_ENV="semi_production"
CMD ["node", "/MyCoachApp/server.js"]
