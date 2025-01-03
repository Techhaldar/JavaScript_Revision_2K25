// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item)
// })

// console.log(values)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newNums = myNums.filter((num) => {

//     return num > 4
// })

// console.log(newNums)


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 2002, edition: 2003},
    {title: 'Book Four', genre: 'Science', publish: 2002, edition: 2009},
    {title: 'Book Five', genre: 'Fiction', publish: 1986, edition: 2010},
    {title: 'Book Six', genre: 'History', publish: 1980, edition: 2015},
    {title: 'Book Seven', genre: 'Non-Fiction', publish: 1990, edition: 2020},
    {title: 'Book Five', genre: 'Fiction', publish: 1986, edition: 2019},
]

let userBooks = books.filter( (bk) => bk.genre === 'Fiction')
userBooks = books.filter( (bk) => bk.publish >= 2000 && bk.genre === 'History')

console.log(userBooks)

