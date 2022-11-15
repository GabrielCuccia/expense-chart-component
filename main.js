
import data from "./data.json" assert {type: "json"}
let balance = document.querySelector(".balance__total")
let chartTotal = document.querySelector(".chart__total-value")
let chartPorcetange = document.querySelector(".chart__porcentage")
let chartBarContainer = document.querySelector(".chart__bars-container")
let values = []


data.forEach(element =>{
    values.push(element.amount)



    chartBarContainer.innerHTML += `
    <div class="chart__bar">
        <div class="chart__bar--label">$${element.amount}</div>
        <div class="chart__bar--day">${element.day}</div>
    </div>    
    
    `
})

let maxHeightPx = 170
let maxValue = Math.max(...values)
let nuevoValorDay = []


let bars = document.querySelectorAll(".chart__bar")
let chartBarDay = document.querySelectorAll(".chart__bar--day")
bars = [...bars]
bars.forEach(bar => {
    let day = bar.childNodes[3]
    
    let nuevoValor = parseFloat((bar.childNodes[1].innerText).slice(1))
    nuevoValorDay.push(nuevoValor)
    
    let alturaFinal = (nuevoValor * maxHeightPx) / maxValue
    
    bar.style.height = `${alturaFinal}px`
    day.style.top = (alturaFinal + 5) + "px"
    if (nuevoValor == maxValue){
        bar.style.backgroundColor = "var(--Cyan)"
    }
    
  

    bar.addEventListener("mouseover", event=>{
        let barLabel = event.target.childNodes[1]
        
        barLabel.style.display = "block"
        
    })
    bar.addEventListener("mouseout", event=>{
        let barLabel = event.target.childNodes[1]
        
        barLabel.style.display = "none"
        
    })
    


})


 
