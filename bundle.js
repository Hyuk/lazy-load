const images = document.querySelectorAll("img");

var intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry)=>{
    if(entry.isIntersecting) return;
    console.log("LOG: ");
    intersectionObserver.unobserve(entry.target);
    const { src } = entry.target.dataset;
    if (!src) return;
    entry.target.src = src;
  });
});

images.forEach((image) => {
  intersectionObserver.observe(image)
});