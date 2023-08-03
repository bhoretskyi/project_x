const API = 'https://books-backend.p.goit.global';

export async function getCategories() {
  const response = await fetch(`${API}/books/category-list`);
  const category = await response.json();
  return category;
}

export async function getBookByCategory() {
  const response = await fetch(`${API}/books/top-books`);
  const bookByCategory = await response.json()
  return bookByCategory
}



