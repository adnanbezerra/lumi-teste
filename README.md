# <p align = "center"> Lumi  </p>

<p align="center">
   <img src="https://media.licdn.com/dms/image/C4D0BAQHcIiVqOtOAnQ/company-logo_200_200/0/1660403652904?e=1698278400&v=beta&t=k0N1chM9AsmO-fjGWtpcagF0jU1CqeY926mGKrANFiw"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-adnanbezerra-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/adnanbezerra/lumi-teste?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Este é o projeto do teste técnico da empresa Lumi Labs, uma companhia que atua junto a empresas do setor elétrico para melhoria dos serviços prestados por estas. 

O teste consiste no desenvolvimento de uma aplicação full-stack para a adição de PDFs de contas de energia elétrica com uso de um webscraper para extrair os dados da mesma, como nome, valor da conta, taxas de impostos etc. Além disso, é preciso a criação do Figma para a mesma, bem como de testagem de integração e de ponta a ponta. 

Por fim, precisa-se de um banco de dados para que o sistema tenha persistência.

***

## :computer:	 Tecnologias e Conceitos

- Node.js com JavaScript e TypeScript
- React e ExpressJS
- Scraping em arquivos
- PostgreSQL com Prisma como ORM
- Testagem de ponta-a-ponta e de integração
- Design com Figma

***

## :rocket: Rotas do back-end

T.B.D.

***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [Vite](https://vitejs.dev/), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente. Além disso, é preciso que o [PostgreSQL](https://www.postgresql.org/) esteja corretamente instalado na máquina, dado que o banco de dados é feito com ele.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/adnanbezerra/lumi-teste.git
```

Depois, dentro da pasta, é necessário que você nave até as pastas back-end e front-end e execute o comando `npm install`, conforme o exemplo:

```
cd back-end
npm install
cd ../front-end
npm install
```

De seguido, em cada um dos diretórios, tanto do back-end quanto do front-end, é preciso criar arquivos .env. Para tanto, basta eguir o modelo do que está no .env.example de cada um dos diretórios, copiar dentro do .env e preencher com as informações corretas para o funcionamento apropriado.

No front-end, o `VITE_BASE_URL` se refere ao link para onde estiver o back-end. No back, por sua vez, as variáveis com `SECRET` podem ser preenchidas com quaisquer palavras. Recomenda-se que o `TOKEN_EXPIRES_IN` seja "7d".

Finalizado o processo, é preciso inicializar os servidores:

```
cd front-end
npm run dev
cd ../back-end
npm start
```

Agora, é preciso acessar o navegador e acessar a URL http://localhost:5173, de modo a acessar o front-end da aplicação e de fato começar a fazer uso.
