# Azure Serverless API

### 🌀 Começando... 

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

#### ❗️ Instalando as dependências (via Windows): 

Abre o cmd (caso esteja utilizando o Windows) navegue até o local onde você clonou o projeto

```
cd "C:\Users\NomeDoComputador\Documents\cloneprojeto"
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(dentro da pasta do projeto clonado)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

#### ❗️ Instalando as ferramentas de desenvolvimento da Azure Functions (via Windows): 

Para efetuar o procedimento de instalação, será necessário acessar o link abaixo:
- https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash#v2

#### 💨 Executando a aplicação 

Após finalizar a instalação das ferramentas de desenvolvimento da Azure Functions, navegue até o local onde você clonou o projeto.

```
cd "C:\Users\NomeDoComputador\Documents\cloneprojeto"
```

A próxima etapa, será iniciar o servidor para disponibilizar as APIs, utilizando o comando abaixo no terminal:

```
> func host start
```

Após a serverless API ser inicializada, será disponibilizado as rotas de serviços, como demostrado abaixo:

```
>  CreateProduct: [POST] http://localhost:7071/api/products

> DeleteProduct: [DELETE] http://localhost:7071/api/products/{id}

> GetProductById: [GET] http://localhost:7071/api/products/{id}

> GetProducts: [GET] http://localhost:7071/api/products

> UpdateProduct: [PUT] http://localhost:7071/api/products/{id}
```

### Dependencias
Não será necessário instalar essas dependências caso você tenha efetuado o clone e as etapas descrito acima. 
```
npm i mongodb
```

## 🚩 Tenho dúvidas... O que fazer? 

Caso tenham dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/lucasdealmeidadev/nodejs-serverless-api/issues)**. Assim que possível, estarei respondendo as todas as dúvidas que tiverem!

## Licença

* Licenciado sob a licença MIT - veja [LICENSE](https://github.com/lucasdealmeidadev/nodejs-serverless-api/blob/main/LICENSE) para mais informações.

----------

Desenvolvido por Lucas de Almeida Monteiro (:  👋  [ Entrar em contato!!](https://www.linkedin.com/in/lucas-almeida-145a4513a)