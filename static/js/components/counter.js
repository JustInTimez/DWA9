class Counter {
  constructor(element) {
    this.element = element;
    this.value = 0;
    this.render();
  }

  update(newValue) {
    this.value += newValue;
    this.render();
  }

  render() {
    this.element.value = this.value;
  }
}

export { Counter };
