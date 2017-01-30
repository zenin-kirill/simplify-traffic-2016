import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
    moduleId: module.id,
    selector: 'admin-nav-bar',
    templateUrl: 'nav-bar.component.html',
})

export class NavBarComponent implements OnInit{
  userSurname: string = '';
  userName: string = '';

  constructor(private authService: AuthService) {};

  ngOnInit() {
    this.userSurname = this.authService.getAuthDataWithoutLogIn().user.getSurname();
    this.userName = this.authService.getAuthDataWithoutLogIn().user.getName();
  }

  changeTheme(color: string): void {
    var link: any = $('<link>');
    link
      .appendTo('head')
      .attr({type : 'text/css', rel : 'stylesheet'})
      .attr('href', 'themes/app-'+color+'.css');
  }

  rtl(): void {
    var body: any = $('body');
    body.toggleClass('rtl');
  }

  sidebarToggler(): void  {
    var sidebar: any = $('#sidebar');
    var mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }

  logOut() {
    this.authService.logOut();
  }
}
