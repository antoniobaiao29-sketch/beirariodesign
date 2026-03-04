'use client'

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="navbar-logo">
  <img src="/logo.png" alt="Cristina Frade" style={{ height: '42px', width: 'auto' }} />
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
        <div className="hero-inner container">
          <div className="fade-up">
            <div className="hero-eyebrow">Escritório de Solicitadoria — Coimbra</div>
            <h1 className="hero-title">
              Os seus direitos,<br />
              <em>simplificados.</em>
            </h1>
            <p className="hero-text">
              Mais de 30 anos de experiência em serviços jurídicos e
              administrativos de qualidade. Tratamos dos seus processos
              com rigor, ética e um toque pessoal.
            </p>
            <div className="hero-actions">
              <a href="#contactos" className="btn-primary">Agendar Consulta</a>
              <a href="#servicos" className="btn-outline">Ver Serviços</a>
            </div>
          </div>

          <div className="hero-visual fade-up-delay-1">
            <div className="hero-card">
              <div className="hero-stat">
                <div className="hero-stat-number">30+</div>
                <div className="hero-stat-label">Anos de experiência</div>
              </div>
              <div className="hero-divider"></div>
              <div className="hero-stat">
                <div className="hero-stat-number">1992</div>
                <div className="hero-stat-label">Em atividade desde</div>
              </div>
              <div className="hero-divider"></div>
              <div className="hero-stat">
                <div className="hero-stat-number">4</div>
                <div className="hero-stat-label">Profissionais ao seu serviço</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="sobre" id="sobre">
        <div className="container sobre-inner">
          <div className="sobre-image-placeholder">
            <div className="sobre-image-inner">
              <div className="sobre-image-icon">👤</div>
              <div className="sobre-image-text">Foto da Dra. Cristina Frade</div>
            </div>
            <div className="sobre-badge">
              <span className="sobre-badge-year">2003</span>
              <span className="sobre-badge-label">Agente de Execução</span>
            </div>
          </div>

          <div>
            <div className="section-label">Sobre Nós</div>
            <h2 className="section-title">Uma carreira construída sobre confiança</h2>
            <div className="bordeaux-line"></div>
            <p className="section-subtitle">
              Cristina Frade é solicitadora desde 1992, com especialização como
              Agente de Execução desde 2003 e Inspetora/Fiscalizadora da CAAJ desde 2009.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#6B6B6B', lineHeight: '1.8', marginTop: '1.25rem' }}>
              O nosso escritório, situado no coração de Coimbra, presta serviços
              jurídicos e administrativos com rigor e proximidade. Acreditamos que
              cada cliente merece um acompanhamento personalizado, garantindo segurança
              jurídica em todos os processos.
            </p>
            <div className="sobre-tags">
              <span className="tag">Solicitadora</span>
              <span className="tag">Agente de Execução</span>
              <span className="tag">CAAJ</span>
              <span className="tag">Coimbra</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos">
        <div className="container">
          <div style={{ maxWidth: '560px' }}>
            <div className="section-label">Áreas de Atuação</div>
            <h2 className="section-title">Como podemos ajudá-lo</h2>
            <div className="bordeaux-line"></div>
            <p className="section-subtitle">
              Prestamos serviços especializados em diversas áreas jurídicas,
              garantindo soluções adaptadas a cada necessidade.
            </p>
          </div>

          <div className="servicos-grid">
            {[
              {
                icon: '🏠',
                title: 'Direito Imobiliário',
                text: 'Assessoria jurídica em todas as fases de negócios imobiliários, garantindo segurança em cada transação.'
              },
              {
                icon: '⚖️',
                title: 'Agente de Execução',
                text: 'Tramitação de processos executivos com rigor e eficiência, representando os seus interesses.'
              },
              {
                icon: '📜',
                title: 'Registos e Notariado',
                text: 'Tratamos de todos os registos necessários para garantir a validade legal de documentos e atos jurídicos.'
              },
              {
                icon: '🏛️',
                title: 'Heranças e Sucessões',
                text: 'Planeamento e gestão de heranças com o rigor e o conhecimento jurídico que a situação exige.'
              },
              {
                icon: '🏢',
                title: 'Apoio a Empresas',
                text: 'Apoiamos empresários e sociedades em todas as formalidades legais, da constituição à gestão diária.'
              },
              {
                icon: '💼',
                title: 'Consultoria Jurídica',
                text: 'Orientação jurídica e administrativa para particulares e empresas, resolvendo questões burocráticas com eficácia.'
              },
            ].map((s, i) => (
              <div className="servico-card" key={i}>
                <div className="servico-icon">{s.icon}</div>
                <div className="servico-title">{s.title}</div>
                <p className="servico-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPA */}
      <section className="equipa" id="equipa">
        <div className="container">
          <div className="section-label">A Nossa Equipa</div>
          <h2 className="section-title">Profissionais ao seu serviço</h2>
          <div className="bordeaux-line"></div>

          <div className="equipa-grid">
            {[
              { name: 'Cristina Frade', role: 'Solicitadora / Agente de Execução' },
              { name: 'Tânia Ferreira', role: 'Licenciada em Direito' },
              { name: 'Filipa Machado', role: 'Licenciada em Solicitadoria' },
              { name: 'Magda Paiva', role: 'Empregada Forense' },
            ].map((m, i) => (
              <div className="membro-card" key={i}>
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
          <div className="section-label">Contactos</div>
          <h2 className="section-title">Fale connosco</h2>
          <div className="bordeaux-line"></div>

          <div className="contactos-inner" style={{ marginTop: '3rem' }}>
            <div>
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
                  <div style={{ fontSize: '0.75rem', color: '#6B6B6B', marginTop: '2px' }}>Chamada para rede fixa nacional</div>
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

            <div>
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="O seu nome" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="o-seu-email@exemplo.com" />
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
              <button className="btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
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
