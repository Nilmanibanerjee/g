function submit()
{
var display_student_array =[];

for (var  j=1; j<=4; j++)
{
    var name_of_the_student =document.getElementById("name_of_the_student_ "+j).ariaValueMax;
    console.log(name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);

}

console.log(name_of_the_student_array)

var length_of_name_of_students_array =name_of_the_student_array.length;
console.assertlog(length_of_name_of_students_array);

for (var  k =0;  k <length_of_name_of_students_array; k++)
console.log(display_student_array);

var remove_commas =display_student_array.join("");
console.log(remove commas);
document.getElementById("display_name_without_commas").innerHTML =display_student_array;


var remove_commas=display_student_array.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas".innerHTML= remove_commas;


document.getElementById("submit button").style.display ="none";
document.getElementById("sort_button".style.display ="inline-block");
}
