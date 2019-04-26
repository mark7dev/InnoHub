var accounts =  { "Accounts" : [
    {
       "Id": 21,
       "Name": "John Shepherd",
       "LogonCount" : 13,
       "LastLogon" : new Date(2017, 1, 14, 16, 15, 6, 111)
    },
    {
        "Id": 22,
        "Name": "Joshy Perez",
        "LogonCount" : 14,
        "LastLogon" : new Date(2017, 1, 15, 16, 15, 6, 111)
    },
    {
        "Id": 23,
        "Name": "Peter Gless",
        "LogonCount" : 17,
        "LastLogon" : new Date(2017, 5, 27, 16, 15, 6, 111)
    }]
}

// var logons = { "Logons" : [
//     {
//        "Id": 25,
//        "Name": "Frank Shell",
//        "Date" : new Date(2017, 1, 14, 16, 15, 6, 111)
//     }]
// }

var logons = { "Logons" : [
    {
       "Id": 21,
       "Name": "John Shepherd",
       "Date" : new Date(2017, 07, 14, 16, 15, 6, 111)
    },
    {
        "Id": 22,
        "Name": "Joshy Perez",
        "Date" : new Date(2017, 1, 15, 16, 15, 6, 111)
    },
    // {
    //     "Id": 24,
    //     "Name": "George Lucas",
    //     "Date" : new Date(2017, 5, 27, 16, 15, 6, 111)
    // },
    // {
    //     "Id": 25,
    //     "Name": "Fito Paes",
    //     "Date" : new Date(2017, 5, 27, 16, 15, 6, 111)
    // }
]
}

// let fecha1 = accounts.Accounts[0].LastLogon;
// let fecha2 = logons.Logons[0].Date;

// if(fecha1<fecha2) {
//     console.log('es menor')
// } else {
//     console.log('es mayor')
// }

// console.log(fecha1)
// console.log(fecha2)


// function accountUpdater(logons, accounts) {
//     let newAccount = []
//     logons.Logons.map(itemL => {
//         accounts.Accounts.map(itemA => {
//             if(itemL.Id === itemA.Id) {
                
//                 itemA.LogonCount += 1

//                 let dateA = accounts.Accounts.LastLogon;
//                 let dateL = logons.Logons.Date;
//                 if(dateA<dateL) {
//                     itemA.dateA = itemL.dateL
//                     console.log(itemA.dateA);
//                 }
//                 // console.log(itemA)
//             } 
//             // else {
//             //     itemL.LogonCount = 1;
//             //     newAccount = itemL;
//             // }
//             // else if (itemL.Id != itemA.Id){
//             //     accounts.Accounts.push(itemL)
                
//             // }
//         })
        
        
//     })
//     // accounts.Accounts.push(newAccount);
//     console.log(accounts.Accounts)
//     // console.log(newAccount)
// }

function accountUpdater(logons, accounts) {
    for(i=0; i<logons.Logons.length; i++ ) {
        // console.log(logons.Logons[i])
        for(j=0; j<accounts.Accounts.length; j++) {
            if(logons.Logons[i].Id === accounts.Accounts[j].Id) {
                accounts.Accounts[i].LogonCount += 1;
                accounts.Accounts.map(itemA => {
                    logons.Logons.map(itemL => {
                        let dateA = itemA.LastLogon;
                        let dateL = itemL.Date;
                        console.log(dateA)
                        console.log(dateL)
                        if(dateA<dateL) {
                            itemA.dateA = itemL.dateL
                            
                        } else {
                            
                        }
                    })
                    
                })
            } 
            // else if(logons.Logons[i].Id != accounts.Accounts[j].Id) {
            //     console.log('no existe');
            //     console.log(logons.Logons[i]);
            //     accounts.Accounts.push(logons.Logons[i])
            // }
        }
    }
    console.log(accounts.Accounts);
}

// accounts.Accounts.map(item => {
//     console.log(item.LastLogon);
// })

accountUpdater(logons, accounts);


// console.log(accounts);
// console.log(accounts.Accounts[0].LastLogon);
// console.log(logons);
// console.log(logons.Logons[0].Id);
