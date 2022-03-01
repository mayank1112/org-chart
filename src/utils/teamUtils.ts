import {TeamsRecords} from "../interface/OrgChartModel";

export const teamsHaveChildForParentId = (teams: TeamsRecords, parentId: number) => {
    return Object.values(teams).some(child => child.parentId === parentId && child.id !== parentId);
};

