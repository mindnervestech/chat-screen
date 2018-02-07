import {JsonObject, JsonProperty} from "json2typescript";
import { GroupMember, SeasonTicket, DraftPick } from "./draft";

export class GroupObject{
    group_id: string;
    group_status: string;
    season_ticket_id: string;
    group_code: number;
    leader_uid: string;
    group_size: string;
    group_member_count: string;
    type: string;
    test:number;
    t_stamp: string;
    t_stamp_readable: string;
    group_members: Array<GroupMember> = [];
    season_ticket: SeasonTicket;
    group_draft_picks: Array<DraftPick> = []

    constructor(groupOb){
        this.group_id = groupOb.group_id;
        this.group_status = groupOb.group_status
        this.season_ticket_id = groupOb.season_ticket_id_fk
        this.group_code = groupOb.group_code;
        this.leader_uid = groupOb.leader_uid; 
        this.group_size = groupOb.group_size; 
        this.group_member_count = groupOb.group_member_count;
        this.type = groupOb.type;
        this.t_stamp = groupOb.tstamp;
        this.t_stamp_readable = groupOb.tstamp_readable;
        //initialize group members and season ticket 
        groupOb.group_members.forEach(jsonData => {
            var a = new GroupMember(jsonData);
            this.group_members.push(a);
        });
        console.log(groupOb);
        if(groupOb.group_draft_picks){
            groupOb.group_draft_picks.forEach(jsonDraftPick => {
                var a = new DraftPick(jsonDraftPick);
                this.group_draft_picks.push(a);
            });
        }
        this.season_ticket = new SeasonTicket(groupOb.season_ticket);
    }
}