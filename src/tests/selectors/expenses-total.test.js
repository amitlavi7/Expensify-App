import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
    expect(selectExpensesTotal([])).toEqual(0);
});

test('should correctly add up multiple expenses', () => {
    expect(selectExpensesTotal([expenses[0]])).toEqual(195);
});

test('should correctly add up multiple expenses', () => {
    expect(selectExpensesTotal(expenses)).toEqual(114195);
});