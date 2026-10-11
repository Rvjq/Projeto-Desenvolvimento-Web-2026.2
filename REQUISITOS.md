# Documento de Requisitos – Projeto AV1

**Projeto:** NovaTech Soluções em TI
**Disciplina:** Desenvolvimento Web – 2026.2
**Professor:** Eduardo Gonçalves Calabria
**Integrantes:** Rafael Varela Joachim Queimado, Caio Felipe da Silva Rodrigues

## 1. Visão geral

Desenvolver um conjunto de 5 páginas web para uma empresa que vende serviços de TI, mantendo um padrão visual coerente em todas elas. A solução usa somente HTML, CSS e JavaScript e roda no navegador, servida pelo Live Server do VS Code.

Fora do escopo: back-end, banco de dados e autenticação real.

## 2. Requisitos funcionais

### 2.1 Página de conteúdo (`index.html`)

| ID | Requisito |
|---|---|
| RF01 | O header deve exibir a imagem com o logo, uma frase de apresentação e os links de navegação. |
| RF02 | O header deve ter um link para o login, um para o cadastro de cliente e um para a solicitação de serviços. |
| RF03 | O link para a solicitação de serviços só deve aparecer se um login tiver sido realizado. |
| RF04 | O body deve ter um texto com a breve história da empresa. |
| RF05 | O body deve ter um vídeo institucional de cerca de 1 minuto, em streaming, hospedado no YouTube. |
| RF06 | O body deve ter uma galeria com pelo menos 4 fotos das instalações ou funcionários. |
| RF07 | O body deve ter uma seção estática, de livre criação, apresentando os principais serviços de TI. |
| RF08 | O body deve ter uma tabela com cargo, nome e breve currículo dos 3 fundadores. |
| RF09 | O footer deve ter uma lista de contatos com 3 itens: telefone fixo, WhatsApp e link `mailto`. |
| RF10 | O footer deve ter um bloco com o endereço da empresa em texto. |
| RF11 | O footer deve ter um bloco com figuras das formas de pagamento aceitas. |

### 2.2 Login (`login.html`)

| ID | Requisito |
|---|---|
| RF12 | Deve exibir o título "Login de clientes" e o logo da empresa. |
| RF13 | Deve ter um campo de login, um campo de senha, um botão **Realizar Login** e um botão **Limpar**. |
| RF14 | Deve ter links para a troca de senha e para o cadastro de cliente. |
| RF15 | O login deve ser preenchido e ter formato de e-mail válido. |
| RF16 | A senha deve ser preenchida. |
| RF17 | Se alguma validação falhar, deve exibir mensagem pertinente e focar o campo com erro. |
| RF18 | Se todas passarem, deve exibir "Validação realizada com sucesso", registrar o login e navegar para a página de conteúdo. |
| RF19 | **Limpar** deve apagar os campos e focar o campo de login. |

### 2.3 Troca de senha (`trocar-senha.html`)

| ID | Requisito |
|---|---|
| RF20 | Deve exibir o título "Troca de senha de clientes" e o logo da empresa. |
| RF21 | Deve ter campos de login, senha e confirmação de senha. |
| RF22 | Deve ter um campo de saída com as regras de composição da senha, mostrando explicitamente os caracteres permitidos e os não permitidos. |
| RF23 | Deve ter os botões **Troca Senha** e **Limpar**. |
| RF24 | Deve validar login (preenchido e e-mail válido), senha e confirmação (preenchidas) e as regras de composição da senha (seção 4.1). |
| RF25 | Se alguma validação falhar, deve exibir mensagem pertinente. |
| RF26 | Se todas passarem, deve exibir "Validação realizada com sucesso" e navegar para a página anterior. |
| RF27 | **Limpar** deve apagar os campos e focar o campo de login. |

### 2.4 Cadastro de cliente (`cadastro.html`)

| ID | Requisito |
|---|---|
| RF28 | Deve exibir o título "Cadastro de clientes" e o logo da empresa. |
| RF29 | Deve ter campos de e-mail (também login), senha, confirmação de senha, nome, CPF, data de nascimento e telefone celular/WhatsApp. |
| RF30 | Deve ter o campo de saída com as regras da senha, igual ao da troca de senha. |
| RF31 | Deve ter radio buttons de estado civil: solteiro(a), casado(a), divorciado(a), viúvo(a), com solteiro(a) como padrão. |
| RF32 | Deve ter um combo box de escolaridade: 1º grau incompleto, 1º grau completo, 2º grau completo, nível superior e pós-graduado, com 2º grau completo como padrão. |
| RF33 | Deve ter os botões **Incluir**, **Limpar** e **Voltar**. |
| RF34 | E-mail, senha e confirmação seguem as validações da troca de senha. |
| RF35 | O nome deve ser preenchido, ter pelo menos duas palavras, com a primeira de pelo menos 2 caracteres, e não conter caracteres especiais (as duas listas da seção 4.1). |
| RF36 | O CPF deve ser preenchido, usar a máscara `NNN.NNN.NNN-NN`, aceitar somente dígitos na digitação e ser válido pelo algoritmo do dígito verificador. |
| RF37 | A data de nascimento deve ser preenchida e indicar idade maior ou igual a 18 anos. |
| RF38 | O telefone é opcional. Se preenchido, deve ter formato de telefone nacional. |
| RF39 | **Incluir** deve validar e exibir mensagem pertinente em caso de erro, ou "Validação realizada com sucesso". |
| RF40 | **Limpar** deve apagar campos de texto e data, restaurar radio e combo para os valores padrão e focar o campo de e-mail. |
| RF41 | **Voltar** deve retornar à página anterior. |

### 2.5 Solicitação de serviços (`carrinho.html`)

| ID | Requisito |
|---|---|
| RF42 | Deve ter uma seção com nome e e-mail do usuário logado, em labels com valores fixos. |
| RF43 | Deve ter uma tabela das solicitações já feitas, com: data do pedido, número, serviço, status, preço, data prevista e botão de exclusão da linha. |
| RF44 | A tabela deve estar em ordem crescente de data do pedido e iniciar com valores fictícios fixos. |
| RF45 | O botão de exclusão deve remover a linha da tabela. |
| RF46 | Deve ter um combo box com a lista fixa de serviços de TI. |
| RF47 | Preço e prazo de atendimento devem ser exibidos em labels, preenchidos conforme o serviço selecionado. |
| RF48 | A data prevista deve ser a data atual somada ao prazo de atendimento. |
| RF49 | O status inicial deve ser "EM ELABORAÇÃO". |
| RF50 | O botão **Incluir solicitação** deve adicionar a nova linha à tabela. Sem serviço selecionado, deve exibir mensagem de erro. |

## 3. Requisitos técnicos

### 3.1 HTML

| ID | Requisito | Onde está |
|---|---|---|
| RT01 | Não usar tags de estilização deprecated. | Todas as páginas |
| RT02 | Usar marcações de blocos de conteúdo. | `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`, `address` |
| RT03 | Usar ao menos uma tag que diferencie texto do padrão. | `strong`, `em` e `mark` em `index.html` |
| RT04 | Usar tabelas, listas, imagens, figuras e links. | `index.html` e `carrinho.html` |
| RT05 | Usar tabelas para organizar parte do layout. | Tabela de fundadores e tabelas de formulário nas demais páginas |

### 3.2 CSS

| ID | Requisito | Onde está |
|---|---|---|
| RT06 | Usar todos os tipos de seletores estudados. | `css/estilo.css` (tabela abaixo) |
| RT07 | Acumulação de estilos. | Classes combinadas: `card destaque`, `botao primario`, `botao perigo`, `painel largo` |
| RT08 | Sobrescrita de estilos. | Regras do `<style>` de `index.html` e estilos inline sobrescrevendo `estilo.css` |
| RT09 | Estilos em arquivo, na tag `style` e (com moderação) inline. | `css/estilo.css`, `<style>` em `index.html`, `style=""` em `address` e `output` |
| RT10 | Fontes diferentes para parágrafos e cabeçalhos. | Cabeçalhos em Georgia; texto em Segoe UI / Verdana |
| RT11 | Técnica de alinhamento. | `margin: 0 auto`, `text-align`, `align-items`, `justify-content` |
| RT12 | Barra de rolagem automática em conteúdo longo. | `overflow` em `.rolagem`, `.instrucoes` e `.tabela-rolagem` |
| RT13 | Técnica de CSS Layout. | Flexbox (header, ações, pagamentos) e Grid (galeria, serviços, rodapé) |

Seletores usados em `css/estilo.css`:

| Tipo | Exemplo |
|---|---|
| Universal | `*` |
| Elemento | `body`, `p`, `table` |
| Agrupamento | `h1, h2, h3` |
| Classe | `.card`, `.botao` |
| Id | `#cabecalho`, `#rodape` |
| Descendente | `.servicos article h3` |
| Filho direto | `ul.contatos > li` |
| Irmão adjacente | `h2 + p::first-letter`, `input[type="radio"]:checked + span` |
| Irmão geral | `.galeria img ~ figcaption` |
| Atributo | `a[href^="mailto"]`, `a[href$=".html"]`, `input[type="text"]` |
| Pseudo-classe | `:hover`, `:focus`, `:nth-child()`, `:last-child`, `:checked`, `:not()` |
| Pseudo-elemento | `::before`, `::first-letter`, `::selection` |

### 3.3 JavaScript

| ID | Requisito |
|---|---|
| RT14 | Todas as validações são feitas em JavaScript puro, sem bibliotecas. |
| RT15 | As funções de validação compartilhadas ficam em `js/validacoes.js`. |
| RT16 | O estado de login fica no `sessionStorage`. |

## 4. Regras de negócio

### 4.1 Senha

- Mínimo de 6 caracteres.
- Pelo menos 1 caractere numérico, 1 letra maiúscula e 1 caractere especial permitido.
- Especiais permitidos: `@ # $ % & * ! ? / \ | - _ + . =`
- Não permitidos: `¨ { } [ ] ´ ` ~ ^ : ; < > , " ' “ ” ‘ ’`
- A confirmação deve ser igual à senha.

### 4.2 Demais campos

| Campo | Regra |
|---|---|
| E-mail / login | Obrigatório, formato `texto@dominio.ext` |
| Nome | Mínimo de 2 palavras, primeira com 2 ou mais caracteres, sem caracteres especiais |
| CPF | Máscara `NNN.NNN.NNN-NN`, só dígitos, dois dígitos verificadores válidos, rejeita sequências repetidas (ex.: 111.111.111-11) |
| Data de nascimento | Obrigatória, idade mínima de 18 anos completos |
| Telefone | Opcional. Máscara `(DD) 9NNNN-NNNN` (celular) ou `(DD) NNNN-NNNN` (fixo) |

### 4.3 Serviços disponíveis (valores fixos)

| Serviço | Preço | Prazo |
|---|---|---|
| Suporte técnico mensal | R$ 450,00 | 7 dias |
| Instalação de rede Wi-Fi | R$ 1.200,00 | 15 dias |
| Backup em nuvem | R$ 290,00 | 7 dias |
| Configuração de firewall | R$ 780,00 | 10 dias |
| Desenvolvimento de site institucional | R$ 3.500,00 | 30 dias |
| Adequação à LGPD | R$ 2.200,00 | 45 dias |

## 5. Requisitos não funcionais

| ID | Requisito |
|---|---|
| RNF01 | Todas as páginas seguem o mesmo padrão visual: paleta azul-marinho e âmbar, mesmas fontes, botões e cartões. |
| RNF02 | O projeto roda com o Live Server do VS Code, sem instalar dependências. |
| RNF03 | As páginas se adaptam a telas menores (layouts em Grid e Flexbox, com `media query`). |
| RNF04 | Imagens têm texto alternativo e campos têm `label` associado. |
| RNF05 | Estrutura de pastas separa HTML, CSS, JS e imagens. |

## 6. Fluxo de navegação

```
index.html ──► login.html ──► (sucesso) ──► index.html (link de serviços liberado)
    │              ├──► trocar-senha.html ──► (sucesso) ──► página anterior
    │              └──► cadastro.html ──► Voltar ──► página anterior
    ├──► cadastro.html
    └──► carrinho.html  (visível só após login)
```

## 7. Limitações da versão atual

- Login, troca de senha e cadastro não gravam dados. Só validam.
- A tabela de solicitações é reiniciada ao recarregar a página.
- Nome e e-mail do usuário em `carrinho.html` são valores fixos, como previsto na especificação.
- Dados da empresa, fundadores e solicitações são fictícios.
