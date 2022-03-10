import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: any[] = []
  
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users)
  }

}
