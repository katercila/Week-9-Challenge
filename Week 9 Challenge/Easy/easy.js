// Write a function that will take as an input the name of an 
// exercise and console log a message like Today's exercise: running
function exerciseOfTheDay(activity){
    return function(){
    console.log(`Today's exercise: ${activity} `)
   }
}
let activity = exerciseOfTheDay("running");
activity();