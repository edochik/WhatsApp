Минимальная реализация.

1. Левое меню со списком людей.
2. По центру панель куда будут сообщения выводится
3. С низу ввод сообщений
   все ?

вход {{apiUrl}}/waInstance{{idInstance}}/getStateInstance/{{apiTokenInstance}}
проверка {{apiUrl}}/waInstance{{idInstance}}/checkWhatsapp/{{apiTokenInstance}}
отправить сообщение POST {{apiUrl}}/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}

сообщение // написанное человеком в чате

```js
//получаем данные по сообщению
const answer = {
  receiptId: 1, //!!! нужно для удаления
  body: {
    typeWebhook: "incomingMessageReceived",
    instanceData: {
      idInstance: 1103180871,
      wid: "79046469738@c.us",
      typeInstance: "whatsapp",
    },
    timestamp: 1738054306, // время можно вывести
    idMessage: "3AB14A203D9FAFA9DAA7", //!!!! для того чтобы выводить его в списке
    senderData: {
      chatId: "79110995379@c.us",
      chatName: "Marina",
      sender: "79110995379@c.us",
      senderName: "Marina",
      senderContactName: "Любимая",
    },
    messageData: {
      typeMessage: "textMessage",
      textMessageData: {
        textMessage: "Кук", // текст сообщения
      },
    },
  },
};
```
