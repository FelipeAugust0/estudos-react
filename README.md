# Estudos de React e JavaScript

Coleção de exercícios acadêmicos de fundamentos de desenvolvimento web. Reúne projetos pequenos em um único repositório, com cada aplicação em sua própria pasta.

## Exercícios

| Projeto | Conteúdo | Pasta para executar |
| --- | --- | --- |
| [Relógio digital](relogio-digital/) | Hora atual, estado, efeitos e limpeza de intervalos | `relogio-digital` |
| [Contador de curtidas](contador-mensagem/) | Eventos, estado e aviso a partir de cinco curtidas | `contador-mensagem` |
| [Aviso com temporizador](aviso-com-temporizador/) | Mensagem que desaparece após três segundos e limpeza do timeout | `aviso-com-temporizador/aviso-com-temporizador` |
| [Jogo da velha](jogo-da-velha/) | Tabuleiro em três níveis, alternância de jogadores e histórico de jogadas | `jogo-da-velha` |
| [Pokédex](pokedex/) | Busca por nome ou número, navegação e consumo da PokeAPI com JavaScript puro | `pokedex` |
| [Lista de tarefas](todolist/) | Cadastro e remoção de tarefas, data, hora e exibição condicional | `todolist/todolist` |

A Pokédex usa **HTML, CSS e JavaScript**, sem React. O nome original `contador-mensagem` foi mantido, embora o código implemente um contador de curtidas.

## Como executar os projetos React

Pré-requisitos: Git, Node.js e npm. Cada projeto tem suas próprias dependências; execute um por vez.

```bash
git clone https://github.com/FelipeAugust0/estudos-react.git
cd estudos-react/relogio-digital
npm ci
npm start
```

Abra o endereço informado no terminal, normalmente `http://localhost:3000`. Para outro exercício, use a pasta indicada na tabela acima. Por exemplo, a partir da raiz do repositório:

```bash
cd todolist/todolist
npm ci
npm start
```

A lista de tarefas mantém os dados no estado da aplicação; recarregar a página apaga as tarefas cadastradas.

## Como abrir a Pokédex

A partir da raiz, com Python 3 instalado:

```bash
cd pokedex
python -m http.server 8000
```

No Windows, pode ser necessário usar `py -3 -m http.server 8000`. Abra `http://localhost:8000`. Também é possível usar uma extensão de servidor local no editor. A consulta à PokeAPI e o carregamento das imagens exigem internet.

## Organização e preservação

A consolidação mantém os arquivos originais e suas estruturas internas, incluindo os lockfiles e os READMEs padrão presentes nos exercícios. O código das aplicações não foi reescrito nesta organização.

O repositório do jogo da velha contém uma referência Git interna chamada `jogo-da-velha`, sem arquivo `.gitmodules`. Essa referência foi preservada; a aplicação executável está na pasta externa `jogo-da-velha`, que contém `package.json` e `src`. Não é necessário inicializar submódulos para executar o exemplo.

São exercícios de aprendizagem, com as limitações existentes no código. A consolidação não certifica o funcionamento completo das aplicações nem adapta os testes gerados pelo Create React App.

## Histórico original

[historico/origens.json](historico/origens.json) registra os repositórios e commits utilizados. Os seis arquivos `.bundle` em [historico/](historico/) preservam os históricos Git e as referências obtidas dos originais.

Para recuperar um projeto separadamente, execute na raiz:

```bash
git clone historico/relogio-digital.bundle relogio-digital-restaurado
```

Os backups preservam código e histórico Git. Configurações do GitHub, issues, comentários, secrets e execuções de Actions não fazem parte desses arquivos.

## Autor

Felipe Augusto da Silva — estudos de Análise e Desenvolvimento de Sistemas.
