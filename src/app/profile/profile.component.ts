import { Component, OnInit } from '@angular/core';

import {GithubServices} from "../services/github.services";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _githubService: GithubServices) {
    this._githubService.getUser().subscribe(
      (user) => {
        console.log(user);
      }
    );
  }

  ngOnInit() {
  }

}