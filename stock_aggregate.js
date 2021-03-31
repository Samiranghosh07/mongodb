//db.stock.find()

//db.stock.find().pretty()

// db.stock.aggregate([
//                      { $group : { _id : "$qty", no_of_comp : { $sum : 1 }}}
// ])

//db.stock.aggregate([ { $group : {_id : "$name", price_details : {$sum : "$price"}}}])

// db.stock.aggregate([
//                      { $group : { _id : "$name", no_of_comp : {$sum : "$qty"}}}
// ])