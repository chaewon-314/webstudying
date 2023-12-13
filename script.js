let content = document.getElementById('content');
let toggle = document.getElementById('toggle');
let hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E', 'F'];

alert('안녕하세요')

function changeColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
    }
    content.style.color = hexColor;
    toggle.style.backgroundColor = hexColor;
}