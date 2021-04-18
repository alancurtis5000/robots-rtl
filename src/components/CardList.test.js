import { render, cleanup  } from '@testing-library/react';
import CardList from './CardList';

describe("CardList",()=>{
    afterEach(cleanup);

    const mockRobots =[
      {
          id: 1,
          name:"John Snow",
          username:"JohnSnow",
          email:'johnSnow@gmail.com'
      }
    ]

    it('Should render',()=>{
        const {asFragment} = render(<CardList robots={mockRobots} />);
        expect(asFragment()).toMatchSnapshot();
    })
})