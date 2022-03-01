import React, {ReactElement, useContext, useState} from 'react';
import {TeamRecord} from "../../interface/OrgChartModel";
import TeamDialog from "../dialogs/TeamDialog";
import {pluralizedStringForLength} from "../../utils/stringUtils";
import SearchContext, {SearchData} from "../../providers/SearchProvider";
import './team.css';
import {getHighlightedText} from "../../utils/searchUtils";

const Team = ({team, show}: {team: TeamRecord, show: boolean}): ReactElement => {
    const [open, setOpen] = useState<boolean>(false);
    const openDialog = () => {
        if (show) {
            setOpen(true);
        }
    };
    const closeDialog = () => {
        setOpen(false);
    };
    const {length} = team.staff;
    let classNames = 'team';
    if (!show) {
        classNames += ' team-hidden';
    }
    const {keyword} = useContext<SearchData>(SearchContext);

    return (
        <>
            <a onClick={openDialog} className={classNames}>
                <div className='team-title'>{keyword ? getHighlightedText(team.name, keyword): team.name}</div>
                <span className='team-subtitle'>{length}&nbsp;{pluralizedStringForLength('member', length)}</span>
            </a>
            <TeamDialog team={team} open={open} closeDialog={closeDialog} />
        </>
    );
};

export default Team;