export class User {
  name:string;
  avatar:string;
  following:string;
  followers:string;
  repos=[];

  constructor(private onject:JSON){
    this.name=object['name'];
    this.avatar=object['avatar_url'];
    this.followers=object['followers_url'];
    this.following=object['following_url'];

  }


}
