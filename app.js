const loadProducts = (produtos, idDivParent)=> {
    const parentDiv = document.querySelector(idDivParent)
    produtos.forEach(produto =>{

        const html =`
        <article class= "prato">
        <img src="${produto.image}" alt="${produto.title}">
        <h4>${produto.title}</4>
        <h4>${produto.valor}</4>
        <p>${produto.description}</p>
        <button type="button" onclick="modalTrigger(${produto.id})">Quero este prato</button>
        </article>


        `

parentDiv.insertAdjacentHTML('beforeend',html)

    })

    }

    const modalTrigger =(productId) =>{
        const modal = document.querySelector('.modal')

        if(productId != null){
            const produto = produtos.filter(produto => produto.id == productId)[0]
            if(produto != null){
                modal.querySelector('#title').value = produto.title            
            }
        }

        modal.classList.contains('hide') == true ? modal.classList.remove('hide') : modal.classList.add('hide')
    }

    const whatsappLink =(phone,productTitle,productQuantidade,buyerName,buyerEndereco,buyerPagamento) =>`https://api.whatsapp.com/send?phone=${phone}&text=Olá eu quero ${productQuantidade} ${productTitle} - Entrega para ${buyerName} no endereço: ${buyerEndereco} - A forma de pagamento será: ${buyerPagamento} `


    const checkout = phone => {
        const form =document.querySelector('#form-product')
        form.addEventListener('submit', e =>{
            e.preventDefault()

            const productTitle = form.querySelector('input#title').value
            const productQuantidade = form.querySelector('input#quantidade').value
            const buyerName = form.querySelector('input#name').value
            const buyerEndereco = form.querySelector('input#endereco').value
            const buyerPagamento = form.querySelector('select#pagamento').value

            const whatsappUrl = whatsappLink(phone,productTitle,productQuantidade,buyerName,buyerEndereco,buyerPagamento)

            window.location.href = whatsappUrl
        })
    }
        
  

    loadProducts(produtos,'#product-div')

checkout('5598982067177')