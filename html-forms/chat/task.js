let chat = document.querySelector('.chat-widget');
let textBox = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let robotMessages = ['Здорова','Нет не надо','Как сам','Секс и косметику не предлагать','Ок'];
document.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})

document.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
      let message = textBox.value;
      var time = new Date();
      var timeStr = time.toLocaleTimeString();
      let rand = Math.floor(Math.random()*robotMessages.length);
      let rValue = robotMessages[rand];
      if (message != '') {
        messages.innerHTML += timeStr + ": " +  message + "<br/>"
        textBox.value = '';
        messages.innerHTML += timeStr + ": " +  rValue + "<br/>"

    } else {
    alert('Строка пуста')
}      
    }
});

