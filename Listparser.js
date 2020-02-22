links = document.querySelector(".gridLezioni").querySelectorAll("a");

var lines = [];
links.forEach(a => {
    if(a.innerText != "")
    {
        var new_text = a.innerText.replace("Lezione n.","").trim();
        lines.push(new_text)
    }
});
console.log(lines.join('\n'))