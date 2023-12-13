const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

ajax.open("GET", NEWS_URL, false);
ajax.send();

const newFeed = JSON.parse(ajax.response);

console.log(newFeed);

const ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerHTML = newFeed[i].title;
  ul.appendChild(li);
}

document.getElementById("root").appendChild(ul);
