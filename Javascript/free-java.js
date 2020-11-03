person={name:"mini",age:34,salary:13000}
console.log(person["name"])
console.log(person["salary"])

person["age"]-=6
console.log(person)

person["gender"]="female"
console.log(person)

person.hair="brown"
console.log(person)

console.log("teeth" in person)

console.log("age" in person)

var text="hai hello hai hello"
var words=text.split(" ")
var dict={}
for (var word of words){
    if(word in dict){
        dict[word]+=1
    }
    else{
        dict[word]=1
        }
    }

console.log(dict)