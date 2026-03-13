"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format from API');
        }
        
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error instanceof Error ? error.message : 'Unknown error');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <section className="hero">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Loading products...</p>
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
              <p>Loading products...</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
