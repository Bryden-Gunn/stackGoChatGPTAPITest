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

list.map((app) => {
  console.log(app.appname)
  console.log(app.appUrl)
})

// ;('Notion')
// ;('https://www.notion.so/')
// ;('Shopify')
// ;('https://www.shopify.com/')
// ;('Quickbooks')
// ;('https://quickbooks.intuit.com/')
// ;('Salesforce')
// ;('https://www.salesforce.com/au/?ir=1')
// ;('Google Sheets')
// ;('https://www.google.com.au/sheets/about/')
// ;('Square Space')
// ;('https://www.squarespace.com/')
// ;('Woo')
// ;('https://woo.com/')
// ;('Webflow')
// ;('https://webflow.com/')
// ;('Monday.com')
// ;('https://monday.com/')
