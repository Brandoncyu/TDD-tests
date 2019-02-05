function fizzBuzz(n){
  if (n % 2 === 0 && n % 3 ===0){
    return 'fizz buzz'
  } else if (n % 2 === 0){
    return 'fizz'
  } else if (n % 3 ===0){
    return 'buzz'
  } else{
    return null
  }
}

module.exports = {fizzBuzz}
