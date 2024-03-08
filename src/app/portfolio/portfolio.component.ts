import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{



  ngOnInit(): void {
    const button = document.getElementsByClassName('button')[0] as HTMLElement;
    const country = document.getElementsByClassName('country')[0] as HTMLElement;
    const china = document.getElementsByClassName('china')[0] as HTMLElement;
    const africa = document.getElementsByClassName('africa')[0] as HTMLElement;
      
      button.addEventListener('click', () => {
        if(country.innerHTML == 'China'){
          
          country.innerHTML = 'Africa'
          china.style.height = '0'
          china.style.opacity = '0'
          africa.style.height = '56vh'
          africa.style.opacity = '1'
        }else{
          country.innerHTML = 'China';           
          africa.style.opacity = '0' 
          africa.style.height = '0'        
          china.style.height = '56vh'
          china.style.opacity = '1'
        }
    })
    
  }

}
