'use strict';
function echo(event) {
  if (typeof event.message !== 'undefined' && event.message !== null) {
    return Promise.resolve({
      messageText: event.message.text,
      senderId: event.sender.id
    });
  } else {
    return Promise.resolve({});
  }
}

module.exports = {
  reactToMessage: echo
};
