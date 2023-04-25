// takes in an argument of a name and returns a pharase with that name using string interpolation
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

//takes in two arguments, a name and a language, and returns a phrase using those arguments
function introductionWithLanguage (name, JavaScript) {
    return `Hi, my name is ${name} and I am learning to program in ${JavaScript}.` ;
}
//takes in two arguments, a name and a language, and language defaults to JS
function introductionWithLanguageOptional (name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.` ;
}
//takes in two arguments, a name and a language, and the default value can be overridden with an argument
