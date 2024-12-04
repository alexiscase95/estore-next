import Link from "next/link";

const Category = () => {
    return (
      <main className="text-primary">Category Page
      <ul>
        <li>
          <Link href='/categories/cleaners/surface-cleaner'>
          Cleaners Sub-Category
          </Link>
        </li>
        <li>
          <Link href='/categories/floor-mats/cargo'>
          Floor Mats Sub-Category
          </Link>
        </li>
        <li>
          <Link href='/categories/wipers/performance'>
          Wipers Sub-Category
          </Link>
        </li>
      </ul>  
      </main>
    );
  }
  
  export default Category;