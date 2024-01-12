import axios from "axios";

export const addToCart = ({ image, title, description, price_inr, category }) => {
    axios.post(`https://online-store-quc3.onrender.com/cartdata`, {
        image: image,
        title: title,
        description: description,
        price_inr: price_inr,
        category: category
    }).then((res) => {
        console.log(res);
        alert("Item Added to Cart")
    })
}