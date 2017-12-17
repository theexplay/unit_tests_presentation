export class Calculator {
    add(op1, op2) {
        return op1 + op2;
    }

    subtract(op1, op2) {
        return op1 - op2;
    }

    hasClass(el, className) {
        return document.querySelector(el).classList.contains(className);
    }
}
