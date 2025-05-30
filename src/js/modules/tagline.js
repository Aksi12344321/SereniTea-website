function tagline() {
  const closeTaglineBtn = document.querySelector(".tagline__close");
  const tagline = document.querySelector(".tagline");

  closeTaglineBtn.addEventListener("click", function() {
    tagline.remove();
  });
}

export default tagline;
