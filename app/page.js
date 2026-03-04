'use client'
import { useEffect, useRef } from 'react'

export default function Home() {
  // Intersection Observer para animações ao scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* LINHA ANIMADA */}
      <div className="line-draw" />

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          <img src="/logo.png" alt="Cristina Frade" />
        </a>
        <ul className="navbar-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#equipa">Equipa</a></li>
          <li><a href="#contactos">Contactos</a></li>
        </ul>
        <a href="#contactos" className="btn-primary">Contacte-nos</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-watermark">CF</div>
        <div className="hero-inner">

          {/* Texto — fade in de cima para baixo */}
          <div className="hero-left">
            <div className="hero-eyebrow hero-anim" style={{ animationDelay: '0.1s' }}>
              Escritório de Solicitadoria — Coimbra
            </div>
            <h1 className="hero-title hero-anim" style={{ animationDelay: '0.25s' }}>
              Os seus direitos,<br />
              <em>simplificados.</em>
            </h1>
            <p className="hero-text hero-anim" style={{ animationDelay: '0.4s' }}>
              Mais de 30 anos de experiência em serviços jurídicos e
              administrativos. Tratamos dos seus processos com rigor,
              ética e um acompanhamento verdadeiramente pessoal.
            </p>
            <div className="hero-actions hero-anim" style={{ animationDelay: '0.55s' }}>
              <a href="#contactos" className="btn-primary">Agendar Consulta</a>
              <a href="#servicos" className="btn-outline">Ver Serviços</a>
            </div>
          </div>

          {/* Stats card — efeito cortina da esquerda */}
          <div className="hero-right">
            <div className="curtain-wrapper">
              <div className="curtain-reveal">
                <div className="stats-card">
                  <div className="stat-row">
                    <div className="stat-number">30<sup>+</sup></div>
                    <div className="stat-info">
                      <div className="stat-label">Anos de experiência</div>
                      <div className="stat-desc">Solicitadora desde 1992</div>
                    </div>
                  </div>
                  <div className="stat-row">
                    <div className="stat-number">2003</div>
                    <div className="stat-info">
                      <div className="stat-label">Especialização</div>
                      <div className="stat-desc">Agente de Execução</div>
                    </div>
                  </div>
                  <div className="stat-row">
                    <div className="stat-number">4</div>
                    <div className="stat-info">
                      <div className="stat-label">Equipa</div>
                      <div className="stat-desc">Profissionais ao seu serviço</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SOBRE */}
      <section className="sobre" id="sobre">
        <div className="container sobre-inner">
          <div className="sobre-visual scroll-reveal reveal-left">
            <div className="sobre-image-placeholder">
              <div className="sobre-image-inner">
                <div className="sobre-image-icon">👤</div>
                <div className="sobre-image-text">Foto da Dra. Cristina Frade</div>
              </div>
              <div className="sobre-badge">
                <span className="sobre-badge-year">1992</span>
                <span className="sobre-badge-label">Em atividade</span>
              </div>
            </div>
          </div>

          <div className="scroll-reveal reveal-right">
            <div className="section-label">Sobre Nós</div>
            <h2 className="section-title">Uma carreira construída sobre confiança</h2>
            <blockquote className="sobre-quote">
              "Trate dos seus processos com um toque pessoal."
            </blockquote>
            <p className="section-subtitle">
              Cristina Frade é solicitadora desde 1992, com especialização como
              Agente de Execução desde 2003 e Inspetora/Fiscalizadora da CAAJ desde 2009.
            </p>
            <p style={{ fontSize: '0.92rem', color: 'var(--gray)', lineHeight: '1.85', marginTop: '1.25rem' }}>
              O nosso escritório, situado no coração de Coimbra, presta serviços
              jurídicos e administrativos com rigor e proximidade. Acreditamos que
              cada cliente merece um acompanhamento personalizado, garantindo segurança
              jurídica em todos os processos.
            </p>
            <div className="sobre-tags">
              <span className="tag">Solicitadora</span>
              <span className="tag">Agente de Execução</span>
              <span className="tag">CAAJ — Inspetora</span>
              <span className="tag">Coimbra</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos">
        <div className="container">
          <div className="servicos-header scroll-reveal reveal-up">
            <div>
              <div className="section-label">Áreas de Atuação</div>
              <h2 className="section-title">Como podemos ajudá-lo</h2>
              <p className="section-subtitle">
                Serviços especializados de Solicitadoria, garantindo assessoria
                jurídica adaptada a cada necessidade.
              </p>
            </div>
          </div>

          {/* Cards em cascata */}
          <div className="servicos-grid">
            {[
              { icon: '🏠', num: '01', title: 'Direito Imobiliário', text: 'Assessoria jurídica em todas as fases de negócios imobiliários, garantindo segurança em cada transação.' },
              { icon: '⚖️', num: '02', title: 'Agente de Execução', text: 'Tramitação de processos executivos com rigor e eficiência, representando os seus interesses.' },
              { icon: '📜', num: '03', title: 'Registos e Notariado', text: 'Tratamos de todos os registos necessários para garantir a validade legal de documentos e atos jurídicos.' },
              { icon: '🏛️', num: '04', title: 'Heranças e Sucessões', text: 'Planeamento e gestão de heranças com o rigor e o conhecimento jurídico que a situação exige.' },
              { icon: '🏢', num: '05', title: 'Apoio a Empresas', text: 'Apoiamos empresários e sociedades em todas as formalidades legais, da constituição à gestão diária.' },
              { icon: '💼', num: '06', title: 'Consultoria Jurídica', text: 'Orientação jurídica e administrativa para particulares e empresas, resolvendo questões burocráticas com eficácia.' },
            ].map((s, i) => (
              <div
                className="servico-card scroll-reveal reveal-up"
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="servico-number">{s.num}</div>
                <span className="servico-icon">{s.icon}</span>
                <div className="servico-title">{s.title}</div>
                <p className="servico-text">{s.text}</p>
                <span className="servico-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPA */}
      <section className="equipa" id="equipa">
        <div className="container">
          <div className="scroll-reveal reveal-up">
            <div className="section-label">A Nossa Equipa</div>
            <h2 className="section-title">Profissionais ao seu serviço</h2>
          </div>

          <div className="equipa-grid">
            {[
              { name: 'Cristina Frade', role: 'Solicitadora · Agente de Execução' },
              { name: 'Tânia Ferreira', role: 'Licenciada em Direito' },
              { name: 'Filipa Machado', role: 'Licenciada em Solicitadoria' },
              { name: 'Magda Paiva', role: 'Empregada Forense' },
            ].map((m, i) => (
              <div
                className="membro-card scroll-reveal reveal-up"
                key={i}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="membro-avatar">👤</div>
                <div className="membro-name">{m.name}</div>
                <div className="membro-role">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTOS */}
      <section id="contactos">
        <div className="container">
          <div className="scroll-reveal reveal-up">
            <div className="section-label">Contactos</div>
            <h2 className="section-title">Fale connosco</h2>
          </div>

          <div className="contactos-inner" style={{ marginTop: '3rem' }}>
            <div className="scroll-reveal reveal-left">
              <div className="contacto-item">
                <div className="contacto-icon">📍</div>
                <div>
                  <div className="contacto-label">Morada</div>
                  <span className="contacto-value">Av. Elísio de Moura 445 E/P<br />3030-183 Coimbra</span>
                </div>
              </div>
              <div className="contacto-item">
                <div className="contacto-icon">📞</div>
                <div>
                  <div className="contacto-label">Telefone</div>
                  <a href="tel:239168295" className="contacto-value">239 168 295</a>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gray)', marginTop: '3px' }}>Chamada para rede fixa nacional</div>
                </div>
              </div>
              <div className="contacto-item">
                <div className="contacto-icon">✉️</div>
                <div>
                  <div className="contacto-label">Email</div>
                  <a href="mailto:2260@cristinafrade.pt" className="contacto-value">2260@cristinafrade.pt</a>
                </div>
              </div>
              <div className="contacto-item">
                <div className="contacto-icon">🕐</div>
                <div>
                  <div className="contacto-label">Horário</div>
                  <span className="contacto-value">9h30 – 12h30 / 13h30 – 16h00</span>
                </div>
              </div>
            </div>

            <div className="scroll-reveal reveal-right">
              <div className="form-title">Envie-nos uma mensagem</div>
              <div className="form-subtitle">Responderemos com a maior brevidade possível.</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Nome</label>
                  <input type="text" placeholder="O seu nome" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="email@exemplo.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Área de interesse</label>
                <select>
                  <option value="">Selecione uma área</option>
                  <option>Direito Imobiliário</option>
                  <option>Agente de Execução</option>
                  <option>Registos e Notariado</option>
                  <option>Heranças e Sucessões</option>
                  <option>Apoio a Empresas</option>
                  <option>Consultoria Jurídica</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mensagem</label>
                <textarea placeholder="Descreva brevemente a sua situação..."></textarea>
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '0.8rem' }}>
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-logo">Cristina Frade</div>
          <div className="footer-text">
            © {new Date().getFullYear()} Cristina Frade — Solicitadora. Todos os direitos reservados.
          </div>
          <div className="footer-text">Coimbra, Portugal</div>
        </div>
      </footer>
    </>
  )
}