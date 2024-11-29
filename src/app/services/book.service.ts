import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Book } from '../Models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      name: 'The Call of the Wild',
      description: 'Jack London’s classic tale of a domesticated dog rediscovering his primal instincts in the wild.',
      price: 299.99,
      image: 'assets/The Call of the Wild.jpg',
      category: 'Books'
    },
    {
      id: 2,
      name: 'Charlotte’s Web',
      description: 'E.B. White’s beloved story of friendship between a pig and a spider.',
      price: 250.50,
      image: 'assets/Charlotte’s Web.jpg',
      category: 'Books'
    },
    {
      id: 3,
      name: 'Watership Down',
      description: 'Richard Adams’ epic adventure following a group of rabbits searching for a new home.',
      price: 400.00,
      image: 'assets/content.jpg',
      category: 'Books'
    },
    {
      id: 4,
      name: 'Black Beauty',
      description: 'Anna Sewell’s enduring story of a horse’s life and the kindness and cruelty of humans.',
      price: 350.75,
      image: 'assets/Black Beauty.jpg',
      category: 'Books'
    },
    {
      id: 5,
      name: 'Life of Pi',
      description: 'Yann Martel’s magical tale of a boy stranded on a lifeboat with a Bengal tiger.',
      price: 450.99,
      image: 'assets/Life of Pi.jpg',
      category: 'Books'
    },
    {
      id: 6,
      name: 'The Jungle Book',
      description: 'Rudyard Kipling’s collection of stories about Mowgli and his adventures with animals in the jungle.',
      price: 300.99,
      image: 'assets/The Jungle Book.jpg',
      category: 'Books'
    },
    {
      id: 7,
      name: 'Animal Farm',
      description: 'George Orwell’s allegorical novella about animals rebelling against humans for independence.',
      price: 275.00,
      image: 'assets/Animal Farm.jpg',
      category: 'Books'
    },
    {
      id: 8,
      name: 'Marley & Me',
      description: 'John Grogan’s heartwarming and humorous memoir about life with a mischievous Labrador retriever.',
      price: 420.50,
      image: 'assets/Marley & Me.jpg',
      category: 'Books'
    },
    {
      id: 9,
      name: 'The Art of Racing in the Rain',
      description: 'Garth Stein’s touching story narrated by a dog with dreams of becoming human.',
      price: 380.25,
      image: 'assets/The Art of Racing in the Rain.jpg',
      category: 'Books'
    },
    {
      id: 10,
      name: 'Old Yeller',
      description: 'Fred Gipson’s poignant tale of a boy and his faithful dog in post-Civil War Texas.',
      price: 320.75,
      image: 'assets/Old Yeller.jpg',
      category: 'Books'
    }
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  addBook(book: Book): Observable<Book> {
    this.books.push(book);
    return of(book);
  }
}

