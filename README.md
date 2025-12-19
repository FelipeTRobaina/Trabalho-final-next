# Migração de Frontend: React para Next.js

## Descrição Geral
Este projeto consiste na migração de uma Landing Page pessoal desenvolvida originalmente em React (SPA - Vite) para o framework **Next.js**. 

O objetivo principal foi explorar as capacidades de renderização do Next.js para otimizar a performance, melhorar o SEO e implementar estratégias de busca de dados mais eficientes. Além da migração, foi adicionada uma nova funcionalidade de **Previsão do Tempo** que consome uma API externa, garantindo o bônus de complexidade técnica.

---

## Estrutura e Estratégias de Renderização

O projeto utiliza duas estratégias distintas de renderização, escolhidas de acordo com a necessidade de cada página:

### 1. Página Inicial - SSG (Static Site Generation)
* **Estratégia:** A Home é gerada estaticamente no momento do build (Server-Side).
* **Justificativa:** Como o conteúdo raramente muda, o SSG é a escolha ideal. Ele entrega o HTML pronto instantaneamente para o navegador.

### 2. Página de Clima - ISR (Incremental Static Regeneration)
* **Estratégia:** A página é estática, mas configurada para revalidar a cada 15 minutos (`revalidate: 900`).
* **Consumo de API:** Dados consumidos da **Open-Meteo API** (Focada em Rio Grande - RS).
* **Justificativa:** Dados meteorológicos mudam com frequência, mas não exigem atualização em tempo real a cada milissegundo (SSR puro). O ISR permite que a página seja entregue, sem a constante atualização.

---

## Análise Lighthouse: Antes vs. Depois

Abaixo, a comparação das métricas obtidas via Google Lighthouse (Mobile/Desktop).

| Métrica Mobile | Projeto Antigo | Projeto Novo (Landing Page/Weather page) | Conclusão |

* |      **Performance** | 78  |  97 | Melhorou |
* |   **Acessibilidade** | 100 | 100 | Mantido  |
* |**Melhores Práticas** | 100 | 100 | Mantido  |
* |              **SEO** | 91  | 100 | Melhorou |

| Métrica Desktop | Projeto Antigo (React SPA) | Projeto Novo (Next.js) | Conclusão |

* |       **Performance** | 88  |  99 | Melhorou |
* |    **Acessibilidade** | 100 | 100 | Mantido  |
* | **Melhores Práticas** | 100 | 100 | Mantido  |
* |               **SEO** | 91  | 100 | Melhorou |

### Análise Técnica dos Resultados

 **Performance:** A mudança de **78 para 97** no mobile demonstra o poder do SSG e do componente `<Image />` do Next.js.
 **SEO:** A nota máxima (100) foi atingida graças à renderização no servidor. O Next.js entrega o conteúdo semântico completo para os indexadores (Google/Bing), ao contrário do React SPA que entregava apenas um container vazio, dificultando a leitura por robôs de busca.

---
### Reflexão em relação ao frontend desacoplado

    Este projeto exemplifica a arquitetura de Frontend Desacoplado, onde a camada de apresentação (Next.js) opera de forma totalmente independente da lógica de negócios e armazenamento de dados.
    Ao utilizar a API externa da Open-Meteo, a aplicação demonstra como o frontend pode consumir dados de forma livre, sem depender de um backend acoplado ao código. Isso permite que a interface evolua livremente, focada apenas em performance e experiência do usuário, enquanto os dados são gerenciados por serviços especializados externos.

---

## Funcionalidades Extras (Bônus)
* **Rota Dinâmica/API:** Implementação de chamada à API externa de Clima com tratamento de dados JSON.


* ** Link Projeto antigo: https://migrando-meu-projeto.vercel.app/
* ** Link Projeto novo: https://trabalhofinalnext.vercel.app/
