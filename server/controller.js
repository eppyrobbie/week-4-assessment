module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes =["You will soon earn a lot of money", "A lifetime friend shall soon be made.", "A pleasant surprise is waiting for you", "You will have a bad haircut soon", "A hunch is creativity trying to tell you something"]
        
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    }, 

    getBook: (req, res) => {
        const books = ["The Alchemist", "The Book Thief", "A Christmas Carol", "The Bible"]

        let randomIndex = Math.floor(Math.random() * books.length)
        let randomBook = books[randomIndex]

        res.status(200).send(randomBook)
    },

    getQuote: (req, res) => {
        const quotes = ["If things go wrong, dont go with them", "Life is 10 percent what happens to you and 90 percent how you respond to it", "My life is my message", "Whatever you are, be a good one", "If youre going through hell, keep going"]

        let randomIndex = Math.floor(Math.random() * quotes.length)
        let randomQuote = quotes[randomIndex]

        res.status(200).send(randomQuote)
    },

    getMeal: (req, res) => {
        const meals = ["Air Fryer Salmon Cakes", "Homemade Chicken Noodle Soup", "Cous Cous with Feta Cheese", "Chickpea Curry"]

        let randomIndex = Math.floor(Math.random() * meals.length)
        let randomMeal = meals[randomIndex]

        res.status(200).send(randomMeal)

    },
}