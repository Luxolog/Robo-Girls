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

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });
}
