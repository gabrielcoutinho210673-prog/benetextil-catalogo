# Catálogo Benetextil Confecções

Site one-page estático (HTML/CSS/JS puro, sem build) — catálogo de produtos com pedido direto pelo WhatsApp.

## Rodando com Docker (ambiente padronizado pra equipe)

Pré-requisito: [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado. Não precisa de Node, Python nem nenhuma outra ferramenta na máquina.

```bash
docker compose up
```

Depois abra **http://localhost:8080** no navegador.

Qualquer edição feita nos arquivos do projeto (`index.html`, `css/style.css`, `js/script.js`, imagens etc.) aparece no navegador só com um refresh da página — não precisa parar e subir o container de novo, porque a pasta do projeto fica montada dentro dele.

Pra parar:

```bash
docker compose down
```

## Importante: Docker não é "edição em tempo real"

O Docker aqui serve pra todo mundo da equipe rodar o site **exatamente do mesmo jeito**, na mesma porta, sem depender do que cada um tem instalado — ele resolve o "roda na minha máquina, mas não na do outro". Ele **não** faz duas pessoas editarem o mesmo arquivo ao mesmo tempo como um Google Docs.

Pra mais de uma pessoa programar junto sem sobrescrever o trabalho uma da outra, o fluxo é:

1. Cada pessoa clona o repositório: `git clone https://github.com/gabrielcoutinho210673-prog/benetextil-catalogo.git`
2. Cria uma branch pra sua parte: `git checkout -b nome-da-sua-mudanca`
3. Edita os arquivos normalmente (com o Docker rodando pra ver o resultado em `localhost:8080`)
4. Commita e sobe a branch: `git add -A && git commit -m "descrição da mudança" && git push origin nome-da-sua-mudanca`
5. Abre um Pull Request no GitHub pra juntar com a branch `master`

Isso evita que duas pessoas mexendo ao mesmo tempo percam o trabalho uma da outra — o Git mescla as mudanças (ou avisa se houver conflito).

## Estrutura do projeto

```
index.html          — página principal
css/style.css        — estilos
js/script.js          — catálogo de produtos, filtros, modal, WhatsApp
images/               — fotos de produtos e institucionais
videos/                — vídeos do hero e da seção "Quem Somos"
```

## Deploy

O site está publicado no Vercel: https://benetextil-catalogo-deploy-three.vercel.app
