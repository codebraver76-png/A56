const user = {
    name: "Alex Smith",
    age: 30,
    city: "New York"
};

const { name, age, city } = user;
document.getElementById('name').textContent = `Name: ${name}`;
document.getElementById('age').textContent = `Age: ${age}`;
document.getElementById('city').textContent = `City: ${city}`;