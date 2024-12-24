import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModeToggle } from '../mode-toggle';
import { useTheme } from 'next-themes';

// Mock the useTheme hook from next-themes
jest.mock('next-themes', () => ({
    useTheme: jest.fn()
}));

describe('ModeToggle Component test suite', () => {
    const mockSetTheme = jest.fn();

    const renderComponent = (theme: string) => {
        (useTheme as jest.Mock).mockReturnValue({
            theme,
            setTheme: mockSetTheme
        });

        return render(<ModeToggle />);
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    // TODO: fix toBeVisible from jest testing DOM issues
    xit('renders SunIcon when theme is light', () => {
        renderComponent('light');

        const sunIcon = screen.getByTestId('sun-icon');
        const moonIcon = screen.getByTestId('moon-icon');

        expect(sunIcon).toBeVisible();
        expect(moonIcon).not.toBeVisible();
    });

    xit('renders MoonIcon when theme is dark', () => {
        renderComponent('dark');

        const sunIcon = screen.getByTestId('sun-icon');
        const moonIcon = screen.getByTestId('moon-icon');

        expect(moonIcon).toBeVisible();
        expect(sunIcon).not.toBeVisible();
    });

    it('toggles theme from light to dark when clicked', () => {
        renderComponent('light');

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockSetTheme).toHaveBeenCalledWith('dark');
    });

    it('toggles theme from dark to light when clicked', () => {
        renderComponent('dark');

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockSetTheme).toHaveBeenCalledWith('light');
    });

    it('matches the snapshot in light mode', () => {
        const { asFragment } = renderComponent('light');
        expect(asFragment()).toMatchSnapshot();
    });

    it('matches the snapshot in dark mode', () => {
        const { asFragment } = renderComponent('dark');
        expect(asFragment()).toMatchSnapshot();
    });
});
