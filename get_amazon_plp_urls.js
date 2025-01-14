// it gets all the ulrs from LDLC plps for iPads
//https://www.amazon.com/stores/page/D209D922-7883-495C-9894-6B13D9BB1A67
let links = document.querySelectorAll("a[href*='/dp/B0']");
let mama = [];

links.forEach(link => {
let url = "https://www.amazon.com" + link.getAttribute("href");
let model = link.textContent.trim();
mama.push(`${url},${model}`);
});

// Create a Blob and download as a CSV
let blob = new Blob([`URL,Model\n${mama.join("\n")}`], { type: "text/csv" });
let a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "amazon_models.csv";
a.click();
