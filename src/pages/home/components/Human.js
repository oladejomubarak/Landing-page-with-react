class Human {
  constructor(species) {
    this.humanname = species;
  }
  get humanname() {
    return this.humanname;
  }
  set humanname(name) {
    this.humanname = name;
  }

}

class Male extends Human {
  constructor(species, privatepart) {
    super(species);
    this.gender = privatepart
  }

}