import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { UserService } from 'shared/services/User/user.service';
import { ChooseTeamComponent } from '../choose-team/choose-team.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-choose-season',
  templateUrl: './choose-season.component.html',
  styleUrls: ['./choose-season.component.scss']
})
export class ChooseSeasonComponent implements OnInit {
  
  constructor(private us: UserService) {
    this.us.emitChange('SELECT SEASON');
   }

   @Output() selectSeason = new EventEmitter<string>();


   selectedTeam(season){
     this.selectSeason.emit(season)
   }

   public current:any;
   public current1:any;
   public current2:any;
   public current3:any;
   public current4:any;

   private NFLTeams = [
     {
       city: "San Francisco",
       mascot: "49ers",
       logo: "/assets/images/teams/NFL/49ERS.png",
       name: "San Francisco 49ers", 
       league: "NFC West",
       homeGameCount: 10,
       sport:'NFL'
     },
     {
      city: "Kansas City",
      mascot: "Chiefs",
      logo: "/assets/images/teams/NFL/CHIEFS.png",
      name: "Kansas City Chiefs",
      league: "NFC West",
      homeGameCount: 10,
      sport:'NFL'
    },
    {
      city: "Dallas",
      mascot: "Cowboys",
      logo: "/assets/images/teams/NFL/COWBOYS.png",
      name: "San Francisco 49ers",
       league: "NFC West",
       homeGameCount: 10,
       sport:'NFL'
    },
    {
      city: "New York",
      mascot: "Jets",
      logo: "/assets/images/teams/NFL/JETS.png",
      name: "San Francisco 49ers",
       league: "NFC West",
       homeGameCount: 10,
       sport:'NFL'
    },
    {
      city: "Green Bay",
      mascot: "Packers",
      logo: "/assets/images/teams/NFL/PACKERS.png",
      name: "San Francisco 49ers",
      league: "NFC West",
      homeGameCount: 10,
      sport:'NFL'
    },
    {
      city: "Carolina",
      mascot: "Panthers",
      logo: "/assets/images/teams/NFL/PANTHERS.png",
      name: "San Francisco 49ers",
      league: "NFC West",
      homeGameCount: 10,
      sport:'NFL'
    },
   ];
   private NBATeams = [
    {
      city: "Cleveland",
       mascot: "Cavs",
       logo: "/assets/images/teams/NBA/CAVALIERS.png",
       sport:'NBA'

    },
    {
      city: "Los Angeles",
       mascot: "Clippers",
       logo: "/assets/images/teams/NBA/CLIPPERS.png",
       sport:'NBA'

    },
    {
      city: "Atlanta",
       mascot: "Hawks",
       logo: "/assets/images/teams/NBA/HAWKS.png",
       sport:'NBA'

    },
    {
      city: "Los Angeles",
       mascot: "Lakers",
       logo: "/assets/images/teams/NBA/LAKERS.png",
       sport:'NBA'

    }
  ]
  private MLBTeams = [
    {
      city: "Atlanta",
       mascot: "Braves",
       logo: "/assets/images/teams/MLB/BRAVES.png"
    },
    {
      city: "Los Angeles",
       mascot: "Dodgers",
       logo: "/assets/images/teams/MLB/DODGERS.png",
       sport:'NBA'

    },
    {
      city: "Cleveland",
       mascot: "Indians",
       logo: "/assets/images/teams/MLB/INDIANS.png",
       sport:'NBA'

    },
    {
      city: "Boston",
       mascot: "Red Sox",
       logo: "/assets/images/teams/MLB/REDSOX.png",
       sport:'NBA'

    },
  ]
  private MLSTeams = [
    {
      city: "San Jose",
      mascot: "Earthquakes",
      logo: "/assets/images/teams/MLS/49ers.png",
      sport:'NBA'

    },
  ]
  private NHLTeams = [
    {
      city: "San Jose",
      mascot: "Sharks",
      logo: "/assets/images/teams/NHL/49ers.png",
      sport:'NBA'

    }
  ]

  private selectedSport: any = this.NFLTeams;


   pickTeam(data){
    var id= data.target.parentElement.id;
    var flag = data.target.parentElement;
    switch(id){
      case 'nba': 
        this.selectedSport = this.NBATeams;
        break;
      case 'nfl': 
        this.selectedSport = this.NFLTeams;
        break;
      case 'mlb': 
        this.selectedSport = this.MLBTeams;
        break;
      case 'nhl': 
        this.selectedSport = this.NHLTeams;
        break;
      case 'mls': 
        this.selectedSport = this.MLSTeams;
        break;
      default:
        console.log(flag);
        return;
    }
    $("#nba").css({ "background-color":"#000" });
    $("#nfl").css({ "background-color":"#000" });
    $("#mlb").css({ "background-color":"#000" });
    $("#mls").css({ "background-color":"#000" });
    $("#nhl").css({ "background-color":"#000" });

    $("#nba").removeClass("class_name");
    $("#nfl").removeClass("class_name");
    $("#mlb").removeClass("class_name");
    $("#mls").removeClass("class_name");
    $("#nhl").removeClass("class_name");
    $("#" + id).css({ "background-color":"#0093e8" });
    $("#" + id).addClass("class_name");
  }
  ngOnInit() {
  }

}
