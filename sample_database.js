use sample
db.createCollection("users");
db;
show collections;


//for(int i=0; i<=1000000; i++)
//{
//     db.users.insert(
//        
//        {
//             "i" : i,
//             "username" : "user" +i,
//             "age": Math.floor(Math.random()*120),
//             //"created" : now Date()
//        }
//     
//     )
//}

db.createCollection("employee");
show collections;
db.employee.insertMany([

               {name:"tom",contact:123456, email:"tom@test.com",devices:["tab","laptop","kindle","mobile"],gender:"male",dept:"it","address":
                                                                            {
                                                                               city : "newyork",
                                                                               country : "us",
                                                                               zipcode : 123                                                                           
                                                                               
                                                                            }
               }, 
               
               {name:"youhana",contact:562365, email:"youhana@test.com",devices:["kindle","mobile"],gender:"male",dept:"sales","address":
                                                                            {
                                                                               city : "newjercy",
                                                                               country : "us",
                                                                               zipcode : 567                                                                           
                                                                               
                                                                            }
               },
               
               {name:"imaran",contact:112563, email:"imaran@test.com",devices:["laptop","kindle","mobile"],gender:"male",dept:"it","address":
                                                                            {
                                                                               city : "islamabad",
                                                                               country : "pk",
                                                                               zipcode : 963                                                                           
                                                                               
                                                                            }
               }, 
               
               {name:"darlane",contact:345265, email:"darlane@abc.com",devices:["laptop","macbook","mobile"],gender:"female",dept:"sales","address":
                                                                            {
                                                                               city : "paris",
                                                                               country : "france",
                                                                               zipcode : 456                                                                           
                                                                               
                                                                            }
               }, 
               
               {name:"susane",contact:555555, email:"susane@abc.com",devices:["laptop","macbook","mobile"],gender:"female",dept:"sales","address":
                                                                            {
                                                                               city : "okj",
                                                                               country : "swz",
                                                                               zipcode : 126                                                                           
                                                                               
                                                                            }
               },
               
               {name:"tracy",contact:774523, email:"tracy@bbc.com",devices:["desktop","macbook","kindle","mobile"],gender:"female",dept:"accounts","address":
                                                                            {
                                                                               city : "auckland",
                                                                               country : "nz",
                                                                               zipcode : 222                                                                           
                                                                               
                                                                            }
               },
               
               {name:"brown",contact:885236, email:"brown@rrc.com",devices:["macbook","desktop","mobile"],gender:"male",dept:"accounts","address":
                                                                            {
                                                                               city : "oklahoma",
                                                                               country : "us",
                                                                               zipcode : 236                                                                           
                                                                               
                                                                            }
               },
               
               {name:"harry",contact:632100, email:"harrye@harry.com",devices:["laptop","macbook","mobile","kindle"],gender:"male",dept:"accounts","address":
                                                                            {
                                                                               city : "texas",
                                                                               country : "mexico",
                                                                               zipcode : 333                                                                           
                                                                               
                                                                            }
               }
])


db.employee.find({name:"tom"});
db.employee.find({name:"tom"}).explain(true);

db.employee.ensureIndex({name:1}); //singleindex
db.employee.ensureIndex({name:1,gender:1}); //compund index
db.employee.ensureIndex({devices:"hashed"}); //hashed index does not support array values
db.employee.ensureIndex({name:"hashed"}); //hashed index
db.employee.ensureIndex({_id:1,"unique":1}); //unique property
db.employee.ensureIndex({devices:1,"everyAfterSeconds":3600}); // TTL property
db.employee.ensureIndex({gender:1,"sparse":1}); //sparse property
db.employee.ensureIndex({devices:["mobile","laptop","desktop","kindle","macbook","tab"], name:1});

db.employee.ensureIndex({email:1, sparse: 1});

// document Index
db.employee.ensureIndex({address:1});
db.employee.find();
db.employee.dropIndex({address:1});
db.employee.getIndexes();
db.employee.totalIndexSize();

// subdocument and document Index
db.employee.createIndex({"address.city":1});
db.employee.dropIndex({"address.city":1});
db.employee.find({"address.city":"paris"});

//find Query
db.employee.find({name:"tom"}).limit(1).pretty();
db.employee.find({$and:[{name:"brown",email:"brown@rrc.com"}]});
db.employee.find({$or:[{name:"tom",email:"tom@test.com"}]});

db.employee.find().sort({name:1});
db.employee.find().sort({city:-1});

db.employee.find({devices:{$all:["laptop","mobile"]}});
db.employee.find({"address":{$lt:{"address.zipcode":12346}}});  // no record show because this is the minimum value
db.employee.find({"address":{$gt:{"address.zipcode":12346}}});  // show all documents


db.employee.isCapped();
db.currentOp();
db.stats;
db.employee.stats();
db.sample.stats();



// create stock database

db.createCollection("stock");
use sample;
show collections;
db.stock.insertMany([

                       {name : "infosys", qty: 100, price: 100},
                       {name : "tcs", qty: 200, price: 200},
                       {name : "cts", qty: 100, price: 3000},
                       {name : "hp", qty: 100, price: 100},
                       {name : "hcl", qty: 100, price: 500},
                       {name : "techmahindra", qty: 200, price: 500},
                       {name : "wipro", qty: 90, price: 700},
                       {name : "accenture", qty: 80, price: 2000},
                       {name : "capgemini", qty: 70, price: 600},
]);
db.stock.find();
db.stock.aggregate([

                    {$group:{_id:"$qty",no_of_company:{$sum:1}}}
]);

db.mycol.insertMany([

                     {
   						title: 'MongoDB Overview', 
   						description: 'MongoDB is no sql database',
   						by_user: 'tutorials point',
   						url: 'http://www.zxc.com',
   						tags: ['mongodb', 'database', 'NoSQL'],
   						likes: 100
					},
						
					{
 
   						title: 'NoSQL Overview', 
   						description: 'No sql database is very fast',
   						by_user: 'tutorials point',
   						url: 'http://www.zxc.com',
   						tags: ['mongodb', 'database', 'NoSQL'],
   						likes: 10
					},
					
					{
   
   						title: 'Neo4j Overview', 
   						description: 'Neo4j is no sql database',
   						by_user: 'Neo4j',
   						url: 'http://www.neo4j.com',
   						tags: ['neo4j', 'database', 'NoSQL'],
   						likes: 750
					}   
]);

db.mycol.find();

db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : '$likes'}}}])

db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial :{$sum: 1}}}])



