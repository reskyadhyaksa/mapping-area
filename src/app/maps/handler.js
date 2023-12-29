export const handleMarkerClick = (index) => {
    // setOpenPop(!openPop);
    setSelectedMarkerIndex(index);
    setCenterLat(dataArray[index].koordinate.lat);
    setCenterLng(dataArray[index].koordinate.lon);

};