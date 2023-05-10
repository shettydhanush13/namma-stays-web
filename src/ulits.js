const csvFileToJSON = (file) => {
    try {
          const jsonData = [];
          const headers = [];
          const rows = file.split("\r\n");               
          for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].split(",");
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
          return jsonData;
          //displaying the json result in string format
      }catch(e){
          console.error(e);
      }
}

export { csvFileToJSON };
