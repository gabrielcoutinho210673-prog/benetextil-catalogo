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
  {
    id: "moletons",
    nome: "Moletons",
    notaTitulo: "Modelos ilustrativos: sua ideia, nossa produção.",
    notaTexto:
      "Cada peça exibida é um exemplo do nosso padrão de acabamento: moletons flanelados premium, costura reforçada e personalização total (estampas, bordados, detalhes no forro e punhos). Não vendemos modelos prontos: criamos um design 100% exclusivo para você.",
  },
  { id: "camisetas-igreja", nome: "Camisetas" },
  { id: "polos", nome: "Polos" },
  { id: "jaquetas", nome: "Jaquetas Personalizadas" },
  { id: "domas", nome: "Domas" },
  { id: "gola-v", nome: "Gola V" },
];

const PRODUTOS = [
  {
    id: "personalizado-07",
    nome: "Moletom Canguru Personalizado",
    categoria: "moletons",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: moletom flanelado com estampa frontal.",
    imagem: "images/produtos/personalizado-07-moletom-t26.jpg",
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
    id: "personalizado-08",
    nome: "Moletom de Formatura Personalizado (Verso Azul)",
    categoria: "moletons",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: moletom de turma/formatura com estampa nas costas.",
    imagem: "images/produtos/personalizado-08-formatura-verso-azul.jpg",
  },
  {
    id: "personalizado-09",
    nome: "Moletom de Formatura Personalizado (Verso Bordô)",
    categoria: "moletons",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: moletom de turma/formatura com estampa nas costas.",
    imagem: "images/produtos/personalizado-09-formatura-verso-bordo.jpg",
  },
  {
    id: "personalizado-10",
    nome: "Moletom de Formatura Personalizado (Frente Azul)",
    categoria: "moletons",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: moletom de turma/formatura com estampa frontal.",
    imagem: "images/produtos/personalizado-10-formatura-frente-azul.jpg",
  },
  {
    id: "personalizado-11",
    nome: "Camiseta Personalizada Branca",
    categoria: "camisetas-igreja",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: camiseta branca com estampa frontal.",
    imagem: "images/produtos/personalizado-11-camiseta-branca.jpg",
  },
  {
    id: "personalizado-12",
    nome: "Camiseta Personalizada Bordô",
    categoria: "camisetas-igreja",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: camiseta bordô com estampa frontal.",
    imagem: "images/produtos/personalizado-12-camiseta-bordo.jpg",
  },
  {
    id: "personalizado-13",
    nome: "Camiseta Personalizada Preta",
    categoria: "camisetas-igreja",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: camiseta preta com estampa frontal.",
    imagem: "images/produtos/personalizado-13-camiseta-preta.jpg",
  },
  {
    id: "personalizado-16",
    nome: "Camiseta Personalizada Azul Marinho (Frente)",
    categoria: "camisetas-igreja",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: camiseta azul marinho com gola contrastante e estampa frontal.",
    imagem: "images/produtos/personalizado-16-camiseta-20anos-frente.jpg",
  },
  {
    id: "personalizado-17",
    nome: "Camiseta Personalizada Azul Marinho (Verso)",
    categoria: "camisetas-igreja",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: camiseta azul marinho com gola contrastante e estampa nas costas.",
    imagem: "images/produtos/personalizado-17-camiseta-ecc-verso.jpg",
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
    id: "personalizado-19",
    nome: "Camisa Polo Personalizada Marinho",
    categoria: "polos",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: polo piquet marinho com gola e punhos contrastantes.",
    imagem: "images/produtos/personalizado-19-polo-marinho.jpg",
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
    nome: "Camisa Polo Personalizada Cinza",
    categoria: "polos",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: polo piquet cinza com gola contrastante e logo bordado.",
    imagem: "images/produtos/personalizado-04-jaqueta-cinza.jpg",
  },
  {
    id: "personalizado-15",
    nome: "Jaleco de Cozinha Personalizado (Frente)",
    categoria: "domas",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: jaleco de cozinha com detalhes em vivo e logo bordado.",
    imagem: "images/produtos/personalizado-15-jaleco-cozinha-frente.jpg",
  },
  {
    id: "personalizado-14",
    nome: "Jaleco de Cozinha Personalizado (Verso)",
    categoria: "domas",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: jaleco de cozinha com logo estampado nas costas.",
    imagem: "images/produtos/personalizado-14-jaleco-cozinha-verso.jpg",
  },
  {
    id: "personalizado-18",
    nome: "Jaleco de Trabalho Personalizado Cinza",
    categoria: "gola-v",
    // Imagem gerada por IA (simulação), não é foto de uma peça já produzida.
    // TODO: confirmar tecido/composição real e, se possível, substituir por foto real.
    tecido: "Exemplo de estilo de personalização: jaleco de trabalho cinza com gola contrastante, bolso e logo estampado.",
    imagem: "images/produtos/personalizado-18-jaleco-trabalho-cinza.jpg",
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
   HTML de um card de produto (usado no resultado de categoria).
   -------------------------------------------------------------------------- */
function criarCardProduto(p) {
  const nomeCategoria = CATEGORIAS.find((c) => c.id === p.categoria)?.nome || p.categoria;
  const mensagem = `Olá! Tenho interesse na peça "${p.nome}" do catálogo da Benetextil. Poderiam me passar mais informações?`;
  const linkWpp = montarLinkWhatsapp(mensagem);

  return `
    <article class="produto-card" data-produto-id="${p.id}">
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
}

/* --------------------------------------------------------------------------
   Cards visuais de categoria (foto de fundo + nome) — substituem os botões
   de texto simples. Cada card usa a foto do primeiro produto cadastrado
   naquela categoria.
   -------------------------------------------------------------------------- */
function renderCategoriaCards() {
  const wrap = document.getElementById("categoriaCards");

  wrap.innerHTML = CATEGORIAS.map((cat) => {
    const capa = PRODUTOS.find((p) => p.categoria === cat.id)?.imagem || "";
    return `
      <button class="categoria-card" data-categoria="${cat.id}">
        <img src="${capa}" alt="${cat.nome}" loading="lazy" width="600" height="450" />
        <span>${cat.nome}</span>
      </button>
    `;
  }).join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".categoria-card");
    if (!btn) return;
    selecionarCategoria(btn.getAttribute("data-categoria"));
  });
}

/* --------------------------------------------------------------------------
   Seleciona uma categoria: marca o card ativo, renderiza as fotos dela e
   revela a seção de resultado (que fica escondida até o primeiro clique).
   -------------------------------------------------------------------------- */
function selecionarCategoria(categoriaId) {
  const cartao = document.querySelector(`.categoria-card[data-categoria="${categoriaId}"]`);
  if (!cartao) return;

  document.querySelectorAll(".categoria-card.active").forEach((c) => c.classList.remove("active"));
  cartao.classList.add("active");

  const categoria = CATEGORIAS.find((c) => c.id === categoriaId);
  const nomeCategoria = categoria?.nome || categoriaId;
  const resultado = document.getElementById("categoriaResultado");
  const titulo = document.getElementById("categoriaResultadoTitulo");
  const nota = document.getElementById("categoriaResultadoNota");
  const grid = document.getElementById("produtosGrid");
  const vazio = document.getElementById("produtosVazio");

  titulo.textContent = nomeCategoria;
  resultado.classList.add("visivel");

  // Nota opcional por categoria (ex.: aviso de que as fotos são modelos ilustrativos).
  if (categoria?.notaTitulo) {
    nota.innerHTML = `<strong>${categoria.notaTitulo}</strong><p>${categoria.notaTexto}</p>`;
    nota.style.display = "block";
  } else {
    nota.innerHTML = "";
    nota.style.display = "none";
  }

  const lista = PRODUTOS.filter((p) => p.categoria === categoriaId);
  vazio.textContent = "Nenhuma foto cadastrada nessa categoria ainda.";
  vazio.style.display = lista.length ? "none" : "block";
  grid.innerHTML = lista.map(criarCardProduto).join("");

  resultado.scrollIntoView({ behavior: "smooth", block: "start" });
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
   Modal de produto (lightbox) — abre ao clicar em qualquer card de produto
   (imagem ou card inteiro), em qualquer grid da página.
   -------------------------------------------------------------------------- */
function abrirProdutoModal(produtoId) {
  const p = PRODUTOS.find((item) => item.id === produtoId);
  if (!p) return;

  const nomeCategoria = CATEGORIAS.find((c) => c.id === p.categoria)?.nome || p.categoria;
  const mensagem = `Olá! Tenho interesse na peça "${p.nome}" do catálogo da Benetextil. Poderiam me passar mais informações?`;

  const img = document.getElementById("produtoModalImg");
  img.src = p.imagem;
  img.alt = p.nome;
  document.getElementById("produtoModalCategoria").textContent = nomeCategoria;
  document.getElementById("produtoModalNome").textContent = p.nome;
  document.getElementById("produtoModalTecido").textContent = p.tecido;
  document.getElementById("produtoModalWpp").setAttribute("href", montarLinkWhatsapp(mensagem));

  const modal = document.getElementById("produtoModal");
  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function fecharProdutoModal() {
  const modal = document.getElementById("produtoModal");
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initProdutoModal() {
  document.getElementById("produtoModalFechar").addEventListener("click", fecharProdutoModal);
  document.getElementById("produtoModalBackdrop").addEventListener("click", fecharProdutoModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharProdutoModal();
  });

  // Delegação de evento: funciona em qualquer grid de produtos da página,
  // inclusive os que forem renderizados depois (troca de categoria etc.).
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".produto-card");
    if (!card) return;
    if (e.target.closest(".btn-whatsapp")) return; // botão de WhatsApp continua funcionando normalmente
    abrirProdutoModal(card.getAttribute("data-produto-id"));
  });
}

/* --------------------------------------------------------------------------
   Botões dos blocos de destaque — pré-selecionam a categoria no catálogo
   -------------------------------------------------------------------------- */
function initFiltroScroll() {
  document.querySelectorAll(".filtro-scroll").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      selecionarCategoria(btn.getAttribute("data-categoria"));
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
  renderCategoriaCards();
  initFaq();
  initNavToggle();
  initFiltroScroll();
  initProdutoModal();
  initReveal();
});
