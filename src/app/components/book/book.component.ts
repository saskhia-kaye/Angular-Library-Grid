import { Component, OnInit } from '@angular/core';
import { Book } from '../../Models/book.model';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  currentView: 'mobile' | 'tablet' | 'desktop' = 'desktop';

  constructor(private bookService: BookService) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.loadBooks();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private loadBooks(): void {
    this.bookService.getBooks().subscribe(
      books => this.books = books
    );
  }

  private checkScreenSize(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.currentView = 'mobile';
    } else if (width < 1024) {
      this.currentView = 'tablet';
    } else {
      this.currentView = 'desktop';
    }
  }

  setView(view: 'mobile' | 'tablet' | 'desktop'): void {
    this.currentView = view;
  }
}