// FIrst call the heaader h1 id main heading and change to new dom Layout

const head = document.querySelector("#main-heading");
head.textContent = "New Dom Layout";

const head2 = document.querySelector("#page-header");
head2.classList.remove("bg-dark");
head2.classList.add("bg-success");

const p1 = document.querySelector("#para1");
p1.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

const p2 = document.querySelector("#para2");
p2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

const btnpress = document.querySelector("#btn");

function addpara() {
    const p4 = document.querySelector("#para4");
    p4.textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
};

btnpress.addEventListener("click", addpara);

const hope = document.querySelector("#red");
hope.classList.remove('bg-white');
hope.classList.add('bg-danger');
console.log(hope);

const run = document.querySelector("#blue");
run.classList.remove('bg-white');
run.classList.add("bg-primary");

const walk = document.querySelector("#yellow");
walk.classList.remove('bg-white');
walk.classList.add("bg-warning");

const crawl = document.querySelector("#green");
crawl.classList.remove('bg-white');
crawl.classList.add("bg-success");

const b1 = document.querySelector("#black");
b1.classList.remove('bg-white');
b1.classList.add("bg-dark");


