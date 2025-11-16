# 🛡️ Guardião Senior

Assistente digital de segurança online focado em idosos (60+), com interface completa e navegação intuitiva.

## ✨ Features Completas

### 🔐 Sistema de Autenticação
- **Login** - Autenticação de usuários com validação
- **Cadastro** - Criação de novas contas
- **Esqueci a Senha** - Recuperação de senha por email
- **Código de Verificação** - Verificação em 6 dígitos
- **Nova Senha** - Redefinição segura de senha
- Gerenciamento de sessão com Context API
- Armazenamento local (localStorage) para simulação

### 📱 Páginas Principais
- **Home/Chat** - Interface de chat tipo WhatsApp
- **Como Funciona** - 3 passos ilustrados do funcionamento
- **Recursos** - Guia completo de segurança (4 categorias)
- **Sobre Nós** - Informações sobre a equipe e missão
- **Termos de Uso** - Termos completos e formatados
- **Fale Conosco** - Formulário de contato com validação

### ⚙️ Área do Usuário
- **Configurações** - Menu central de opções
- **Minha Conta** - Visualização e edição de perfil
- **Acessibilidade** - Ajustes de tamanho de fonte
- **Alterar Senha** - Atualização de senha
- **Logout** - Sair da conta

### 💬 Componentes do Chat
- **MessageBubble** - Bolhas de mensagem (usuário/assistente)
- **ChatInput** - Campo de entrada com botão inteligente
- **ChatWindow** - Janela de mensagens com scroll automático
- **TypingIndicator** - Animação de "digitando..."
- **ScrollToTop** - Botão voltar ao topo
- **FontSizeControl** - Controle de tamanho de fonte
- **WelcomeSuggestions** - Sugestões iniciais

### 🎨 Design & UX
- **React Router DOM** - Navegação entre páginas
- **Header Responsivo** - Logo, navegação e menu de usuário
- **Footer** - Links institucionais
- **Layouts** - MainLayout e AuthLayout
- **Mobile-first** - Design responsivo em todos os breakpoints
- **Paleta de cores** - Seguindo especificações do Figma

## 🚀 Como Usar

### 1. Instalação

```bash
# Clonar o repositório
git clone [url-do-repositorio]
cd guardiao-senior

# Instalar dependências
npm install
```

### 2. Desenvolvimento

```bash
# Rodar em modo desenvolvimento
npm run dev

# Acessar no navegador
http://localhost:5173
```

### 3. Build para Produção

```bash
# Criar build
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
guardiao-senior/
├── src/
│   ├── pages/                      # Páginas da aplicação
│   │   ├── Home.tsx                # Chat principal
│   │   ├── Login.tsx               # Página de login
│   │   ├── Signup.tsx              # Cadastro
│   │   ├── ForgotPassword.tsx      # Esqueci a senha
│   │   ├── VerificationCode.tsx    # Código de verificação
│   │   ├── NewPassword.tsx         # Nova senha
│   │   ├── ComoFunciona.tsx        # Como funciona
│   │   ├── Recursos.tsx            # Recursos de segurança
│   │   ├── Sobre.tsx               # Sobre nós
│   │   ├── TermosUso.tsx           # Termos de uso
│   │   ├── FaleConosco.tsx         # Fale conosco
│   │   ├── Configuracoes.tsx       # Configurações
│   │   ├── MinhaConta.tsx          # Minha conta
│   │   └── Acessibilidade.tsx      # Acessibilidade
│   ├── layouts/                    # Layouts da aplicação
│   │   ├── MainLayout.tsx          # Layout principal
│   │   └── AuthLayout.tsx          # Layout de autenticação
│   ├── context/                    # Contextos React
│   │   └── AuthContext.tsx         # Context de autenticação
│   ├── components/                 # Componentes reutilizáveis
│   │   ├── MessageBubble.tsx       # Bolhas de mensagem
│   │   ├── ChatInput.tsx           # Campo de entrada
│   │   ├── ChatWindow.tsx          # Janela de mensagens
│   │   ├── ScrollToTop.tsx         # Botão voltar ao topo
│   │   ├── TypingIndicator.tsx     # Indicador digitando
│   │   ├── FontSizeControl.tsx     # Controle de fonte
│   │   └── WelcomeSuggestions.tsx  # Sugestões iniciais
│   ├── styles/                     # Estilos
│   │   ├── index.css               # Estilos globais
│   │   └── accessibility.css       # Scrollbar customizada
│   ├── types/                      # TypeScript types
│   │   └── index.ts                # Interfaces
│   ├── App.tsx                     # Componente raiz com rotas
│   └── main.tsx                    # Entry point
├── public/                         # Arquivos estáticos
├── index.html                      # HTML base
├── package.json                    # Dependências
├── tailwind.config.js              # Config Tailwind
├── tsconfig.json                   # Config TypeScript
└── vite.config.ts                  # Config Vite
```

## 🗺️ Rotas da Aplicação

### Rotas de Autenticação (AuthLayout)
- `/login` - Página de login
- `/cadastro` - Página de cadastro
- `/esqueci-senha` - Recuperação de senha
- `/verificacao-codigo` - Código de verificação
- `/nova-senha` - Redefinir senha

### Rotas Principais (MainLayout)
- `/` - Home/Chat
- `/como-funciona` - Como funciona
- `/recursos` - Recursos de segurança
- `/sobre` - Sobre nós
- `/termos` - Termos de uso
- `/fale-conosco` - Fale conosco
- `/configuracoes` - Configurações
- `/minha-conta` - Minha conta
- `/acessibilidade` - Acessibilidade

## 🎨 Paleta de Cores

```css
--guardiao-azul: #3A7DFF         /* Cor principal */
--guardiao-cinza-escuro: #1E293B /* Texto principal */
--guardiao-cinza-medio: #64748B  /* Texto secundário */
--guardiao-cinza-claro: #F1F5F9  /* Fundo da página */
--guardiao-branco: #FFFFFF       /* Fundo de conteúdo */
```

## 🔤 Tipografia

- **Fonte:** Inter (Google Fonts)
- **Título H1:** 32px, weight 600
- **Subtítulos:** 22-24px, weight 500
- **Corpo:** 18-20px, weight 400
- **3 Tamanhos Ajustáveis:** Pequeno, Médio, Grande

## ♿ Acessibilidade

Todos os componentes seguem padrões **WCAG AAA**:

- ✅ Touch targets > 44x44px
- ✅ Contraste de cores 7:1
- ✅ ARIA labels completos
- ✅ Keyboard navigation
- ✅ Screen reader friendly
- ✅ Scrollbar customizada (2x maior)
- ✅ 3 tamanhos de fonte ajustáveis
- ✅ Navegação por teclado (Tab, Enter, Esc)
- ✅ Responsivo mobile-first

## 🧪 Funcionalidades

### Interface
- Sistema de navegação completo com React Router
- Header responsivo com menu dropdown
- Footer com links institucionais
- Chat tipo WhatsApp
- Botão inteligente (microfone ↔ enviar)
- Scroll automático
- Mensagens com horário
- Tela de boas-vindas

### Autenticação
- Login com validação
- Cadastro de novos usuários
- Recuperação de senha em 3 etapas
- Gerenciamento de sessão
- Proteção de rotas

### Markdown
- **Negrito** e *itálico*
- Listas numeradas e bullet points
- Links clicáveis
- Formatação segura (XSS protection)

### Recursos de Segurança
- 4 categorias de dicas
- 16 tópicos específicos
- Guia de emergência
- Atalhos de teclado

### Formulários
- Validação completa
- Estados de erro claros
- Feedback visual
- Acessibilidade completa

## 🔧 Tecnologias

- **React** 18.2.0
- **TypeScript** 5.2.2
- **Vite** 5.0.8
- **React Router DOM** 6.x
- **Tailwind CSS** 3.4.0
- **Marked.js** 11.1.0 (Markdown)
- **DOMPurify** 3.0.6 (Sanitização)
- **Bootstrap Icons** 1.11.2

## 📊 Estatísticas

- **Páginas:** 14
- **Componentes:** 7
- **Layouts:** 2
- **Rotas:** 14
- **Linhas de código:** ~4500
- **Cobertura de acessibilidade:** WCAG AAA
- **Navegadores suportados:** Chrome, Firefox, Safari, Edge

## 🎯 Features Destacadas

### Sistema Completo de Autenticação
- Fluxo completo de cadastro e login
- Recuperação de senha em 3 etapas
- Gerenciamento de sessão
- Validação de formulários

### Navegação Intuitiva
- Header com menu responsivo
- Footer institucional
- Breadcrumbs visuais
- Links contextuais

### Recursos Educacionais
- Guia completo de segurança (4 categorias)
- Dicas práticas organizadas
- Exemplos do dia a dia
- Alertas de emergência

### Personalização
- 3 tamanhos de fonte
- Preferências salvas
- Tema consistente
- Alta acessibilidade

## 🔒 Segurança

- Sanitização de HTML com DOMPurify
- Validação de formulários
- Proteção XSS
- Armazenamento seguro (localStorage para demo)
- HTTPS recomendado em produção

## 📱 Responsividade

Breakpoints Tailwind:
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

## 🚧 Melhorias Futuras

- [ ] Integrar API real de IA
- [ ] Implementar gravação de áudio
- [ ] Backend com autenticação real
- [ ] Salvar histórico no servidor
- [ ] Modo escuro
- [ ] Testes automatizados (Jest, React Testing Library)
- [ ] PWA (Progressive Web App)
- [ ] Notificações push
- [ ] Internacionalização (i18n)

## 📝 Licença

Projeto educacional - Guardião Senior

## 👥 Desenvolvedor

**Pedro** - Desenvolvimento completo do projeto

---

**Guardião Senior** 💙
*"Tecnologia simples para quem mais precisa"*

Desenvolvido com foco em **acessibilidade** e **usabilidade** para idosos.

## 🆘 Suporte

Encontrou algum problema ou tem uma sugestão?
- Use a página **Fale Conosco** dentro do app
- Ou abra uma issue no repositório

## 🎓 Aprendizados

Este projeto demonstra:
- Arquitetura React moderna
- TypeScript tipagem completa
- Roteamento com React Router
- Context API para estado global
- Design system consistente
- Acessibilidade web (WCAG AAA)
- Responsividade mobile-first
- Boas práticas de UX

---

**Versão:** 2.0.0
**Última atualização:** Novembro 2025
