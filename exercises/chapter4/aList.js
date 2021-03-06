/*Prompt: Objects, as generic blobs of values, can be used to build all sorts of 
data structures. A common data structure is the list (not to be confused 
with array). A list is a nested set of objects, with the first object holding 
a reference to the second, the second to the third, and so on. */ 



/*
Write a function arrayToList that builds up a list structure like the one 
shown when [1, 2, 3] as argument. 
*/ 
//Building a list is easier when done back to front 
//My solution (That wouldn't work)

function arrayToList(array){
  let list={};
  
  for(let i=array.length; i>0 ;i--){
  	
  	list.assign('rest': {'value': array[i], 'rest': null}) 
  
  }
  
  return list;

}

/*-------------------------------------------------------------------------*/
//Author solution 
/*First difference, the author let list equal null.  And then
assigns the list the object value */


function arrayToList(array){
  let list = null;
  for (let i = array.length - 1; i >= 0; i--){
    list = {value: array[i], rest: list};
  }
  return list;
}


arrayToList([1,2,3])

/*Four steps to loop 
  1) New Binding List created 
  2) Value inserted from for loop 
  3) rest key assigned value from previous/global binding of list
  4) Repeat  
*/ 

/*Also write a listToArray function that 
produces an array from a list.  Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to
the front of the input list, and nth, which takes a list that adds the 
element to the fron of the input list, and nth.*/



function listToArray(list){
array=[] 
for(let node=list; node; node=node.rest){
 array.push(node.value)  

} 
return array 

}

/* Three steps to loop
1) Every iteration, node points to the current sublist 
2) As long as list does not equal Null, it will keep going 
3) the body reads its value and pushes to array
*/


/*Add a helper function prepend, which takes an elemental and a list and 
creates a new list that adds the element to the front of the input list*/


function prepend(value, list){
	
	return {value: value, rest: list}
 

}


/*Take a list and a number and returns the element at the given position 
in the list (with zero referring to the first element) or undefined when
there is no such element*/


function nth(list, number){

	array=[] 
	
	for(node=list;node;node=node.rest){
		array.push(node.value)


	}
	return array[number]



}

//Build a recursive version of the function above

function nth(list, number){
	if (!list) return undefined; //If list equals null 
	else if (number == 0) return list.value;  //When countdown completes 
	else return nth(list.rest, number-1)  //keep digging into the list 

}







