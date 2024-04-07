import libraryModel from "../models/libraryModel.mjs";

const readBooks = async (req,res) => {
   const allBooks = await libraryModel.find();
   res.send({
      status : "Status 200 Array of books matching the search criteria",
      AllBooks : allBooks
   });
}

const addBooks = async (req,res) => {
   const book = req.body;
   const addedbooks = await libraryModel.create(book);
   res.send({
      status : "Success 201 The Book's details added successfully",
      AddedBooks : addedbooks
   });
};

export {addBooks, readBooks};