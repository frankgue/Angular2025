import { Component, computed, DestroyRef, inject, Input, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
 
  // @Input({required: true}) userId!: string;
  // private usersService = inject(UsersService);

  // get userName() {
  //   return this.usersService.users.find(user => user.id === this.userId)?.name ?? 'Unknown User';
  // }

  // set userIdValue(userId: string) {
  //   this.userId = userId;
  // }

  // userId = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  userName = '';
  private destroyRef = inject(DestroyRef);
  message = input.required<string>();

   ngOnInit(): void {
    console.log(this.message());

    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        const userID = paramMap.get('userId')!;
        this.userName = this.usersService.users.find(user => user.id === userID)?.name ?? 'Unknown User';
      }
    })
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

}
