// Collapsible FAQ
document.addEventListener('DOMContentLoaded', function() {
    const faqButtons= document.querySelectorAll('.faq-question');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', function(){
            const answer= this.nextElementSibling;
            answer.classList.toggle('show');
        })
    })
})