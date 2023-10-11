import Link from 'next/link';
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Pantry">Pantry</Link>
        </li>
        <li>
          <Link href="/RecipeBook">Recipes</Link>
        </li>
        <li>
          <Link href="/MealPlanner">Meals</Link>
        </li>
        <li>
          <Link href="/ShoppingList">Lists</Link>
        </li>
        <li>
          <Link href="/Settings">Settings</Link>
        </li>
      </ul>
    </nav>
    
  );
};