document.addEventListener('DOMContentLoaded', function(){
    const links= document.querySelectorAll('nav ul li a');
    links.forEach(link =>{
        link.addEventListener('click',function(){
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        })
    })
})
// above is the menu highlight ^

//dynamic menu display

    const menuToggleButton= document.querySelector('.menu-toggle');
    const navMenu= document.querySelector('nav ul');

    menuToggleButton.addEventListener('click', function(){
        navMenu.classList.toggle('active');
    });

    document.addEventListener('DOMContentLoaded',function(){
        //Image click event
        const images = document.querySelectorAll('.Gallery-container img');
        const fullscreenOverlay= document.createElement('div');
        fullscreenOverlay.classList.add('fullscreen-overlay');
        const closeButton= document.createElement('button');
        closeButton.textContent="X";
        //close button to the overlay
        fullscreenOverlay.appendChild(closeButton);
        document.body.appendChild(fullscreenOverlay);

        //handle image click on open in fullscreen
        images.forEach(image => {
            image.addEventListener('click',function(){
                const imgClone= image.cloneNode();
                fullscreenOverlay.appendChild(imgClone);
                fullscreenOverlay.classList.add('active');
            });
        });

    //close cutton functionality
    closeButton.addEventListener('click', function(){
        fullscreenOverlay.classList.remove('active');
        fullscreenOverlay.innerHTML='';
        fullscreenOverlay.appendChild(closeButton);
    });

    //close fullscreen when clicking anywhere else
    fullscreenOverlay.addEventListener('click',function(event){
        if (event.target === fullscreenOverlay){
            fullscreenOverlay.classList.remove('active');
            fullscreenOverlay.innerHTML='';
            fullscreenOverlay.appendChild(closeButton);
        }
    })
    });