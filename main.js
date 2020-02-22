var database = null;


fetch('./data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        console.log(data)
        database = data;
    })
    .catch(err => {
        // Do something for an error here
    })





// document.onload = Main;
Main();

function Main()
{
    console.log("Main");
    var rows = document.querySelectorAll("ul li");
    console.log(rows);
    rows.forEach(row => {
        row.addEventListener("click", (event) => {
            var section = event.target.parentNode.classList[0];
            // console.log(section)
            // console.log(event.target.innerText);
            show_list(section,event.target.innerText);
            clear_selection(section);
            event.target.classList.add("selected");
        });
    });
}


function clear_selection(section) {
    var uls = document.querySelectorAll("ul."+section);
    
    uls.forEach(ul => {
        ul.querySelectorAll("li").forEach(li => {
            li.classList.remove("selected");
        });
    });
}


function show_list(section,topic)
{
    var content = "Not found: "+section;

    if(database)
    {
        if(section in database && topic in database[section])
            content = database[section][topic].join('\n');
        else
            console.log(`Not found: ${section} / ${topic}`);
    }

    // console.log(section);
    // console.log(content);
    document.querySelector(`.detail.${section}`).innerText = content;
}
