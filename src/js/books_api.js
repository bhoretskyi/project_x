const API = 'https://books-backend.p.goit.global';

export async function getCategories() {
  const response = await fetch(`${API}/books/category-list`);
  const category = await response.json();
  return category;
}

export async function getBestBook() {
  const response = await fetch(`${API}/books/top-books`);
  const bookByCategory = await response.json();
  return bookByCategory;
}

export async function getBookById(id) {
  const response = await fetch(`${API}/books/${id}`);
  const bookById = await response.json();
  return bookById;
}

export async function getBookByCategory(category) {
  const response = await fetch(`${API}/books/category?category=${category}`);
  const bookByCategory = await response.json();
  return bookByCategory;
}

