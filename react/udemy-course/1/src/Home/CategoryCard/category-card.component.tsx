import React from "react";

export interface CategoryCardComponentProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CategoryCardComponent: React.FC<CategoryCardComponentProps> = ({
  ...props
}) => {
  let backGroundImage = { backgroundImage: props.imageUrl };
  return (
    <div className="category-card">
      <div className="category-card-background" style={backGroundImage}></div>
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default CategoryCardComponent;
