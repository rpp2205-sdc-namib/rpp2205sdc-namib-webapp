/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ModalWindow from './ModalWindow.jsx';
import Questions_Answers from './Questions_Answers.jsx';
import Answers from './Answers.jsx';
import Question from './Question.jsx';


describe('Questions_Answers component rendering', function() {
  test("should check whether an element rendered or not", function() {
    render(<Questions_Answers />);
    expect(screen.getByText('Add Question')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Add Question'})).toBeInTheDocument();
    expect(screen.queryByText('button', {name: 'hello'})).toBeNull();
  });
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