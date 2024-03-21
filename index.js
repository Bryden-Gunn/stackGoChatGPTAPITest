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
  new App('WordPress', 'https://wordpress.com/'),
  new App('Calendly', 'https://calendly.com/'),
  new App(
    'Google Calendar',
    'https://workspace.google.com/products/calendar/?hl=en-US'
  ),
  new App('Asana', 'https://asana.com/'),
  new App('NetSuite', 'https://www.netsuite.com/portal/home.shtml'),
  new App('DocuSign', 'https://www.docusign.com/'),
  new App('Slack', 'https://slack.com/intl/en-au/'),
  new App('Clickup', 'https://clickup.com/'),
  new App('Trello', 'https://trello.com/'),
  new App('Smartsheet', 'https://www.smartsheet.com/'),
  new App('PandaDoc', 'https://www.pandadoc.com/'),
]

//Generate Page using Chat GPT

async function doTheThing(appname, appUrl) {
  const content = await generatePage(appname, appUrl)
  makePost(content, appname)
}

list.map((app) => {
  doTheThing(app.appname, app.appUrl)
})
