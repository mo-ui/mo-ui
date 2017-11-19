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
        expect(vm.$el.innerHTML).toEqual(vm.$data.text)
    })

    afterEach(() => {
        destroyVM(vm);
    });
})

