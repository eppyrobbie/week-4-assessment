const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
        const data = res.data;
        alert(data);
    })
}

fortuneBtn.addEventListener('click', getFortune)



const bookBtn = document.getElementById("newBook")

const getBook = () => {
    axios.get("http://localhost:4000/api/book/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

bookBtn.addEventListener('click', getBook)



const quoteBtn = document.getElementById("quotes")

const getQuote = () => {
    axios.get("http://localhost:4000/api/quote/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

quoteBtn.addEventListener('click', getQuote)


const mealsBtn = document.getElementById("meals")
const getMeal = () => {
    axios.get("http://localhost:4000/api/meal/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

mealsBtn.addEventListener('click', getMeal)





//----I wanted to do more creative things, but was running out of time.-----
//const heroBtn = document.getElementById("heroSumbit")
// const addHero = () => {
//     axios.get("http://localhost:4000/api/hero/")
//     .then(res => {
//         const data = res.data
//         
//         alert()
//     })
// }