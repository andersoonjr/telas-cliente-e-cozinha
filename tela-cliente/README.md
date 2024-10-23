# Tela-Cliente

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.9.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar algum dos arquivos de origem.

## Estrutura do Projeto

tela-cliente/ 
│ 
├── src/ 
│    │ 
│    ├── app/  
│    │ │
│    │ ├── components/ 
│    │ │ │
│    │ │ ├── delivery-info/ 
│    │ │ │ │
│    │ │ │ ├── delivery-info.component.ts // Componente para informações de entrega 
│    │ │ │ ├── delivery-info.component.html // Template HTML do componente
│    │ │ │ ├── delivery-info.component.css // Estilos do componente 
│    │ │ │ │
│    │ │ ├── order-summary/ 
│    │ │ ├── order-summary.component.ts // Componente para resumo do pedido 
│    │ │ │ ├── order-summary.component.html // Template HTML do componente 
│    │ │ │ ├── order-summary.component.css // Estilos do componente 
│    │ │ │ │
│    │ │ ├── product-carousel/ 
│    │ │ │ ├── product-carousel.component.ts // Componente para o carrossel de produtos 
│    │ │ │ ├── product-carousel.component.html // Template HTML do componente 
│    │ │ │ ├── product-carousel.component.css // Estilos do componente
│    │ │ │ │
│    │ ├── model/ 
│    │ │ └── dish  // Classe Dish que define as propriedades do prato 
│    │ │
│    │ ├── services/ // Pasta para serviços, se houver 
│    │ ├── app.component.ts // Componente raiz do aplicativo 
│    │ ├── app.component.html // Template HTML do componente raiz 
│    │ ├── app.component.css // Estilos do componente raiz 
│    │ ├── app.routes.ts // Configuração de rotas do aplicativo 
│    │ ├── app.config.ts // Configurações gerais do aplicativo, se houver 
│    │ ├── main.ts // Ponto de entrada do aplicativo 
│    │ └── index.html // Arquivo HTML principal que carrega o aplicativo 
│    │ 
│    ├── environments/ // Pasta para arquivos de ambiente 
│    │   ├── environment.ts // Configurações de ambiente padrão 
│    │   └── environment.prod.ts // Configurações de ambiente para produção 
│    │ 
│    ├── assets/ // Pasta para recursos estáticos (imagens, fontes, etc.) 
│    │ └── imagens/ 
│    │     ├── hamburguer.jpg // Imagem do hambúrguer 
│    │     ├── sanduiche.jpg // Imagem do sanduíche 
│    │     └── lasanha.jpg // Imagem da lasanha 
│    │ 
│    ├── styles.css // Estilos globais do aplicativo 
│    └── favicon.ico // Ícone do aplicativo 
│    
├── angular.json // Configurações do Angular CLI
├── package.json // Dependências do projeto 
└── tsconfig.json // Configurações do TypeScript

    
## Geração de Código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construção

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Execução de Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Execução de Testes End-to-End

Execute `ng e2e` para executar os testes end-to-end via uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente as capacidades de teste end-to-end.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
