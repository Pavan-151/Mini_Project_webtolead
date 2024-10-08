function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate",inputdate.value); //string --> date(en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN"); //  we can get from developer console
    console.log("formattedDate",formattedDate);
    outputdate.value = formattedDate;
    
}

