import {Injectable} from "@angular/core";
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubServices {
  private username: string;
  private client_id: string = 'b3bc1af4e09240f150b0';
  private client_secret: string = 'cb362af9c085f5214997e5c94c148e0a670929a0';

  constructor(private _http: Http) {
    console.log("Github Service ready");
    this.username = 'singhsanket143';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map((res) => res.json());
  }
  getRepos() {
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map((res) => res.json());
  }
}
