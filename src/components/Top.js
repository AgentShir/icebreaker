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
        <Menu color='blue' inverted widths={4}>
          <Menu.Item>
            <Link to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/random">
            Random Icebreaker
            </Link>
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
        </Menu>
        {/* TODO: Sign In shows if not signed in, Sign Out shows if logged in. Maybe a ternary operator? */}
      </div>
    )
  }
}

export default Top;
