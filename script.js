:root {
  --ivory: #f5f0e8;
  --ivory-deep: #e8dcc2;
  --stone: #d1b38c;
  --bronze: #a07b52;
  --olive: #3d4a3f;
  --charcoal: #1d1d1a;
  --muted: #6c645d;
  --line: rgba(29, 29, 26, 0.12);
  --card: #fbf8f4;
  --shadow: 0 20px 54px rgba(22, 18, 12, 0.08);
  --radius: 22px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Manrope", sans-serif;
  background: var(--ivory);
  color: var(--charcoal);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea,
select {
  font: inherit;
}

.container {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.section-space {
  padding: 7rem 0;
}

.eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.22rem;
  text-transform: uppercase;
  color: var(--bronze);
  margin-bottom: 1rem;
  font-weight: 700;
}

h1,
h2,
h3,
h4 {
  font-family: "Cormorant Garamond", serif;
  color: var(--charcoal);
  line-height: 0.96;
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
  font-weight: 600;
}

h1 {
  font-size: clamp(3.5rem, 7vw, 7rem);
}

h2 {
  font-size: clamp(2.6rem, 5vw, 4rem);
}

h3 {
  font-size: clamp(2rem, 3vw, 2.5rem);
}

p {
  margin: 0 0 1rem;
  color: rgba(29, 29, 26, 0.8);
  font-size: 1.05rem;
}

.lead {
  font-size: 1.25rem;
  max-width: 700px;
  margin-inline: auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(245, 240, 232, 0.84);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 86px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 0;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  background: var(--olive);
  color: var(--ivory);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08rem;
}

.brand strong,
.brand small {
  display: block;
}

.brand strong {
  font-size: 0.9rem;
  letter-spacing: 0.12rem;
  font-weight: 800;
}

.brand small {
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.06rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.82rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  color: rgba(29, 29, 26, 0.8);
}

.main-nav a {
  position: relative;
  padding: 0.3rem 0;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.2rem;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.25s ease;
}

.main-nav a:hover::after,
.main-nav a.active::after {
  transform: scaleX(1);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.85rem 1.5rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--olive);
  color: var(--ivory);
  box-shadow: 0 12px 30px rgba(61, 74, 63, 0.18);
}

.btn-secondary {
  border-color: rgba(29, 29, 26, 0.18);
  background: rgba(255, 255, 255, 0.1);
}

.btn-ghost {
  border-color: rgba(29, 29, 26, 0.14);
  background: transparent;
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 0;
  width: 46px;
  height: 46px;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--charcoal);
  margin: 5px auto;
  border-radius: 999px;
}

.hero {
  position: relative;
  min-height: 760px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  inset: 0;
  background-image: url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80");
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(17, 19, 16, 0.60), rgba(17, 19, 16, 0.20));
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: white;
  padding: 5rem 0 4rem;
}

.hero-content .eyebrow {
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.2rem;
}

.hero-content h1 {
  color: #fff;
  margin-bottom: 1.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.value-strip {
  background: #efe7d9;
  border-top: 1px solid rgba(29, 29, 26, 0.08);
  border-bottom: 1px solid rgba(29, 29, 26, 0.08);
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
  padding: 1.2rem 0;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  font-weight: 700;
  color: rgba(29, 29, 26, 0.72);
}

.value-item .icon {
  display: inline-flex;
  width: 1.55rem;
  height: 1.55rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: rgba(61, 74, 63, 0.08);
  color: var(--olive);
  font-size: 0.9rem;
}

.intro-layout,
.experience-layout,
.about-layout,
.contact-wrap,
.location-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 3rem;
  align-items: center;
}

.intro-image-wrap,
.experience-photo {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.intro-image-wrap img,
.experience-photo img {
  width: 100%;
  height: 560px;
  object-fit: cover;
}

.section-head {
  text-align: center;
  margin-bottom: 3rem;
}

.align-left {
  text-align: left;
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
}

.rooms-grid-page {
  grid-template-columns: 1fr;
}

.room-card {
  background: rgba(255, 255, 255, 0.36);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(29, 29, 26, 0.04);
}

.room-card img {
  width: 100%;
  height: 380px;
  object-fit: cover;
}

.room-card-content {
  padding: 1.5rem 1.4rem 1.6rem;
}

.room-card h3 {
  margin-bottom: 0.8rem;
}

.room-card p {
  margin-bottom: 1rem;
}

.room-card ul {
  margin: 0 0 1.3rem;
  padding-left: 1.1rem;
  color: rgba(29, 29, 26, 0.8);
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  color: var(--muted);
}

.card-meta a {
  color: var(--olive);
}

.experience { 
  background: linear-gradient(180deg, rgba(216,203,176,0.14), rgba(216,203,176,0.02));
}

.experience-copy .btn {
  margin-top: 0.5rem;
}

.location-wrap {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.location-grid {
  gap: 2rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: grid;
  gap: 0.8rem;
}

.features-list li {
  position: relative;
  padding-left: 1.4rem;
  color: rgba(29, 29, 26, 0.8);
}

.features-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--bronze);
}

.map-box {
  min-height: 380px;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background:
    linear-gradient(rgba(27, 33, 31, 0.18), rgba(27, 33, 31, 0.18)),
    url("https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 1.5rem;
}

.map-card {
  width: min(100%, 320px);
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  border: 1px solid rgba(29, 29, 26, 0.08);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.15rem;
  box-shadow: var(--shadow);
}

.map-pin {
  color: var(--olive);
  font-size: 1.4rem;
}

.map-card strong,
.map-card small {
  display: block;
}

.map-card small {
  color: var(--muted);
}

.rating-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.4rem 1.5rem;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255,255,255,0.22);
  margin-bottom: 2rem;
}

.rating {
  display: block;
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--olive);
  line-height: 1;
}

.score-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.8rem 1.2rem;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: rgba(29,29,26,0.76);
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.review-grid blockquote {
  margin: 0;
  background: rgba(255,255,255,0.38);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 2rem 1.4rem;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.1rem, 3vw, 2.6rem);
  line-height: 1.1;
  color: var(--charcoal);
}

.review-grid footer {
  display: block;
  margin-top: 1rem;
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
}

.review-action {
  text-align: center;
  margin-top: 2.5rem;
}

.gallery-editorial {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.2fr;
  gap: 1rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 20px;
  min-height: 280px;
  position: relative;
  box-shadow: var(--shadow);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img,
.lightbox-item:hover img {
  transform: scale(1.02);
}

.gallery-item.tall {
  grid-row: span 2;
  min-height: 600px;
}

.gallery-item.wide {
  grid-column: span 2;
}

.gallery-grid-page {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.lightbox-item {
  overflow: hidden;
  border-radius: 18px;
  min-height: 260px;
  cursor: pointer;
}

.lightbox-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.lightbox-item.wide {
  grid-column: span 2;
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(12, 12, 10, 0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 50;
}

.lightbox.is-visible {
  opacity: 1;
  pointer-events: auto;
}

.lightbox img {
  max-width: min(90vw, 1100px);
  max-height: 86vh;
  border-radius: 18px;
  box-shadow: 0 30px 80px rgba(0,0,0,0.28);
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.about-panel {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.34);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: 0 18px 42px rgba(29, 29, 26, 0.04);
}

.about-panel p {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.05;
  margin: 0;
}

.contact-wrap {
  align-items: stretch;
}

.contact-list {
  display: grid;
  gap: 1.4rem;
  margin-top: 2rem;
}

.contact-list div {
  display: grid;
  gap: 0.4rem;
}

.contact-list span {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: var(--muted);
}

.contact-list a,
.contact-list p {
  font-size: 1.15rem;
  color: var(--charcoal);
}

.contact-card {
  background: rgba(255,255,255,0.35);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.site-footer {
  background: #1d1d1a;
  color: rgba(255,255,255,0.8);
  padding-top: 4rem;
}

.footer-wrap {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 2rem;
}

.footer-brand .brand-mark {
  background: #d8cbb0;
  color: var(--charcoal);
}

.site-footer h4,
.site-footer p,
.site-footer li,
.site-footer a {
  color: rgba(255,255,255,0.8);
}

.site-footer h4 {
  margin-bottom: 1rem;
  font-size: 1.7rem;
}

.site-footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.55rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.12);
  padding: 1.2rem 0 2rem;
  text-align: center;
}

.page-hero {
  background: linear-gradient(180deg, rgba(29,29,26,0.3), rgba(29,29,26,0.3)), url("https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
  min-height: 420px;
  display: flex;
  align-items: end;
  color: white;
}

.compact-hero {
  min-height: 300px;
}

.page-hero .eyebrow,
.page-hero h1 {
  color: white;
}

.room-hero {
  background-image: linear-gradient(180deg, rgba(29,29,26,0.3), rgba(29,29,26,0.3)), url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80");
}

.room-detail-wrap {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  align-items: start;
}

.gallery-rail {
  display: grid;
  gap: 1rem;
}

.gallery-rail img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.room-overview {
  background: rgba(255,255,255,0.28);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 2rem;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.spec-grid div {
  padding: 1rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255,255,255,0.15);
}

.spec-grid span {
  display: block;
  color: var(--muted);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  margin-bottom: 0.4rem;
}

.detail-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 980px) {
  .main-nav {
    position: absolute;
    top: 86px;
    left: 0;
    right: 0;
    background: rgba(245,240,232,0.98);
    border-bottom: 1px solid var(--line);
    display: none;
    flex-direction: column;
    padding: 1.2rem 1rem 1.4rem;
    align-items: flex-start;
    gap: 1rem;
  }

  .main-nav.is-open {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }

  .value-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .intro-layout,
  .experience-layout,
  .about-layout,
  .contact-wrap,
  .location-grid,
  .room-detail-wrap,
  .footer-wrap {
    grid-template-columns: 1fr;
  }

  .rooms-grid,
  .review-grid {
    grid-template-columns: 1fr;
  }

  .gallery-editorial {
    grid-template-columns: 1fr 1fr;
  }

  .gallery-item.wide {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .section-space {
    padding: 5rem 0;
  }

  .hero {
    min-height: 620px;
  }

  .hero-content {
    padding-top: 4rem;
  }

  .hero-actions,
  .detail-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .value-grid,
  .spec-grid,
  .gallery-grid-page {
    grid-template-columns: 1fr;
  }

  .gallery-editorial {
    grid-template-columns: 1fr;
  }

  .gallery-item.wide,
  .gallery-item.tall {
    grid-column: auto;
    grid-row: auto;
    min-height: 260px;
  }

  .rating-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .score-list {
    justify-content: flex-start;
  }
}
