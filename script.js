 const botoesFiltro = document.querySelectorAll('.filtro-btn');

    const produtos = document.querySelectorAll('.produto-item');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {

            botoesFiltro.forEach(btn => btn.classList.remove('active'));

            botao.classList.add('active');

            const filtro = botao.getAttribute('data-filter');


            produtos.forEach(produto => {
                

                const categoria = produto.getAttribute('data-category');

                if (filtro === 'todos' || filtro === categoria) {

                    produto.classList.remove('hidden');
                } else {

                    produto.classList.add('hidden'); 
                }
            });
        });
    });