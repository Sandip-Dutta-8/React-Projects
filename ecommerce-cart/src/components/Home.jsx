import React from 'react'
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
    "https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?w=740&t=st=1702479073~exp=1702479673~hmac=ec6a9be8b7a31f49a2f8fe8c7929c5f1456631ee5dcbd9f76512112763f8c4a1";

function Home() {

    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            imgSrc: img1,
            id: "asdhajsdbhjabhsjdfdfv",
        },
        {
            name: "Sniker",
            price: 490,
            imgSrc: img2,
            id: "sdjfdlaajsdbhjabhsjdfdfv",
        },
    ];

    const dispatch = useDispatch();

    const addToCartHandler = (options) => {
        dispatch({ type: "addToCart", payload: options });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
    };

    return (
        <div className="home">
            {productList.map((i) => (
                <ProductCard
                    key={i.id}
                    imgSrc={i.imgSrc}
                    name={i.name}
                    price={i.price}
                    id={i.id}
                    handler={addToCartHandler}
                />
            ))}
        </div>
    )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
    <div className="productCard">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
            Add to Cart
        </button>
    </div>
);

export default Home