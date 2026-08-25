import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from '../../assets/logo.png'
import heroImage from '../../assets/publico/hero-adocao.jpg'
import thorImage from '../../assets/publico/animal-thor.jpg'
import pipocaImage from '../../assets/publico/animal-pipoca.jpg'
import melImage from '../../assets/publico/animal-mel.jpg'

function PawIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="4" r="2"></circle>
      <circle cx="18" cy="8" r="2"></circle>
      <circle cx="20" cy="16" r="2"></circle>
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
    </svg>
  )
}

function HeartIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>
  )
}

function HomeIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  )
}

function GiftIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="8" width="18" height="4" rx="1"></rect>
      <path d="M12 8v13"></path>
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"></path>
    </svg>
  )
}

function SearchIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  )
}

function FileTextIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
      <path d="M14 2v5h5"></path>
      <path d="M9 13h6"></path>
      <path d="M9 17h6"></path>
    </svg>
  )
}

function ClipboardCheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="8" y="2" width="8" height="4" rx="1"></rect>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <path d="m9 14 2 2 4-4"></path>
    </svg>
  )
}

function CalendarIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"></rect>
      <path d="M16 2v4"></path>
      <path d="M8 2v4"></path>
      <path d="M3 10h18"></path>
    </svg>
  )
}

function ClockIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  )
}

function ArrowRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  )
}

function ChevronLeftIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m15 18-6-6 6-6"></path>
    </svg>
  )
}

function ChevronRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    </svg>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465a2 2 0 0 1 2.3-.633l3.548 1.315a1 1 0 0 1 .652 1.066 4.5 4.5 0 0 1-4.393 3.44C9.65 20.88 3.12 14.352 2.012 6.482a4.5 4.5 0 0 1 3.44-4.393 1 1 0 0 1 1.066.652l1.315 3.548a2 2 0 0 1-.633 2.3l-.465.355a1 1 0 0 0-.303 1.213 11.9 11.9 0 0 0 7.4 6.411"></path>
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5"></rect>
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37Z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}

function FacebookIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  )
}

const eventos = [
  {
    data: '14 DE JUNHO, 2026',
    titulo: 'Feira de Adoção de Sábado',
    descricao: 'Venha conhecer nossos peludos resgatados! Teremos cães e gatos prontos para adoção responsável.',
    horario: '09:00 – 16:00',
    local: 'Parque do Ibirapuera, São Paulo',
  },
  {
    data: '22 DE JUNHO, 2026',
    titulo: 'Dia da Vacinação Gratuita',
    descricao: 'Vacinação antirrábica e vermifugação gratuita para cães e gatos. Leve seu documento.',
    horario: '08:00 – 12:00',
    local: 'Unidade Anjos Protetores, Zona Sul',
  },
  {
    data: '05 DE JULHO, 2026',
    titulo: 'Mutirão de Castração',
    descricao: '50 vagas para castração de baixa renda. Inscrições abertas pelo site até 01/07.',
    horario: '07:00 – 17:00',
    local: 'Clínica Parceira VetCare',
  },
  {
    data: '12 DE JULHO, 2026',
    titulo: 'Workshop: Cuidados com Filhotes',
    descricao: 'Aprenda sobre alimentação, socialização e primeiros cuidados com veterinária especializada.',
    horario: '14:00 – 16:00',
    local: 'Online (YouTube Live)',
  },
  {
    data: '26 DE JULHO, 2026',
    titulo: 'Arraiá dos Peludos',
    descricao: 'Festa junina temática com adoção, barracas de comida, brincadeiras e muito amor pet.',
    horario: '10:00 – 18:00',
    local: 'Praça da Pampulha, Belo Horizonte',
  },
]

const animais = [
  { nome: 'Thor', especie: 'Cão', imagem: thorImage, idade: '4 meses', porte: 'Porte grande', vacinado: true },
  { nome: 'Pipoca', especie: 'Cão', imagem: pipocaImage, idade: '2 anos', porte: 'Porte médio', vacinado: true },
  { nome: 'Mel', especie: 'Gato', imagem: melImage, idade: '1 ano', porte: 'Porte pequeno', vacinado: true },
]

const doacoes = [
  { valor: 'R$ 30', descricao: 'Alimenta um filhote por 1 semana' },
  { valor: 'R$ 80', descricao: 'Vacina e vermifuga 1 animal' },
  { valor: 'R$ 150', descricao: 'Castração e cuidados pós' },
  { valor: 'R$ 300', descricao: 'Tratamento veterinário completo' },
]

const passos = [
  { icone: SearchIcon, titulo: 'Escolha um animal', descricao: 'Navegue pelos perfis e encontre seu match.' },
  { icone: FileTextIcon, titulo: 'Envie a solicitação', descricao: 'Preencha um formulário rápido em 2 minutos.' },
  { icone: ClipboardCheckIcon, titulo: 'Passe pela análise', descricao: 'Conversa com nossa equipe para garantir o lar ideal.' },
  { icone: HomeIcon, titulo: 'Adote com amor', descricao: 'Leve seu novo amigo para casa e mude duas vidas.' },
]

function BrandMark() {
  return (
    <Link to="/publico" className="publico-brand-mark">
      <img src={logo} alt="Anjos Protetores" className="publico-brand-logo" />
    </Link>
  )
}

function Header() {
  return (
    <header className="publico-header">
      <BrandMark />
      <nav className="publico-nav">
        <a href="#inicio">Início</a>
        <a href="#animais">Animais</a>
        <a href="#eventos">Eventos</a>
        <a href="#sobre">Sobre</a>
        <a href="#doacoes">Doações</a>
      </nav>
      <Link to="/login" className="publico-login-button">Login</Link>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="publico-hero">
      <div className="publico-hero-text">
        <span className="publico-badge">
          <HeartIcon className="publico-badge-icon" />
          ADOÇÃO RESPONSÁVEL
        </span>
        <h1>
          Encontre um novo <span className="publico-accent-text">melhor amigo</span>
        </h1>
        <p>
          Somos um abrigo dedicado a resgatar, cuidar e encontrar lares amorosos para cães e gatos. Cada animal
          aqui tem uma história — e você pode escrever o próximo capítulo dela.
        </p>
        <div className="publico-hero-actions">
          <a href="#animais" className="publico-btn publico-btn-primary">
            <PawIcon className="publico-btn-icon" />
            Quero adotar
          </a>
          <a href="#doacoes" className="publico-btn publico-btn-outline">
            <GiftIcon className="publico-btn-icon" />
            Fazer doação
          </a>
        </div>
      </div>

      <div className="publico-hero-media">
        <img src={heroImage} alt="Cão e gato disponíveis para adoção" />
        <div className="publico-hero-tag">
          <span className="publico-dot" />
          42 amigos disponíveis
        </div>
        <div className="publico-hero-stat-card">
          <span className="publico-hero-stat-icon">
            <HeartIcon />
          </span>
          <div>
            <strong>+428</strong>
            <p>vidas transformadas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { icone: HomeIcon, numero: '428', legenda: 'Animais adotados' },
    { icone: PawIcon, numero: '612', legenda: 'Animais resgatados' },
    { icone: GiftIcon, numero: '1.847', legenda: 'Doações recebidas' },
    { icone: HeartIcon, numero: '390', legenda: 'Famílias felizes' },
  ]

  return (
    <div className="publico-stats-bar">
      {stats.map(({ icone: Icone, numero, legenda }) => (
        <div className="publico-stat" key={legenda}>
          <span className="publico-stat-icon">
            <Icone />
          </span>
          <div>
            <strong>{numero}</strong>
            <p>{legenda}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function EventCard({ evento }) {
  return (
    <article className="publico-event-card">
      <span className="publico-event-date">
        <CalendarIcon />
        {evento.data}
      </span>
      <h3>{evento.titulo}</h3>
      <p>{evento.descricao}</p>
      <span className="publico-event-meta">
        <ClockIcon />
        {evento.horario}
      </span>
      <span className="publico-event-meta">
        <MapPinIcon />
        {evento.local}
      </span>
      <a href="#eventos" className="publico-btn publico-btn-primary publico-btn-block">
        Quero ir
        <ArrowRightIcon className="publico-btn-icon" />
      </a>
    </article>
  )
}

function Eventos() {
  const trackRef = useRef(null)

  function scroll(direction) {
    trackRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' })
  }

  return (
    <section id="eventos" className="publico-section publico-section-muted">
      <div className="publico-section-heading publico-section-heading-row">
        <div>
          <span className="publico-eyebrow">FIQUE POR DENTRO</span>
          <h2>Próximos eventos</h2>
          <p>Participe de feiras de adoção, vacinações gratuitas e muito mais.</p>
        </div>
        <div className="publico-carousel-controls">
          <button type="button" aria-label="Anterior" onClick={() => scroll(-1)}>
            <ChevronLeftIcon />
          </button>
          <button type="button" aria-label="Próximo" onClick={() => scroll(1)}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="publico-event-track" ref={trackRef}>
        {eventos.map((evento) => (
          <EventCard evento={evento} key={evento.titulo} />
        ))}
      </div>
    </section>
  )
}

function AnimalCard({ animal }) {
  return (
    <article className="publico-animal-card">
      <div className="publico-animal-media">
        <img src={animal.imagem} alt={animal.nome} />
        <span className="publico-animal-available">
          <span className="publico-dot" />
          DISPONÍVEL
        </span>
      </div>
      <div className="publico-animal-body">
        <div className="publico-animal-heading">
          <h3>{animal.nome}</h3>
          <span className="publico-animal-species">{animal.especie.toUpperCase()}</span>
        </div>
        <div className="publico-animal-tags">
          <span>{animal.idade}</span>
          <span>{animal.porte}</span>
          {animal.vacinado && <span className="publico-tag-positive">Vacinado</span>}
        </div>
        <button type="button" className="publico-btn publico-btn-dark publico-btn-block">
          Ver mais
          <ArrowRightIcon className="publico-btn-icon" />
        </button>
      </div>
    </article>
  )
}

function Animais() {
  const [filtro, setFiltro] = useState('Todos')
  const filtrados = filtro === 'Todos' ? animais : animais.filter((a) => a.especie === filtro)

  return (
    <section id="animais" className="publico-section">
      <div className="publico-section-heading publico-section-heading-row">
        <div>
          <span className="publico-eyebrow">DISPONÍVEIS PARA ADOÇÃO</span>
          <h2>Conheça quem está esperando você</h2>
        </div>
        <div className="publico-filter-group">
          {['Todos', 'Cão', 'Gato'].map((opcao) => (
            <button
              type="button"
              key={opcao}
              className={`publico-filter-pill${filtro === opcao ? ' is-active' : ''}`}
              onClick={() => setFiltro(opcao)}
            >
              {opcao}
            </button>
          ))}
        </div>
      </div>

      <div className="publico-animal-grid">
        {filtrados.map((animal) => (
          <AnimalCard animal={animal} key={animal.nome} />
        ))}
      </div>
    </section>
  )
}

function ComoFunciona() {
  return (
    <section className="publico-section publico-section-muted">
      <div className="publico-section-heading publico-section-heading-center">
        <span className="publico-eyebrow">PROCESSO SIMPLES</span>
        <h2>Como funciona a adoção</h2>
        <p>Em 4 passos simples você dá um lar para um animal que precisa.</p>
      </div>

      <div className="publico-steps">
        {passos.map(({ icone: Icone, titulo, descricao }, index) => (
          <div className="publico-step-card" key={titulo}>
            <div className="publico-step-top">
              <span className="publico-step-icon">
                <Icone />
              </span>
              <span className="publico-step-number">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="publico-section publico-sobre">
      <div className="publico-sobre-text">
        <span className="publico-eyebrow">SOBRE O ABRIGO</span>
        <h2>Há 8 anos cuidando de quem mais precisa</h2>
        <p>
          O Anjos Protetores nasceu em São Paulo em 2018 com uma missão clara: oferecer abrigo digno, cuidados
          veterinários e uma segunda chance para animais resgatados das ruas. Trabalhamos em parceria com
          voluntários, clínicas e famílias adotantes.
        </p>
        <ul className="publico-checklist">
          <li>
            <HeartIcon /> Atendimento veterinário completo para todos os animais
          </li>
          <li>
            <HeartIcon /> Processo de adoção criterioso e acompanhado
          </li>
          <li>
            <HeartIcon /> Lar temporário e suporte pós-adoção
          </li>
          <li>
            <HeartIcon /> Mais de 90% dos animais adotados em até 6 meses
          </li>
        </ul>
      </div>

      <div className="publico-sobre-media">
        <img src={heroImage} alt="Animais acolhidos pelo abrigo" />
        <div className="publico-sobre-badge">
          <strong>8 anos</strong>
          <p>transformando histórias com muito amor.</p>
        </div>
      </div>
    </section>
  )
}

function Doacoes() {
  return (
    <section id="doacoes" className="publico-section">
      <div className="publico-donation-card">
        <div className="publico-donation-text">
          <span className="publico-badge publico-badge-light">
            <GiftIcon className="publico-badge-icon" />
            FAÇA PARTE
          </span>
          <h2>Sua doação salva vidas todos os dias</h2>
          <p>
            Com R$ 30 alimentamos um filhote por uma semana inteira. Toda contribuição — ração, medicamentos,
            brinquedos ou valores — chega direto a quem precisa.
          </p>
          <div className="publico-hero-actions">
            <a href="#doacoes" className="publico-btn publico-btn-primary">
              Doar agora
              <ArrowRightIcon className="publico-btn-icon" />
            </a>
            <a href="#doacoes" className="publico-btn publico-btn-outline-light">
              Doar itens
            </a>
          </div>
        </div>

        <div className="publico-donation-grid">
          {doacoes.map((item) => (
            <div className="publico-donation-item" key={item.valor}>
              <strong>{item.valor}</strong>
              <p>{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="publico-footer">
      <div className="publico-footer-grid">
        <div>
          <img src={logo} alt="Anjos Protetores" className="publico-footer-logo" />
          <p>Adotar é um ato de amor que transforma duas vidas. Obrigado por fazer parte dessa missão.</p>
          <div className="publico-social">
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#animais">Animais</a>
          <a href="#eventos">Eventos</a>
          <a href="#sobre">Sobre</a>
          <a href="#doacoes">Doações</a>
        </div>

        <div>
          <h4>Contato</h4>
          <a href="mailto:contato@anjosprotetores.org">
            <MailIcon /> contato@anjosprotetores.org
          </a>
          <a href="tel:+551140028922">
            <PhoneIcon /> (11) 4002-8922
          </a>
          <span className="publico-footer-address">
            <MapPinIcon /> São Paulo, SP
          </span>
        </div>

        <div>
          <h4>Acesso</h4>
          <p>Voluntários e equipe do abrigo.</p>
          <Link to="/login" className="publico-btn publico-btn-primary-cyan">
            Entrar no painel
          </Link>
        </div>
      </div>

      <div className="publico-footer-bottom">
        <span>© 2026 Anjos Protetores · Cada vida importa.</span>
        <span className="publico-footer-quote">"Até que um deles tenha um lar, nenhum de nós descansa."</span>
      </div>
    </footer>
  )
}

function Publico() {
  return (
    <div className="publico-page">
      <Header />
      <Hero />
      <StatsBar />
      <Eventos />
      <Animais />
      <ComoFunciona />
      <Sobre />
      <Doacoes />
      <Footer />
    </div>
  )
}

export default Publico
