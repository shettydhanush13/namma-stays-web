const csvFileToJSON = (file) => {
    try {
          const jsonData = [];
          const headers = [];
          const rows = file.split("\r\n");               
          for (let i = 0; i < rows.length; i++) {
            const cells =  CSVtoArray(rows[i]);
            const rowData = {};
              for(let j=0;j<cells.length;j++){
                  if(i === 0){
                    const headerName = cells[j].trim();
                      headers.push(headerName);
                  }else{
                    const key = headers[j];
                      if(key){
                          rowData[key] = cells[j].trim();
                      }
                  }
              }
              //skip the first row (header) data
              if(i !== 0){
                  jsonData.push(rowData);
              }
          }
          return formatData(jsonData);
          //displaying the json result in string format
      }catch(e){
          console.error(e);
      }
}

const CSVtoArray = (text) => {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
};

const getImages = (data) => {
    const images = [];
    for(let i=0; i<6; i++) {
        const image = data[`image${i+1}`];
        if(image !== '') images.push(image);
    }
    return images;
}

const getRoomsData = (data) => {
    const roomData = [];
    for(let i=0; i<5; i++) {
        const room = data[`room${i+1}`];
        const beds = data[`beds${i+1}`];
        const person = data[`person${i+1}`];
        const price = data[`price${i+1}`];
        if(room !== '') roomData.push({ room, beds, person, price })
    }
    return roomData;
}

const calculatePrice = (price, data) => {
    if(price !== '' && price !== "NA") return `₹ ${price}`;
    let priceList = [];
    for(let i=0; i<5; i++) {
        const price = data[`price${i+1}`];
        if(price !== '') priceList.push(Number(price));
    }
    priceList = priceList.sort((a,b) => a-b);
    return `₹ ${priceList[0]} - ₹ ${priceList[priceList.length-1]}`;
};

const formatData = (json) => {
    const result = [];
    for(let j=0;j<json.length;j++){
        const {
            name,
            address,
            accomodationType,
            guests,
            bedrooms,
            bathrooms,
            price,
            phone,
            website,
            email,
            latitude,
            longitude,
            amenities,
            checkIn,
            checkOut,
            region
         } = json[j];
        const data = {
            name,
            images : getImages(json[j]),
            region,
            accomodationType,
            guests,
            bedrooms,
            bathrooms,
            price : calculatePrice(price, json[j]),
            'co-oodrdinates' : {
                latitude,
                longitude
            },
            mapLink: `https://www.google.com/maps/place/@${latitude},${longitude},17z`,
            contact : {
                phone : phone === "NA" ? undefined : phone,
                website : website === "NA" ? undefined : website,
                email : email === "NA" ? undefined : email,
                address : address === "NA" ? undefined : address,
            },
            amenities : amenities.split(','),
            timings : {
                checkIn,
                checkOut
            },
            rooms : getRoomsData(json[j])
        }
        result.push(data);
    }
    return result;
}

export { csvFileToJSON };
