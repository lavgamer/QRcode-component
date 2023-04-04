const windowqr = document.querySelector('#all');
const qrList = [];
qrList.push({diseño: './design/mobile-design.jpg'})
for (const desing of qrList) {
    let print = `
    <div class="container">
    <img class="image" src="${desing.diseño}" alt="">
    </div>`
    windowqr.innerHTML = print;
    console.log(print)
}