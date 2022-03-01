import React, {ReactElement, useContext} from 'react';
import {Tree} from 'react-organizational-chart';
import {TeamsRecords} from "../../interface/OrgChartModel";
import OrgTree from "./OrgTree";

const OrgTreeView = ({teams}: {teams: TeamsRecords}): ReactElement => (
    <Tree
        lineWidth={'1.5px'}
        lineColor={'#d3d3d3'}
        lineBorderRadius={'10px'}
        label='Organization'
    >
        <OrgTree givenParentId={null} teams={teams} />
    </Tree>
);

export default OrgTreeView;
