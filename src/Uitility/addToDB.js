
const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem("readList");


    if(storedBookSTR ) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return []
    }

}



const addToStoredDB = (id) => {


    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)) {
        alert ('already existing this book')
        
    }
    else{
        console.log('up',storedBookData);
        storedBookData.push(id);
        console.log('down',storedBookData);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)
    }
}


export {addToStoredDB,getStoredBook}