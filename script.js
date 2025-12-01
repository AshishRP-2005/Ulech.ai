// ================================
// Pricing card expand / collapse
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const plans = Array.from(document.querySelectorAll(".price-card.plan"));

  if (plans.length) {
    plans.forEach((plan) => {
      plan.addEventListener("click", (e) => {
        // Ignore clicks on buttons/links inside the card
        if (e.target.closest("a, button")) return;

        const already = plan.classList.contains("expanded");

        plans.forEach((p) => {
          p.classList.remove("expanded");
          p.setAttribute("aria-expanded", "false");
        });

        if (!already) {
          plan.classList.add("expanded");
          plan.setAttribute("aria-expanded", "true");

          setTimeout(() => {
            plan.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 180);
        }
      });

      plan.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          plan.click();
        }
        if (e.key === "Escape") {
          plan.classList.remove("expanded");
          plan.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

}); // DOMContentLoaded end

