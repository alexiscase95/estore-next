import Link from "next/link";

const Categories = () => {
    return (
      <main className="text-primary">
        Categories Page
      <ul>
        <li>
          <Link href='/categories/cleaners'>
          Cleaners
          </Link>
        </li>
        <li>
          <Link href='/categories/floor-mats'>
          Floor Mats
          </Link>
        </li>
        <li>
          <Link href='/categories/wipers'>
          Wipers
          </Link>
        </li>
      </ul>  
      </main>
    );
  }
  
  export default Categories;