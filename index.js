function checkCardType() {
    const cardNumber = document.getElementById('numero_cartao').value;
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{14}$/;
    const amexRegex = /^3[47][0-9]{13}$/;
    const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    const cardLogos = document.getElementById('cardLogos');
  
    cardLogos.innerHTML = '';
  
    if (visaRegex.test(cardNumber)) {
      addCardLogo('visa.png', 'Visa');
    } else if (mastercardRegex.test(cardNumber)) {
      addCardLogo('mastercard.png', 'Mastercard');
    } else if (amexRegex.test(cardNumber)) {
      addCardLogo('amex.png', 'American Express');
    } else if (discoverRegex.test(cardNumber)) {
      addCardLogo('discover.png', 'Discover');
    }
}
  
function addCardLogo(imageSrc, altText) {
    const logoImg = document.createElement('img');
    logoImg.src = imageSrc;
    logoImg.alt = altText;
    document.getElementById('cardLogos').appendChild(logoImg);
}