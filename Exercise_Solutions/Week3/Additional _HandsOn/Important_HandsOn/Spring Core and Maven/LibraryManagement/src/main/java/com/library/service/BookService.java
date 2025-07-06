package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;
    private String libraryName;

    // Constructor for injecting libraryName
    public BookService(String libraryName) {
        this.libraryName = libraryName;
    }

    // Setter for injecting BookRepository
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("[" + libraryName + "] Adding book: " + title);
        bookRepository.saveBook(title);
    }
}
