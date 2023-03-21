// Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка..."). Известно, что в строке встречаются повторяющиеся слова. Нужно написать функцию на JS. На вход передаются строка с дублями, а на выходе мы получаем строку без дублей. 
function deleteDoubles (str) {
    let doubles = str.split(",");
    let result = doubles.filter((el, index, arr) => {
        return arr.indexOf(el) == index;
    })
    return result.join(",");
}


console.log(deleteDoubles("кошка,собака,лошадь,корова,кошка,яблоко,яблоко"))