// db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : '$likes'}}}])
// 
// db.mycol.find().pretty()
// 
// db.mycol.aggregate([
//                      {$group : {_id : "$by_user", num_tutorial : {$sum:1}}}
// ])
// 
//                      
// db.mycol.aggregate([
//                      {$group : {_id : "$by_user", num_tutorial : {$avg:"$likes"}}}
// ])
//                      
//                      
// db.mycol.aggregate([
//                      {$group : {_id : "$by_user", num_tutorial : {$min:"$likes"}}}
// ])                
//                      
// db.mycol.aggregate([
//                      {$group : {_id : "$by_user", num_tutorial : {$push:"$url"}}}
// ])  
//   
// db.mycol.aggregate([
//                      {$group : {_id : "$by_user", last_url : {$last:"$url"}}}
// ])                   