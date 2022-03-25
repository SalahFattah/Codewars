/*The word i18n is a common abbreviation of internationalization in the developer
 community, used instead of typing the whole word and trying to spell it correctly.
 Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below)
within that string of length 4 or greater into an abbreviation, following these rules:

-A "word" is a sequence of alphabetical characters. 
By this definition, any other character like a space or hyphen (eg. "elephant-ride") 
will split up a series of letters into two words (eg. "elephant" and "ride").
-The abbreviated version of the word should have the first letter,
 then the number of removed characters, then the last letter (eg. "elephant ride" => 
 "e6t r2e").
*/


function abbreviate(string){
    let alpha="abcdefghijklmnopqrstuvwxyz";
    let strArr=string.split(" ");
    let newArr=[];
    for(let i of strArr){
        if (i.length>=4 && /^[a-zA-Z-]+$/.test(i)){
            if(i.includes("-")){
                let newWord=i.split("-");
                let innerArr=[];
                for (let j of newWord){
                    if(j.length>=4){
                        let slicedString=j.slice(1,j.length-1);
                        let word=`${j[0]}${slicedString.length}${j[j.length-1]}`;
                        innerArr.push(word);
                        
                    }else{
                        innerArr.push(j);
                    }
                }
                let joinedWord=innerArr.join("-");
                newArr.push(joinedWord);
            }else{
            let slicedString=i.slice(1,i.length-1);
            let word=`${i[0]}${slicedString.length}${i[i.length-1]}`;
            newArr.push(word);
            }
            // console.log(newArr)
        }else{
            newArr.push(i);
        }
    }
    return newArr.join(" ");
}
console.log(abbreviate("elephant-rides are really fun!"));