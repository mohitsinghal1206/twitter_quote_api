const quote = document.getElementsByTagName("blockquote");
const author = document.getElementsByClassName("author");

const apiLink = "https://quotes-api-self.vercel.app/quote";
//api call =async,await
const getData = async () => {
  const response = await fetch(apiLink);
  const data = await response.json();
  console.log(data);
};
getData();
console.log(object)
