//db.getCollection('mycol').find({})

db.mycol.find().pretty()

db.mycol.aggregate([
     
     {$group : {_id : "$by_user", sum_of_likes : {$sum : "$likes"}}}, {$sort : {_id : 1}}
])
     
db.mycol.aggregate([
     
     {$group : {_id : "$by_user", avg_of_likes : {$avg : "$likes"}}}
])
     
db.mycol.aggregate([
     
     {$group : {_id : "$by_user", min_likes : {$min : "$likes"}}}
])
     
db.mycol.aggregate([
     
     {$group : {_id : "$by_user", max_likes : {$max : "$likes"}}}
])
     
db.mycol.aggregate([
     
     {$group : {_id : "$by_user", push_url : {$push : "$url"}}}
])
     
db.mycol.aggregate([
     
     {$group : {_id : "$by_user", last_url_info : {$last : "$url"}}}
])
     
     
db.mycol.find().sort({_id:1})


db.mycol.aggregate([
         {$group : {_id:{"$by_user", summation : {$sum : 1}}}, {$sort : {"likes":1}}
])