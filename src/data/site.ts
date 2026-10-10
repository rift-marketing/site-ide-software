export const company = {
  name: 'IDE Software',
  legalName: 'IDE Software Ltda',
  founded: '2026',
  city: 'São Paulo',
  neighborhood: 'Pinheiros',
  address: 'Rua Pais Leme, 215, conj. 1713',
  cep: '05424-150',
  state: 'SP',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Pais+Leme+215+conjunto+1713+Pinheiros+S%C3%A3o+Paulo',
};

export const nav = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'A empresa' },
  { href: '/contato', label: 'Contato' },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  body: string;
  includes: string[];
  when: string;
};

export const services: Service[] = [
  {
    id: 'sob-encomenda',
    index: '01',
    title: 'Software sob encomenda',
    summary:
      'Sistemas internos, rotinas operacionais e integrações desenhados para um processo que já existe na empresa.',
    body: 'Sistemas feitos para um processo que a empresa já tem. O ponto de partida é a operação: quem usa, o que trava hoje e qual resultado o software precisa sustentar. A partir disso, o escopo fica explícito — o que entra, o que fica para uma etapa seguinte e como a entrega será usada no dia a dia.',
    includes: [
      'Sistemas internos e ferramentas operacionais',
      'Integrações entre sistemas que a empresa já usa',
      'Automações de rotina com regra de negócio clara',
      'Painéis para acompanhar o que a operação precisa ver',
    ],
    when: 'Quando planilha, gambiarra ou software genérico já não cobre o processo.',
  },
  {
    id: 'produtos',
    index: '02',
    title: 'Produtos e licenciamento',
    summary:
      'Software customizável construído para evoluir como produto, com base própria e caminho de licenciamento.',
    body: 'Além do projeto fechado para um cliente, a IDE Software desenvolve e licencia programas customizáveis. A diferença está no desenho: o software nasce com dono, com espaço para configuração e com uma base que aguenta a próxima versão — em vez de um entregável que só funciona naquele contexto.',
    includes: [
      'Desenho do produto e do que pode ser configurado',
      'Construção da base que outros clientes podem usar',
      'Licenciamento do software customizável',
      'Evolução por versões, com escopo combinado',
    ],
    when: 'Quando a ideia já passou de um projeto único e precisa virar um produto.',
  },
  {
    id: 'consultoria',
    index: '03',
    title: 'Consultoria em tecnologia',
    summary:
      'Diagnóstico, arquitetura e priorização antes — ou no meio — de um desenvolvimento.',
    body: 'Consultoria em tecnologia da informação para quem precisa decidir o que construir, o que manter e o que não vale a pena fazer agora. Serve para organizar um sistema existente, escolher um caminho técnico ou escrever um escopo que outra equipe também consiga executar.',
    includes: [
      'Leitura do sistema e do processo atuais',
      'Arquitetura e recorte do que construir primeiro',
      'Critérios para contratar ou continuar um desenvolvimento',
      'Acompanhamento de uma decisão técnica específica',
    ],
    when: 'Quando ainda não está claro o que deve ser software e o que deve continuar manual.',
  },
  {
    id: 'web',
    index: '04',
    title: 'Web design',
    summary:
      'Interfaces e sites com hierarquia clara, escritos para a pessoa que vai usar.',
    body: 'Web design aplicado ao software e à presença da empresa: páginas, fluxos e interfaces em que a informação importante aparece primeiro. O visual segue o conteúdo e o uso, com cuidado de leitura, contraste e estrutura — no celular e no desktop.',
    includes: [
      'Sites institucionais e páginas de produto',
      'Interfaces de sistemas e áreas logadas',
      'Organização de conteúdo e hierarquia visual',
      'Ajustes de um fluxo que as pessoas não conseguem completar',
    ],
    when: 'Quando a interface atrapalha o uso, ou quando a empresa ainda não tem uma presença à altura do que entrega.',
  },
  {
    id: 'dados',
    index: '05',
    title: 'Aplicações, dados e hospedagem',
    summary:
      'Publicação e operação do software depois da entrega, com tratamento de dados e ambiente no ar.',
    body: 'Construir é uma parte. A outra é o software continuar disponível, com dados tratados de forma consciente e um ambiente que alguém consiga explicar. A IDE Software cuida de aplicações na internet, hospedagem e do caminho entre o código pronto e o uso real.',
    includes: [
      'Publicação de aplicações web',
      'Hospedagem e organização do ambiente',
      'Tratamento de dados ligado ao funcionamento do sistema',
      'Orientação do que monitorar depois da entrega',
    ],
    when: 'Quando o sistema existe, mas a operação de mantê-lo no ar ainda é improvisada.',
  },
  {
    id: 'portais',
    index: '06',
    title: 'Portais e conteúdo',
    summary:
      'Portais, áreas restritas e serviços de informação organizados para um público específico.',
    body: 'Portais e serviços de informação para empresas que precisam publicar conteúdo com regra de acesso, busca e atualização. O trabalho cobre a estrutura do portal e a forma como o conteúdo entra, sai e chega na pessoa certa.',
    includes: [
      'Portais institucionais e de serviço',
      'Áreas logadas para clientes, equipes ou parceiros',
      'Organização de conteúdo e permissões',
      'Publicação contínua, com um fluxo que a equipe consegue operar',
    ],
    when: 'Quando a informação existe, mas está espalhada e ninguém encontra o que precisa.',
  },
];

export const steps = [
  {
    index: '01',
    title: 'Conversa',
    text: 'Entendemos o problema, quem usa o sistema e o que já existe. Sem proposta antes dessa leitura.',
  },
  {
    index: '02',
    title: 'Escopo',
    text: 'O que entra, o que fica de fora, prazo e forma de trabalho ficam escritos. Esse combinado guia o projeto.',
  },
  {
    index: '03',
    title: 'Construção',
    text: 'Ciclos curtos, com algo utilizável para avaliar. Ajuste acontece em cima do uso, não só de um documento.',
  },
  {
    index: '04',
    title: 'Entrega',
    text: 'Sistema no ar, orientação de uso e um caminho claro para a próxima evolução — se ela fizer sentido.',
  },
];
