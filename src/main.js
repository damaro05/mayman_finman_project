(() => {
  "use strict";

  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /** Escapes text before it reaches innerHTML. */
  const esc = (v) =>
    String(v).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);

  const ticks = (items) =>
    `<ul class="ticks">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

  const ICONS = {
    compass: '<circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 10.5 10.5 8.5 15.5 13.5 13.5"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5l-9.1 9.1a2.8 2.8 0 0 1-4-4Z"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    shield: '<path d="M12 2 4 5.5V11c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5.5Z"/>',
  };

  const icon = (name) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.box}</svg>`;

  /* ---------- Brand + nav ---------- */
  $$("[data-brand-name]").forEach((el) => (el.textContent = S.brand.name));
  $$("[data-brand-suffix]").forEach((el) => (el.textContent = S.brand.suffix));
  $$("[data-brand-tagline]").forEach((el) => (el.textContent = S.brand.tagline));
  document.title = `${S.brand.name} ${S.brand.suffix} - ${S.brand.tagline}`;

  $("#nav").innerHTML = S.nav
    .map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`)
    .join("");

  /* ---------- Hero ---------- */
  $("[data-hero-eyebrow]").textContent = S.hero.eyebrow;
  // Italicize the last two words of the headline for the serif accent.
  const words = S.hero.title.split(" ");
  $("[data-hero-title]").innerHTML =
    esc(words.slice(0, -2).join(" ")) + " <em>" + esc(words.slice(-2).join(" ")) + "</em>";
  $("[data-hero-subtitle]").textContent = S.hero.subtitle;

  const setCta = (el, cta) => {
    el.textContent = cta.label;
    el.href = cta.href;
  };
  setCta($("[data-hero-cta1]"), S.hero.primaryCta);
  setCta($("[data-hero-cta2]"), S.hero.secondaryCta);

  $("[data-hero-stats]").innerHTML = S.hero.stats
    .map((s) => `<div><dt>${esc(s.value)}</dt><dd>${esc(s.label)}</dd></div>`)
    .join("");

  /* ---------- Thesis ---------- */
  $("[data-thesis-title]").textContent = S.thesis.title;
  $("[data-thesis-lead]").textContent = S.thesis.lead;
  $("[data-thesis-body]").innerHTML = S.thesis.body.map((p) => `<p>${esc(p)}</p>`).join("");
  $("[data-thesis-pillars]").innerHTML = S.thesis.pillars
    .map(
      (p) => `<article class="pillar">${icon(p.icon)}
        <div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></article>`
    )
    .join("");

  /* ---------- Services ---------- */
  $("[data-services]").innerHTML = S.services
    .map(
      (s) => `<article class="card">
        <span class="tag">${esc(s.tag)}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.text)}</p>
        ${ticks(s.bullets)}
      </article>`
    )
    .join("");

  /* ---------- Products ---------- */
  $("[data-products]").innerHTML = S.products
    .map(
      (p) => `<article class="product">
        <div class="product-top">
          <span class="product-code">${esc(p.code)}</span>
          <span class="stage">${esc(p.stage)}</span>
        </div>
        <h3>${esc(p.name)}</h3>
        <p class="pitch">${esc(p.pitch)}</p>
        <p>${esc(p.text)}</p>
        ${ticks(p.features)}
      </article>`
    )
    .join("");

  /* ---------- Industries ---------- */
  $("[data-industries]").innerHTML = S.industries
    .map((i) => `<li><strong>${esc(i.name)}</strong><span>${esc(i.note)}</span></li>`)
    .join("");

  /* ---------- Approach ---------- */
  $("[data-approach]").innerHTML = S.approach
    .map(
      (a) => `<li class="step">
        <span class="step-num">${esc(a.step)}</span>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.text)}</p>
      </li>`
    )
    .join("");

  /* ---------- Engagement ---------- */
  $("[data-engagement]").innerHTML = S.engagement
    .map(
      (e) => `<article class="plan${e.featured ? " featured" : ""}">
        <h3>${esc(e.name)}</h3>
        <p class="price">${esc(e.price)}</p>
        <p>${esc(e.text)}</p>
        ${ticks(e.items)}
      </article>`
    )
    .join("");

  /* ---------- Open questions (accordion) ---------- */
  $("[data-questions-title]").textContent = S.openQuestions.title;
  $("[data-questions-lead]").textContent = S.openQuestions.lead;
  $("[data-questions]").innerHTML = S.openQuestions.items
    .map(
      (item, i) => `<div class="q${i === 0 ? " open" : ""}">
        <button class="q-head" aria-expanded="${i === 0}" aria-controls="q-body-${i}">
          <span>${esc(item.q)}</span><span class="q-icon" aria-hidden="true">+</span>
        </button>
        <div class="q-body" id="q-body-${i}"><div><p>${esc(item.note)}</p></div></div>
      </div>`
    )
    .join("");

  $("[data-questions]").addEventListener("click", (ev) => {
    const head = ev.target.closest(".q-head");
    if (!head) return;
    const q = head.parentElement;
    const open = q.classList.toggle("open");
    head.setAttribute("aria-expanded", String(open));
  });

  /* ---------- Contact ---------- */
  const contact = $("[data-contact-link]");
  contact.textContent = `Email ${S.brand.email}`;
  contact.href = `mailto:${S.brand.email}?subject=${encodeURIComponent(
    `${S.brand.name} ${S.brand.suffix} - proposal feedback`
  )}`;

  /* ---------- Scroll behaviour ---------- */
  const header = $("#header");
  addEventListener(
    "scroll",
    () => header.classList.toggle("scrolled", scrollY > 8),
    { passive: true }
  );

  const navToggle = $("#navToggle");
  const nav = $("#nav");
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  // Scroll-position based so that anchor jumps and fast scrolling never leave
  // content stuck at opacity 0.
  let pending = $$(".reveal, .card, .product, .pillar, .step, .plan, .industries li");
  let queued = false;

  const sweep = () => {
    queued = false;
    // Fall back to revealing everything if the page has no measurable viewport
    // (hidden tab, iframe, print).
    const limit = innerHeight ? innerHeight - 60 : Infinity;
    let shown = 0;
    pending = pending.filter((el) => {
      if (el.getBoundingClientRect().top > limit) return true;
      el.style.transitionDelay = `${Math.min(shown++, 5) * 60}ms`;
      el.classList.add("is-visible");
      return false;
    });
  };

  const scheduleSweep = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(sweep);
  };

  addEventListener("scroll", scheduleSweep, { passive: true });
  addEventListener("resize", scheduleSweep);
  sweep();

  const sections = $$("main section[id]");
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        $$("#nav a").forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`)
        );
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach((s) => spy.observe(s));
})();
