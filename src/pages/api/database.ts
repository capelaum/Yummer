import { menuItemType } from "utils/types";

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
      imageName: "old.png",
    },
    {
      name: "Coffee Lover",
      description:
        "Massa de caafé com cacau 100%, misturada com chocolate amargo em pedaços. Recheado com um intenso brigadeiro de café e finalizado com gotas de chocolate belga.",
      price: 8,
      size: 100,
      imageName: "coffee.png",
    },
    {
      name: "Double Trouble",
      description:
        "Cookie com duas massas. Metade feita com massa de baunilha e metade massa de cacau. Nelas são misturadas castanha de caju, chocolate amargo e chocolate branco. Seu recheio é de um maravilhoso brigadeiro de chocolate amargo e finalizado com gotas de chocolate branco e preto belgas.",
      price: 8,
      size: 100,
      imageName: "double.png",
    },
    {
      name: "Lemon Dream",
      description:
        "Base da massa feita com suco e raspas de limão taiti e siciliano. Nela é misturado chocolate branco e macadâmia, junto com um recheio exagerado de brigadeiro de limão. Finalizando com açúcar de confeiteiro e gotas de chocolate belga branco.",
      price: 8,
      size: 100,
      imageName: "lemon.png",
    },
    {
      name: "Old School",
      description:
        "Massa de baunilha, misturada com pedaços de chocolate amargo e um recheio exagerado de Nutella. Finalizado com gotas deliciosas de chocolate belga.",
      price: 4,
      size: 45,
      imageName: "old.png",
    },
    {
      name: "Coffee Lover",
      description:
        "Massa de caafé com cacau 100%, misturada com chocolate amargo em pedaços. Recheado com um intenso brigadeiro de café e finalizado com gotas de chocolate belga.",
      price: 4,
      size: 45,
      imageName: "coffee.png",
    },
    {
      name: "Double Trouble",
      description:
        "Cookie com duas massas. Metade feita com massa de baunilha e metade massa de cacau. Nelas são misturadas castanha de caju, chocolate amargo e chocolate branco. Seu recheio é de um maravilhoso brigadeiro de chocolate amargo e finalizado com gotas de chocolate branco e preto belgas.",
      price: 4,
      size: 45,
      imageName: "double.png",
    },
    {
      name: "Lemon Dream",
      description:
        "Base da massa feita com suco e raspas de limão taiti e siciliano. Nela é misturado chocolate branco e macadâmia, junto com um recheio exagerado de brigadeiro de limão. Finalizando com açúcar de confeiteiro e gotas de chocolate belga branco.",
      price: 4,
      size: 45,
      imageName: "lemon.png",
    },
  ],
  toasts: [
    {
      name: "Piloto",
      description: "A melhor rabanada tradicional, açúcar e canela por fora.",
      price: 6,
      imageName: "piloto.png",
    },
    {
      name: "Dona Avelina",
      description:
        "Recheada com muito doce de leite mineiro, açúcar e canela por fora.",
      price: 6,
      imageName: "dona_avelina.png",
    },
    {
      name: "Doce Imperador",
      description: "Recheada com muita Nutella, açúcar e canela por fora.",
      price: 6,
      imageName: "doce_imperador.png",
    },
  ],
  juices: [
    {
      name: "Pink Lemonade",
      description:
        "Suco de limão taiti misturado com xarope groselha. Uma limonada cheia de cor e sabor.",
      price: 5,
      imageName: "pink_lemonade.png",
    },
    {
      name: "Amora com Limão",
      description:
        "A perfeita combinação do suco de amora e limão taiti, com um leve toque de água de coco.",
      price: 5,
      imageName: "amora_limao.png",
    },
    {
      name: "Laranja com Acerola",
      description: "Delicioso suco de laranja com Acerola, na medida ideal.",
      price: 5,
      imageName: "laranja_acerola.png",
    },
    {
      name: "Black Tea",
      description:
        "A intensidade de sabor do chá preto, feito do jeitinho Yummer.",
      price: 5,
      imageName: "black_tea.png",
    },
  ],
};
