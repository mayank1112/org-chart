import React, {ReactElement} from 'react';
import OrgTree from "./OrgTree";
import {OrgTreeProps} from "../../interface/OrgChartModel";

const OrgTreeChildren = ({givenParentId, teams}: OrgTreeProps): ReactElement => {
    return (
        <OrgTree givenParentId={givenParentId} teams={teams} />
    );
};

export default OrgTreeChildren;
