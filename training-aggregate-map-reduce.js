db.getCollection("teacher").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			    // enter query here
			    "dept" : "it"
			    
			}
		},

		// Stage 2
		{
			$sort: {
			    //<field1>: <1|-1>,
			    //<field2>: <1|-1> ...
			    "age" : 1
			}
		},

		// Stage 3
		{
			$group: {
			    _id: "$name", list_of_url : {$last : "$email"}
			    //<field1>: { <accumulator1> : <expression1> },
			    //...
			    
			}
		},
	],

	// Options
	{

	}

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
