import { Page, withModel } from '@adobe/aem-react-editable-components';
import Cart from './components/Cart/Cart';
import {Navbar, Colections, Contact, CustomFooter, Login, Newsletter, Products, Product} from './components/index';
import Signin from './components/Signin/Signin';

require('./styles.css');

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
