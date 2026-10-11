# NovaTech Soluções em TI – Projeto AV1

Solução de 5 páginas para uma empresa fictícia que vende serviços de TI, feita apenas com **HTML, CSS e JavaScript puro**, sem frameworks.

## Identificação

| | |
|---|---|
| **Disciplina** | Desenvolvimento Web – 2026.2 |
| **Professor** | Eduardo Gonçalves Calabria |
| **Integrantes** | Rafael Varela Joachim Queimado |
| | Caio Felipe da Silva Rodrigues |

## Páginas

| Arquivo | Descrição |
|---|---|
| `index.html` | Página de conteúdo: apresentação da empresa, vídeo, galeria, serviços, fundadores e rodapé |
| `login.html` | Login de clientes |
| `trocar-senha.html` | Troca de senha de clientes |
| `cadastro.html` | Cadastro de clientes |
| `carrinho.html` | Solicitação de serviços de TI |

## Estrutura de pastas

```
projeto-av1/
├── index.html
├── login.html
├── trocar-senha.html
├── cadastro.html
├── carrinho.html
├── css/
│   └── estilo.css
├── js/
│   ├── validacoes.js
│   ├── index.js
│   ├── login.js
│   ├── trocar-senha.js
│   ├── cadastro.js
│   └── carrinho.js
├── img/
│   └── logos, fotos da galeria e ícones de pagamento (SVG)
└── docs/
    └── REQUISITOS.md
```

## Como fazer o setup

Não é preciso instalar Node, npm ou qualquer dependência. Basta o VS Code com a extensão Live Server.

1. Instale o [Visual Studio Code](https://code.visualstudio.com/).
2. No VS Code, abra a aba de extensões (`Ctrl+Shift+X`), pesquise **Live Server** (autor: Ritwick Dey) e instale.
3. Extraia o arquivo `projeto-av1.zip`.
4. No VS Code, vá em **Arquivo > Abrir Pasta** e selecione a pasta `projeto-av1`.
5. Abra o arquivo `index.html`.
6. Clique em **Go Live** no canto inferior direito, ou clique com o botão direito no arquivo e escolha **Open with Live Server**.
7. O navegador abrirá em `http://127.0.0.1:5500/index.html`.

É necessária conexão com a internet apenas para o vídeo do YouTube.

## Como testar

1. Na página inicial, o link **Solicitar serviços** fica oculto.
2. Clique em **Entrar** e informe qualquer e-mail válido (ex.: `teste@exemplo.com`) e qualquer senha.
3. Ao clicar em **Realizar Login**, o alerta de sucesso aparece e você volta à página inicial, agora com o link **Solicitar serviços** visível.
4. Em **Cadastrar-se**, use dados como:
   - Senha: `Senha@123`
   - CPF válido de teste: `529.982.247-25`
   - Data de nascimento: qualquer data que dê 18 anos ou mais
5. Em **Solicitar serviços**, escolha um serviço, confira preço, prazo e data prevista, e clique em **Incluir solicitação**. Use **Excluir** para remover linhas.

## Observações

- Não há back-end nem banco de dados. Login, troca de senha e cadastro apenas **validam** os dados.
- O estado de "logado" é guardado no `sessionStorage` e some ao fechar a aba.
- O vídeo é um exemplo. Para usar o vídeo institucional, troque o ID no `src` do `iframe` em `index.html`.
- Os dados da empresa, dos fundadores e das solicitações são fictícios.

## Documentação

O documento de requisitos está em [`docs/REQUISITOS.md`](docs/REQUISITOS.md).
