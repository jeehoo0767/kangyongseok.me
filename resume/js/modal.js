const modalBtn = document.querySelectorAll('.detail');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.js-modal');

function btnModal(btn) {
    _.each(modalBtn, btn => {
        btn.addEventListener('click', e => {
            if(e.target.name === "inforang") {
                modal.style.display = "block";
                modal.parentElement.children[1].children[1].style.display = "none";
                modal.parentElement.children[1].children[0].style.display = "block";
            } else {
                modal.style.display = "block";
                modal.parentElement.children[1].children[0].style.display = "none";
                modal.parentElement.children[1].children[1].style.display = "block";
            }
        })
    })
}

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
})


btnModal(modalBtn);

