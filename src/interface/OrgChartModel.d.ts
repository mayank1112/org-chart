export interface TeamRecord {
    id: number,
    parentId: number,
    name: string,
    location: string,
    staff: number[]
}

export interface TeamsRecords {
    [key: number]: TeamRecord
}

enum Role {
    Representative,
    Facilitator,
    Engineer,
    Analyst,
    Producer,
    Administrator,
    Designer,
    Consultant,
    Planner,
    Architect,
    Orchestrator,
    Associate,
    Coordinator,
    Executive,
    Director,
    Representative,
    Agent,
    Specialist,
    Facilitator,
    Officer,
    Liaison,
    Developer,
    Strategist,
    Technician,
    Agent,
    Representative,
    Assistant,
    Manager,
    Supervisor
}

export interface StaffRecord {
    id: number,
    name: string,
    email: string,
    role: Role
}

export interface StaffRecords {
    [key: number]: StaffRecord
}

export interface OrgTreeProps {
    givenParentId: number | null,
    teams: TeamsRecords
}