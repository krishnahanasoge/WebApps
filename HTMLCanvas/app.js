const canvas = document.querySelector('#canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext('2d');
const beginToDraw = ()=>{
    ctx.beginPath();
};
const draw = event=>{
    ctx.strokeStyle = "green";
    ctx.lineTo(event.touches[0].pageX,event.touches[0].pageY);
    ctx.stroke();
};
canvas.addEventListener('touchstart',beginToDraw);
canvas.addEventListener('touchmove',draw);
