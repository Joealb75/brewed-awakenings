import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click", 
    (clickEvent) =>{
        const userClicked = clickEvent.target
        let priceLoc = userClicked.dataset.type
        let productName = userClicked.dataset.name
        let productPrice = userClicked.dataset.price
        if (priceLoc === "price" ){
            window.alert(`${productName} costs $${productPrice}`)
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li
        data-name = "${product.name}"
        data-type = "price"
        data-price = "${product.price}"
        >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

