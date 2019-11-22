var options = ["Programming I", "Programming II", "Applied Computer Science", "College Algebra", "College Trigonometry", "Data Structures", "Object-Oriented Programming", "Calculus I", "Calculus II", "Introduction to Computer System", "Operating Systems", "Computer Organization I", "Discrete Mathematics", "College Chemistry I", "College Chemistry II", "General Physics I", "General Physics II", "Software Engineering", "Algorithm Analysis and Design", "Linear Algebra", "Networking", "Programming Languages", "Introduction to Database", "Computer Science Research", "Computer Security and Privacy", "CS Capstone Project"];

function populate() {

    var select = document.getElementById("courses");

    console.log("running......");

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;

        select.appendChild(el);
    }

}

function generate(selected) {
    var set = new Set(selected);
    var notSelected = new Array();
    for (var i = 0; i < options.length; i++) {
        if (!set.has(options[i])) {
            notSelected.push(options[i]);
        }
    }

    var table_body_content = ``;
    for (var i = 0; i < notSelected.length; i++) {
        var row = `
                <tr>
                    <th scope="row">` + notSelected[i] + `</th>
                    <td>3 hrs</td>
                </tr>`        
        table_body_content += row;
    }

    var tbody = document.createElement('tbody');
    tbody.innerHTML = table_body_content;

    var button_html = `
                    <div class="col text-center">
                        <button type="button" class="mybtn btn btn-primary">Download as PDF</button>
                    </div>`
    var pdf_button = document.createElement("div");
    pdf_button.setAttribute("class", "row");
    pdf_button.innerHTML = button_html;

    var table = document.createElement("table");
    table.setAttribute("class", "table");
    table.setAttribute("id", "course_table");

    var heading = document.createElement("div");
    heading.innerHTML = `
                <h4>` + document.getElementById("fName").value + ` ` + document.getElementById("lName").value + `</h4>
                <h5>Courses left to complete</h5>
    `

    table.appendChild(tbody);

    document.getElementById("schedule").appendChild(heading);
    document.getElementById("schedule").appendChild(table);
    document.getElementById("schedule").appendChild(pdf_button);

    document.getElementById("schedule").style.display = "block";

}