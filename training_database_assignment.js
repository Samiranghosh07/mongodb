use training

show dbs

//========== Basic Operations ===========//
db.stats()

db.employee.dataSize()

db.employee.storageSize()

db.employee.isCapped()

db.employee.indexStats

//========= Table Creation ===================//

db.createCollection("employee")

//========= Insert Bulk Record ===============//

db.employee.insertMany([

       { name:"cook", company:"xyz", gender:"male", dsg:"it engineer", salary:15000, rating:75, contact:123456, address:[
         
         {city:"newyork",country:"us",zipcode:123}
         
       ]},
       
       { name:"briyard", company:"abc", gender:"female", dsg:"sales executive", salary:10000, rating:45, contact:121645, address:[
         
         {city:"lipcon",country:"canada",zipcode:456}
         
       ]},
       
       { name:"alex", company:"xyz", gender:"male", dsg:"it engineer", salary:20000, rating:65, contact:122325, address:[
         
         {city:"london",country:"uk",zipcode:333}
         
       ]},
       
       { name:"zylin", company:"ijk", gender:"female", dsg:"accounts executive", salary:8000, rating:35, contact:125631, address:[
         
         {city:"kapetown",country:"sa",zipcode:256}
         
       ]},
       
       { name:"nitin", company:"wipro", gender:"male", dsg:"it engineer", salary:12000, rating:70, contact:523689, address:[
         
         {city:"delhi",country:"india",zipcode:912}
         
       ]},
       
       { name:"sam", company:"cts", gender:"male", dsg:"it engineer", salary:20000, rating:45, contact:189611, address:[
         
         {city:"paris",country:"france",zipcode:444}
         
       ]},
       
       { name:"ijol", company:"tcs", gender:"female", dsg:"sales executive", salary:9000, rating:85, contact:444444, address:[
         
         {city:"newjurcy",country:"us",zipcode:226}
         
       ]},
       
       { name:"hemond", company:"abc", gender:"male", dsg:"civil engineer", salary:21000, rating:54, contact:772356, address:[
         
         {city:"sisily",country:"italy",zipcode:555}
         
       ]},
       
       { name:"rocky", company:"hcl", gender:"male", dsg:"it engineer", salary:14000, rating:80, contact:545411, address:[
         
         {city:"oklahoma",country:"us",zipcode:321}
         
       ]},

])

//============ Document Identify ==============//

db.employee.find().pretty()



//=========== Update Document ===============//

db.employee.updateOne(

        //{name:"cookies"},{$set : {name:"cook"}}
        {rating:45},{$set : {rating:50}}
)


//=========== Delete Document ==============//

//db.employee.remove({name:"hemond", company:"abc"})

//=========== Delete Embeded Document =========//

db.employee.remove({"address.zipcode":226.0})
