function getMostPopularPlaces(...places) {
    const placeCount = {};
    places.forEach(place => {
        placeCount[place] = (placeCount[place] || 0) + 1;
    });

    const sortedPlaces = Object.entries(placeCount)
        .sort((a, b) => b[1] - a[1]);

    return `${sortedPlaces[0][0]} ${sortedPlaces[1][0]}`;
}
