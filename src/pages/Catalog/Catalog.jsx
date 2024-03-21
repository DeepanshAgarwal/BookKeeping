import React, { useState, useEffect, useRef } from "react";
import BookCard from "../../components/BookCard/BookCard";
import { getRefinedData, fetchBookByCategory } from "../../utils/API.js";
import CategoryCardsDisplay from "../../components/CategoryCardsDisplay/CategoryCardsDisplay.jsx";
import "./Catalog.css";

export default function Catalog() {
    const [categoryData_1, setCategoryData_1] = useState(null);
    const [categoryData_2, setCategoryData_2] = useState(null);
    const [categoryData_3, setCategoryData_3] = useState(null);
    const [categoryData_4, setCategoryData_4] = useState(null);
    const [categoryData_5, setCategoryData_5] = useState(null);
    const [categoryData_6, setCategoryData_6] = useState(null);
    const [categoryData_7, setCategoryData_7] = useState(null);
    const [categoryData_8, setCategoryData_8] = useState(null);
    const [categoryData_9, setCategoryData_9] = useState(null);

    const categories = [
        "Animals, Bugs & Pets",
        "Art, Creativity & Music",
        "General Literature",
        "Hobbies, Sports & Outdoors",
        "Science Fiction & Fantasy",
        "Real Life",
        "Science & Technology",
        "Mystery & Suspense",
        "Reference",
    ];

    const categoryStateSetters = [
        setCategoryData_1,
        setCategoryData_2,
        setCategoryData_3,
        setCategoryData_4,
        setCategoryData_5,
        setCategoryData_6,
        setCategoryData_7,
        setCategoryData_8,
        setCategoryData_9,
    ];

    async function fetchData(category) {
        try {
            const categoryData = await fetchBookByCategory(category);
            console.log(categoryData);
            return categoryData;
        } catch (error) {
            console.error("Failed to fetch books:", error);
        }
    }

    function delay(duration) {
        return new Promise((resolve) => setTimeout(resolve, duration));
    }

    // useEffect(() => {
    //     fetchData("Animals, Bugs & Pets").then((data) => {
    //         setCategoryData_1(data);
    //     });
    // }, []);

    categories.forEach((category, index) => {
        useEffect(() => {
            delay(index * 1500)
                .then(() => fetchData(category))
                .then((data) => {
                    categoryStateSetters[index](data);
                });
        }, []);
    });

    return (
        <div className="Catalog">
            <div className="catalog-heading">CATALOG</div>
            {categoryData_1 && (
                <CategoryCardsDisplay
                    categoryData={categoryData_1}
                    category={categories[0]}
                />
            )}
            {categoryData_2 && (
                <CategoryCardsDisplay
                    categoryData={categoryData_2}
                    category={categories[1]}
                />
            )}
            {categoryData_3 && (
                <CategoryCardsDisplay
                    categoryData={categoryData_3}
                    category={categories[2]}
                />
            )}
            {categoryData_4 && (
                <CategoryCardsDisplay
                    categoryData={categoryData_4}
                    category={categories[3]}
                />
            )}
            {categoryData_5 && (
                <CategoryCardsDisplay
                    categoryData={categoryData_5}
                    category={categories[4]}
                />
            )}
            {categoryData_6 && (
                <CategoryCardsDisplay
                    categoryData={categoryData_6}
                    category={categories[5]}
                />
            )}
            {categoryData_7 && (
                <CategoryCardsDisplay
                    categoryData={categoryData_7}
                    category={categories[6]}
                />
            )}
            {categoryData_8 && (
                <CategoryCardsDisplay
                    categoryData={categoryData_8}
                    category={categories[7]}
                />
            )}
            {categoryData_9 && (
                <CategoryCardsDisplay
                    categoryData={categoryData_9}
                    category={categories[8]}
                />
            )}
        </div>
    );
}
