import React, {ReactElement, useContext} from 'react';
import {TreeNode} from 'react-organizational-chart';
import OrgTreeChildren from "./OrgTreeChildren";
import {OrgTreeProps} from "../../interface/OrgChartModel";
import {isTeamMatchingKeyword} from "../../utils/searchUtils";
import Team from "../Team/Team";
import {teamsHaveChildForParentId} from "../../utils/teamUtils";
import SearchContext, {SearchData} from "../../providers/SearchProvider";

const OrgTree = ({givenParentId, teams}: OrgTreeProps): ReactElement => {
    const reducedTeams = Object.assign({}, teams);
    const {keyword} = useContext<SearchData>(SearchContext);
    return (
        <>
            {
                Object.values(teams).map(team => {
                    const isChild: boolean = (
                        (givenParentId === null && team.parentId === team.id) // search all root nodes
                        || (givenParentId !== null && team.parentId === givenParentId) // search all child nodes
                    );
                    if (isChild) {
                        const isMatched: boolean = keyword ? isTeamMatchingKeyword(team.name, keyword) : true;
                        delete reducedTeams[team.id]; // delete the team from memory as tree is now being populated with this team
                        return (
                            <TreeNode key={team.id} label={<Team team={team} show={isMatched} />}>
                                {
                                    teamsHaveChildForParentId(reducedTeams, team.id) ? (
                                        <OrgTreeChildren givenParentId={team.id} teams={reducedTeams} />
                                    ) : null
                                }
                            </TreeNode>
                        );
                    }
                    return null;
                })
            }
        </>
    );
}

export default OrgTree;
