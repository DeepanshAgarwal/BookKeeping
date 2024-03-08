import { useState, useEffect } from "react";
import "./App.css";
import { categories, getAllData } from "./API";
import NavBar from "./NavBar";
import CardsDisplay from "./CardsDisplay";
import CustomPlaceholder from "./CustomPlaceholder";
import CustomSnackbar from "./CustomSnackbar";

// import FullScreenDialog from "./Test";

function App() {
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
                    return (
                        <CardsDisplay
                            key={index}
                            index={index}
                            categoryData={data}
                        />
                    );
                })}
            </div>
        </div>
    );

    // return <FullScreenDialog />;
}

export default App;
