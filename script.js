function toggleStudentFields(){
    const role = document.getElementById('role').value;
    const studentFields = document.getElementById('studentFields');
    studentFields.style.display = (role === 'student') ? 'block' : 'none';
}
toggleStudentFields(); // initialize

document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const role = document.getElementById('role').value;
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();

    if(role === "admin"){
        if(name && password){
            localStorage.setItem('role', role);
            localStorage.setItem('name', name);
            window.location.href = "dashboard.html";
        } else {
            alert("Enter name & password for Admin!");
        }
    } else if(role === "student"){
        const email = document.getElementById('email').value.trim();
        const cls = document.getElementById('class').value.trim();
        const roll = document.getElementById('roll').value.trim();

        if(name && password && email && cls && roll){
            localStorage.setItem('role', role);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('class', cls);
            localStorage.setItem('roll', roll);
            window.location.href = "dashboard.html";
        } else {
            alert("Please fill all student fields!");
        }
    } else {
        alert("Select a role!");
    }
});
