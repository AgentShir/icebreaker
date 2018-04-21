import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Semantic UI React Components
import { Menu } from 'semantic-ui-react';

// Styles
import '../styles/App.css';

class Top extends Component {

  render() {
    return (
      <div>
        <Menu color='blue' inverted widths={5}>
          <Menu.Item>
            <Link to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item disabled>
            Random Icebreaker
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">
                About
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signin">
              Sign In
            </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/admin">
                Admin
              </Link>
            </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Top;
