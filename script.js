/*4.
const a = 5, b = 6, c = 7

const semiPerimeter = (a + b + c)/2
const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))

console.log(area)
*/
5.
const word = 'w3resource', length = word.length

for (let i = 0; i < length; i++){
    word.slice(i - 1, i) = word.slice(length - i - 1, length - i)
}
console.log(word)