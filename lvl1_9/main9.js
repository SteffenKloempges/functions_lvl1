let name = "Steffen Klömpges"
let birthPlace = "Hamm"
let age = 29
let residencePlace = "Unna"

let me = (ich, wohnort, alter, geburtsort) => {
    console.log("Mein Name ist" + " " + ich)
    console.log("Ich bin in" + " " + geburtsort + " " + " geboren")
    console.log("Ich bin" + " " + age + " " + "Jahre alt")
    console.log("Ich wohne in" + " " + residencePlace)
}

me(name, residencePlace, age, birthPlace)