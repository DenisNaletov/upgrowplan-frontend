'use client';

import Image from 'next/image';
import { useState } from 'react';
import ProductsCarousel from '@/components/ProductsCarousel';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor: '#d7ecf6' }}>
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <Image src="/LogoUpGrowSmall2.png" alt="Up&Grow Logo" width={40} height={40} />
              <span className="ms-2" style={{ color: '#1e6078', fontWeight: 'bold' }}>Up&Grow</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item"><a className="nav-link" href="/products" style={{ color: '#0785f6' }}>Продукты</a></li>
                <li className="nav-item"><a className="nav-link" href="#" style={{ color: '#0785f6' }}>Сервисы</a></li>
                <li className="nav-item"><a className="nav-link" href="#" style={{ color: '#0785f6' }}>Блог</a></li>
                <li className="nav-item"><a className="nav-link" href="#" style={{ color: '#0785f6' }}>О нас</a></li>
                <li className="nav-item"><a className="nav-link" href="/contacts" style={{ color: '#0785f6' }}>Контакты</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mt-5">
        {/* Призыв */}
        <section className="mb-5">
          <h1 style={{ color: '#1e6078' }}>Создаём бизнес‑планы нового поколения</h1>
          <p style={{ color: '#0785f6', fontWeight: '500' }}>
            У вас есть идея, и вы хотите превратить её в бизнес? Команда экспертов поможет вам сделать это грамотно —
            составить профессиональный бизнес‑план, чтобы убедить инвесторов и получить финансирование.
          </p>
          <p>
            Если вам не нужно вступление и готовы обсудить детали, заказать бизнес‑план или заполнить бриф:
          </p>
          <div className="d-flex gap-3">
            <a href="/contacts" className="btn btn-primary">Контакты</a>
            <a href="/brif" className="btn btn-outline-primary">Бриф</a>
          </div>
          <p className="mt-4" style={{ fontWeight: '500' }}>Ещё интересно? Листаем ниже!</p>
        </section>

        {/* Блок доверия */}
        <section className="mb-5">
          <h2 style={{ color: '#1e6078' }}>Мы делаем бизнес‑планы. Почему нам стоит доверять?</h2>
          <div className="row g-4 mt-3">
            <div className="col-md-3 col-6">
              <div className="border rounded p-3 h-100 shadow-sm">
                <h5>Общая привлечённая сумма финансирования — 2,45 млн $</h5>
                <a href="#" className="btn btn-link p-0">Подробнее →</a>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border rounded p-3 h-100 shadow-sm">
                <h5>Более 16 лет бизнес-планирование и анализа данных</h5>

                <a href="#" className="btn btn-link p-0">Подробнее →</a>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border rounded p-3 h-100 shadow-sm">
                <h5>Более 230 исполненных бизнес‑планов по всем отраслям</h5>
                <a href="#" className="btn btn-link p-0">Подробнее →</a>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border rounded p-3 h-100 shadow-sm">
                <h5>Высшее профильное образование членов команды</h5>
                <a href="#" className="btn btn-link p-0">Подробнее →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Карусель продуктов */}
        <ProductsCarousel />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#A8F000', color: '#000' }} className="py-3 mt-5">
        <div className="container d-flex justify-content-between flex-wrap">
          <div>© 2025 Up&Grow. Все права защищены.</div>
          <div>
            <a href="/policy" className="text-dark me-3">Политика конфиденциальности</a>
            <a href="/policy" className="text-dark">Пользовательское соглашение</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
