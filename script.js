function detectFlag() {
  const number = document.getElementById('cardNumber').value.replace(/\D/g, '');
  const result = document.getElementById('result');

  let flag = 'Bandeira não reconhecida';

  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(number)) {
    flag = 'Visa';
  } else if (/^5[1-5][0-9]{14}$/.test(number)) {
    flag = 'MasterCard';
  } else if (/^3[47][0-9]{13}$/.test(number)) {
    flag = 'American Express';
  } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(number)) {
    flag = 'Diners Club';
  } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(number)) {
    flag = 'Discover';
  } else if (/^(50[0-9]|62[0-9]|64[4-9]|65[0-9])[0-9]{12,15}$/.test(number)) {
    flag = 'Elo';
  } else if (/^35(2[89]|[3-8][0-9])[0-9]{12}$/.test(number)) {
    flag = 'JCB';
  }

  result.textContent = `💳 Bandeira detectada: ${flag}`;
}
