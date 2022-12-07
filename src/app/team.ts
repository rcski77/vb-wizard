export interface Team {
    name: string;
    result: string;
    active: boolean;
}

export interface Match {
    id: number;
    team1: Team;
    team2: Team;
    winner: any;
}