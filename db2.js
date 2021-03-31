db
show collections
db.indextable.insertMany([{name:"a1",color:["red","green","blue"], subject:["phy","chem","math"],qty:[1,2,3]}, 
{name:"a2",color:["orange","darkgreen","darkblue"], subject:["hist","geo","pol"],qty:[4,5,6]}, 
{name:"a3",color:["yellow","white","brown"], subject:["eco","sans","edu"],qty:[7,8,9]}, 
{name:"a4",color:["violet","pink","cyan"], subject:["beng","eng","env"],qty:[10,11,12]}]);

db.indextable.find().pretty();