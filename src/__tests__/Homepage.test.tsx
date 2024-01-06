import Homepage from '@/app/page';
import { render } from '@testing-library/react';

describe('Homepage Component', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<Homepage />);
        
        // You can add assertions here to check if certain elements are rendered
        const heroElement = getByTestId('hero');
        const servicesElement = getByTestId('services');
        const footerElement = getByTestId('footer');

        expect(heroElement).toBeInTheDocument();
        expect(servicesElement).toBeInTheDocument();
        expect(footerElement).toBeInTheDocument();
    });
});