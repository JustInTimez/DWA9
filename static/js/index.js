import { AddButton, SubtractButton } from './components/buttons.js';
import { Counter } from './components/counter.js';

const counterElement = document.querySelector('.counter_value');
const addButtonElement = document.querySelector('[data-key="add"]');
const subtractButtonElement = document.querySelector('[data-key="subtract"]');

const counter = new Counter(counterElement);
const addButton = new AddButton(addButtonElement, counter);
const subtractButton = new SubtractButton(subtractButtonElement, counter);