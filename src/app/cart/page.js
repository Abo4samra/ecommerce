"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  Tag,
  Truck,
  Shield,
} from "lucide-react";
import styles from "./page.module.css";

export default function CartPage() {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } =
    useCart();

  const shipping = cartTotal > 100 ? 0 : 9.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <ShoppingBag size={64} strokeWidth={1} />
        <h1>Your cart is empty</h1>
        <p>Looks like you haven&apos;t added anything yet.</p>
        <Link href="/products" className="btn btn-primary btn-lg">
          Start Shopping
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className="section-label">Shopping</span>
            <h1 className="section-title">Your Cart</h1>
            <p className="section-subtitle">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
              cart
            </p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={clearCart}>
            <Trash2 size={16} />
            Clear Cart
          </button>
        </div>

        <div className={styles.layout}>
          {/* Cart Items */}
          <div className={styles.items}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="120px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemTop}>
                    <div>
                      <span className={styles.itemCategory}>
                        {item.category}
                      </span>
                      <Link
                        href={`/products/${item.id}`}
                        className={styles.itemName}
                      >
                        {item.name}
                      </Link>
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className={styles.itemBottom}>
                    <div className={styles.quantityCtrl}>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className={styles.itemTotal}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className={styles.summary}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>

              {/* Coupon */}
              <div className={styles.coupon}>
                <Tag size={16} />
                <input
                  type="text"
                  placeholder="Coupon code"
                  className={styles.couponInput}
                />
                <button className="btn btn-sm btn-secondary">Apply</button>
              </div>

              <div className={styles.summaryRows}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className={styles.free}>FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Tax (est.)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className={styles.summaryDivider} />
                <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                className="btn btn-primary btn-lg"
                style={{ width: "100%" }}
              >
                Proceed to Checkout
                <ArrowRight size={18} />
              </button>

              {/* Trust */}
              <div className={styles.trust}>
                <div className={styles.trustItem}>
                  <Truck size={16} />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className={styles.trustItem}>
                  <Shield size={16} />
                  <span>Secure SSL encrypted checkout</span>
                </div>
              </div>
            </div>

            <Link
              href="/products"
              className={styles.continueLink}
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
