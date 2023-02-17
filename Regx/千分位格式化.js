const regx = /(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})/

const formatMoney = (money) => {
  return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',')
}

const res1 = formatMoney('123456789')
console.log(res1)