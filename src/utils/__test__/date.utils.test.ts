import { formatDate } from '../date.utils';

describe('Date Utils test suite', () => {
    describe('formatDate', () => {
        const fixedCurrentDate = new Date('2023-01-10T12:00:00Z');

        beforeAll(() => {
            // Activate fake timers and set the system time
            jest.useFakeTimers();
            jest.setSystemTime(fixedCurrentDate);
        });

        afterAll(() => {
            // Restore real timers after tests
            jest.useRealTimers();
        });

        it('should return "Today" for the current date with time', () => {
            const date = '2023-01-10T10:00:00Z';
            expect(formatDate(date)).toBe('Today');
        });

        it('should return "Today" for a date less than 1 day ago', () => {
            const date = '2023-01-10T23:59:59Z'; // Same day, later time
            expect(formatDate(date)).toBe('Today');
        });

        it('should return "January 9, 2023 (1d ago)" for a date exactly 1 day ago', () => {
            const date = '2023-01-09T12:00:00Z'; // 1 day ago
            expect(formatDate(date)).toBe('January 9, 2023 (1d ago)');
        });

        it('should return "January 7, 2023 (3d ago)" for a date 3 days ago', () => {
            const date = '2023-01-07T12:00:00Z'; // 3 days ago
            expect(formatDate(date)).toBe('January 7, 2023 (3d ago)');
        });

        it('should return "January 3, 2023 (1w ago)" for a date exactly 7 days ago', () => {
            const date = '2023-01-03T12:00:00Z'; // 7 days ago
            expect(formatDate(date)).toBe('January 3, 2023 (1w ago)');
        });

        it('should return "December 27, 2022 (2w ago)" for a date 14 days ago', () => {
            const date = '2022-12-27T12:00:00Z'; // 14 days ago
            expect(formatDate(date)).toBe('December 27, 2022 (2w ago)');
        });

        it('should return "December 11, 2022 (1mo ago)" for a date exactly 30 days ago', () => {
            const date = '2022-12-11T12:00:00Z'; // 30 days ago
            expect(formatDate(date)).toBe('December 11, 2022 (1mo ago)');
        });

        it('should return "August 13, 2022 (5mo ago)" for a date 150 days ago', () => {
            const date = '2022-08-13T12:00:00Z'; // Approximately 150 days ago
            expect(formatDate(date)).toBe('August 13, 2022 (5mo ago)');
        });

        it('should return "January 10, 2022 (1y ago)" for a date exactly 365 days ago', () => {
            const date = '2022-01-10T12:00:00Z'; // 365 days ago
            expect(formatDate(date)).toBe('January 10, 2022 (1y ago)');
        });

        it('should return "January 10, 2020 (3y ago)" for a date 3 years ago', () => {
            const date = '2020-01-10T12:00:00Z'; // 3 years ago
            expect(formatDate(date)).toBe('January 10, 2020 (3y ago)');
        });

        it('should handle dates without time component correctly', () => {
            const date = '2023-01-10'; // Same day without time
            expect(formatDate(date)).toBe('Today');
        });

        xit('should handle future dates by treating them as "Today"', () => {
            const date = '2023-01-11T12:00:00Z'; // 1 day in the future
            expect(formatDate(date)).toBe('Today');
        });

        xit('should handle invalid date formats gracefully', () => {
            const date = 'invalid-date-string';
            expect(() => formatDate(date)).toThrow('Invalid date format');
        });
    });
});
