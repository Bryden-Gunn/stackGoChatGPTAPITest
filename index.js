import generatePage from './chatGptAPI.js'
import makePost from './post.js'

//Declare app name and URL

class App {
  constructor(appname, appUrl) {
    this.appname = appname
    this.appUrl = appUrl
  }
}

const list = [
  new App('Notion', 'https://www.notion.so/'),
  new App('Shopify', 'https://www.shopify.com/'),
  new App('Quickbooks', 'https://quickbooks.intuit.com/'),
]

//Generate Page using Chat GPT

async function doTheThing(appname, appUrl) {
  const content = await generatePage(appname, appUrl)
  makePost(content, appname)
}

list.map((app) => {
  doTheThing(app.appname, app.appUrl)
})
