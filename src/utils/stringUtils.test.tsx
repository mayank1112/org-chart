import {pluralizedStringForLength} from "./stringUtils";

describe('pluralizedStringForLength', () => {
  test('should return singular word if length is 1', () => {
    const outputWord = pluralizedStringForLength('test word', 1);
    expect(outputWord).toBe('test word');
  });
  test('should return plural word if length is 0', () => {
    const outputWord = pluralizedStringForLength('test word', 0);
    expect(outputWord).toBe('test words');
  });
  test('should return plural word if length is greater than 1', () => {
    const outputWord = pluralizedStringForLength('test word', 2);
    expect(outputWord).toBe('test words');
  });
});
