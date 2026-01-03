# 📝 TODO List em ReactJS

Aplicação de gerenciamento de tarefas desenvolvida em **ReactJS** com **TypeScript**, criada durante o curso da **Rocketseat**, aplicando conceitos avançados da biblioteca e boas práticas de desenvolvimento.

---

## 📌 Sobre o projeto

Este projeto consiste em uma **aplicação de lista de tarefas (TODO List)** completa, desenvolvida como parte do aprendizado avançado de ReactJS da Rocketseat.

A aplicação foi desenvolvida utilizando **React 19** com **TypeScript**, **Vite** como build tool, **TailwindCSS** para estilização, e **React Router** para navegação. O projeto segue uma arquitetura moderna com componentes reutilizáveis, sistema de design consistente e estrutura organizada.

---

## 🎯 Objetivo

Praticar e aplicar os principais conceitos avançados do React, como:

* Componentes funcionais com TypeScript
* Sistema de design com variantes (CVA - Class Variance Authority)
* Roteamento com React Router
* Gerenciamento de estado
* Composição de componentes
* TypeScript para type safety
* Build moderno com Vite
* Estilização com TailwindCSS

---

## 🛠 Tecnologias utilizadas

* **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
* **TypeScript 5.9.3** - Superset do JavaScript com tipagem estática
* **Vite 7.2.4** - Build tool e dev server de alta performance
* **TailwindCSS 4.1.18** - Framework CSS utility-first
* **React Router 7.11.0** - Biblioteca de roteamento para React
* **Class Variance Authority (CVA)** - Utilitário para criação de variantes de componentes
* **Vite Plugin SVGR** - Importação de SVGs como componentes React

---

## 🧠 Conceitos aplicados

* **Componentes funcionais** - Arquitetura baseada em funções
* **TypeScript** - Tipagem estática e interfaces
* **JSX/TSX** - Sintaxe de marcação do React
* **Props e composição** - Passagem de propriedades entre componentes
* **Hooks do React** - `useState`, `useEffect` (preparado para uso)
* **React Router** - Navegação e roteamento de páginas
* **Context API** - Preparado para gerenciamento de estado global
* **Sistema de design** - Componentes reutilizáveis com variantes
* **SVG como componentes** - Importação de ícones como componentes React
* **TailwindCSS customizado** - Tema personalizado com cores e fontes

---

## 📁 Estrutura do projeto

```
todo/
├── src/
│   ├── assets/           # Recursos estáticos
│   │   ├── icons/       # Ícones SVG
│   │   └── image/       # Imagens
│   ├── components/      # Componentes reutilizáveis
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── button-icon.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx
│   │   ├── icon.tsx
│   │   ├── input-checkbox.tsx
│   │   ├── input-text.tsx
│   │   ├── skeleton.tsx
│   │   └── text.tsx
│   ├── cor-components/  # Componentes principais da aplicação
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   └── main-content.tsx
│   ├── pages/           # Páginas da aplicação
│   │   ├── layout-main.tsx
│   │   ├── page-components.tsx
│   │   └── page-home.tsx
│   ├── App.tsx          # Componente raiz com rotas
│   ├── main.tsx         # Ponto de entrada da aplicação
│   └── index.css        # Estilos globais e tema TailwindCSS
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
├── vite.config.ts       # Configuração Vite
└── README.md            # Documentação do projeto
```

---

## 🖥 Funcionalidades

### Implementadas

* ✅ Sistema de componentes reutilizáveis
* ✅ Layout responsivo com Header, Main e Footer
* ✅ Navegação entre páginas (Home e Componentes)
* ✅ Página de demonstração de componentes
* ✅ Sistema de design com variantes
* ✅ Tema personalizado com cores e tipografia
* ✅ Importação de SVGs como componentes React
* ✅ Estrutura preparada para funcionalidades de TODO

### Componentes disponíveis

* **Badge** - Indicadores visuais com variantes
* **Button** - Botões com ícones e variantes
* **ButtonIcon** - Botões apenas com ícones
* **Card** - Cartões para conteúdo
* **Container** - Container responsivo
* **Icon** - Componente de ícone com animação
* **InputText** - Campo de texto customizado
* **InputCheckbox** - Checkbox customizado
* **Skeleton** - Placeholder de carregamento
* **Text** - Componente de texto com variantes tipográficas

---

## 🚀 Como executar

### Pré-requisitos

* Node.js (versão 18 ou superior)
* pnpm (gerenciador de pacotes)

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd todo
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Acesse a aplicação no navegador:
```
http://localhost:5173
```

### Scripts disponíveis

* `pnpm dev` - Inicia o servidor de desenvolvimento
* `pnpm build` - Gera build de produção
* `pnpm preview` - Preview do build de produção
* `pnpm lint` - Executa o linter

---

## 📋 Próximos passos

Baseado no repositório de referência [react-calculadora-rocketseat](https://github.com/JoaoMuriloPO/react-calculadora-rocketseat), seguem sugestões para evoluir o projeto:

### Funcionalidades principais

1. **Implementar CRUD completo de tarefas**
   * Adicionar novas tarefas
   * Editar tarefas existentes
   * Remover tarefas
   * Marcar tarefas como concluídas/pendentes

2. **Gerenciamento de estado**
   * Implementar Context API para estado global
   * Criar hooks customizados para lógica de negócio
   * Gerenciar estado das tarefas de forma centralizada

3. **Persistência de dados**
   * Integrar `localStorage` para salvar tarefas
   * Implementar sincronização automática
   * Adicionar opção de exportar/importar tarefas

4. **Filtros e busca**
   * Filtrar tarefas por status (todas, pendentes, concluídas)
   * Implementar busca por texto
   * Adicionar ordenação (data, alfabética, prioridade)

5. **Melhorias de UX/UI**
   * Adicionar animações e transições suaves
   * Implementar feedback visual para ações
   * Criar estados de loading e empty states
   * Adicionar confirmações para ações destrutivas

6. **Funcionalidades avançadas**
   * Adicionar prioridades às tarefas
   * Implementar categorias/tags
   * Adicionar datas de vencimento
   * Criar modo escuro/claro
   * Adicionar estatísticas (tarefas concluídas, pendentes)

7. **Testes**
   * Configurar ambiente de testes (Vitest + React Testing Library)
   * Escrever testes unitários para componentes
   * Adicionar testes de integração
   * Implementar testes E2E

8. **Deploy**
   * Configurar GitHub Pages
   * Ou fazer deploy na Vercel/Netlify
   * Configurar CI/CD para deploy automático
   * Adicionar badge de status no README

9. **Documentação**
   * Documentar componentes com Storybook
   * Adicionar exemplos de uso
   * Criar guia de contribuição
   * Documentar decisões de arquitetura

10. **Otimizações**
    * Implementar code splitting
    * Adicionar lazy loading de rotas
    * Otimizar bundle size
    * Implementar memoização quando necessário

---

## 📚 Recursos de aprendizado

Este projeto foi desenvolvido seguindo os conceitos do curso da Rocketseat. Para aprofundar seus conhecimentos:

* [Documentação oficial do React](https://react.dev/)
* [Documentação do TypeScript](https://www.typescriptlang.org/)
* [Documentação do Vite](https://vite.dev/)
* [Documentação do TailwindCSS](https://tailwindcss.com/)
* [Documentação do React Router](https://reactrouter.com/)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

## 👨‍💻 Autor

Desenvolvido durante o curso de ReactJS da Rocketseat.

---

## 🙏 Agradecimentos

* Rocketseat pela excelente metodologia de ensino
* Comunidade React pelo ecossistema incrível
* Todos os mantenedores das bibliotecas utilizadas
