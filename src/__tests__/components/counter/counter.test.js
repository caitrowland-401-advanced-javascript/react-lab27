
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter/counter'

describe('<Counter/>', () => {
  it('is alive at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeTruthy();
  });
  describe('changes on click', () => {
    it('changes state on click + ', () => {
      let app = mount(<Counter />);
      let button = app.find('#upClick');
      button.simulate('click');
      expect(app.find('#currentCount').text()).toContain(1);
    });

    it('changes state on click -', () => {
      let app = mount(<Counter />);
      let button = app.find('#downClick');
      button.simulate('click');
      expect(app.find('#currentCount').text()).toContain(-1);

    })
})
  it('renders correctly', () => {
    const count = renderer.create(<Counter />).toJSON();
    expect(count).toMatchSnapshot();
  });
});