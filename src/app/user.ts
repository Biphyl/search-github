export class User {
  name:string;
  avatar:string;
  following:string;
  followers:string;
  repos=[];

  constructor(private onject:JSON){
    this.name=Object['name'];
    this.avatar=Object['avatar_url'];
    this.followers=Object['followers_url'];
    this.following=Object['following_url'];

  }


}
