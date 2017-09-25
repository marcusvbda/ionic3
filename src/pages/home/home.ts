import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component(
{
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  items:any = 
  [
    {date:"8/4/1992",text:"NOTE EXEMPLE"}
  ];

  noteText:string;

  constructor(public navCtrl: NavController) 
  {

  }

  public addNote()
  {
    console.log(this.items[0]);
    if(this.noteText)
    {
      var d = new Date();
      this.items.push(
      {
        date: d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear(),
        text:this.noteText
      });
      this.noteText="";  
      console.log(this.items);     
    }    
  }

  public deleteNote(key)
  {
    this.items.splice(key,1);    
  }

}
