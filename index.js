
const quotes = [
	{ 
		"content" : "The only sin is ignorance", 
	},
	{
		"content" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
	},
	{
		"content" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
	}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  content.innerText = `“${random.quote}.”`;
}

genquote.addEventListener("click", randomQuote)