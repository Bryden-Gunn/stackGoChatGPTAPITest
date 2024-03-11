import generatePage from './chatGptAPI.js'
import makePost from './post.js'

//Declare app name and URL

const appname = 'Airtable'
const appUrl = 'https://www.airtable.com/v1'

//Generate Page using Chat GPT

async function doTheThing(appname, appUrl) {
  const content = await generatePage(appname, appUrl)
  console.log(content)
  makePost(content)
}

doTheThing()
