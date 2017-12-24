import { Component, OnInit } from '@angular/core';

import {GithubServices} from "../services/github.services";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  repos: any[];
  username: string;
  constructor(private _githubService: GithubServices) {
    this.user=null;
  }

  ngOnInit() {
  }

  searchUser() {
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe(
      (user) => {
        // console.log(user);
        this.user = user;
      }
    );
    this._githubService.getRepos().subscribe(
      (repos) => {
        // console.log(repos);
        this.repos = repos;
      }
    );
  }

}
