import "./CategoryHeading.css";

export default function CategoryHeading({ category }) {
    return (
        <div className="CategoryHeading">
            <h1>{category}</h1>
            <hr class="fancy-line"></hr>
        </div>
    );
}
