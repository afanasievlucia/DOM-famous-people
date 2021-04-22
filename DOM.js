let quotes = [{
    author: " - Andrew Hendrixson - ",
    quote: "“Anyone who has ever made anything of importance was disciplined.”"
},
{
    author: " - Coco Chanel - ",
    quote: "“Don’t spend time beating on a wall, hoping to transform it into a door.”"
},
{
    author: " - Albert Einstein - ",
    quote: "“Creativity is intelligence having fun.”"
},
{
    author: " - Brian Tracy - ",
    quote: "“Optimism is the one quality more associated with success and happiness than any other.”"
},
{
    author: " - Grace Coddington - ",
    quote: "“Always keep your eyes open. Keep watching. Because whatever you see can inspire you.”"
},
{
    author: " - Robin Sharma - ",
    quote: "“Don’t live the same year 75 times and call it a life.”"
},
{
    author: " - Thich Nhat Hanh - ",
    quote: "“There is no way to happiness. Happiness is the way.”"
},
{
    author: " - Shahir Zag - ",
    quote: "“You will succeed because most people are lazy.”"
},
{
    author: " - Thomas Edison - ",
    quote: "“Genius is 1% inspiration, 99% perspiration.”"
}
];


function newAuthor() {
    const random = quotes[Math.floor(Math.random() * (quotes.length))];

    document.getElementById("h1").innerHTML = random.author;
    document.getElementById("h2").innerHTML = random.quote;
};