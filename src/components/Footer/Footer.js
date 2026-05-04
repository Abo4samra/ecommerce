"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Top Row */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoAccent}>LUXE</span>
              <span className={styles.logoDot}>.</span>
            </Link>
            <p className={styles.tagline}>
              Premium lifestyle products for the modern connoisseur. Curated
              with taste, delivered with care.
            </p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h4>Shop</h4>
              <ul>
                <li><Link href="/products">All Products</Link></li>
                <li><Link href="/products?category=Audio">Audio</Link></li>
                <li><Link href="/products?category=Accessories">Accessories</Link></li>
                <li><Link href="/products?category=Electronics">Electronics</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Company</h4>
              <ul>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Careers <ArrowUpRight size={12} /></Link></li>
                <li><Link href="#">Press</Link></li>
                <li><Link href="#">Blog</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Support</h4>
              <ul>
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">Shipping</Link></li>
                <li><Link href="#">Returns</Link></li>
                <li><Link href="#">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div>
            <h4>Stay in the loop</h4>
            <p>Get exclusive offers, new arrivals, and insider-only discounts.</p>
          </div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputWrap}>
              <Mail size={18} className={styles.inputIcon} />
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
