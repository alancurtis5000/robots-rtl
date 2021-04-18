import { render, cleanup, fireEvent  } from '@testing-library/react';
import CounterButton from './CounterButton';

describe("CounterButton",()=>{
    afterEach(cleanup);

    it('Should render',()=>{
        const mockColor = 'red'
        const {asFragment} = render(<CounterButton color={mockColor} />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('correctly increments the counter', ()=>{
        const mockColor = 'red';
        const {getByTestId} = render(<CounterButton color={mockColor} />);
        const button = getByTestId('counter');
        fireEvent.click(button)
        const result = button.textContent
        expect(result).toBe('Count: 2')
    })
})