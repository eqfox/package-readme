class Author {
  constructor(_person) {
    if (typeof _person === 'string') {
      const person = _person.split(' ');
      this.name = person[0];
      this.email = person[1];
      this.url = person[2];
    } else {
      this.name = _person.name;
      this.email = _person.email;
      this.url = _person.url;
    }
  }

  toString() {
    return `[${this.name}]${this.url}`;
  }
}

export default Author;