import { FC } from "react";

interface SubCategoryProps {
  params: {
    subcategory: string;
  };
}

const SubCategory: FC<SubCategoryProps> = ({ params }) => {
    return (
      <main className="text-primary">
        {params.subcategory} Page
      </main>
    );
  }
  
export default SubCategory;