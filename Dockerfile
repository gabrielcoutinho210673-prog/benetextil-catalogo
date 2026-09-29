# Imagem de desenvolvimento/preview do catálogo Benetextil.
# Site 100% estático (HTML/CSS/JS puro) — não precisa de build nem Node/Python
# na máquina de quem for programar, só do Docker.
FROM nginx:alpine

# Copia o site pra dentro da imagem (usado se rodar sem o volume do docker-compose,
# por exemplo "docker build" isolado ou um teste de deploy).
COPY . /usr/share/nginx/html

EXPOSE 80
