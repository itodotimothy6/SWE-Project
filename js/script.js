$(function(){

    populate();

    var options = ["Programming I", "Programming II", "Applied Computer Science", "College Algebra", "College Trigonometry", "Data Structures", "Object-Oriented Programming", "Calculus I", "Calculus II", "Introduction to Computer System", "Operating Systems", "Computer Organization I", "Discrete Mathematics", "College Chemistry I", "College Chemistry II", "General Physics I", "General Physics II", "Software Engineering", "Algorithm Analysis and Design", "Linear Algebra", "Networking", "Programming Languages", "Introduction to Database", "Computer Science Research", "Computer Security and Privacy", "CS Capstone Project"];

    $('#submit').click(function() {
        var selected = []
        selected = $('#courses').val();
        
        generate(selected);
    });

});