// This is a json object, create a file named list.json in this directory and place this object[] in it.
/*[
    {
        "name": "Learn JavaScript",
        "status" : true
    },
    {
        "name": "Try JSON",
        "status" : false
    }
]
*/

const url = "list.json";
fetch(url).then(rep => rep.json())
.then((data) => {
    data.forEach((el) => {
        console.log(`${el.name} = ${el.status}`);
    });
});
