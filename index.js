const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote_btn");
const tweet_btn = document.querySelector(".tweet_btn");

const apiLink = "https://quotes-api-self.vercel.app/quote";
let temp;
//api call =async,await
const getData = async () => {
  const response = await fetch(apiLink);
  const data = await response.json();

  quote.innerText = data.quote;
  author.innerText = data.author;
  temp = data.quote;
};
getData();
newQuote.addEventListener("click", () => {
  getData();
});
tweet_btn.addEventListener("click", () => {
  window.open("https://twitter.com/intent/tweet?text=" + temp);
});
console.log(object);
