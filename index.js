import {} from 'dotenv/config'

import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.GPT_API_KEY })

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a professional technical content writer.',
      },
      {
        role: 'user',
        content:
          'Create page content talking about how https://stackgo.io/identitycheck integrates with http://airtable.com. Include the following structure: a brief description of http://airtable.com, some possible uses for users of http://airtable.com for ID checks, instructions how to setup, instructions how to use and title . keep the content SEO friendly targeting “http://airtable.com ID verification” as the primary keyword. use plain, concise language.Use https://stackgo.io/identitycheck/how-identitycheck-works-with-fyi-docs/ as a template. then convert the content into HMTL that can be sent as JSON to an API. ie no line breaks can be used at all in the response and only single commas can be used in the HMTL. The JSON must include a title, content(which contains the HTML) and a status field. The status field must be set to publish',
      },
    ],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion.choices[0])
}

main()
