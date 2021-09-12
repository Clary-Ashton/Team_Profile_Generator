function generateHTML(managerObjects, engineerObjects, internObjects) {
    console.log(managerObjects)
    console.log(engineerObjects)
    console.log(internObjects)

    const team = [];
const managers = managerObjects.forEach(manager =>{
   return `
    <div class="card">
        <header>
            <h2 class="name header">${manager.name}</h2>
            <h3 class="role header">Manager</h3>
        </header>
        <p class="details">Employee ID: ${manager.id}</p>
        <p class="details">Email: <a href="mailto:">${manager.email}</a></p>
        <p class="details">Office Number:${manager.officeNumber}</p>
    </div>`
})
console.log(managers)
team.push(managers.join(''))





    
    const engineers = engineerObjects.forEach(engineer =>{
        return `
    
    <div class="card">
        <header>
            <h2 class="name header">${engineer.name}</h2>
            <h3 class="role header">Engineer</h3>
        </header>
        <p class="details">Employee ID: ${engineer.id}</p>
        <p class="details">Email: <a href="mailto:">${engineer.email}</a></p>
        <p class="details">Office Number:${engineer.github}</p>
    </div>`
    })

    team.push(engineers.join(''))
    

     
    const interns = internObjects.forEach(intern =>{
        return `  
    
    <div class="card">
        <header>
            <h2 class="name header">${intern.name}</h2>
            <h3 class="role header">Intern</h3>
        </header>
        <p class="details">Employee ID: ${intern.id}</p>
        <p class="details">Email: <a href="mailto:">${intern.email}</a></p>
        <p class="details">Office Number:${intern.school}</p>
    </div>`

})

team.push(interns.join(''))

 
console.log(team)



 return`
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css"/>
    <title>My Software Engineering Team</title>
</head>

<body>
    <body>
        <header>
            <h1 class="header">My Software Engineering Team</h1>
        </header>
    
        <main>
            <div class="container">
 
 ${team.join('')}
 
 </div>
 </main>
 
</body>
</html>



</body>
</html>


`}


module.exports = generateHTML;