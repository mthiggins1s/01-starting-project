import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // getting hold of a path parameter value in a component thats loaded for a dynamic route, writted in the same was as the route
  // userId = input.required<string>();
  userName = '';
  message = input.required<string>();
  private usersService = inject(UsersService);
  
  // gives you various properties that holds variation
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);

  ngOnInit(): void {
    console.log('Input Data: ' + this.message())
    console.log(this.activatedRoute.snapshot);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
      this.userName = this.usersService.users.find(u => u.id === paramMap.get('userId'))?.name || '';
    },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}