import React from "react";

const CardTypeOne = () => {
  return (
    <article className="w-4/5 flex gap-10  justify-between shadow-md outline-0 border-2 border-gray-400 mx-auto p-5">
      <div className="w-4/5 h-full border-2 border-green-400">Image</div>
      <section>
        <p>Product Name</p>
        <span>Ratings</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          reprehenderit optio molestiae obcaecati eveniet accusamus excepturi
          eos sapiente corporis, perspiciatis.
        </p>
        <p>Price $ 349.95</p>
        <div>
          <p>color component</p>
          <p>Cart numbar</p>
        </div>
      </section>
      <section className="flex gap-5 justify-around">
        <span>Like symbol</span>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </section>
    </article>
  );
};

export default CardTypeOne;
