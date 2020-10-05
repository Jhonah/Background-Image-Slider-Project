const buttons = document.querySelectorAll('.btn');
const imgs = document.querySelector('.img-container');
const maxCount = 4;
let count = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.classList.contains('btn-left')) {
            count--;
            if (count < 0) {
                count = maxCount;
            }
        } else if (button.classList.contains('btn-right')) {
            count++;
            if (count > maxCount) {
                count = 0;
            }
        }
        console.log(count);
        imgs.style.backgroundImage = `url("./img/contBcg-${count}.jpeg")`;
    })
})