const auth = Buffer.from(
  'amFtZXNibGFrZWFsaXZlOmJxTEcgeEdjTSBwdUNWIEs2OFEgUTV0RCB3Q2xZ',
  'base64'
).toString('utf8')

const auth2 = Buffer.from(
  'jamesblakealive:bqLG xGcM puCV K68Q Q5tD wClY',
  'utf8'
).toString('base64')

console.log(auth)
console.log(auth2)
console.log(
  'Basic amFtZXNibGFrZWFsaXZlOmJxTEcgeEdjTSBwdUNWIEs2OFEgUTV0RCB3Q2xZ'
)
