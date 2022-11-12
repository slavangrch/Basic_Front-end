const usersDiv = document.getElementById('listOfUsers');

function addUser() {
  fetch('https://randomuser.me/api').then((results) => {
    return results.json();
  }).then((response) => {
    const user = response.results[0];
    const person = new Person(
      user.picture,
      user.name,
      user.cell,
      user.location.city,
      user.location.country);
    person.createPerson();
  });
}

function removeUsers() {
  while (usersDiv.firstChild)
    usersDiv.removeChild(usersDiv.firstChild);
}

class Person {
  constructor(picture, name, cell, city, country) {
    this.picture = picture;
    this.name = name;
    this.cell = cell;
    this.city = city;
    this.country = country;
  }

  createPerson() {
    const user = document.createElement('div');
    user.id = 'user';

    const photo = document.createElement('img');
    photo.src = this.picture.medium;
    user.appendChild(photo);

    const fullInfo = document.createElement('span');
    fullInfo.innerHTML = `Name: ${this.name.title} ${this.name.first}
    ${this.name.last}<br>Country: ${this.country}<br>City: ${this.city}<br>Cell: ${this.cell}`;
    user.appendChild(fullInfo);

    usersDiv.appendChild(user);

    console.log(this.picture, `${this.name.title} ${this.name.first}
    ${this.name.last}`, this.country, this.city, this.cell);
  }
}