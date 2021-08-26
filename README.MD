<center> 

# chatbot-indo

Sebuah chat bot yang menggunakan bahasa Indonesia!

# Install The Package
</center>

```cli
npm i chatbot-indo
```

<center>

# Example Usage

</center>

```js
const chatbotIndo = require('chatbot-indo')

const response = chatbotIndo.message('halo, apa kabar?') /

chatbotIndo.message('halo, apa kabar?') // message yang di sampaikan ke bot adalah berupa "halo, apa kabar?"

.then(console.log).catch(console.log) // response berupa JSON keluar di console
```

<center>

# Example Response

</center>

```json
{
  "msg": "baik"
}
```

<center>

# Events

</center>

- message (memberikan message kamu ke bot agar bot bisa merespon)
```js
chatbotIndo.message('your message')
```

<center>

# Hyper Links

</center>

- [YouTube](https://youtube.com/c/JastinCh)
- [Github](https://github.com/JastinXyz)
- [Website](https://jastinch.xyz)
- [Donate Me!](https://api.jastinch.xyz/donate)
- [API [DEPRECATED]](https://api.jastinch.xyz)
- [New API [STAY IN PROGRESS]](https://rest-api.jastinch.xyz)
