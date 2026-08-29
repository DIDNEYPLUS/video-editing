/* =========================================================
   AFFILIATE LINK — SINGLE SOURCE OF TRUTH
   Replace the URL below with your real Fiverr affiliate link.
   Every affiliate CTA on this site reads from this one variable,
   so updating it here updates every button on the page.
========================================================= */
const AFFILIATE_LINK = "YOUR_FIVERR_AFFILIATE_LINK_HERE";

// ---------------------------------------------------------
// "What kind of video?" category data
// ---------------------------------------------------------
const svgIcon = (path) => `<svg viewBox="0 0 24 24" fill="none">${path}</svg>`;

const CATEGORY_DATA = [
  { icon: svgIcon('<rect x="3" y="5.5" width="18" height="13" rx="4" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 9.5 15 12l-4.5 2.5v-5Z" fill="currentColor"/>'), name: "YouTube", desc: "Long-form videos, tutorials & channels." },
  { icon: svgIcon('<path d="M13 3 5 13.5h5.2L10 21l8-10.5h-5.2L13 3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>'), name: "Short-Form", desc: "Fast cuts built for short attention spans." },
  { icon: svgIcon('<rect x="7" y="2.5" width="10" height="19" rx="3" stroke="currentColor" stroke-width="1.4"/><path d="M11 19.2h2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>'), name: "TikTok / Reels", desc: "Native-feeling edits for social feeds." },
  { icon: svgIcon('<rect x="9.5" y="2.5" width="5" height="10" rx="2.5" stroke="currentColor" stroke-width="1.4"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/>'), name: "Podcast", desc: "Video podcast editing & highlight clips." },
  { icon: svgIcon('<rect x="2.5" y="8" width="19" height="9" rx="4.5" stroke="currentColor" stroke-width="1.4"/><path d="M7 10.5v4M5 12.5h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="16" cy="11.3" r="1" fill="currentColor"/><circle cx="18.3" cy="13.6" r="1" fill="currentColor"/>'), name: "Gaming", desc: "Gameplay edits, montages & highlights." },
  { icon: svgIcon('<rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.4"/>'), name: "Business", desc: "Corporate and internal-facing video." },
  { icon: svgIcon('<path d="M3 10v4l6 1.5V8.5L3 10Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 8.5 19 5v14L9 15.5" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 15.5 7 20" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>'), name: "Ads", desc: "Performance-focused promotional cuts." },
  { icon: svgIcon('<path d="M12 20.5s-8-4.9-8-11A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8 3.5c0 6.1-8 11-8 11Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>'), name: "Wedding", desc: "Cinematic edits of your wedding footage." },
  { icon: svgIcon('<circle cx="12" cy="10" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M9.5 20h5M10 22h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M12 4v1.2M12 15v-3l2-1.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>'), name: "Explainer", desc: "Clear, structured explainer videos." },
  { icon: svgIcon('<path d="M2.5 15.5 21 8.6c1-.37 1.9.6 1.5 1.6l-7 17.4-2.7-6.6-6.6-2.7 17.4-7-16.1 6.5Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" transform="rotate(20 12 12)"/>'), name: "Travel", desc: "Cinematic travel and adventure films." },
];

// ---------------------------------------------------------
// Wire up every affiliate CTA to the single AFFILIATE_LINK
// ---------------------------------------------------------
function applyAffiliateLinks(){
  document.querySelectorAll("[data-affiliate]").forEach((el) => {
    el.setAttribute("href", AFFILIATE_LINK);
  });
}

// ---------------------------------------------------------
// Render category cards
// ---------------------------------------------------------
function renderCategories(){
  const grid = document.querySelector(".category-grid");
  if (!grid) return;

  grid.innerHTML = CATEGORY_DATA.map((cat) => `
    <a class="cat-card reveal"
       href="${AFFILIATE_LINK}"
       data-affiliate
       data-cta="category-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}"
       target="_blank"
       rel="nofollow sponsored noopener">
      <span class="cat-icon" aria-hidden="true">${cat.icon}</span>
      <h3>${cat.name}</h3>
      <p>${cat.desc}</p>
      <span class="cat-link">Explore Editors →</span>
    </a>
  `).join("");
}

// ---------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------
function initNavToggle(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------------------------------------------------------
// Accessible FAQ accordion
// ---------------------------------------------------------
function initAccordion(){
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((trigger) => {
    const panel = trigger.closest(".accordion-item").querySelector(".accordion-panel");
    panel.style.maxHeight = "0px";

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      // Close all
      triggers.forEach((t) => {
        t.setAttribute("aria-expanded", "false");
        const p = t.closest(".accordion-item").querySelector(".accordion-panel");
        p.style.maxHeight = "0px";
      });

      // Open the clicked one, unless it was already open
      if (!isOpen){
        trigger.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

// ---------------------------------------------------------
// Scroll reveal for sections/cards
// ---------------------------------------------------------
function initScrollReveal(){
  const targets = document.querySelectorAll(
    ".value-card, .specialty-card, .step, .checklist li, .cat-card"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)){
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el) => observer.observe(el));
}

// ---------------------------------------------------------
// Mobile sticky CTA
// ---------------------------------------------------------
function initMobileStickyCta(){
  const bar = document.createElement("div");
  bar.className = "mobile-sticky-cta";
  bar.innerHTML = `
    <a href="${AFFILIATE_LINK}" class="btn btn-primary" data-affiliate data-cta="mobile-sticky"
       target="_blank" rel="nofollow sponsored noopener">Find a Video Editor →</a>
  `;
  document.body.appendChild(bar);

  const hero = document.querySelector(".hero");
  if (!hero || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(([entry]) => {
    bar.style.display = entry.isIntersecting ? "none" : "block";
  }, { threshold: 0 });
  observer.observe(hero);
}

// ---------------------------------------------------------
// Footer year
// ---------------------------------------------------------
function setFooterYear(){
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ---------------------------------------------------------
// Init
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  applyAffiliateLinks();
  initNavToggle();
  initAccordion();
  initScrollReveal();
  initMobileStickyCta();
  setFooterYear();
});
