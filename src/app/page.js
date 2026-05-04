"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, Shield, RotateCcw, Headphones, Star, Zap } from "lucide-react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const trendingProducts = products.filter((p) => p.badge === "Trending" || p.badge === "Best Seller" || p.badge === "New");

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero.png"
            alt="LUXE lifestyle"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <span className={`section-label animate-fade-in-up`}>New Collection 2026</span>
          <h1 className={`animate-fade-in-up delay-1 ${styles.heroTitle}`}>
            Elevate Your <br />
            <span className={styles.heroAccent}>Everyday</span>
          </h1>
          <p className={`animate-fade-in-up delay-2 ${styles.heroDesc}`}>
            Curated premium products designed for those who appreciate
            the finer things. Experience luxury redefined.
          </p>
          <div className={`animate-fade-in-up delay-3 ${styles.heroCtas}`}>
            <Link href="/products" className="btn btn-primary btn-lg">
              Shop Collection
              <ArrowRight size={18} />
            </Link>
            <Link href="/products?category=Audio" className="btn btn-secondary btn-lg">
              Explore Audio
            </Link>
          </div>

          {/* Stats */}
          <div className={`animate-fade-in-up delay-4 ${styles.heroStats}`}>
            <div className={styles.stat}>
              <span className={styles.statNum}>50K+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>200+</span>
              <span className={styles.statLabel}>Premium Products</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>4.9</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES BAR ═══════════ */}
      <section className={styles.features}>
        <div className={`container ${styles.featuresGrid}`}>
          {[
            { icon: <Truck size={24} />, title: "Free Shipping", desc: "On orders over $100" },
            { icon: <Shield size={24} />, title: "Secure Payment", desc: "100% protected checkout" },
            { icon: <RotateCcw size={24} />, title: "Easy Returns", desc: "30-day return policy" },
            { icon: <Headphones size={24} />, title: "24/7 Support", desc: "Always here to help" },
          ].map((feat, i) => (
            <div
              key={feat.title}
              className={`${styles.featureCard} animate-fade-in-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.featureIcon}>{feat.icon}</div>
              <div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ FEATURED PRODUCTS ═══════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="section-label">Curated for You</span>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">
                Hand-picked products that define premium quality and design excellence.
              </p>
            </div>
            <Link href="/products" className="btn btn-outline btn-sm">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.productsGrid}>
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROMO BANNER ═══════════ */}
      <section className={styles.promo}>
        <div className={`container ${styles.promoInner}`}>
          <div className={styles.promoContent}>
            <div className={styles.promoBadge}>
              <Zap size={14} />
              Limited Time Offer
            </div>
            <h2 className={styles.promoTitle}>
              Summer Sale <span className={styles.heroAccent}>Up to 40% Off</span>
            </h2>
            <p className={styles.promoDesc}>
              Don&apos;t miss out on our biggest sale of the season.
              Premium products at unbeatable prices.
            </p>
            <Link href="/products" className="btn btn-primary btn-lg">
              Shop the Sale <ArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.promoImage}>
            <Image
              src="/images/headphones.png"
              alt="Summer Sale"
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════ MORE PRODUCTS ═══════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="section-label">Popular Right Now</span>
              <h2 className="section-title">Trending Products</h2>
            </div>
          </div>

          <div className={styles.productsGrid}>
            {products.slice(4, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className={styles.testimonials}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          <div className={styles.testimonialGrid}>
            {[
              {
                name: "Sarah M.",
                role: "Verified Buyer",
                text: "The Aura Pro headphones completely changed my commute. The noise cancellation is incredible and they look absolutely stunning.",
                rating: 5,
              },
              {
                name: "James K.",
                role: "Verified Buyer",
                text: "LUXE is my go-to for premium products. The quality is unmatched and the customer service is exceptional. Truly a luxury experience.",
                rating: 5,
              },
              {
                name: "Elena R.",
                role: "Verified Buyer",
                text: "Bought the Chrono Luxe watch as a gift and it exceeded all expectations. The packaging alone made it feel like a special occasion.",
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={t.name}
                className={`${styles.testimonialCard} animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className={styles.testimonialStars}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>
                <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
