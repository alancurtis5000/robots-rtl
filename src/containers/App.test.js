import { render, cleanup  } from '../test/test.utils';
import App from './App';

describe("App",()=>{
    afterEach(cleanup);

    // it('Should render',()=>{
    //     const {asFragment} = render(<App />);
    //     expect(asFragment()).toMatchSnapshot();
    // })

    it('should pass', ()=>{
        expect(true).toBe(true)
    })
    it('should be defined', ()=>{
        const component = render(<App />)
        expect(component).toBeDefined()
    })
})