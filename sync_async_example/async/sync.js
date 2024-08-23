

let test1 = function() {
  setTimeout(function () {
    console.log('func_1 STARTS')
    alert('This is an alert')
    console.log('func_1 ENDS HERE')
  }, 3000)
}


let test2 = function() {
  console.log('Func_2')
}

test1()
test2()