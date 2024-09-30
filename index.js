const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote_btn");
const tweet_btn = document.querySelector(".tweet_btn");

const apiLink = "https://quotes-api-self.vercel.app/quote";
//api call =async,await
const getData = async () => {
  const response = await fetch(apiLink);
  const data = await response.json();
  // console.log(data);
  // console.log(data.author);
  // console.log(data.quote);
  quote.innerText = data.quote;
  author.innerText = data.author;
};
getData();
newQuote.addEventListener("click", () => {
  getData();
});
tweet_btn.addEventListener("click", () => {
  window.open("https://twitter.com/intent/tweet?text=Hello%20world");
});
console.log(object);
