window.addEventListener('load', () => {
  const priceInput = document.getElementById("item-price");
  priceInput.addEventListener("input", () => {
    const inputValue = priceInput.value;
    const addTaxDom = document.getElementById("add-tax-price");
    addTaxDom.innerHTML = Math.round(priceInput.value * 0.1) / 1;
    const Tax = addTaxDom.innerHTML
    const Profit = document.getElementById("profit");
    Profit.innerHTML = priceInput.value - Tax
 })
});