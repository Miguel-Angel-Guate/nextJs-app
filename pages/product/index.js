import Link from "next/link";

const ProductList = ({productId = 200}) => {
    return (
        <div>
            <Link href="/" passHref>
            <button>Home</button>
            </Link>
            <h1>Product home</h1>
            <Link href="/product/one" passHref>
            <h2>Product 1</h2>
            </Link>
            <Link href="/product/two" passHref replace>
            <h2>Product 2</h2>
            </Link>
            <Link href="/product/three" passHref>
            <h2>Product 3</h2>
            </Link>
            <Link href={`/product/${productId}`} passHref>
            <h2>Product {productId}</h2>
            </Link>
            
        </div>
    );
};

export default ProductList;