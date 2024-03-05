const https = require('https')
require('dotenv').config()

const data = JSON.stringify({
  title: 'Node.js test post 3',
  content: 'this is a test post from node.js project 3',
  status: 'publish',
})

const auth =
  'Basic ' +
  Buffer.from(
    process.env.WORDPRESS_USERNAME + ':' + process.env.WORDPRESS_PASSWORD,
    'utf8'
  ).toString('base64')

console.log(auth)

const options = {
  hostname: 'stackgoidentitychecktest.wpcomstaging.com',
  path: '/wp-json/wp/v2/posts',
  method: 'POST',
  headers: {
    authorization: auth,
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
}

const req = https
  .request(options, (res) => {
    let data = ''

    console.log('Status Code:', res.statusCode)

    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      console.log('Body: ', JSON.parse(data))
    })
  })
  .on('error', (err) => {
    console.log('Error: ', err.message)
  })

req.write(data)
req.end()
