const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);
const rand = val => Math.floor(Math.random() * (val || 100));

export { $, $$, rand }
