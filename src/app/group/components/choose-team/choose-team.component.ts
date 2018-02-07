import { Component, OnInit } from '@angular/core';
import { UserService } from 'shared/services/User/user.service';

@Component({
  selector: 'app-choose-team',
  templateUrl: './choose-team.component.html',
  styleUrls: ['./choose-team.component.css']
})
export class ChooseTeamComponent implements OnInit {
  private selectedSeason: string; 
  private filteredTeams:any[];

  constructor() { 
  }

  NBATeams = [
    {
      //
      'team': 'Philadelphia, 76ers',
      'team_logo': '../../../../assets/files/NBA_76ers_logo.png',
    },
    {
      //
      'team': 'Los Angeles, Lakers',
      'team_logo': '../../../../assets/files/NBA_Lakers_logo.png',
    },
    {
      'team': 'Los Angeles, Clippers',
      'team_logo': '../../../../assets/files/NBA_Clippers_logo.png',
    },
    {
      'team': 'Toronto, Raptors',
      'team_logo': '../../../../assets/files/NBA_Raptors_logo.png',
    },
    {
      'team': 'Minnesota, Timberwolves',
      'team_logo': '../../../../assets/files/NBA_Timberwolves_logo.png',
    },
    {
      'team': 'Atlanta, Hawks',
      'team_logo': '../../../../assets/files/NBA_Hawks_logo.png',
    },
    {
      'team': 'Cleavland, Cavaliers',
      'team_logo': '../../../../assets/files/NBA_Cavaliers_logo.png',
    }
  ];
  NFLTeams = [
    {

      'team': 'Philadelphia, Eagles',
      'team_logo': '../../../../assets/files/NBA_76ers_logo.png',
    },
    {

      'team': 'Los Angeles, Chargers',
      'team_logo': '../../../../assets/files/NBA_Lakers_logo.png',
    },
    {
      'team': 'Atlanta, Falcons',
      'team_logo': '../../../../assets/files/NBA_Clippers_logo.png',
    },
    {
      'team': 'San Francisco, 49ers',
      'team_logo': '../../../../assets/files/NBA_Raptors_logo.png',
    },
    {
      'team': 'New England, Patriorts',
      'team_logo': '../../../../assets/files/NBA_Timberwolves_logo.png',
    },
    {
      'team': 'Carolina, Panthers',
      'team_logo': '../../../../assets/files/NBA_Hawks_logo.png',
    },
    {
      'team': 'Miami, Dolphins',
      'team_logo': '../../../../assets/files/NBA_Cavaliers_logo.png',
    }
  ];

  ngOnInit() {
  }

  
}
