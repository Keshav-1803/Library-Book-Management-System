import libraryModel from "../models/libraryModel.mjs";

const readBooks = async (req,res) => {
   const allBooks = await libraryModel.find();
   return res.status(200).send({
      status : "Status 200 Array of books matching the search criteria",
      AllBooks : allBooks
   });
}

const addBooks = async (req,res) => {
   try {
      const book = req.body;
      const addedbooks = await libraryModel.create(book);
      return res.status(201).send({
         status : "Success 201 The Book's details added successfully",
         AddedBooks : addedbooks
      });
   } catch (error) {
      return res.status().send({Status : 400, Error : "Invalid request data"})
   }
};

const deleteBook = async (req, res) => {
   try {
      const bookID = req.params.id;
      const deletedBook = await libraryModel.findByIdAndDelete(bookID);
      return res.status(200).send({Status : 200, Message : "Book deleted successfully", Deleted : deletedBook});
   } catch (error){
      return res.status(404).send({Status : 404, Error : "Book not found"});
   }
}

const updateBook = async (req, res) => {
   try {
      const bookID = req.params.id;
      const update = req.body;
      const updatedBook = await libraryModel.findByIdAndUpdate(bookID, update);
      return res.status(202).send({Status : 202, Message : "Book updated successfully", Updated : updatedBook});
   } catch (error) {
      return res.status(404).send({Status : 404, Error : "Book not found"});
   }
}

const searchBook = async (req,res) => {
   try {
      const {title, author, genre, isbn, availability} = req.query;
      const searchedBooks = await libraryModel.find({$or : [{title : title}, {author : author}, {genre : genre}, {ISBN : isbn}, {availability : availability}]});
      return res.status(200).send({Status : 200, Message : "Array of books matching the search criteria", Searched : searchedBooks});
   } catch (error) {
      return res.status(400).send({Status : 400, Error: "Invalid search parameters"});
   }
}

export {addBooks, readBooks, deleteBook, updateBook, searchBook};