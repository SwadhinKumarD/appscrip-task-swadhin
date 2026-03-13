import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      // Add timeout for better reliability
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const text = await res.text();
    
    // Check if response is HTML (error page) instead of JSON
    if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
      throw new Error('Received HTML instead of JSON - API may be down');
    }
    
    const data = JSON.parse(text);
    
    // Ensure we have valid data
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid data format from API');
    }
    
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error instanceof Error ? error.message : 'Unknown error');
    // Return empty array if API fails
    return [];
  }
}

export default async function Home() {

  const products = await getProducts();

  return (
    <>
      <Header />

      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Explore our curated collection of premium products</p>
      </section>

      <div className="container">

        <Filters />

        <div className="productSection">

          <div className="sortBar">
            <select>
              <option>Recommended</option>
              <option>Newest First</option>
              <option>Price Low to High</option>
            </select>
          </div>

          <div className="productGrid">

            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}
