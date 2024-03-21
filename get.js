import https from 'https'
// require('dotenv').config()

import {} from 'dotenv/config'

export default function getPosts() {
  const data = JSON.stringify({
    // title:
    //   'Integrate IdentityCheck with ' +
    //   appname +
    //   '  for Seamless ID Verification',
    // content: content,
    // status: 'draft',
    // meta: { description: 'Test description' },
    // // categories: [3],
  })

  const auth =
    'Basic ' +
    Buffer.from(
      process.env.WORDPRESS_USERNAME + ':' + process.env.WORDPRESS_PASSWORD,
      'utf8'
    ).toString('base64')

  const options = {
    hostname: 'stackgo.io',
    path: '/wp-json/wp/v2/pages',
    method: 'GET',
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
}

getPosts()
