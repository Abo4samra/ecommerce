"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import styles from "./CartSidebar.module.css";

export default function CartSidebar() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={styles.backdrop}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className={styles.sidebar}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <ShoppingBag size={22} />
            <h2>Your Cart</h2>
            <span className={styles.count}>{cartCount}</span>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        {cartItems.length === 0 ? (
          <div className={styles.empty}>
            <ShoppingBag size={48} strokeWidth={1} />
            <p>Your cart is empty</p>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.itemImage}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.itemDetails}>
                    <Link
                      href={`/products/${item.id}`}
                      className={styles.itemName}
                      onClick={() => setIsCartOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <span className={styles.itemPrice}>
                      ${item.price.toFixed(2)}
                    </span>
                    <div className={styles.quantityRow}>
                      <div className={styles.quantityCtrl}>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <div className={styles.subtotal}>
                <span>Subtotal</span>
                <span className={styles.totalPrice}>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className={styles.shipping}>
                Shipping & taxes calculated at checkout
              </p>
              <Link
                href="/cart"
                className="btn btn-primary btn-lg"
                style={{ width: "100%" }}
                onClick={() => setIsCartOpen(false)}
              >
                Checkout
                <ArrowRight size={18} />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
