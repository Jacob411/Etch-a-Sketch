body = document.querySelector('body')
body.style.cssText = "display: flex; flex-direction: column; height: 960px; width: 960px"
for(let i = 0; i < 100; i++) {
    div = document.createElement('div1')
    
    div.setAttribute('id', i)
 

    div.style.cssText = "display: flex; flex-grow: 1"
    for (let j = 0; j < 100; j++) {
        innerDiv = document.createElement('div')
    

        innerDiv.setAttribute("id", i + "_" + j)
        
        innerDiv.style.cssText = "border: solid; padding: 10px; flex-grow: 1"

        div.appendChild(innerDiv)
    }
    body.append(div)
    }
    function display(e) {
        const divToChange = document.getElementById(e.target.id)
        divToChange.style.background= 'red'
    
        e.stopPropagation()
    }
    const divs = document.querySelectorAll('div')
    divs.forEach(div => div.addEventListener('mouseover', display, {
            capture: false
          }))