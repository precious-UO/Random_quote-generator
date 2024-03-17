"use strict"

let btn = document.querySelector(".btn");
let quotes = document.querySelector(".quotes q");
let person = document.querySelector(".person cite");

let content = [
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs"
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    person: "Abraham Lincoln"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa"
  }
];

btn.addEventListener("click", function(){
  let random = Math.floor(Math.random() * content.length);
  quotes.textContent = content[random].quote;
  person.textContent = content[random].person;
});
