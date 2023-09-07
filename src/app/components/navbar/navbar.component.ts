import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // activePage(currentPageNavigator: any) {
  //   let oldPageNavigator = document.getElementsByClassName('active');
  //   if (currentPageNavigator === oldPageNavigator) {
  //     return;
  //   }
  //   oldPageNavigator[0].classList.remove('active');
  //   // console.log(oldPageNavigator);
  //   currentPageNavigator.classList.add('active');
  // }
}
