import React from 'react';
import App from './components/App';
import { shallow } from 'enzyme';
import Icebreaker from './components/Icebreaker';

describe('<Icebreaker />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    }); 
});
