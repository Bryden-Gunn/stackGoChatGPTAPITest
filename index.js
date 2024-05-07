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
  // new App('QuickBooks Online', 'https://quickbooksonline.com/'),
  // new App('Xero', 'https://xero.com/'),
  // new App('Wave', 'https://waveapps.com/'),
  // new App('Zapier Interfaces', 'https://zapier.com/'),
  // new App('lexoffice', 'https://lexoffice.de/'),
  // new App('Zoho Books', 'https://zoho.com/books/'),
  // new App('FreshBooks', 'https://freshbooks.com/'),
  // new App('Moneybird', 'https://moneybird.com/'),
  // new App('bexio', 'https://bexio.com/'),
  // new App('You Need A Budget', 'https://ynab.com/'),
  // new App('Splitwise', 'https://splitwise.com/'),
  // new App('Alegra', 'https://alegra.com/'),
  // new App('Pennylane', 'https://pennylane.com/'),
  // new App('bunq', 'https://bunq.com/'),
  // new App('Quaderno', 'https://quaderno.io/'),
  // new App('TaxDome', 'https://taxdome.com/'),
  // new App('FreeAgent', 'https://freeagent.com/'),
  // new App('Mercury', 'https://mercury.com/'),
  // new App('Dext', 'https://dext.com/'),
  // new App('Cin7 Core Inventory', 'https://cin7.com/'),
  // new App('Canopy', 'https://canopy.com/'),
  // new App('FacturaDirecta', 'https://facturadirecta.com/'),
  // new App('Hnry', 'https://hnry.co.nz/'),
  // new App('mallabe Currencies', 'https://mallabecurrencies.com/'),
  // new App('Novo', 'https://banknovo.com/'),
  // new App('BrightManager', 'https://brightmanager.com/'),
  // new App('Fortnox', 'https://fortnox.se/'),
  // new App('Senta', 'https://senta.co/'),
  // new App('Fattura24', 'https://fattura24.com/'),
  // new App('Give Lively', 'https://givelively.org/'),
  // new App('Bind ERP', 'https://binderp.com/'),
  // new App('Fatture in Cloud', 'https://fattureincloud.it/'),
  // new App('Invoiced', 'https://invoiced.com/'),
  // new App('Evoliz', 'https://evoliz.com/'),
  // new App('Mindee OCR', 'https://mindee.com/'),
  // new App('IRIS KashFlow', 'https://kashflow.com/'),
  // new App('Visma eAccounting', 'https://visma.com/'),
  // new App('Sage Accounting', 'https://sage.com/'),
  // new App('Quipu', 'https://getquipu.com/'),
  // new App('fastbill', 'https://fastbill.com/'),
  // new App('Expensify', 'https://expensify.com/'),
  // new App('Ponto', 'https://withponto.com/'),
  // new App('QuickFile', 'https://quickfile.co.uk/'),
  // new App('GetMyInvoices', 'https://getmyinvoices.com/'),
  // new App('Billit', 'https://billit.be/'),
  // new App('freee', 'https://freee.co.jp/'),
  // new App('FYI', 'https://fyidocs.com/'),
  // new App('InvoiceXpress', 'https://invoicexpress.com/'),
  // new App('Pleo', 'https://pleo.io/'),
  // new App('Xama Hub', 'https://xamahub.com/'),
  // new App('Cash Flow Portal', 'https://cashflowportal.com/'),
  // new App('HirePOS', 'https://hirepos.com/'),
  // new App('Moloni', 'https://moloni.pt/'),
  // new App('Brex', 'https://brex.com/'),
  // new App('Qoyod', 'https://qoyod.com/'),
  // new App('edoobox', 'https://edoobox.com/'),
  // new App('Bkper', 'https://bkper.com/'),
  // new App('Seamlss', 'https://seamlss.com/'),
  // new App('Daftra', 'https://daftra.com/'),
  // new App('Saasu', 'https://saasu.com/'),
  // new App('Corpay One', 'https://corpayone.com/'),
  // new App('FINOM', 'https://finom.co/'),
  // new App('InvoiceBerry', 'https://invoiceberry.com/'),
  // new App('Firm360', 'https://firm360.com/'),
  // new App('Respaid', 'https://respaid.com/'),
  // new App('Cassa in Cloud', 'https://cassaincloud.it/'),
  // new App('Striven', 'https://striven.com/'),
  // new App('Aero Workflow', 'https://aeroworkflow.com/'),
  // new App('Facture.net', 'https://facture.net/'),
  // new App('Cash Flow Frog', 'https://cashflowfrog.com/'),
  // new App('Space Invoices / Apollo', 'https://spaceinvoices.com/'),
  // new App('BillBjorn', 'https://billbjorn.com/'),
  // new App('Run my Accounts', 'https://runmyaccounts.com/'),
  // new App('Zahara', 'https://zaharasoftware.com/'),
  // new App('Jasmin', 'https://jasminsoftware.com/'),
  // new App('Sales Cookie', 'https://salescookie.com/'),
  // new App('Altoviz', 'https://altoviz.com/'),
  // new App('Chaser', 'https://chaserhq.com/'),
  // new App('Reckon One', 'https://reckon.com/'),
  // new App('Billit.io', 'https://billit.io/'),
  // new App('AccountEdge', 'https://accountedge.com/'),
  // new App('Exact Online', 'https://exact.com/'),
  // new App('Sivo', 'https://sivo.com/'),
  // new App('Fiskl', 'https://fiskl.com/'),
  // new App('Deskera', 'https://deskera.com/'),
  // new App('Jurny', 'https://jurny.com/'),
  // new App('Sinao', 'https://sinao.fr/'),
  // new App('OneBill', 'https://onebillsoftware.com/'),
  // new App('Order Time', 'https://ordertime.com/'),
  // new App('H-WEB', 'https://h-web.com/'),
  // new App('VOM', 'https://vom.com/'),
  // new App('SaasAnt Transactions', 'https://saasant.com/'),
  // new App('BizPay', 'https://bizpay.com/'),
  // new App('Factomos', 'https://factomos.com/'),
  // new App('Xledger', 'https://xledger.com/'),
  // new App('Aliaddo', 'https://aliaddo.com/'),
  // new App('Newtral.io', 'https://newtral.io/'),
  // new App('VIES API', 'https://viesapi.eu/'),
  // new App('Web3Hook', 'https://web3hook.io/'),
  // new App('Upbooks', 'https://upbooks.com/'),
  // new App('Nibo', 'https://nibo.com.br/'),
  // new App('Payday', 'https://payday.com/'),
  // new App('Upflow', 'https://upflow.io/'),
  // new App('Bleez', 'https://bleez.com.br/'),
  // new App('Motor Fiscal', 'https://motorfiscal.com/'),
  // new App('NachoNacho', 'https://nachonacho.com/'),
  // new App('Finmei', 'https://finmei.com/'),
  // new App('Herv.ai', 'https://herv.ai/'),
  // new App('Re-Leased', 'https://re-leased.com/'),
  // new App('Zeymo', 'https://zeymo.co/'),
  // new App('VERIFYiQ', 'https://verifyiq.com/'),
  // new App('Fundwave', 'https://fundwave.com/'),
  // new App('Lista Firme', 'https://listafirme.ro/'),
  // new App('AdminPulse', 'https://adminpulse.be/'),
  // new App('AccountingSuite', 'https://accountingsuite.com/'),
  // new App('twiinworkspace', 'https://twiinworkspace.com/'),
  // new App('everbill', 'https://everbill.com/'),
  // new App('Botkeeper', 'https://botkeeper.com/'),
  // new App('ProcureDesk', 'https://procuredesk.com/'),
  // new App('AccountingBox', 'https://accountingbox.com/'),
  // new App('Gaviti', 'https://gaviti.com/'),
  // new App('AuditCase', 'https://auditcase.com/'),
  // new App('Procys', 'https://procys.com/'),
  new App('SAI360 GRC', 'https://sai360.com/'),
  // new App('Siigo', 'https://siigo.com/'),
  // new App('ZarMoney', 'https://zarmoney.com/'),
  // new App('Pro-Ledger', 'https://pro-ledger.com/'),
  // new App('Intelligent Billing', 'https://intelligentbilling.com/'),
  // new App('NuMetric', 'https://numetric.com/'),
  // new App('ExRt.Live', 'https://exrt.live/'),
  // new App('Finolog', 'https://finolog.com/'),
  // new App('MyCarTracks', 'https://mycartracks.com/'),
  // new App('Fast-Weigh', 'https://fast-weigh.com/'),
  // new App('towio', 'https://towio.com/'),
  // new App('GoFileRoom', 'https://gofileroom.com/'),
  // new App('Cognitive Invoice', 'https://cognitiveinvoice.com/'),
  // new App('Nomisma', 'https://nomisma.co.uk/'),
  // new App('Contalink', 'https://contalink.com/'),
  // new App('Simply Budget', 'https://simplybudget.com/'),
  // new App('Expensya', 'https://expensya.com/'),
  // new App('tuGerente', 'https://tugerente.com/'),
  // new App('Smarty Accounting', 'https://smartyaccounting.com/'),
  // new App('legodesk', 'https://legodesk.com/'),
  // new App('Billed', 'https://billed.com/'),
  // new App('Journalize.io', 'https://journalize.io/'),
  // new App('Twig Business', 'https://twigbusiness.com/'),
  // new App('Peblo', 'https://peblo.com/'),
  // new App('QCommission', 'https://qcommission.com/'),
  // new App('Lancerkit', 'https://lancerkit.com/'),
  // new App('MoneyTool.io', 'https://moneytool.io/'),
  // new App('Woovi', 'https://woovi.com/'),
  // new App('UpperBee', 'https://upperbee.com/'),
  // new App('faktoora', 'https://faktoora.com/'),
  // new App('Gridizen', 'https://gridizen.co.uk/'),
  // new App('Verificare TVA', 'https://verificaretva.com/'),
  // new App('Myob', 'https://myob.com/'),
  // new App('Floify', 'https://floify.com/'),
  // new App('PocketSmith', 'https://pocketsmith.com/'),
  // new App('FranConnect', 'https://franconnect.com/'),
  // new App('Zoho Expense', 'https://zoho.com/expense/'),
  // new App('Easybill', 'https://easybill.de/'),
  // new App('Avalara', 'https://avalara.com/'),
  // new App('Salespad', 'https://salespad.com/'),
  // new App('Saasoptics', 'https://saasoptics.com/'),
  // new App('Oanda', 'https://oanda.com/'),
  // new App('Zipbooks', 'https://zipbooks.com/'),
]

//Generate Page using Chat GPT

async function doTheThing(appname, appUrl) {
  const content = await generatePage(appname, appUrl)
  makePost(content, appname)
}

list.map((app) => {
  doTheThing(app.appname, app.appUrl)
})
