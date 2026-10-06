(() => {
  "use strict";

  const site = window.SITE;
  const one = (selector, root = document) => root.querySelector(selector);
  const all = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  const icons = {
    compass: '<circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 10.5 10.5 8.5 15.5 13.5 13.5"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5l-9.1 9.1a2.8 2.8 0 0 1-4-4Z"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    shield: '<path d="M12 2 4 5.5V11c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5.5Z"/>',
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
  const bullets = (items) => `<ul class="ticks">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

  all("[data-brand-name]").forEach((element) => { element.textContent = site.brand.name; });
  all("[data-brand-suffix]").forEach((element) => { element.textContent = site.brand.suffix; });
  one("#nav").innerHTML = site.nav.map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`).join("");

  one("[data-hero-eyebrow]").textContent = site.hero.eyebrow;
  const titleWords = site.hero.title.split(" ");
  one("[data-hero-title]").innerHTML = `${escapeHtml(titleWords.slice(0, -2).join(" "))} <em>${escapeHtml(titleWords.slice(-2).join(" "))}</em>`;
  one("[data-hero-subtitle]").textContent = site.hero.subtitle;
  [["[data-hero-cta1]", site.hero.primaryCta], ["[data-hero-cta2]", site.hero.secondaryCta]].forEach(([selector, cta]) => {
    one(selector).textContent = cta.label;
    one(selector).href = cta.href;
  });
  one("[data-hero-stats]").innerHTML = site.hero.stats.map((stat) => `<div><dt>${escapeHtml(stat.value)}</dt><dd>${escapeHtml(stat.label)}</dd></div>`).join("");

  one("[data-thesis-title]").textContent = site.thesis.title;
  one("[data-thesis-lead]").textContent = site.thesis.lead;
  one("[data-thesis-body]").innerHTML = site.thesis.body.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
  one("[data-thesis-pillars]").innerHTML = site.thesis.pillars.map((pillar) => `<article class="pillar">${icon(pillar.icon)}<div><h3>${escapeHtml(pillar.title)}</h3><p>${escapeHtml(pillar.text)}</p></div></article>`).join("");

  one("[data-services]").innerHTML = site.services.map((service) => `<article class="card"><span class="tag">${escapeHtml(service.tag)}</span><h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.text)}</p>${bullets(service.bullets)}</article>`).join("");
  one("[data-approach]").innerHTML = site.approach.map((step) => `<li class="step"><span class="step-num">${escapeHtml(step.step)}</span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></li>`).join("");

  one("[data-questions-title]").textContent = site.openQuestions.title;
  one("[data-questions-lead]").textContent = site.openQuestions.lead;
  one("[data-questions]").innerHTML = site.openQuestions.items.map((item, index) => `<div class="q${index === 0 ? " open" : ""}"><button class="q-head" aria-expanded="${index === 0}" aria-controls="q-body-${index}"><span>${escapeHtml(item.q)}</span><span class="q-icon" aria-hidden="true">+</span></button><div class="q-body" id="q-body-${index}"><div><p>${escapeHtml(item.note)}</p></div></div></div>`).join("");
  one("[data-questions]").addEventListener("click", (event) => {
    const button = event.target.closest(".q-head");
    if (!button) return;
    button.setAttribute("aria-expanded", String(button.parentElement.classList.toggle("open")));
  });

  const contact = one("[data-contact-link]");
  contact.textContent = "Book a first conversation";
  contact.href = `mailto:${site.brand.email}?subject=${encodeURIComponent("Let's improve the way our business works")}`;

  const header = one("#header");
  const nav = one("#nav");
  const navToggle = one("#navToggle");
  addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 8), { passive: true });
  all('a[href^="#"]').forEach((link) => link.addEventListener("click", () => requestAnimationFrame(reveal)));
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", () => nav.classList.remove("open"));

  let pending = all(".reveal, .card, .pillar, .step");
  const reveal = () => {
    const limit = innerHeight ? innerHeight - 50 : Infinity;
    pending = pending.filter((element, index) => {
      if (element.getBoundingClientRect().top > limit) return true;
      element.style.transitionDelay = `${Math.min(index, 4) * 55}ms`;
      element.classList.add("is-visible");
      return false;
    });
  };
  addEventListener("scroll", reveal, { passive: true });
  addEventListener("hashchange", reveal);
  reveal();
})();
