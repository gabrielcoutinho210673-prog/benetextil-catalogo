/* ==========================================================================
   Benetextil Confecções — script.js
   ========================================================================== */

// TODO: número confirmado pelo cliente (55 11 95217-7783). Conferir se é o
// número correto para RECEBER pedidos (mesmo usado no Instagram/comercial).
const WHATSAPP_NUMBER = "5511952177783";

// Mensagens genéricas por ponto de contato do site (não ligadas a um produto).
const WHATSAPP_MENSAGENS = {
  header: "Olá! Vim pelo site da Benetextil e gostaria de saber mais sobre os produtos.",
  hero: "Olá! Vi o catálogo da Benetextil e queria conversar sobre os produtos.",
  footer: "Olá! Gostaria de fechar um pedido com a Benetextil.",
  float: "Olá! Vim pelo site da Benetextil e queria falar com vocês.",
};

/* --------------------------------------------------------------------------
   PRODUTOS — TODO: substituir por lista real (nomes, categorias, tecidos e
   fotos) fornecida pela Benetextil. Os itens abaixo são placeholders para
   demonstrar o layout e o filtro por categoria.
   -------------------------------------------------------------------------- */
const CATEGORIAS = [
  { id: "moletons", nome: "Moletons" },
  { id: "camisetas-igreja", nome: "Camisetas para Festividade Igreja" },
  { id: "polos", nome: "Polos" },
  { id: "jaquetas", nome: "Jaquetas Personalizadas" },
  { id: "camisa-gola-italiana", nome: "Camisa Gola Italiana" },
  { id: "jalecos", nome: "Jalecos 7/8 e 3/4 Manga Longa" },
  { id: "calca-elastico-total", nome: "Calça Elástico Total" },
  { id: "calca-meio-elastico", nome: "Calça 1/2 Elástico" },
  { id: "calca-faixa-refletiva", nome: "Calça com Faixa Refletiva" },
  { id: "camisa-social", nome: "Camisa Social" },
  { id: "camiseta-feminina", nome: "Camiseta Feminina" },
];

const PRODUTOS = [
  {
    id: "personalizado-01",
    nome: "Moletom Canguru Personalizado",
    categoria: "moletons",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: moletom flanelado com estampa.",
    imagem: "images/produtos/personalizado-01-moletom.png",
  },
  {
    id: "personalizado-06",
    nome: "Moletom Canguru Personalizado (Cru)",
    categoria: "moletons",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: moletom cru com forro colorido e bordado.",
    imagem: "images/produtos/personalizado-06-moletom-cream.jpg",
  },
  {
    id: "personalizado-02",
    nome: "Camiseta Personalizada Dry Fit",
    categoria: "camisetas-igreja",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: camiseta dry fit com estampa e bordado.",
    imagem: "images/produtos/personalizado-02-camiseta.jpg",
  },
  {
    id: "personalizado-05",
    nome: "Camisa Polo Personalizada",
    categoria: "polos",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: polo piquet com logo bordado/estampado.",
    imagem: "images/produtos/personalizado-05-polo.jpg",
  },
  {
    id: "personalizado-03",
    nome: "Jaqueta Corporativa Personalizada",
    categoria: "jaquetas",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: jaqueta corporativa com logo bordado/estampado e faixa refletiva.",
    imagem: "images/produtos/personalizado-03-jaqueta.jpg",
  },
  {
    id: "personalizado-04",
    nome: "Jaqueta Cinza Personalizada",
    categoria: "jaquetas",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: jaqueta corporativa com gola contrastante e logo bordado.",
    imagem: "images/produtos/personalizado-04-jaqueta-cinza.jpg",
  },
  // Tipos de uniforme confirmados pelo cliente (nomes reais). Faltam as fotos reais de cada peça.
  {
    id: "uniforme-01",
    nome: "Camisa Gola Italiana",
    categoria: "camisa-gola-italiana",
    tecido: "[TODO: confirmar tecido/composição]",
    imagem: "images/produtos/uniforme-camisa-gola-italiana.svg",
  },
  {
    id: "uniforme-02",
    nome: "Jaleco 7/8 Manga Longa",
    categoria: "jalecos",
    tecido: "[TODO: confirmar tecido/composição]",
    imagem: "images/produtos/uniforme-jaleco-7-8.svg",
  },
  {
    id: "uniforme-03",
    nome: "Jaleco 3/4 Manga Longa",
    categoria: "jalecos",
    tecido: "[TODO: confirmar tecido/composição]",
    imagem: "images/produtos/uniforme-jaleco-3-4.svg",
  },
  {
    id: "uniforme-04",
    nome: "Calça Elástico Total",
    categoria: "calca-elastico-total",
    tecido: "[TODO: confirmar tecido/composição]",
    imagem: "images/produtos/uniforme-calca-elastico-total.svg",
  },
  {
    id: "uniforme-05",
    nome: "Calça 1/2 Elástico",
    categoria: "calca-meio-elastico",
    tecido: "[TODO: confirmar tecido/composição]",
    imagem: "images/produtos/uniforme-calca-meio-elastico.svg",
  },
  {
    id: "uniforme-06",
    nome: "Calça com Faixa Refletiva",
    categoria: "calca-faixa-refletiva",
    tecido: "[TODO: confirmar tecido/composição]",
    imagem: "images/produtos/uniforme-calca-faixa-refletiva.svg",
  },
  {
    id: "uniforme-07",
    nome: "Camisa Social",
    categoria: "camisa-social",
    tecido: "[TODO: confirmar tecido/composição]",
    imagem: "images/produtos/uniforme-camisa-social.svg",
  },
  {
    id: "uniforme-08",
    nome: "Camiseta Feminina",
    categoria: "camiseta-feminina",
    tecido: "[TODO: confirmar tecido/composição]",
    imagem: "images/produtos/uniforme-camiseta-feminina.svg",
  },
];

function montarLinkWhatsapp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

/* --------------------------------------------------------------------------
   Links de WhatsApp genéricos (header, hero, footer, botão flutuante)
   -------------------------------------------------------------------------- */
function preencherLinksGenericos() {
  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    const chave = el.getAttribute("data-whatsapp-msg") || "header";
    const mensagem = WHATSAPP_MENSAGENS[chave] || WHATSAPP_MENSAGENS.header;
    el.setAttribute("href", montarLinkWhatsapp(mensagem));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

/* --------------------------------------------------------------------------
   Renderização dos filtros de categoria
   -------------------------------------------------------------------------- */
function renderFiltros() {
  const wrap = document.getElementById("filtros");
  wrap.innerHTML = CATEGORIAS.map(
    (cat) => `<button class="filtro-btn" data-categoria="${cat.id}">${cat.nome}</button>`
  ).join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro-btn");
    if (!btn) return;
    wrap.querySelectorAll(".filtro-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProdutos(btn.getAttribute("data-categoria"));
  });
}

/* --------------------------------------------------------------------------
   Renderização do grid de produtos + navegação por abas (JS puro).
   Nenhuma categoria fica selecionada por padrão: as fotos só aparecem
   depois que o usuário clica em uma aba, e nunca mostram mais de uma
   categoria ao mesmo tempo.
   -------------------------------------------------------------------------- */
function renderProdutos(categoriaAtiva) {
  const grid = document.getElementById("produtosGrid");
  const vazio = document.getElementById("produtosVazio");

  if (!categoriaAtiva) {
    grid.innerHTML = "";
    vazio.textContent = "Escolha uma categoria acima para ver as fotos dos produtos.";
    vazio.style.display = "block";
    return;
  }

  const lista = PRODUTOS.filter((p) => p.categoria === categoriaAtiva);

  vazio.textContent = "Nenhuma foto cadastrada nessa categoria ainda.";
  vazio.style.display = lista.length ? "none" : "block";

  grid.innerHTML = lista
    .map((p) => {
      const nomeCategoria =
        CATEGORIAS.find((c) => c.id === p.categoria)?.nome || p.categoria;
      const mensagem = `Olá! Tenho interesse na peça "${p.nome}" do catálogo da Benetextil. Poderiam me passar mais informações?`;
      const linkWpp = montarLinkWhatsapp(mensagem);

      return `
        <article class="produto-card">
          <div class="produto-media">
            <img src="${p.imagem}" alt="${p.nome}" loading="lazy" width="800" height="1000" />
          </div>
          <div class="produto-info">
            <span class="produto-categoria">${nomeCategoria}</span>
            <h3 class="produto-nome">${p.nome}</h3>
            <p class="produto-tecido">${p.tecido}</p>
            <a class="btn btn-whatsapp btn-sm" href="${linkWpp}" target="_blank" rel="noopener">
              Pedir no WhatsApp
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

/* --------------------------------------------------------------------------
   FAQ — acordeão simples
   -------------------------------------------------------------------------- */
function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Botões dos blocos de destaque — pré-selecionam a categoria no catálogo
   -------------------------------------------------------------------------- */
function initFiltroScroll() {
  document.querySelectorAll(".filtro-scroll").forEach((btn) => {
    btn.addEventListener("click", () => {
      const categoria = btn.getAttribute("data-categoria");
      const filtroBtn = document.querySelector(`.filtro-btn[data-categoria="${categoria}"]`);
      if (!filtroBtn) return;
      document.querySelectorAll(".filtro-btn").forEach((b) => b.classList.remove("active"));
      filtroBtn.classList.add("active");
      renderProdutos(categoria);
    });
  });
}

/* --------------------------------------------------------------------------
   Menu mobile
   -------------------------------------------------------------------------- */
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => links.classList.remove("open"));
  });
}

/* --------------------------------------------------------------------------
   Animação simples de entrada ao rolar a página
   -------------------------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("anoAtual").textContent = new Date().getFullYear();

  preencherLinksGenericos();
  renderFiltros();
  renderProdutos();
  initFaq();
  initNavToggle();
  initFiltroScroll();
  initReveal();
});
