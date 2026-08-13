
const cursor = document.getElementById("cursorGlow");
window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const magneticItems = document.querySelectorAll(".magnetic");
magneticItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.08}px, ${y * 0.16}px)`;
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "translate(0,0)";
  });
});

const terminalText = `> inicializando perfil Alex Monteiro...
> carregando competências principais...

[OK] Desenvolvedor Full Stack
[OK] Professor Universitário e Técnico
[OK] Engenharia da Computação
[OK] PHP | Laravel | Python | FastAPI | Flask
[OK] MySQL | PostgreSQL | APIs REST
[OK] Android Studio | Java | Firebase | Flutter
[OK] IA aplicada aos negócios | dashboards | automações
[OK] UX/UI | Figma | prototipação
[OK] Cloud | deploy | documentação técnica

> status: pronto para novas oportunidades.`;

let i = 0;
const pre = document.getElementById("typewriter");
function type() {
  if (!pre) return;
  if (i < terminalText.length) {
    pre.textContent += terminalText.charAt(i);
    i++;
    setTimeout(type, 18);
  }
}
const terminalObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && i === 0) type();
  });
}, { threshold: 0.35 });

const terminal = document.querySelector(".terminal");
if (terminal) terminalObserver.observe(terminal);
