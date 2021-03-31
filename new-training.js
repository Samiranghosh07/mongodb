// *** 3T Software Labs, Studio 3T: MapReduce Job ****

// Variable for db
var __3tsoftwarelabs_db = "training";

// Variable for map
var __3tsoftwarelabs_map = function () {

    // Enter the JavaScript for the map function here
    // You can access the current document as 'this'
    //
    // Available functions: assert(), BinData(), DBPointer(), DBRef(), doassert(), emit(), gc()
    //                      HexData(), hex_md5(), isNumber(), isObject(), ISODate(), isString()
    //                      Map(), MD5(), NumberInt(), NumberLong(), ObjectId(), print()
    //                      printjson(), printjsononeline(), sleep(), Timestamp(), tojson()
    //                      tojsononeline(), tojsonObject(), UUID(), version()
    //
    // Available properties: args, MaxKey, MinKey

    emit(this.cust_id, this.price);
}
;

// Variable for reduce
var __3tsoftwarelabs_reduce = function (key, values) {

    // Enter the JavaScript for the reduce function here
    // 'values' is a list of objects as emit()'ed by the map() function
    // Make sure the object your return is of the same type as the ones emit()'ed
    //
    // Available functions: assert(), BinData(), DBPointer(), DBRef(), doassert(), emit(), gc()
    //                      HexData(), hex_md5(), isNumber(), isObject(), ISODate(), isString()
    //                      Map(), MD5(), NumberInt(), NumberLong(), ObjectId(), print()
    //                      printjson(), printjsononeline(), sleep(), Timestamp(), tojson()
    //                      tojsononeline(), tojsonObject(), UUID(), version()
    //
    // Available properties: args, MaxKey, MinKey

    var reducedValue = "" + values;

    return reducedValue;
}
;

db.runCommand({ 
    mapReduce: "teacher",
    map: __3tsoftwarelabs_map,
    reduce: __3tsoftwarelabs_reduce,
    out: {"inline": 1},
    query: { },
    sort: { },
    inputDB: "training",
 });
