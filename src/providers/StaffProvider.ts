import {createContext} from "react";
import {StaffRecords} from "../interface/OrgChartModel";

export interface StaffData {
    staff: StaffRecords
}
const StaffContext = createContext<StaffData>({
    staff: {}
});

export default StaffContext;

