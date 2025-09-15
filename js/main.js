// Dark mode toggle
const darkModeToggle = document.querySelector('#darkModeToggle'); // Corrigido o ID
const body = document.body;

// Carregar preferência de dark mode
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
}

// Alternar dark mode
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Transição suave ao carregar a página
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

// Transições suaves para elementos visíveis durante o scroll
const scrollElements = document.querySelectorAll('.scroll-animation');

function onScroll() {
  scrollElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScroll);
onScroll(); // Executar imediatamente para mostrar elementos que já estão visíveis

// Slider automático de destaques
document.addEventListener('DOMContentLoaded', () => {
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  // Função para avançar para o próximo slide
  function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Volta ao primeiro slide quando chegar ao último
    const offset = -currentIndex * 100;
    sliderTrack.style.transform = `translateX(${offset}%)`;
  }

  // Definir intervalo de troca de slides (cada 5 segundos)
  setInterval(moveToNextSlide, 5000);
});

// Adicionar sombra à navbar ao rolar a página
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Funcionalidade do menu responsivo
const menuToggle = document.querySelector('#menuToggle');
const navList = document.querySelector('#nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
  const jogosLista = document.querySelector('#jogos-lista');
  const jogos = [
    {
    timeAdversario: "UD Oliveirense",
    data: "21/09/2025",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-1.jpg')"
  },
  {
    timeAdversario: "CD Celoricense",
    data: "28/09/2025",
    hora: "15:00",
    local: "Estádio de Celorico de Basto",
    backgroundImage: "url('img/jogo-2.jpg')"
  },
  {
    timeAdversario: "Ribeira Brava",
    data: "05/10/2025",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-3.jpg')"
  },
  {
    timeAdversario: "Mirandela",
    data: "26/10/2025",
    hora: "15:00",
    local: "Estádio São Sebastião (Mirandela)",
    backgroundImage: "url('img/jogo-4.jpg')"
  },
  {
    timeAdversario: "Bragança",
    data: "02/11/2025",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-5.jpg')"
  },
  {
    timeAdversario: "Limianos",
    data: "09/11/2025",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-6.jpg')"
  },
  {
    timeAdversario: "Desp. Chaves B",
    data: "29/11/2025",
    hora: "15:00",
    local: "Complexo Desportivo de Chaves",
    backgroundImage: "url('img/jogo-7.jpg')"
  },
  {
    timeAdversario: "Tirsense",
    data: "07/12/2025",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-8.jpg')"
  },
  {
    timeAdversario: "Vianense",
    data: "14/12/2025",
    hora: "15:00",
    local: "Estádio Dr. José de Matos (Viana do Castelo)",
    backgroundImage: "url('img/jogo-9.jpg')"
  },
  {
    timeAdversario: "S. Martinho",
    data: "21/12/2025",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-10.jpg')"
  },
  {
    timeAdversario: "Brito",
    data: "10/01/2026",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-11.jpg')"
  },
  {
    timeAdversario: "Machico",
    data: "18/01/2026",
    hora: "15:00",
    local: "Estádio Municipal de Machico (Madeira)",
    backgroundImage: "url('img/jogo-12.jpg')"
  },
  {
    timeAdversario: "Camacha",
    data: "25/01/2026",
    hora: "15:00",  
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-13.jpg')"
  },
  {
    timeAdversario: "Vilaverdense",
    data: "08/02/2026",
    hora: "15:00",
    local: "Estádio Municipal de Vila Verde",
    backgroundImage: "url('img/jogo-14.jpg')"
  },
  {
    timeAdversario: "CD Celoricense",
    data: "15/02/2026",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-15.jpg')"
  },
  {
    timeAdversario: "Ribeira Brava",
    data: "22/02/2026",
    hora: "15:00",
    local: "Estádio Municipal da Ribeira Brava (Madeira)",
    backgroundImage: "url('img/jogo-16.jpg')"
  },
  {
    timeAdversario: "Mirandela",
    data: "01/03/2026",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-17.jpg')"
  },
  {
    timeAdversario: "Bragança",
    data: "08/03/2026",
    hora: "15:00",
    local: "Estádio Municipal de Bragança",
    backgroundImage: "url('img/jogo-18.jpg')"
  },
  {
    timeAdversario: "Limianos",
    data: "15/03/2026",
    hora: "15:00",
    local: "Estádio dos Arcos (Ponte de Lima)",
    backgroundImage: "url('img/jogo-19.jpg')"
  },
  {
    timeAdversario: "Desp. Chaves B",
    data: "22/03/2026",
    hora: "15:00",
    local: "Estádio Manuel Lima (Monção)",
    backgroundImage: "url('img/jogo-20.jpg')"
  },
  {
    timeAdversario: "Tirsense",
    data: "05/04/2026",
    hora: "16:00",
    local: "Estádio Abel Alves de Figueiredo (Santo Tirso)",
    backgroundImage: "url('img/jogo-21.jpg')"
  }

  ];

  jogos.forEach(jogo => {
    const jogoItem = document.createElement('li');
    jogoItem.classList.add('jogo-item');
    jogoItem.style.backgroundImage = jogo.backgroundImage; // Aplica a imagem de fundo

    jogoItem.innerHTML = `
      <div class="jogo-info">
        <h3>${jogo.timeAdversario}</h3>
        <div>
          <p class="jogo-local">${jogo.local}</p>
          <p class="jogo-data">Data: ${jogo.data}</p>
          <p class="jogo-hora">Hora: ${jogo.hora}</p>
        </div>
      </div>
    `;

    jogosLista.appendChild(jogoItem);
  });
});




