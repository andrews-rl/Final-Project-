import React from 'react';  // Using Test style
import { expect } from 'chai';  // Using Expect style
import { shallow } from 'enzyme'; // If you're using Enzyme for testing

// Import the component you want to test
import Week6 from '../src/components/Week6'; // Adjust the import path as needed

// Describe Block:
// - 'describe' is a function provided by testing frameworks like Mocha or Jest.
// - It is used to group and organize test cases for a specific component or feature.
// - In this case, it's describing the 'Week6' component.
describe('Week6 Component', () => {
  // It Block:
  // - 'it' is another function provided by testing frameworks.
  // - It represents an individual test case or specification.
  // - This test case is checking if the 'Week6' component can render without errors.
  it('should render without errors', () => {
    // Test Setup:
    // - Create a variable named 'wrapper' to store the result of rendering the 'Week6' component.
    // - The 'shallow' function is typically provided by a testing library like Enzyme for React.
    // - It renders the 'Week6' component in a way that allows examining its output.
    const wrapper = shallow(<Week6 />);
    // Assertion:
    // - Use the 'expect' function, commonly provided by testing libraries, to make assertions.
    // - The 'expect' function checks if a certain condition is met.
    // - In this case, it checks if the 'wrapper' (the rendered component) exists.
    expect(wrapper.exists()).toBe(true);
    // The expectation is that the 'wrapper' should exist, meaning the component rendered without errors.
  });
});
