let button = document.getElementById('button');
let buttonClose = document.getElementById('buttonClose');

button.addEventListener('click', () =>{
    let features = 'menubar=no, scrollbars=yes, width=500, height= 500, statuts=no, toolbar=no'
    let site = window.open("https://actugeekgaming.com", '', features);
    site.resizeTo(400, 500,);
    site.moveTo(300, 600);

    buttonClose.addEventListener('click', () => {
        site = window.open("https://actugeekgaming.com", '', features);
        site.close()
    })
})

