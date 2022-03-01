import {teamsHaveChildForParentId} from "./teamUtils";

const MOCK_TEAMS = {
  0: { id: 0, parentId: 0, location: 'Zurich', staff: [], name: 'Team A' },
  1: { id: 1, parentId: 0, location: 'Paris', staff: [], name: 'Team B' },
  2: { id: 2, parentId: 1, location: 'London', staff: [], name: 'Team C' },
};

describe('getHighlightedText', () => {
  test('should return true if child is present in teams', () => {
    const isChildPresent = teamsHaveChildForParentId(MOCK_TEAMS, 1);
    expect(isChildPresent).toBeTruthy();
  });
  test('should return false if child is not present in teams', () => {
    const isChildPresent = teamsHaveChildForParentId(MOCK_TEAMS, 5);
    expect(isChildPresent).toBeFalsy();
  });
});
