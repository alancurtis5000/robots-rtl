import { render, cleanup  } from '../test/test.utils';
import App from './App';

describe("App",()=>{
    afterEach(cleanup);

    it('Should render',()=>{
        const {asFragment} = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    })
})