'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Tentang', href: '/tentang' },
  { label: 'Gerakan', href: '/gerakan' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Kabar', href: '/kabar' },
  { label: 'Pengurus', href: '/pengurus' },
  { label: 'Arsip', href: '/arsip' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`siteHeader ${scrolled ? 'scrolled' : ''} ${
          mobileOpen ? 'menuActive' : ''
        }`}
        role="banner"
      >
        <div className="headerInner">
          <Link
            className="brand"
            href="/"
            aria-label="KMNU IPB — Kembali ke Beranda"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/assets/logo.png"
              alt="Logo Resmi KMNU IPB"
              width={40}
              height={40}
              className="brandLogo"
              priority
            />
            <div className="brandText">
              <span className="brandPrimary">KMNU</span>
              <small className="brandSub">IPB</small>
            </div>
          </Link>

          <nav className="nav" aria-label="Navigasi Utama">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`navLink ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={`menuToggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          >
            <span className="hamburgerLine lineTop" />
            <span className="hamburgerLine lineMid" />
            <span className="hamburgerLine lineBot" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="mobileBackdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav"
        className={`mobileDrawer ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobileDrawerHeader">
          <div className="mobileBrandBadge">
            <Image
              src="/assets/logo.png"
              alt="Logo Resmi KMNU IPB"
              width={42}
              height={42}
              className="mobileBrandLogo"
            />
            <div className="mobileBrandInfo">
              <div className="mobileBrandTitle">
                <span className="brandPrimary">KMNU</span>
                <small className="brandSub">IPB</small>
              </div>
              <span className="eyebrow" style={{ color: 'var(--gold)', fontSize: '0.62rem' }}>
                MENU NAVIGASI
              </span>
            </div>
          </div>
        </div>
        <nav className="mobileNavList" aria-label="Navigasi Mobile">
          {navLinks.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobileNavLink ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setMobileOpen(false)}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <span className="navIndex">0{idx + 1}</span>
                <span className="navText">{item.label}</span>
                <span className="navArrow">↗</span>
              </Link>
            );
          })}
        </nav>
        <div className="mobileDrawerFooter">
          <p className="eyebrow" style={{ color: 'var(--muted)', marginBottom: 8 }}>
            KMNU IPB UNIVERSITY
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--ink)', opacity: 0.8 }}>
            Merawat tradisi · Mengembangkan ilmu · Berkhidmah
          </p>
        </div>
      </div>
    </>
  );
}
