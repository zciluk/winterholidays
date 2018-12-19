import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
// Text setup. Enzyme Adapter to react 16 and JSDOM 
const { document } = (new JSDOM('')).window;
global.document = document;



configure({ adapter: new Adapter() });