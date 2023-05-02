/**
 * Base button class
 * @class Button
 */
class Button {
  /**
   * Creates an instance of Button
   * @param {HTMLElement} element -  The HTML element to attach the button to
   * @param {Counter} counter - The Counter instance to update when the button is clicked
   * @memberof Button
   */
  constructor(element, counter) {
    this.element = element;
    this.counter = counter;
    this.element.addEventListener("click", this.handleClick.bind(this));
  }

  /**
   * Handles the button click event
   * @memberof Button
   */
  handleClick() {
    this.counter.update(this.getValue());
  }

  /**
   * Returns the value to be added or subtracted from the counter value when the button is clicked
   * @returns {number} The value to be added or subtracted from the counter value
   * @memberof Button
   */
  getValue() {
    return 0;
  }
}

/**
 * AddButton class
 * @class AddButton
 * @extends Button
 */
class AddButton extends Button {
  /**
   * Returns the value to be added to the counter value when the button is clicked
   * @returns {number} The value to be added to the counter value
   * @memberof AddButton
   */
  getValue() {
    return 1;
  }
}

/**
 * SubtractButton class
 * @class SubtractButton
 * @extends Button
 */
class SubtractButton extends Button {
  /**
   * Ensures that the button does not cause the counter to go below 0, but it still allows the counter to be set to 0.
   * @returns {number} The value to be subtracted from the counter value
   * @memberof SubtractButton
   */
  getValue() {
    if (this.counter.value > 0) {
      return -1;
    } else {
      return 0;
    }
  }
}

/**
 * ResetButton class that resets the counter to 0 when clicked
 * @class ResetButton
 * @extends Button
 */
class ResetButton extends Button {
  constructor(element, counter) {
    super(element, counter);
  }

  /**
   * Handle the button click event
   * @memberof ResetButton
   */
  handleClick() {
    super.handleClick();
    this.reset();
    this.alert();
  }

  /**
   * Display an alert notification when the button is clicked
   * @memberof ResetButton
   */
  alert() {
    const alertElement = document.querySelector(
      `[data-key="alert-notification"]`
    );
    alertElement.open = true;
  }

  /**
   * Reset the counter to 0 when the button is clicked.
   * @memberof ResetButton
   */
  reset() {
    this.counter.reset();
  }
}

export { Button, AddButton, SubtractButton, ResetButton };
