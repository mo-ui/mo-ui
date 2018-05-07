import Button from './components/button/index';
import Row from './components/row/index';
import Col from './components/col/index';
import Alert from './components/alert/index';
import Input from './components/input/index';

const components = [
    Button,
    Row,
    Col,
    Alert,
    Input
];

const install = function (Vue) {
    if (install.installed) return;
    components.map((component) => {
        Vue.component(component.name, component);
    });
};

export default {
    version: '0.1.0',
    install
};
