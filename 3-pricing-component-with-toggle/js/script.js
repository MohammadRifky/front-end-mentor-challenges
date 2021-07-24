const monthlyPricing = document.querySelectorAll('.monthly')
console.log(monthlyPricing)
const annualPricing = document.querySelectorAll('.annual')
const checkBox = document.getElementById('price-toggle')

checkBox.addEventListener('click', () => {
    annualPricing.forEach( annualItem => {
        annualItem.classList.toggle('hidden')
    })
    monthlyPricing.forEach( monthlyItem => {
        console.log(monthlyItem)
        monthlyItem.classList.toggle('hidden')
    })
})