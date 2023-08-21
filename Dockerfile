FROM nginx:latest
LABEL key="lty"
EXPOSE 80
COPY ./dist /dunhao-ccm
COPY ./default.conf /etc/nginx/conf.d/