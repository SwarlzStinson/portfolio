// Проигрывать видео кейсов только когда они видны на экране —
// экономит трафик и не грузит все 5 роликов одновременно.
const caseVideos = document.querySelectorAll(".case__video");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { threshold: 0.35 });

caseVideos.forEach((video) => observer.observe(video));

// Кнопка звука на каждом видео (по умолчанию все ролики без звука)
document.querySelectorAll("[data-sound-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const video = button.closest(".case__media").querySelector("video");
    video.muted = !video.muted;
    button.textContent = video.muted ? "🔇" : "🔊";
  });
});
