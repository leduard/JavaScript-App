$(function() {
  var socket = io();
  $('form').submit(function(e) {
    e.preventDefault();
    let inputText = $('.message-input').val();

    if (!!inputText && !(inputText == ' ')) {
      let data = {
        date: new Date(),
        username: 'user',
        message: inputText,
      };
      socket.emit('newMessage', data);
      $('.message-input').val('');
      return false;
    }
  });
  socket.on('newMessage', function(data) {
    let { date } = data;
    date = new Date(date);
    $('.messages-container').append(
      $(`
      <div class="message">
        <div class="time">${date.getHours()}:${date.getMinutes()}</div>
        <div class="username">user1</div>
        <div class="text">${data.message}</div>
      </div>`)
    );
  });
});

{
  /*
    <div class="message">
      <div class="time">00:00</div>
      <div class="username">user1</div>
      <div class="text">message1</div>
    </div>
  */
}
