
// tables tabulator
var tabledata = [
    {id:1, name:"Oli Bob", progress:12, gender:"male", rating:1, col:"red", dob:"19/02/1984", car:1},
    {id:2, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true},
    {id:3, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true"},
    {id:4, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999"},
    {id:6, name:"Frank Harbours", progress:38, gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1},
];

//initialize table
var table = new Tabulator("#example-table", {
    data:tabledata, //assign data to table
    autoColumns: true,
    height: "100%",
    maxHeight: "100%",
    responsiveLayout: "hide",
    layout:"fitDataTable",
});


// tables datatables

$(function () {
    $('#datatables').DataTable();
})

// tables gridjs

new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
    ],
    search: {
        enabled: true,
    },
    sort: true,
        pagination: {
        enabled: true,
        limit: 10,
        summary: false
    }
}).render(document.getElementById("tables-templatebay"));