
import { Component,Input} from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required:true})  avatar!: string;
  @Input({required:true})  name!: string;
  get imagePath() {
    return "assets/users/" + this.avatar;
  }
  onSelectUser() {}
}
