use training;

show collections;

db.teacher.find();

db.collection.insertMany([{"name": "adam", "age":32, "exp":"12yrs", "dept":"it","contact":1234, "email":"adam@test.com"}, {"name": "dick", "age":42, "exp":"10yrs", "dept":"sales","contact":4256, "email":"dick@test2.com"}, {"name": "harry", "age":28, "exp":"8yrs", "dept":"accounts","contact":5689, "email":"harry@test3.com"},{"name": "tom", "age":30, "exp":"12yrs", "dept":"it","contact":7896, "email":"tom@test.com"}, {"name": "robert", "age":35, "exp":"15yrs", "dept":"it","contact":4523, "email":"rebert@test.com"}]);

db.teacher.find({"name":"tom"},{"dept":"it"});

db.teacher.find().limit(3).pretty();

db.teacher.insert({"name": "volkax", "age":40, "exp":"7yrs", "dept":"sales","contact":1111, "email":"volkax@pop.com"});

db.teacher.insertOne({"name": "ulow", "age":46, "exp":"20yrs", "dept":"accounts","contact":2222, "email":"ulow@pqw.com"});

db.teacher.update({"name":"dick"},{$set:{"name":"johnson"}});

db.teacher.find();

db.teacher.remove({"email":"tom@test.com"});

db.teacher.find({"age":{$gt:35}});

db.teacher.find().sort({"name":-1}).pretty();

db.teacher.find().count();

db.teacher.dataSize();

db.stats();

db.teacher.stats();

db.teacher.find();

db.teacher.insert({"name": "joyana", "age":37, "exp":"5yrs", "dept":"it","contact":5623, "email":"joyana@test5.com","subject":["python","c","c++"]});

db.teacher.find({"subject":{$all:["python","c","c++"]}});

db.teacher.createIndex({"subject":1,"name":1});

db.teacher.getIndexes();

db.teacher.dropIndex({"subject":1,"name":1});






