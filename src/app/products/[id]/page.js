"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  ShoppingBag,
  Star,
  Check,
  ArrowLeft,
  Truck,
  Shield,
  RotateCcw,
  Heart,
  Share2,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react";
import styles from "./page.module.css";

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1>Product not found</h1>
        <Link href="/products" className="btn btn-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough related, fill with other products
  const moreProducts =
    relatedProducts.length < 4
      ? [
          ...relatedProducts,
          ...products
            .filter(
              (p) =>
                p.id !== product.id &&
                !relatedProducts.find((r) => r.id === p.id)
            )
            .slice(0, 4 - relatedProducts.length),
        ]
      : relatedProducts;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Shop</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`}>
            {product.category}
          </Link>
          <span>/</span>
          <span className={styles.breadcrumbCurrent}>{product.name}</span>
        </nav>

        {/* Product Main */}
        <div className={styles.productMain}>
          {/* Image */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: "cover" }}
              />
              {product.badge && (
                <span className={styles.badge}>{product.badge}</span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className={styles.details}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.name}>{product.name}</h1>

            {/* Rating */}
            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.round(product.rating) ? "var(--accent)" : "none"}
                    color="var(--accent)"
                  />
                ))}
              </div>
              <span className={styles.ratingText}>
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className={styles.priceBlock}>
              <span className={styles.price}>${product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className={styles.originalPrice}>
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className={styles.discountBadge}>-{discount}%</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className={styles.description}>{product.description}</p>

            {/* Features */}
            <div className={styles.features}>
              {product.features.map((feat) => (
                <div key={feat} className={styles.featureItem}>
                  <Check size={16} className={styles.featureCheck} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className={styles.actions}>
              <div className={styles.quantityCtrl}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease"
                >
                  <Minus size={16} />
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                className="btn btn-primary btn-lg"
                style={{ flex: 1 }}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={20} />
                Add to Cart
              </button>
              <button className="btn-icon" aria-label="Wishlist">
                <Heart size={20} />
              </button>
              <button className="btn-icon" aria-label="Share">
                <Share2 size={20} />
              </button>
            </div>

            {/* Trust Signals */}
            <div className={styles.trust}>
              <div className={styles.trustItem}>
                <Truck size={18} />
                <span>Free shipping over $100</span>
              </div>
              <div className={styles.trustItem}>
                <Shield size={18} />
                <span>2-year warranty</span>
              </div>
              <div className={styles.trustItem}>
                <RotateCcw size={18} />
                <span>30-day returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {moreProducts.length > 0 && (
          <section className={styles.related}>
            <h2 className="section-title">You May Also Like</h2>
            <div className={styles.relatedGrid}>
              {moreProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
