

const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


// Lấy phần tử "Back-to-Top"
const backToTop = document.getElementById("backToTop");

// Thêm sự kiện click để cuộn về đầu trang
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Cuộn mượt
    });
});
