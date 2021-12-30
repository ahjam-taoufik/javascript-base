console.log("ok")
// let element = document.createElement('h3')
// element.innerHTML = arrayOfValues[i].joke
// document.body.appendChild(element)

//('http://api.icndb.com/jokes/random/3') //URL

////////////////////// //methode loop 1//////////////////
// let data=fetch('http://api.icndb.com/jokes/random/3')

//          .then(function(response){
//                 //console.log(response.json());
//                 return response.json()
//          })
//          .then(function(obj){
//               const arr=obj.value
//                for (let i = 0; i < arr.length; i++) {
//                    const el = arr[i];
//                    let element1 = document.createElement('h3')
//                    element1.innerHTML = el.joke
//                    document.body.appendChild(element1)           
//                }
//          })


////////////////////// //methode loop 2//////////////////
        //  let data=fetch('http://api.icndb.com/jokes/random/3')

        //  .then(function(response){
        //         //console.log(response.json());
        //         return response.json()
        //  })
        //  .then(function(obj){
        //       const arr=obj.value
        //       arr.forEach(function(x){
        //           //console.log(x.id)
        //           let element = document.createElement('h3')
        //            element.innerHTML = x.joke
        //            document.body.appendChild(element)
        //       })
        //  })

 /////////////////////////////////////////////////////////////////

// const res=fetch('http://api.icndb.com/jokes/random/3')
//           .then(response=>response.json())
//           .then(data=>{console.log(data)})


