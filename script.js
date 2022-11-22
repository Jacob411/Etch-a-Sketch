body = document.querySelector('body')
body.style.cssText = "display: flex; flex-direction: column; height: 960px; width: 960px; margin: auto"
function setUp() {
    let gridSize = 0
    do {
        gridSize = prompt("Enter Grid Size (0-100): ")
    } while(gridSize > 100)

    for(let i = 0; i < gridSize; i++) {
        div = document.createElement('div1')
        
        div.setAttribute('id', i)
    

        div.style.cssText = "display: flex; flex-grow: 1"
        for (let j = 0; j < gridSize; j++) {
            innerDiv = document.createElement('div')
        

            innerDiv.setAttribute("id", i + "_" + j)
            
            innerDiv.style.cssText = "border: solid; border-width: 1px; flex-grow: 1"

            div.appendChild(innerDiv)
        }
        body.append(div)
        }
        function display(e) {
            const divToChange = document.getElementById(e.target.id)
            divToChange.style.background= 'blue'
        
            e.stopPropagation()
        }
        const divs = document.querySelectorAll('div')
        divs.forEach(div => div.addEventListener('mouseover', display, {
                capture: false
            }))
        }
        const btn = document.createElement('button')
        btn.textContent = "Reset game"
        body.appendChild(btn)
        btn.addEventListener('click', () => {
    
            while(body.firstChild){
                body.removeChild(body.firstChild);
            }
            body.appendChild(btn)
            setUp()
        })
        setUp()