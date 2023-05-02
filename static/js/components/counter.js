/**
 * Counter class
 * @class Counter
 */
class Counter {
  constructor(element) {
    this.element = element;
    this.value = 0;
    this.element.value = this.value;
  }

  /**
   * Updates the counter value and updates the display. Also ensures that the counter cannot go into negative
   * @param {number} value - The value to add or subtract from the current value
   * @memberof Counter
   */
  update(value) {
    const newValue = this.value + value;
    if (newValue < 0) {
      this.value = 0;
    } else {
      this.value = newValue;
    }
    this.element.value = this.value;
  }

  /**
   * Reset the counter to 0.
   * @memberof Counter
   */
  reset() {
    this.value = 0;
    this.element.value = this.value;
  }
}

export { Counter };
