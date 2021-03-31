use tutindex;

db.createCollection('tutindextable');

show collections;

// collection Insert Records
//==========================

db.tutindextable.insertMany([{name:"a1",color:["red","green","blue"], subject:["phy","chem","math"],qty:[1,2,3]}, 
{name:"a2",color:["orange","darkgreen","darkblue"], subject:["hist","geo","pol"],qty:[4,5,6]}, 
{name:"a3",color:["yellow","white","brown"], subject:["eco","sans","edu"],qty:[7,8,9]}, 
{name:"a4",color:["violet","pink","cyan"], subject:["beng","eng","env"],qty:[10,11,12]}]);

db.tutindextable.insert({name:"a1",color:["chocolate","crimson","ash"], subject:["comp","acct","bmath"],qty:[13,14,15]});

db.tutindextable.find();

db.tutindextable.find().sort({"name":-1});

db.tutindextable.find({$or:[{"name":"a2", "qty":[4,5,6]}]});

db.tutindextable.find({"qty":{$lt:[4,5,9]}});

db.stats();

// Creating and Modifying Indexes:
//==================================
db.tutindextable.createIndex({"qty.4":1});

db.tutindextable.getIndexes();

db.tutindextable.createIndex({"name":1,"qty":1});

db.tutindextable.dropIndex({"subject":1});

db.tutindextable.dropIndex({"qty.4":1});

db.tutindextable.createIndex();

db.tutindextable.createIndex({"name":1},{"expireAfterSeconds":3600}); // TTL specification
db.tutindextable.createIndex({"name":1},{"unique":1});  // Unique Index
db.tutindextable.createIndex({"qty":1},{"sparse":1});  // Sparse Index
db.tutindextable.createIndex({"name":"hashed"}); // Hashed Index

db.tutindextable.totalIndexSize();

