const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

const staticResponses = ["Weather is Awesome", "Weather is not as good as Bengaluru"];

recognition.onstart = function(){
    console.log("Voice is activated!")
}
recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    if(transcript.includes("weather")){
        const newTranscript = staticResponses[Math.floor([Math.random()*staticResponses.length])];
        content.textContent = newTranscript;
    }
    readOutLoud(content.textContent);
}
btn.addEventListener('click',()=>{
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    speech.text = message;
    window.speechSynthesis.speak(speech);
}