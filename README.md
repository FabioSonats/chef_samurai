# 🍳 Chef Samurai - Receitas Deliciosas

> Uma aplicação moderna e elegante para descobrir, criar e compartilhar receitas culinárias incríveis!

![Chef Samurai](https://img.shields.io/badge/Chef-Samurai-purple?style=for-the-badge&logo=chef)
![React](https://img.shields.io/badge/React-17.0.2-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase)

## ✨ Características

### 🎨 **Design Moderno**
- Interface limpa e profissional com Tailwind CSS
- Cores pastéis e gradientes elegantes
- Design responsivo para todos os dispositivos
- Animações suaves e transições fluidas

### 🚀 **Funcionalidades**
- **📖 Visualizar Receitas** - Explore receitas com design atrativo
- **➕ Criar Receitas** - Formulário intuitivo para adicionar novas receitas
- **🔍 Buscar Receitas** - Sistema de busca integrado
- **📄 Paginação** - Navegação fácil entre páginas de receitas
- **🗑️ Gerenciar Receitas** - Editar e deletar receitas facilmente

### 🛠️ **Tecnologias**

- **Frontend**: React 17.0.2
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Routing**: React Router DOM
- **Icons**: Emojis e SVG personalizados

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/chef_samurai.git
cd chef_samurai
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o Firebase**
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Ative o Firestore Database
   - Copie as credenciais para `src/firebase/config.js`

4. **Execute o projeto**
```bash
npm start
```

5. **Acesse a aplicação**
```
http://localhost:3000
```

## 📱 Demonstração

### Página Inicial
- Lista de receitas com paginação
- Cards elegantes com hover effects
- Sistema de busca integrado

### Criar Receita
- Formulário organizado em seções
- Adicionar ingredientes dinamicamente
- Interface intuitiva e responsiva

### Visualizar Receita
- Layout profissional com gradientes
- Ingredientes organizados em grid
- Modo de preparo bem estruturado

## 🎯 Funcionalidades Detalhadas

### 📋 **Gerenciamento de Receitas**
- ✅ Criar novas receitas com ingredientes e modo de preparo
- ✅ Visualizar receitas com layout profissional
- ✅ Editar receitas existentes
- ✅ Deletar receitas com confirmação
- ✅ Buscar receitas por nome

### 🎨 **Interface do Usuário**
- ✅ Design responsivo para mobile, tablet e desktop
- ✅ Cores pastéis e gradientes elegantes
- ✅ Animações suaves e transições
- ✅ Navegação intuitiva com breadcrumbs
- ✅ Loading states e feedback visual

### 🔧 **Funcionalidades Técnicas**
- ✅ Integração completa com Firebase
- ✅ Paginação eficiente (6 receitas por página)
- ✅ Sistema de roteamento com React Router
- ✅ Estado global gerenciado com Context API
- ✅ Componentes reutilizáveis e modulares

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm start

# Build para produção
npm run build

# Deploy para GitHub Pages
npm run deploy

# Testes
npm test
```

## 📦 Estrutura do Projeto

```
chef_samurai/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── RecipeList.js
│   │   ├── Searchbar.js
│   │   └── ThemeSelector.js
│   ├── pages/
│   │   ├── home/
│   │   ├── create/
│   │   ├── search/
│   │   └── recipe/
│   ├── firebase/
│   │   └── config.js
│   ├── hooks/
│   ├── context/
│   └── assets/
├── package.json
└── README.md
```

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages:

```bash
npm run deploy
```

**URL de Produção**: [https://fabiosonats.github.io/chef_samurai](https://fabiosonats.github.io/chef_samurai)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍🍳 Sobre o Chef Samurai

Chef Samurai é uma aplicação desenvolvida para facilitar a descoberta e compartilhamento de receitas culinárias. Com uma interface moderna e intuitiva, permite que usuários explorem, criem e gerenciem suas receitas favoritas de forma elegante e eficiente.

---

**Desenvolvido com ❤️ usando React, Tailwind CSS e Firebase**