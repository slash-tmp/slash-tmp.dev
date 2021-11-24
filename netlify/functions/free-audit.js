const fetch = require('node-fetch')

const WEBHOOK_URL = process.env.CHAT_WEBHOOK_URL

exports.handler = function (event) {
  const { body } = event
  const params = new URLSearchParams(body)
  const email = params.get('email')
  const url = params.get('url')

  console.log(event)

  return fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      text: `Nouvelle demande d'audit 📫
- *Email* : ${email}
- *URL* : ${url}`
    })
  }).then(res => {
    if (!res.ok) {
      /* eslint-disable-next-line no-console */
      console.error('Failed to post chat message on google chat', {
        email,
        url
      })

      return {
        statusCode: 301,
        headers: {
          location: '/erreur'
        }
      }
    }

    return {
      statusCode: 301,
      headers: {
        location: '/succes'
      },
      body: JSON.stringify({ message: 'Hello world' })
    }
  })
}
