import { render, cleanup  } from '@testing-library/react';
import Card from './Card';

describe("Card",()=>{
    afterEach(cleanup);

    it('Should render',()=>{
        const {asFragment} = render(<Card />);
        expect(asFragment()).toMatchSnapshot();
    })
})