import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  public current:any;
  public current1:any;
  public current2:any;
  public current3:any;
  public current4:any;
  // MESSAGE
  selectedMessage: any;
  messages: Object[] = [{
      from: 'Bobby Sullivan',
      photo: 'assets/images/face1.jpg',
      subject: 'Egestas Elit Vestibulum',
    }, {
      from: 'Bryan Morgan',
      photo: 'assets/images/face2.jpg',
      subject: 'Ultricies Sem Cursus',
    }, {
      from: 'Phillip Carroll',
      photo: 'assets/images/face3.jpg',
      subject: 'Condimentum Adipiscing Ultricies',
    }, {
      from: 'Brandon Boyd',
      photo: 'assets/images/face4.jpg',
      subject: 'Commodo Pharetra Egestas',
    }, {
      from: 'Laura Mason',
      photo: 'assets/images/face5.jpg',
      subject: 'Justo Pellentesque Sollicitudin',
    }, {
      from: 'Barbara Chapman',
      photo: 'assets/images/face6.jpg',
      subject: 'Sem Purus Cursus',
    }, {
      from: 'Doris Baker',
      photo: 'assets/images/face7.jpg',
      subject: 'Sollicitudin Mattis Commodo',
    }
  ];

  constructor() {
    this.selectedMessage = this.messages[1];
  }
  switchfun(data){
    console.log('any valu',"#"+ data);
    // var id= data.target.parentElement.id;
    // var flag = data.target.parentElement.id;
    // this.current = false
   
    $("#current").css({ "background-color":"#ffffff" });
    $("#current1").css({ "background-color":"#ffffff" });
    $("#current2").css({ "background-color":"#ffffff" });
    $("#current3").css({ "background-color":"#ffffff" });
    $("#current4").css({ "background-color":"#ffffff" });
    // $("#" + data).css({ "background-color":"#0093e8" });
    $("#current").removeClass("class_name");
    $("#current1").removeClass("class_name");
    $("#current2").removeClass("class_name");
    $("#current3").removeClass("class_name");
    $("#current4").removeClass("class_name");
    $("#" + data).css({ "background-color":"#ebebeb" });
    $("#" + data).addClass("class_name");
  }
  // switchfun1(){
  //   console.log('any valu1');
  //   $("#current1").css({ "background-color":"#0093e8" });
  // }
  // switchfun2(){
  //   console.log('any valu2');
  //   $("#current2").css({ "background-color":"#0093e8" });
  // }
  // switchfun3(){
  //   console.log('any valu');
  //   $("#current3").css({ "background-color":"#0093e8" });
  // }
  // switchfun4(){
  //   console.log('any valu');
  //   $("#current4").css({ "background-color":"#0093e8" });
  // }
  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  onSelect(message: Object[]): void {
    this.selectedMessage = message;
  }
}
