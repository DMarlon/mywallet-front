FROM node:14-alpine AS build
RUN apk add git 

WORKDIR /front

RUN git clone https://github.com/DMarlon/mywallet-front .

ARG react_app_front_name
ARG react_app_api_url

ENV REACT_APP_FRONT_NAME=${react_app_front_name}
ENV REACT_APP_API_URL=${react_app_api_url}

RUN npm install
RUN npm run build

FROM python:alpine

WORKDIR /front

COPY --from=build /front/dist/ ./

EXPOSE 8801

CMD [\
  "python3",\
  "-m",\
  "http.server",\
  "8801"\
]
