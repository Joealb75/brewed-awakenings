import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
let orderProduct = ""
const findproduct = (order, products) => {
    

    for (const item of products) {
        if (item.id === order.productId) {
            orderProduct = item.name
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
let orderEmployee = ""
const findemployee = (order, allEmployees) => {
    
    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee.name
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employee = findemployee(order, employees)
        const product = findproduct(order, products)

        html += `<li>${orderProduct} was sold by ${orderEmployee} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

