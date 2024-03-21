// const https = require('https')

import https from 'https'
// require('dotenv').config()

import {} from 'dotenv/config'

export default function makePost(content, appname) {
  const data = JSON.stringify({
    title:
      'Integrate IdentityCheck with ' +
      appname +
      '  for Seamless ID Verification',
    content: content,
    status: 'draft',
    parent: 7111,
    slug: appname,
    tags: [189],
    featured_media: 7476,
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
        console.log('Body: ', JSON.parse(data).link)
      })
    })
    .on('error', (err) => {
      console.log('Error: ', err.message)
    })

  req.write(data)
  req.end()
}
