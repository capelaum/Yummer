import { menuItemType, Information } from "utils/types";

interface MenuType {
  cookies: menuItemType[];
  toasts: menuItemType[];
  juices: menuItemType[];
}

export const menu: MenuType = {
  cookies: [
    {
      name: "Old School",
      description:
        "Massa de baunilha, misturada com pedaços de chocolate amargo e um recheio exagerado de Nutella. Finalizado com gotas deliciosas de chocolate belga.",
      price: 8,
      size: 100,
      imageName: "old.svg",
    },
    {
      name: "Coffee Lover",
      description:
        "Massa de café com cacau 100%, misturada com chocolate amargo em pedaços. Recheado com um intenso brigadeiro de café e finalizado com gotas de chocolate belga.",
      price: 8,
      size: 100,
      imageName: "coffee.svg",
    },
    {
      name: "Double Trouble",
      description:
        "Cookie com duas massas. Metade feita com massa de baunilha e metade massa de cacau. Nelas são misturadas castanha de caju, chocolate amargo e chocolate branco. Seu recheio é de um maravilhoso brigadeiro de chocolate amargo e finalizado com gotas de chocolate branco e preto belgas.",
      price: 8,
      size: 100,
      imageName: "double.svg",
    },
    {
      name: "Lemon Dream",
      description:
        "Base da massa feita com suco e raspas de limão taiti e siciliano. Nela é misturado chocolate branco e macadâmia, junto com um recheio exagerado de brigadeiro de limão. Finalizando com açúcar de confeiteiro e gotas de chocolate belga branco.",
      price: 8,
      size: 100,
      imageName: "lemon.svg",
    },
    {
      name: "Old School",
      description:
        "Massa de baunilha, misturada com pedaços de chocolate amargo e um recheio exagerado de Nutella. Finalizado com gotas deliciosas de chocolate belga.",
      price: 4,
      size: 45,
      imageName: "old.svg",
    },
    {
      name: "Coffee Lover",
      description:
        "Massa de café com cacau 100%, misturada com chocolate amargo em pedaços. Recheado com um intenso brigadeiro de café e finalizado com gotas de chocolate belga.",
      price: 4,
      size: 45,
      imageName: "coffee.svg",
    },
    {
      name: "Double Trouble",
      description:
        "Cookie com duas massas. Metade feita com massa de baunilha e metade massa de cacau. Nelas são misturadas castanha de caju, chocolate amargo e chocolate branco. Seu recheio é de um maravilhoso brigadeiro de chocolate amargo e finalizado com gotas de chocolate branco e preto belgas.",
      price: 4,
      size: 45,
      imageName: "double.svg",
    },
    {
      name: "Lemon Dream",
      description:
        "Base da massa feita com suco e raspas de limão taiti e siciliano. Nela é misturado chocolate branco e macadâmia, junto com um recheio exagerado de brigadeiro de limão. Finalizando com açúcar de confeiteiro e gotas de chocolate belga branco.",
      price: 4,
      size: 45,
      imageName: "lemon.svg",
    },
  ],
  toasts: [
    {
      name: "Piloto",
      description: "A melhor rabanada tradicional, açúcar e canela por fora.",
      price: 6,
      imageName: "piloto.svg",
    },
    {
      name: "Dona Avelina",
      description:
        "Recheada com muito doce de leite mineiro, açúcar e canela por fora.",
      price: 6,
      imageName: "dona_avelina.svg",
    },
    {
      name: "Doce Imperador",
      description: "Recheada com muita Nutella, açúcar e canela por fora.",
      price: 6,
      imageName: "doce_imperador.svg",
    },
  ],
  juices: [
    {
      name: "Pink Lemonade",
      description:
        "Suco de limão taiti misturado com xarope groselha. Uma limonada cheia de cor e sabor.",
      price: 5,
      imageName: "pink_lemonade.svg",
    },
    {
      name: "Amora com Limão",
      description:
        "A perfeita combinação do suco de amora e limão taiti, com um leve toque de água de coco.",
      price: 5,
      imageName: "amora_limao.svg",
    },
    {
      name: "Laranja com Acerola",
      description: "Delicioso suco de laranja com Acerola, na medida ideal.",
      price: 5,
      imageName: "laranja_acerola.svg",
    },
    {
      name: "Black Tea",
      description:
        "A intensidade de sabor do chá preto, feito do jeitinho Yummer.",
      price: 5,
      imageName: "black_tea.svg",
    },
  ],
};

export const informations: Information[] = [
  {
    title: "Pedido",
    text: "Escolha suas delícias através de nosso cardápio interativo, selecionando a quantidade de cada item. Ao finalizar, será requisitado seu nome e local de entrega. Em seguida seu pedido é enviado para nosso whatsapp, assim como é informado as informações de nossa chave PIX para pagamento. Lembrando que existem apenas algumas regras:",
    list: [
      "Pedido mínimo: 4 unidades de mini cookies (45g)",
      "O pedido só é confirmado após o envio do comprovante de pagamento para nós via Whatsapp!",
    ],
  },
  {
    title: "Encomenda",
    text: "Faça seu pedido de Segunda a Quinta de 8:00 às 18:00 (horário comercial), para que possamos preparar suas delícias com muito carinho e te entregar na Sexta e/ou Sábado.",
    list: [
      "A encomenda somente será válida após o pagamento e envio do comprovante via Whatsapp!",
    ],
  },
  {
    title: "Pagamento",
    text: "Pagar via PIX através da chave ou escaneando o QR Code PIX mostrado em tela após finalizar o pedido, alternativamente pode-se pedir as informações de pagamento pelo nosso Whatsapp.",
    list: [
      "Qualquer reclamação, dúvida, sugestão ou suporte, contate-nos via Whatsapp, ou por email: yummer@gmail.com",
    ],
  },
  {
    title: "Entrega",
    text: "Entregamos em todo o DF ou se preferir, pode retirar no local. Passaremos todas as informações detalhadas em nossa conversa do WhatsApp!",
    list: ["Taxa de entrega gratuita para pedidos com valor acima de R$35,00"],
  },
];
