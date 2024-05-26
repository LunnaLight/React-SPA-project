import { CategoryItem } from "./categoryitem";

function CategoryList({ catalog = [] }) {
    return (
        <div className="list">
            {catalog.map((el) => (
                <CategoryItem key={el.idCategory} {...el}></CategoryItem>
            ))}
        </div>
    );
}

export { CategoryList };