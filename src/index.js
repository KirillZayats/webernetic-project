import "./scss/style.scss";

{
  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom <= document.documentElement.clientHeight && rect.top >= 0
    );
  };

  const animateScrollingElements = (name) => {
    const element = document.querySelector(name);
    if (isElementInViewport(element)) {
      let index = 0;
      for (const child of element.children) {
        if (!child.getAttribute("class").includes("animate")) {
          setTimeout(() => {
            child.classList.add("animate");
          }, (index + 1) * 100);
          index++;
        }
      }
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    animateScrollingElements(".list-colors");
    animateScrollingElements(".list-fonts");
    animateScrollingElements(".container-images");
  });
  window.addEventListener("scroll", () => {
    animateScrollingElements(".list-colors");
    animateScrollingElements(".list-fonts");
    animateScrollingElements(".container-images");
  });
}
