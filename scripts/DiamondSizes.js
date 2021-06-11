import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            //window.alert(`User chose size ${event.target.value}`)
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

// const sizeMenu = `<ul class="choice--list size--list">
// ${sizes.map( 
//   (size) => ` li class="choice-list-item-size--list-item">
//  <input type="radio" value="size--${size.id}" name="size"> ${size.circumference}-inch
//    <div class="price">Price: $${size.price.toFixed(2)}</div>
//    <?li>`).join("")
//} </ul>`

// return sizeMenu