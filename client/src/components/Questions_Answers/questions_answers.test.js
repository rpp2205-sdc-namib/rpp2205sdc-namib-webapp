import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalWindow from './ModalWindow.jsx';
import Questions_Answers from './Questions_Answers.jsx';

/**
 * @jest-environment jsdom
 */

describe('component rendering', function() {
  test("should render Questions_Answers component correctly", function() {
    render(<Questions_Answers />);
    screen.debug();
  })
})


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
  test("should validate as a valid email address", function() {
    let modalInstance = new ModalWindow();
    let validInput = 'jack@gmail.com';
    let validInput2 = 'jack@email.com'
    let validInput3 = 'jac123k@email.com'

    expect(modalInstance.validateEmail(validInput)).toBeTruthy();
    expect(modalInstance.validateEmail(validInput2)).toBeTruthy();
    expect(modalInstance.validateEmail(validInput3)).toBeTruthy();
  })
})