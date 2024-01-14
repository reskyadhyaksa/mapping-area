const { useEffect } = require("react")

const filterData = async (data, filter) => {
    let filter_arr = filter;
    const filteredData = data.filter(item => filter_arr.includes(item.potensi));

    console.log(filteredData)
    return filteredData
}

export default filterData;