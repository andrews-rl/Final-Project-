import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'; // If you're using Enzyme for testing

// Import the component you want to test
import Week6 from '../src/components/Week6'; // Adjust the import path as needed

describe('Week6 Component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Week6 />);
    expect(wrapper.exists()).to.equal(true);
  });

  // Add more tests for your component here
});
