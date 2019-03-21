import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
slides:any;

  slideData = [{ image: "../../assets/slide-1.jpg" },
  { image: "../../assets/slide-2.jpg" },
  { image: "../../assets/slide-3.jpeg" }, 
  { image: "../../assets/slide-4.jpg" }];
  slideOpts = {
    effect: 'flip'
  };
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    for(var i=0; i<this.slides.length;i++){
      if(currentIndex==4){
        return this.slides[i]+1;
      }
    }
    
  }
}
