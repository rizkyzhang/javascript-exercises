function capitalizeWord(word) {
    return word
                .split(" ")
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(" ");
}


console.log(capitalizeWord("john lennon"))