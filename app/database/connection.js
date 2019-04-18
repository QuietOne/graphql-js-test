import JsonDB from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { emojiRepository } from './emojis_repository';
import { pokedex, pokedexRepository } from './pokedex_repository';

// The second argument is used to tell the DB to save after each push
// If you put false, you'll have to call the save() method.
// The third argument is to ask JsonDB to save the database in an human readable format. (default false)
// The last argument is the separator. By default it's slash (/)
const connection = new JsonDB(new Config("database", true, true, '/'))

// There are 2 predefined data sets for use
const initData = () => {
    // 1. emojis.json
    // {
    //     "<name-of-emoji>": "<url.png>"
    // }
    connection.push("/emojis", emojiRepository.predefinedData)
    // 2. pokedex.json
    // {
    //     "pokemon": [
    //         {
    //             "id": 1,
    //             "num": "001",
    //             "name": "Bulbasaur",
    //             "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    //             "type": [
    //                 "Grass",
    //                 "Poison"
    //             ],
    //             "height": "0.71 m",
    //             "weight": "6.9 kg",
    //             "candy": "Bulbasaur Candy",
    //             "candy_count": 25,
    //             "egg": "2 km",
    //             "spawn_chance": 0.69,
    //             "avg_spawns": 69,
    //             "spawn_time": "20:00",
    //             "multipliers": [1.58],
    //             "weaknesses": [
    //                 "Fire",
    //                 "Ice",
    //                 "Flying",
    //                 "Psychic"
    //             ],
    //             "prev_evolution": [
    //                 {    
    //                     "num": "002",
    //                     "name": "Ivysaur"
    //                 }                
    //             ]
    //             "next_evolution": [
    //                 {    
    //                     "num": "002",
    //                     "name": "Ivysaur"
    //                 }, 
    //                 {
    //                     "num": "003",
    //                     "name": "Venusaur"
    //                 }
    //             ]
    //         }
    //     ]
    // }
    connection.push("/pokedex", pokedexRepository.predefinedData)
    console.log('Database populated')
}

export const db = {
    connection,
    initData,
}

// // If you don't want to override the data but to merge them
// // The merge is recursive and work with Object and Array.
// db.push("/test3", {
//     new:"cool",
//     json: {
//         important : 5
//     }
// }, false);
 
// /*
// This give you this results :
// {
//    "test":"test",
//    "json":{
//       "test":[
//          "test"
//       ],
//       "important":5
//    },
//    "new":"cool"
// }
// */
 
// // You can't merge primitive.
// // If you do this:
// db.push("/test2/my/test/",10,false);
 
// // The data will be overriden
 
// // Get the data from the root
// var data = db.getData("/");
 
// // From a particular DataPath
// var data = db.getData("/test1");
 
// // If you try to get some data from a DataPath that doesn't exists
// // You'll get an Error
// try {
//     var data = db.getData("/test1/test/dont/work");
// } catch(error) {
//     // The error will tell you where the DataPath stopped. In this case test1
//     // Since /test1/test does't exist.
//     console.error(error);
// };
 
// // Deleting data
// db.delete("/test1");
 
// // Save the data (useful if you disable the saveOnPush)
// db.save();
 
// // In case you have a exterior change to the databse file and want to reload it
// // use this method
// db.reload();


// var JsonDB = require('node-json-db');
// // The second argument is used to tell the DB to save after each push
// // If you put false, you'll have to call the save() method.
// // The third argument is to ask JsonDB to save the database in an human readable format. (default false)
// var db = new JsonDB("myDataBase", true, false);
 
// // This will create an array 'myarray' with the object '{obj:'test'}' at index 0
// db.push("/arraytest/myarray[0]", {
//     obj:'test'
// }, true);
 
// // You can retrieve a property of an object included in an array
// // testString = 'test';
// var testString = db.getData("/arraytest/myarray[0]/obj");
 
// // Doing this will delete the object stored at the index 0 of the array.
// // Keep in mind this won't delete the array even if it's empty.
// db.delete(("/arraytest/myarray[0]");


// // You can also easily append new item to an existing array
// // This set the next index with {obj: 'test'}
// db.push("/arraytest/myarray[]", {
//     obj:'test'
// }, true);
 
 
// // The append feature can be used in conjuction with properties
// // This will set the next index as an object {myTest: 'test'}
// db.push("/arraytest/myarray[]/myTest", 'test', true);

// // Add basic array
// db.push("/arraytest/lastItemArray", [1, 2, 3], true);
 
// // You can easily get the last item of the array with the index -1
// // This will return 3
// db.getData("/arraytest/lastItemArray[-1]");
 
 
// // You can delete the last item of an array with -1
// // This will remove the integer "3" from the array
// db.delete("/arraytest/lastItemArray[-1]");
 
// // This will return 2 since 3 just got removed
// db.getData("/arraytest/lastItemArray[-1]");