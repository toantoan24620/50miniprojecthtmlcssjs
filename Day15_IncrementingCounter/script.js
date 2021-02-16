const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counters.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200; // mức nhảy
        
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,1);
        }else{
            counters.innerText = target;
        }
    }
    updateCounter();    
});