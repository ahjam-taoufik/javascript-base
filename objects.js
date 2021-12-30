// let dict={
//      s:23,
//     "hello":'marhaban',
//     "goodMorning":"sabah alkhir",
//      trans: function(word1){ 
//                   let word=word1.toLowerCase() 
//               return word
//               }
// }

// console.log(dict['hello'])
// console.log(dict['hellO'])
//console.log(dict.trans('EEEEE'))

//dict['human']='insan'
//dict.whatlanguage=function(){
 //   return 'English to arabic'
//}
 //console.log(dict)
 /////////////////////////////

// let Keycodes={
//     UP:38,
//     Down:40,
//     Right:39
// }
// console.log(Keycodes.Down)
///////////////////////////////

let Person= function(_name,_age,_gender,_colors){
        type='Human'
        this.name=_name
        this.colors=_colors
        this.age=_age
        this.gender=_gender
    
        this.typee=function(){
            return type
        }
            
       this.talk=function(){
          return 'hello I am ' +this.name
       }
       this.getage=function(){
           if(this.gender==='male'){
               return this.age
           }else{
               return this.age - 5
           }
       }
}

person3=new Person('malak',25,'female','pink')
person2=new Person('aicha',30,'female','pink')
person1=new Person('ahmed',40,'male','blue')
console.log(person1.getage())
console.log(person2.talk())
console.log(person3.typee())
document.write('<h1>' + person2.talk()+ '</h1>')



