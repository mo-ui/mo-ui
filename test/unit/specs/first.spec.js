import {
    createVue,
    destroyVM
} from '../utils';

describe('first test', () => {
    let vm = createVue({
        template: `
            <mo-button type="success"></mo-button>
        `
    }, true);

    it('should render correct contents', () => {
        expect(vm.$el.innerHTML).toEqual('button')
    })

    afterEach(() => {
        destroyVM(vm);
    });
})

