//Script that find the urls of the products in a PLP based on a pattern
//For example /fiche/ for ldlc.com
//It exports the files in csv
let links = document.querySelectorAll("a[href*='/fiche/']");
let data = [];

links.forEach(link => {
    let url = "https://www.ldlc.com/" + link.getAttribute("href");
    let model = link.textContent.trim();
    data.push(`${url},${model}`);
});

// Create a Blob and download as a CSV
let blob = new Blob([`URL,Model\n${data.join("\n")}`], { type: "text/csv" });
let a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "macbook_models.csv";
a.click();


//////////////////////////////////////