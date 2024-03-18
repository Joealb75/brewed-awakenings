import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click", 
    (clickEvent) =>{
        const userClicked = clickEvent.target
        let employeeName = userClicked.dataset.name
        let employeeID = userClicked.dataset.id
        

        if(userClicked.dataset.target === "employee"){
            let productsSold = 0
            for (const order of orders) {
                if(order.employeeId === parseInt(employeeID)){
                    productsSold ++
                }
            }
            window.alert(`${employeeName} sold ${productsSold} products`)
        }
        
    }
)
export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
        data-target = "employee"
        data-name = "${employee.name}"
        data-id = "${employee.id}"
        >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

