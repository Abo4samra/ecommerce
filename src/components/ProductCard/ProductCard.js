"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Star, Eye } from "lucide-react";
import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div
      className={`${styles.card} animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Image Container */}
      <div className={styles.imageWrap}>
        <Link href={`/products/${product.id}`}>
          <div className={styles.imageInner}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className={`${styles.image} ${imageLoaded ? styles.loaded : ""}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </Link>

        {/* Badges */}
        {product.badge && (
          <span className={styles.badge}>{product.badge}</span>
        )}
        {discount > 0 && (
          <span className={styles.discount}>-{discount}%</span>
        )}

        {/* Hover Overlay */}
        <div className={styles.overlay}>
          <button
            className={styles.overlayBtn}
            onClick={() => addToCart(product)}
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
          <Link href={`/products/${product.id}`} className={styles.overlayBtn} aria-label="View product">
            <Eye size={18} />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <Link href={`/products/${product.id}`}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>

        {/* Rating */}
        <div className={styles.rating}>
          <Star size={14} fill="var(--accent)" color="var(--accent)" />
          <span className={styles.ratingValue}>{product.rating}</span>
          <span className={styles.ratingCount}>({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className={styles.originalPrice}>
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
