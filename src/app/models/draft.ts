export class DraftPick{
    draft_pick_id: string;
    first_name: string;
    last_name: string;
    uid: string; 
    startTstamp: number;
    endTStamp: number; 
    drafted_game_id_fk: string; 
    constructor(draftPickJSON){
        this.draft_pick_id = draftPickJSON.draft_pick_id;
        this.uid = draftPickJSON.uid;
        this.drafted_game_id_fk = draftPickJSON.drafted_game_id_fk
        this.first_name = draftPickJSON.first_name;
        this.last_name = draftPickJSON.last_name;
    }
}
export interface TeamObject{
    teamID: string; 
    teamName: string; 
    teamCity: string; 
}
export class GameObject{
    game_id: string;
    vs_team_id: string;
    team_name: string;
    team_city: string;
    game_tstamp: string;
    owned_by_uid: string; 

    constructor(gameJson){
        this.game_id = gameJson.game_id;
        this.vs_team_id = gameJson.vs_team_id;
        this.team_name = gameJson.team_name;
        this.team_city = gameJson.team_city;
        this.game_tstamp = gameJson.game_tstamp 
        this.owned_by_uid = gameJson.owned_by_uid_fk;
    }
}
export class GroupMember{
    thumbImgURL: string; 
    first_name: string; 
    last_name: string;
    uid: string; 
    joined_tstamp: string; 

    constructor(JSONData){
        this.uid = JSONData.uid;
        this.first_name = JSONData.first_name
        this.last_name = JSONData.last_name 
        this.thumbImgURL = JSONData.thumbImg 
        this.joined_tstamp = JSONData.joined_tstamp  
    }
}

export class SeasonTicket{
    seasonTicketID: string;
    sport: string;
    team: string;
    section: string; 
    seats: string; 
    issuedTstamp: number;
    issuedReadable: string; 
    games: Array<GameObject> = [];
    teamID: string;

    constructor(seasonTicketJson){
        this.seasonTicketID = seasonTicketJson.season_ticket_id;
        this.sport = seasonTicketJson.sport;
        this.team = seasonTicketJson.team;
        this.section = seasonTicketJson.section;
        this.seats = 'TELLCHUCK'
        this.issuedTstamp = seasonTicketJson.issued_tstamp;
        this.issuedReadable = seasonTicketJson.issued_readable;
        this.teamID = seasonTicketJson.season_ticket_id;
         //initialize games in season ticket
         seasonTicketJson.games.forEach(gameJson => {
            var a = new GameObject(gameJson);
            this.games.push(a);
        });
    }
}