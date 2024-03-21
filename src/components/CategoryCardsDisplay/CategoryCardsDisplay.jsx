import BookCard from "../BookCard/BookCard";
import CategoryHeading from "../CategoryHeading/CategoryHeading.jsx";
import { getRefinedData } from "../../utils/API.js";
import "./CategoryCardsDisplay.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoryCardsDisplay({ categoryData, category }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 9,
            slidesToSlide: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    const cards = categoryData.map((book, key) => {
        let refinedData = getRefinedData(book);
        return (
            <BookCard
                key={refinedData.isbn}
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

    return (
        <div className="CategoryCardsDisplay">
            <CategoryHeading category={category} />
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
        </div>
    );
}
