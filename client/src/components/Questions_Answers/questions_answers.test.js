import ModalWindow from './ModalWindow.jsx';

describe('Email validation', function() {
  test("should validate as a invalid email address", function() {
    let modalInstance = new ModalWindow();
    let invalidInput = 'jack';
    let invalidInput2 = 'jack@';
    let invalidInput3 = 'jack@.email.com';

    expect(modalInstance.validateEmail(invalidInput)).toBeNull();
    expect(modalInstance.validateEmail(invalidInput2)).toBeNull();
    expect(modalInstance.validateEmail(invalidInput3)).toBeNull();
  });
  test("should validate as a valie email address", function() {
    let modalInstance = new ModalWindow();
    let validInput = 'jack@gmail.com';
    let validInput2 = 'jack@email.com'
    let validInput3 = 'jac123k@email.com'

    expect(modalInstance.validateEmail(validInput)).toBeTruthy();
    expect(modalInstance.validateEmail(validInput2)).toBeTruthy();
    expect(modalInstance.validateEmail(validInput3)).toBeTruthy();
  })
})