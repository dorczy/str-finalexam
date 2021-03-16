import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  cols: {key: string, title: string}[] = [
    { key: 'id', title: '#' },
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'address', title: 'Address' },
    { key: 'active', title: 'Active' },
  ];

  filterKey: string = "name";
  phrase: string = "";

  sortKey: string = "";

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onClickDelete(user: User): void {
    this.userService.remove(user).subscribe(
      () => {
        console.log("TÖRÖLVE");
        console.log("this.router.url", this.router.url);
        this.router.navigate([this.router.url]);
      }
    );
  }

  onChangeSort(data: string): void {
    this.sortKey = data;
  }

}
