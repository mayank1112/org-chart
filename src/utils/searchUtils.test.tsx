import {getHighlightedText, isTeamMatchingKeyword} from "./searchUtils";

describe('isTeamMatchingKeyword', () => {
  test('should return true if keyword is present in text', () => {
    const isMatched = isTeamMatchingKeyword('test word', 'tESt Wo');
    expect(isMatched).toBeTruthy();
  });
  test('should return false if keyword is not present in text', () => {
    const isMatched = isTeamMatchingKeyword('test word', 'keyword');
    expect(isMatched).toBeFalsy();
  });
});

describe('getHighlightedText', () => {
  test('should return text if keyword is not matched', () => {
    const outputHTML = getHighlightedText('test word', 'keyword');
    expect(outputHTML).toMatchSnapshot();
  });
  test('should return highlighted text if keyword matches', () => {
    const outputHTML = getHighlightedText('test word', 'tESt Wo');
    expect(outputHTML).toMatchSnapshot();
  });
});
