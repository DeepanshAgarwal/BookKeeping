import { useState, useEffect } from "react";
import "./App.css";
import { categories, getAllData } from "./API";
import NavBar from "./NavBar";
import CardsDisplay from "./CardsDisplay";
import CustomPlaceholder from "./CustomPlaceholder";
import CustomSnackbar from "./CustomSnackbar";

// import FullScreenDialog from "./Test";

function App() {
    // let [category, setCategory] = useState();
    // console.log(categories);
    // let arr = [0, 1, 2, 3, 4];
    // function fetchData() {
    //     for (let i = 0; i < categories.length; i++) {
    //         arr.push(<CardsDisplay category={categories[i]} />);
    //     }
    // }
    // fetchData();
    // const [displayIndex, setDisplayIndex] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setDisplayIndex((prevIndex) => {
    //             if (prevIndex < categories.length - 1) {
    //                 return prevIndex + 1;
    //             } else {
    //                 clearInterval(interval);
    //                 return prevIndex;
    //             }
    //         });
    //     }, 2000); // 2000 milliseconds = 2 seconds
    //     // Clean up the interval on unmount
    //     return () => clearInterval(interval);
    // }, []);
    // console.log("TEST");
    //
    //
    //
    //
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const allData = await getAllData(categories);
                setAllData(allData);
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <CustomSnackbar />
            <NavBar />
            <div className="main-content">
                {allData.length === 0 && <CustomPlaceholder />}
                {allData.map((data, index) => {
                    return <CardsDisplay index={index} categoryData={data} />;
                })}
            </div>
        </div>
    );

    // return <FullScreenDialog />;
}

export default App;
