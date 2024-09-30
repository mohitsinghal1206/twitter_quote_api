const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote_btn");
const tweet_btn = document.querySelector(".tweet_btn");

const apiLink = "https://quotes-api-self.vercel.app/quote";
let temp;

// Get the video element
const video = document.getElementById("backgroundVideo");

// Set the playback speed (e.g., 0.5 for half speed, 1.0 for normal speed)
video.playbackRate = 0.6;  // Adjust this value for the desired speed

// Function to handle the fade-out effect
const fadeOut = (element) => {
  element.classList.add('hidden');
};

// Function to handle the fade-in effect
const fadeIn = (element, text) => {
  element.innerText = text;
  element.classList.remove('hidden');
};

// API call to fetch the quote
const getData = async () => {
  try {
    const response = await fetch(apiLink);
    const data = await response.json();

    // Apply fade-out before updating the quote
    fadeOut(quote);
    fadeOut(author);

    // Wait for the fade-out effect to complete before updating text
    setTimeout(() => {
      fadeIn(quote, data.quote);
      fadeIn(author, data.author);
      temp = data.quote;  // Store the quote for tweeting
    }, 500); // Delay to sync with fade-out duration
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
};

// Initial call
getData();

// Event listener for new quote button
newQuote.addEventListener("click", () => {
  getData();
});

// Event listener for tweet button
tweet_btn.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(temp),
    "X post",
    "width=400,height=400"
  );
});
