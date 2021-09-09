function generateHTML(managerObjects, engineerObjects, internObjects) {
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

    function generateHTML(managerObjects, engineerObjects, internObjects) {
        const team = [];
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

    function generateHTML(managerObjects, engineerObjects, internObjects) {
        const team = [];
    const interns = internObjects.forEach(intern =>{
        return `  
    
    <div class="card">
        <header>
            <h2 class="name header">${intern.name}</h2>
            <h3 class="role header">Manager</h3>
        </header>
        <p class="details">Employee ID: ${intern.id}</p>
        <p class="details">Email: <a href="mailto:">${intern.email}</a></p>
        <p class="details">Office Number:${intern.school}</p>
    </div>`

})

 team.push(managers.join(""));
 team.push(engineers.join(""));
 team.push(interns.join(""));
 


}

module.exports = generateHTML;