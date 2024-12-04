import Link from "next/link";
import { FC } from "react";

interface CategoryProps {
  params: {
    category: string;
  };
}

const Category: FC<CategoryProps> = ({ params }) => {
  return (
      <main className="text-primary">{params.category} Category Page
      <ul>
        <li>
          <Link href={`/categories/${params.category}/category-one`}>          
            Category One
          </Link>
        </li>
        <li>
        <Link href={`/categories/${params.category}/category-two`}>  
          Category Two
          </Link>
        </li>
        <li>
          <Link href={`/categories/${params.category}/category-three`}>  
          Category Three
          </Link>
        </li>
      </ul>  
      </main>
    );
  }
  
  export default Category;