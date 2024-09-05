  // Contact napin toiminnot
        // Esimerkin vuoksi event listenerin määritys js koodissa
        var btn = document.getElementById("contact")
        btn.addEventListener("click", contact)

        function contact() {
            // Rootin tyhjennys
            document.getElementById("root").innerHTML = ""
            // Elementtien luominen contact tiedon näyttämiseksi
            const element = document.createElement("h3")
            const email =  document.createTextNode("koodari@koodari.com")
            element.appendChild(email)
            document.getElementById("root").appendChild(element)
        }

  
 //-----------HOME NAPPI---------------------------------------------       
        
        function home() {
                    let x = `
                    <h3>Welcome!</h3>

                    <p>This is my digital CV page</p>
                    <p>Enjoy!</p>
                    `
                    document.getElementById("root").innerHTML = x
                }

 //------------SKILLS NAPPI--------------------------------------------

        function skills() {
            let x = `
            <ul style="max-width: 10%">
                <li>C#</li>
                <li>WPF</li>
                <li>Unity</li>
                <li>HTML</li>
            </ul>
            `
            document.getElementById("root").innerHTML = x
        }
//--------------------------------------------------------------------

async function recom() {
    document.getElementById("root").innerHTML = "<h4>Loading...</h4>"

    var taulukko =
    `<h2>Recommenders</h2>
    <table><thead><th>Name</th><th>Phone</th></thead><tbody>`

    try {
        const response = await fetch("http://localhost:3000/api/recommenders")

        const data = await response.json() // muutetaan json => javascript muotoon

        await data.map(x => { // loopataan läpi oliot map funktiolla, x on 1 olio
        taulukko += `<tr><td>${x.name}</td>
                    <td>${x.phone}</td></tr>`
        })

        // taulukko päätetään ja renderöidään html elementtin
        taulukko += `</tbody></table>`

        // Timeout ajastus on vai siksi että saadaan latausilmoitus
        // näkyviin 1 sekunniksi, mutta se on periaatteessa turha
        setTimeout(() => {
        document.getElementById("root").innerHTML = taulukko
    }, 200)
        
    // Virhetilanteen hallinta
    } 
    catch (error) {
        console.error("Error fetching data:", error)
    }

    }


//--------------------------------------------------------------------------

        // Kun sivu latautuu kutsutaan home funktiota että saa alkusivun näkyviin
        home()

        // Footer tyylit
        document.getElementById("footer").style.backgroundColor =  "lightblue"
        document.getElementById("footer").style.padding = "80px"
        document.getElementById("footer").style.marginTop = "400px"


        // Pvm päivittäminen ruudulle
        function updateDate() {
            const date = new Date();
            let text = date.toLocaleString("fi-FI");
            document.getElementById("footer").innerText = text
        }

        // Ajastus  päivittämään päivämäärää 1000 ms välein = 1 sekunti
        setInterval(() => {
            updateDate()
        }, 1000);
