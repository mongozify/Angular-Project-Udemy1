
import { Component,EventEmitter,Input, Output} from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls:['./user.component.scss']
})
export class UserComponent {
  @Input({required:true}) user!: User;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();


  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }
//  imagePath = computed(() => {
//     return "assets/users/" + this.avatar;
//   });

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}


