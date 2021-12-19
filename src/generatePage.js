const fs = require('fs')

function generatePage(arr) {
    console.log("build the page")
    console.log(arr)

    let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
`

    for (i=0; i<arr.length; i++){
        if(arr[i].getRole() == "Manager"){
            template += `
<h2>Manager Name : ${arr[i].name}</h2>`
        }else if(arr[i].getRole() == "Engineer"){
            template += `
<h2>Engineer Name : ${arr[i].name}</h2>`
        }else if(arr[i].getRole() == "Intern"){
            template += `
<h2>Intern Name : ${arr[i].name}</h2>`
        }
    }

    template +=`
</body>
</html>`

fs.writeFile("test.html", template, (err) => {
    if(err) throw err;
})
}

module.exports = generatePage;