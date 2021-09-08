exports.addMovie = async (collection, dataObj) => {
    try {
        await collection.insertOne(dataObj)
    } catch (error) {
    console.log(error); 
    }
};

exports.listMovies = async (collection) => {
    const list = await collection.find({}).toArray();
    console.log(list);
}