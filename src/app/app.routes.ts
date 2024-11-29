import { Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
export const routes: Routes = [
    { path: 'books', component: BookComponent }, // Use BookComponent, not BookService
    { path: '', redirectTo: '/books', pathMatch: 'full' } // Redirect to books by default
];