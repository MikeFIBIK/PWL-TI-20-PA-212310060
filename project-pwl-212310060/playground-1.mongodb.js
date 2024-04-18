/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('rentalfilm');

// db.custumer.find({Active: {$in : ["Y", "N"]}});

// db.custumer.find({Active: {$nin : ["Y", "N"]}});

// db.custumer.find({$and : [ {id: 2, Active :"Y"}]});

// db.custumer.find({$or : [{Active :"N"}, {id: 4}]});

// db.custumer.find({id: {$not: {$eq : 2}}});

// db.tabel.find( {data : { $regex : /isi-yang-mau-dicari/ , $options : ‘<options>’}} ).pretty() 
db.tabel.find( {data : { $regex : /^I/ , $options : ‘U’}
} ).pretty() 

// db.tabel.find( {data : { $exists : true } } )
rentalfilm.products.find( {productCode : { $exists : true } } )

// db.Customer.find({FirstName: {$type : "string" }})
rentalfilm.products.find({FirstName: {$type : "string" }})

rentalfilm.products.find( {$expr : { $gt : [“$priceEach” ,”$buyPrice”] } } ).pretty()

const Finddata = rentalfilm.orders.find()

// db.tabel.find().sort({data:-1}).pretty()
rentalfilm.orders.find().sort({id: -1}).pretty()

// db.tabel.find().limit(5).pretty()
rentalfilm.orders.find().limit(2).pretty()

// db.tabel.updateMany({kriteria}, {$unset : {kriteria2} } )
rentalfilm.orders.updateMany({id: 2}, {$unset : {kriteria2} } )

// db.tabel.updateMany({kriteria}, {$rename : {data: "data-baru"} } )
rentalfilm.orders.updateMany({id: 1}, {$rename : {data: "data-rename"} } )

// db.tabel.updateMany({kriteria}, {$set : {data : "isi"} }, { upsert : true } )
rentalfilm.orders.updateMany({id: 1}, {$set : {data : "test update"} }, { upsert : true } )