import React, {useEffect, useState, ChangeEvent, useContext} from 'react';
import HttpService from "../utils/httpService";
import {StaffRecords, TeamsRecords} from "../interface/OrgChartModel";
import Search from "../components/Search/Search";
import OrgTreeView from "../components/OrgTreeView/OrgTreeView";
import StaffContext from "../providers/StaffProvider";
import SearchContext, {SearchData} from "../providers/SearchProvider";

const TreeViewContainer = () => {
    const [teams, setTeams] = useState<TeamsRecords>([]);
    const [staff, setStaff] = useState<StaffRecords>([]);
    const [keyword, setKeyword] = useState<string>('');

    useEffect(() => {
        getTeams();
        getStaff();
    }, []);

    const getTeams = async (): Promise<void> => {
        const {data} = await HttpService.fetchTeamsData();
        setTeams(data);
    };

    const getStaff = async (): Promise<void> => {
        const {data} = await HttpService.fetchStaffData();
        setStaff(data);
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    }

    return (
        <StaffContext.Provider value={{staff}}>
            <SearchContext.Provider value={{keyword}}>
                <Search onChange={onChange} />
                <OrgTreeView teams={teams} />
            </SearchContext.Provider>
        </StaffContext.Provider>
    );
}

export default TreeViewContainer;
