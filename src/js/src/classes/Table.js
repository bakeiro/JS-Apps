class Table {
  createStudentJS() {
    const tempStudent = new app.classes.Student(5, "Test");
    app.data.students.push(tempStudent);
  }

  createStudentHTML() {
    const textElement = "<p>Student created!</p>";
    const button_1 = document.querySelector("#button_1");
    button_1.insertAdjacentHTML("afterend", textElement);
  }

  createTeacherJS() {
    const tempTeacher = new app.classes.Teacher(5, "Test");
    app.data.teachers.push(tempTeacher);
  }

  createTeacherHTML() {
    const textElement = "<p>Teacher created!</p>";
    const button_2 = document.querySelector("#button_2");
    button_2.insertAdjacentHTML("afterend", textElement);
  }

  refreshData() {
    const stringData = JSON.stringify(app.data, null, '<p></p>');
    const appDataBox = d.$('#app_data');
    const dataHtml = `
    <h4>App data:</h4>
    ${stringData}`;

    appDataBox.innerHTML = dataHtml;
  }
}

export { Table };