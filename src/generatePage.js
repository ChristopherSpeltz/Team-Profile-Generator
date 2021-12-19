const fs = require("fs");

function generatePage(arr) {
  console.log("build the page");
  console.log(arr);

  let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Team Profile Generator</title>
</head>
<body>
`;
template += `<nav>
<div class="nav-wrapper">
  <a href="#" class="brand-logo center">My Team</a>
</div>
</nav>
`;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].getRole() == "Manager") {
//       template += `
// <h2>Manager Name : ${arr[i].name}</h2>`;
// template += `
// <h2>Manager Office : ${arr[i].officeNumber}</h2>`;
//     } else if (arr[i].getRole() == "Engineer") {
//       template += `
// <h2>Engineer Name : ${arr[i].name}</h2>`;
//     } else if (arr[i].getRole() == "Intern") {
//       template += `
// <h2>Intern Name : ${arr[i].name}</h2>`;
//     }
//   }

template += `<div class="container">
`;

for (i = 0; i < arr.length; i++) {
  if (arr[i].getRole() == "Manager") {
    template += `<div class="row">
    <div class="col s4">
      <div class="card">
        <div class="card-content black-text">
          <span class="card-title blue">${arr[i].name}</span>
          <p>Manager</p>
        </div>
        <div class="card-action">
          <p>ID: ${arr[i].id}</p>
          <a href="mailto:${arr[i].email}">Email: ${arr[i].email}</a>
          <a href="#">Office Number: ${arr[i].officeNumber}</a>
        </div>
      </div>
    </div>
 
`;

  } else if (arr[i].getRole() == "Engineer") {
    template += `
    <div class="col s4">
      <div class="card">
        <div class="card-content black-text">
          <span class="card-title blue">${arr[i].name}</span>
          <p>Engineer</p>
        </div>
        <div class="card-action">
          <p>ID: ${arr[i].id}</p>
          <a href="mailto:${arr[i].email}">Email: ${arr[i].email}</a>
          <a href="https://github.com/${arr[i].github}" target="_blank">GitHub: ${arr[i].github}</a>
        </div>
      </div>
    </div>
  
`;
  } else if (arr[i].getRole() == "Intern") {
    template += `
    <div class="col s4">
      <div class="card">
        <div class="card-content black-text">
          <span class="card-title blue">${arr[i].name}</span>
          <p>Intern</p>
        </div>
        <div class="card-action">
          <p>ID: ${arr[i].id}</p>
          <a href="mailto:${arr[i].email}">Email: ${arr[i].email}</a>
          <p>School: ${arr[i].school}</p>
        </div>
      </div>
    </div>
`;
  }
}
template += `</div>`;

template += `</div>`;

  template += `
</body>
</html>`;

  fs.writeFile("test.html", template, (err) => {
    if (err) throw err;
  });
}

module.exports = generatePage;
