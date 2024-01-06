import Services from '@/app/components/home/Services';
import { render } from '@testing-library/react';

describe('Services Component', () => {
    it('matches snapshot', () => {
        const { container } = render(<Services />);
        expect(container).toMatchSnapshot();
    });

    it('renders service cards with correct content', () => {
        const { getByLabelText } = render(<Services />);

        // Check if the service cards with specific labels exist
        const card1 = getByLabelText('card 1');
        const card2 = getByLabelText('card 2');
        const card3 = getByLabelText('card 3');

        expect(card1).toBeInTheDocument();
        expect(card2).toBeInTheDocument();
        expect(card3).toBeInTheDocument();

        // Additional assertions to check for specific content, icons, or classes can be added here
    });
});