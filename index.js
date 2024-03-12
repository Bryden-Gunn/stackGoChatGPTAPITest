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
  new App('Salesforce', 'https://www.salesforce.com/au/?ir=1'),
  new App('Google Sheets', 'https://www.google.com.au/sheets/about/'),
  new App('Square Space', 'https://www.squarespace.com/'),
  new App('Woo', 'https://woo.com/'),
  new App('Webflow', 'https://webflow.com/'),
  new App('Monday.com', 'https://monday.com/'),
]

//Generate Page using Chat GPT

async function doTheThing(appname, appUrl) {
  const content = await generatePage(appname, appUrl)
  makePost(content, appname)
}

list.map((app) => {
  doTheThing(app.appname, app.appUrl)
})
