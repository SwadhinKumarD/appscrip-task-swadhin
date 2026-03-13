export default function ProductCard({ product }) {

  return (

    <div className="productCard">

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>
        {product.title}
      </h3>

      <p className="price">
        $ {product.price}
      </p>

    </div>

  );
}