/**
 * Start up file, load dependencies, makes app variable global, set the 
 * publish and subscribe events and more
 */

// Engine
import { PubSub } from "./engine/PubSub.js";
import { Functions } from "./engine/Functions.js";

// Listener
import { } from "./src/listeners.js";

// Classes
import { Person } from "./src/classes/Person.js";
import { Student } from "./src/classes/Student.js";
import { Teacher } from "./src/classes/Teacher.js";
import { Table } from "./src/classes/Table.js";

// App
let app = {};
app.classes = {};
app.data = {};

// Shortcut
window.d = window.document;
window.d.$ = window.document.querySelector;

// Data
app.data.students = [];
app.data.teachers = [];

// Engine
app.events = new PubSub();
app.functions = Functions;

// Classes
app.classes.Person = Person;
app.classes.Student = Student;
app.classes.Teacher = Teacher;
app.classes.Table = new Table();

// PubSub events
app.events.sub("createTeacher", app.classes.Table.createTeacherJS);
app.events.sub("createTeacher", app.classes.Table.createTeacherHTML);
app.events.sub("createTeacher", app.classes.Table.refreshData);

app.events.sub("createStudent", app.classes.Table.createStudentJS);
app.events.sub("createStudent", app.classes.Table.createStudentHTML);
app.events.sub("createStudent", app.classes.Table.refreshData);

// Global scope
window.app = app;
