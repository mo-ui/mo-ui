import {
    createVue,
    destroyVM
} from '../utils';

describe('first test', () => {
    let vm = createVue({
        template: `
            <p>{{ text }}</p>
        `,
        data() {
            return {
                text: 'hello world'
            };
        }
    }, true);

    it('should render correct contents', () => {
        expect('hello world').toEqual('hello world')
    })

    afterEach(() => {
        destroyVM(vm);
    });
})

