// it gets all the ulrs from LDLC plps for iPads

let links = document.querySelectorAll("a[href*='/systems/apple/ipad/specs/']");
let data = [];

links.forEach(link => {
let url = "[https://everymac.com](https://everymac.com/)" + link.getAttribute("href");
let model = link.textContent.trim();
data.push(`${url},${model}`);
});

// Create a Blob and download as a CSV
let blob = new Blob([`URL,Model\\n${data.join("\\n")}`], { type: "text/csv" });
let a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "ipad_models.csv";
a.click();
