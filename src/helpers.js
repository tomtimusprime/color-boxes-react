
const choice = (arr) => {
    let randChoice = Math.floor(Math.random() * arr.length);
    return arr[randChoice];
}

export { choice };