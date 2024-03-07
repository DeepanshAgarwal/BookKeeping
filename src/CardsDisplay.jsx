import React, { useEffect, useState } from "react";
import { categories, getRefinedData } from "./API";
import "./CardsDisplay.css";
import Card from "./Card";
import CategoryHeading from "./CategoryHeading";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CardsDisplay({ index, categoryData }) {
    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const books = await fetchBookByCategory(category);
    //             setAllBooks(books);
    //             // console.log(allBooks);
    //         } catch (error) {
    //             console.error("Failed to fetch books:", error);
    //         }
    //     }
    //     fetchData();
    // }, [category]);

    // console.log("REREENDERING CARDS DISPLAY FOR CATEGORY: ", category);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 9,
            slidesToSlide: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const cards = categoryData.map((book, key) => {
        let refinedData = getRefinedData(book);
        return (
            <Card
                key={key}
                id={key}
                title={refinedData.title}
                author={refinedData.author}
                pages={refinedData.pageCount}
                categories={refinedData.categories}
                summary={refinedData.summary}
                url={refinedData.coverPageUrl}
                isbn={refinedData.isbn}
            />
        );
    });
    // console.log(cards);

    return (
        <div className="CardsDisplay">
            <CategoryHeading content={categories[index]} />

            {/* <div className="cards"> */}
            <Carousel
                // swipeable={false}
                // draggable={false}
                showDots={true}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                // infinite={true}
                // // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={1000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // // deviceType={this.props.deviceType}
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
            >
                {cards}
            </Carousel>

            {/* {categoryData.map((book, key) => {
                    let refinedData = getRefinedData(book);
                    return (
                        <Card
                            key={key}
                            title={refinedData.title}
                            author={refinedData.author}
                            pages={refinedData.pageCount}
                            categories={refinedData.categories}
                            summary={refinedData.summary}
                            url={refinedData.coverPageUrl}
                        />
                    );
                })} */}
        </div>
    );
}
