const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

function closeMenu() {
  if (!menu || !nav) return;
  nav.classList.remove("show");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Open menu");
}

if (menu && nav) {
  menu.setAttribute("aria-expanded", "false");
  menu.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("show");
    menu.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", event => {
    if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });
}

// Announcement message switcher
const announcements = [
  "⭐ GLOW WITH COURAGE — FASHION MADE FOR EVERY GIRL TO FEEL CONFIDENT, COMFORTABLE AND PROUD ⭐",
  "A BRAND. A MOVEMENT. A FUTURE. — DESIGNED FOR EVERY GIRL",
  "BE BOLD. BE BRAVE. BE YOU. ⭐"
];
let announcementIndex = 0;
const announcementMessage = document.getElementById("announcement-message");
function showAnnouncement(step) {
  announcementIndex = (announcementIndex + step + announcements.length) % announcements.length;
  if (announcementMessage) announcementMessage.textContent = announcements[announcementIndex];
}
document.getElementById("announcement-prev")?.addEventListener("click", () => showAnnouncement(-1));
document.getElementById("announcement-next")?.addEventListener("click", () => showAnnouncement(1));

// Hero carousel
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dots = document.getElementById("hero-dots");
let activeSlide = 0;
function showSlide(index) {
  if (!slides.length) return;
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === activeSlide);
    slide.setAttribute("aria-hidden", String(i !== activeSlide));
  });
  if (dots) {
    dots.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("active", i === activeSlide);
      dot.setAttribute("aria-current", i === activeSlide ? "true" : "false");
    });
  }
}
if (dots && slides.length) {
  slides.forEach((slide, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", "Show featured image " + (i + 1));
    dot.addEventListener("click", () => showSlide(i));
    dots.appendChild(dot);
  });
  showSlide(0);
}
document.getElementById("hero-prev")?.addEventListener("click", () => showSlide(activeSlide - 1));
document.getElementById("hero-next")?.addEventListener("click", () => showSlide(activeSlide + 1));

// Search panel and live product filtering
const searchToggle = document.getElementById("search-toggle");
const searchPanel = document.getElementById("search-panel");
const searchInput = document.getElementById("product-search");
searchToggle?.addEventListener("click", () => {
  if (!searchPanel) return;
  searchPanel.hidden = !searchPanel.hidden;
  if (!searchPanel.hidden) searchInput?.focus();
});
document.getElementById("search-close")?.addEventListener("click", () => {
  if (searchPanel) searchPanel.hidden = true;
  if (searchInput) searchInput.value = "";
  filterProducts("");
});
function filterProducts(query) {
  const q = query.trim().toLowerCase();
  document.querySelectorAll(".product-card").forEach(card => {
    const text = (card.dataset.name || "") + " " + (card.dataset.category || "");
    card.hidden = !text.toLowerCase().includes(q);
  });
}
searchInput?.addEventListener("input", () => filterProducts(searchInput.value));

// Demonstration-only shopping bag. No checkout or payment processing.
const bag = [];
const drawer = document.getElementById("cart-drawer");
const backdrop = document.getElementById("drawer-backdrop");
const cartCount = document.getElementById("cart-count");
const drawerCount = document.getElementById("drawer-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
function money(value) {
  return "R " + value.toLocaleString("en-ZA", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
function renderBag() {
  const count = bag.reduce((sum, item) => sum + item.qty, 0);
  const total = bag.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (cartCount) {
    cartCount.textContent = String(count);
    cartCount.style.display = count ? "inline-flex" : "none";
  }
  if (drawerCount) drawerCount.textContent = "(" + count + ")";
  if (cartTotal) cartTotal.textContent = money(total);
  if (!cartItems) return;
  if (!bag.length) {
    cartItems.innerHTML = "<p>Your bag is empty.</p>";
    return;
  }
  cartItems.replaceChildren();
  bag.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "cart-line";
    const details = document.createElement("span");
    details.textContent = item.name + " × " + item.qty;
    const price = document.createElement("strong");
    price.textContent = money(item.price * item.qty);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      bag.splice(index, 1);
      renderBag();
    });
    row.append(details, price, remove);
    cartItems.appendChild(row);
  });
}
function openBag() {
  if (drawer) drawer.hidden = false;
  if (backdrop) backdrop.hidden = false;
}
function closeBag() {
  if (drawer) drawer.hidden = true;
  if (backdrop) backdrop.hidden = true;
}
document.querySelectorAll(".add-button[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.product || "Product";
    const price = Number(button.dataset.price || 0);
    const existing = bag.find(item => item.name === name);
    if (existing) existing.qty += 1;
    else bag.push({name, price, qty: 1});
    renderBag();
    openBag();
  });
});
document.getElementById("cart-open")?.addEventListener("click", openBag);
document.getElementById("cart-close")?.addEventListener("click", closeBag);
backdrop?.addEventListener("click", closeBag);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeBag();
});
renderBag();

// Newsletter visual feedback only; it does not store or send addresses.
document.getElementById("newsletter-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("newsletter-email");
  const message = document.getElementById("newsletter-message");
  if (email && email.checkValidity() && message) {
    message.textContent = "Thanks for your interest! Newsletter signup will be connected at launch.";
    email.value = "";
  }
});
