export const lanchonete = {

    cardapio: [
        {
            idCategoria: 1,
            categoria: "Ofertas",
            itens: [
                {
                    idProduto: 1,
                    nome: "Pizza Calabresa",
                    descricao: "Massa artesanal, mussarela e calabresa",
                    valor: 30.00,
                    foto: require("../assets/produto-pizza.png")
                },
                {
                    idProduto: 2,
                    nome: "Coca-Cola Lata",
                    descricao: "Coca-Cola lata de 300ml trincando de gelada",
                    valor: 5.00,
                    foto: require("../assets/produto-coca.png")
                },
                {
                    idProduto: 3,
                    nome: "Pizza Mussarela",
                    descricao: "Massa artesanal, mussarela e calabresa",
                    valor: 30.00,
                    foto: require("../assets/produto-pizza1.png")
                },
                {
                    idProduto: 4,
                    nome: "Coca-Cola casco 1L",
                    descricao: "Coca-Cola casco 1L trincando de gelada",
                    valor: 5.00,
                    foto: require("../assets/produto-coca1.png")
                },
                {
                    idProduto: 5,
                    nome: 'Pizza Margherita',
                    descricao: 'Pizza de 450g com molho de tomate, mussarela e manjericão.',
                    valor:  29.90,
                    foto: require("../assets/produto-pizza2.png")
                },
                {
                    idProduto:  6,
                    nome: 'Hambúrguer Clássico',
                    descricao: 'Hambúrguer de 200g, alface, tomate, cebola, queijo e molho especial.',
                    valor:  15.90,
                    foto: require("../assets/produto-hamburguer.png")
                },
                {
                    idProduto: 7,
                    nome: 'X-Salada',
                    descricao: 'Hambúrguer de 150g, alface, tomate, cebola e presunto.',
                    valor: 12.90,
                    foto: require("../assets/produto-hamburguer1.png")
                },
                {
                    idProduto: 8,
                    nome: 'Salada César',
                    descricao: 'Salada de alface, peito de frango grelhado, parmesão e molho César.',
                    valor: 18.90,
                    foto: require("../assets/produto-salada.png")
                },
                {
                    idProduto: 9,
                    nome: 'Sobremesa de Chocolate',
                    descricao: 'Sobremesa de chocolate com sorvete de creme.',
                    valor: 8.90,
                    foto: require("../assets/produto-sobremesa.png")
                }
                
            ]
        }
    ]
    
};

export const pedido = {
    id: 1,
    itens: [
        {
            idItem: 1,
            idProduto: 1,
            nome: "Pizza Calabresa",
            descricao: "Massa artesanal, mussarela e calabresa",
            foto: require("../assets/produto-pizza.png"),
            qtd: 1,
            vlUnitario: 30.00,
            vlTotal: 30.00
        },
        {
            idItem: 2,
            idProduto: 2,
            nome: "Coca-Cola Lata",
            descricao: "Coca-Cola lata de 300ml trincando de gelada",
            foto: require("../assets/produto-coca.png"),
            qtd: 1,
            vlUnitario: 6.00,
            vlTotal: 6.00
        }
    ]
};