const imageContainers = document.querySelectorAll(".row div div");

for(let i=0;i<imageContainers.length;i++) {
    imageContainers[i].addEventListener("click", function(){
        const images = imageContainers[i].children;
        for(let i=0;i<images.length;i++) {
            const style = window.getComputedStyle(images[i]);
            const opacity = style.getPropertyValue('opacity');
            if(opacity == 1) {
                console.log(images[i].classList[0]);
                images[i].classList.remove("highlight-image");
                if((i+1) === images.length) {
                    images[0].classList.add("highlight-image");
                } else {
                    images[i+1].classList.add("highlight-image");
                }
            }
        }
      });
}

