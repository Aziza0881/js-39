let btn = document.querySelector('.btn2')
let inps = document.querySelectorAll('.input')



btn.onclick = () => {
    inps.forEach(item => {
        if (item.value.length > 0) {
            item.classList.remove('eror')
        } else {
            item.classList.add('eror')
        }
    });
}