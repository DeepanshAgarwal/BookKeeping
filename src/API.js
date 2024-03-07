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

//function to fetch books by category
async function fetchBookByCategory(category) {
    function convertToURLFormat(str) {
        return encodeURIComponent(str);
    }

    category = convertToURLFormat(category);

    const url = `https://book-finder1.p.rapidapi.com/api/search?categories=${category}&results_per_page=25&page=1`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "8cfbf11439msh14ae5c51274129ep1c9cadjsn8faa42e3ef22",
            "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
        },
    };
    // console.log(url);

    try {
        const response = await fetch(url, options);
        let result = await response.json();

        // console.log(result.results[0]);
        // console.log(getRefinedData(result.results[0]));
        return result.results;

        // console.log(result);
    } catch (error) {
        console.error(error);
        return error;
    }
}

// async function logResult() {
//     const result = await fetchBookByCategory(categories[0]);
//     console.log(result);
// }

// logResult();

//function to get refined data from the fetched data
function getRefinedData(data) {
    return {
        title: data.title,
        author: data.authors[0],
        pageCount: data.page_count,
        coverPageUrl: data.published_works[0].cover_art_url,
        categories: data.categories,
        summary: data.summary,
        isbn: data.canonical_isbn,
        favourite: false,
    };
}

//function to get allData
async function getAllData(categories) {
    console.log("FETCHING DATA\nSTATUS: INITIATED");
    let allData = [];

    // for (let i = 0; i < categories.length; i++) {
    for (let i = 0; i < 2; i++) {
        // Wait for 1.25 second between each request
        await new Promise((resolve) => setTimeout(resolve, 1250));

        const data = await fetchBookByCategory(categories[i]);
        allData.push(data);
        console.log(`FETCHING DATA\nSTATUS: ${i + 1}/9`);
    }

    console.log("FETCHING DATA\nSTATUS: COMPLETE");
    console.log(allData);
    return allData;
}

// getAllData(categories);

//
//
//
//
//function to fetch books by title
async function fetchBookByTitle(title) {
    // let title = "Harry Potter and the Goblet of fire";
    const url = `https://book-finder1.p.rapidapi.com/api/search?title=${title}&results_per_page=25&page=1`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "8cfbf11439msh14ae5c51274129ep1c9cadjsn8faa42e3ef22",
            "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
        },
    };
    console.log(url);

    let result;

    try {
        const response = await fetch(url, options);
        result = await response.json();

        let desiredBook = result.results[0];
        let filteredData = {
            title: desiredBook.title,
            author: desiredBook.authors[0],
            pageCount: desiredBook.page_count,
            seriesName: desiredBook.series_name,
            bookType: desiredBook.book_type,
            categories: desiredBook.categories,
            coverPageUrl: desiredBook.published_works[0].cover_art_url,
            summary: desiredBook.summary,
        };
        console.log(filteredData);
        return filteredData;

        // console.log(result);
    } catch (error) {
        console.error(error);
        return error;
    }
}

export { categories, getRefinedData, getAllData };
