const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: function() {
        console.log("Meow");
    }
};

cat.complain();


// Question 2


const heading = document.querySelector ("h3");

heading.innerHTML = "Updated heading";


// Question 3:


heading.style.fontSize = "2em";


// Question 4:


heading.className += "subheading";


// Question 5:


const paragraphs = document.querySelectorAll ("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};


// Question 6:


const resultsContainer = document.querySelector (".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";



// Question 7:


function displayNames(list) {
    for (let i= 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

displayNames(cats);


// Question 8:


function createCats(cats) {
    
    let html = "";

    for (let i = 0; i < cats.length; i++) {

        html += `<div>`;

        let displayAge = "Age unknown";

        if (cats[i].age) {
            displayAge = cats[i].age;
        }

        html += `<h5>${cats[i].name}</h5>`;
        html += `<p>${displayAge}</p>`;

        html += `</div>`;
    }
    return html;
}



const container = document.querySelector(".cat-container")
let catHtml = createCats(cats);

container.innerHTML = catHtml;