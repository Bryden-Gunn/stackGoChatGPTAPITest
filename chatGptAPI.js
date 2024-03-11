// require('dotenv').config()

import {} from 'dotenv/config'
// const OpenAI = require('openai')

import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.GPT_API_KEY })

export default async function generatePage(appName, appUrl) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a professional technical content writer.',
      },
      {
        role: 'user',
        content:
          'Create page content talking about how https://stackgo.io/identitycheck integrates with' +
          appUrl +
          '. When mentioning the product call it "IdentityCheck", not "stackgo identitycheck". Include the following structure: a brief description of Airtable, some possible uses for users of Airtable for ID checks, instructions how to set up, and instructions how to use. keep the content SEO friendly targeting “' +
          appName +
          'ID verification” as the primary keyword, and then derivatives on that as other headings. use plain, concise language. provide the content in HTML but do not include the head or body tags. Keep the entire post below 2000 words.',
      },
    ],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion.choices[0].message.content)
  return completion.choices[0].message.content
}
