import { getClass } from "./utility.js";

const loginBtn = getClass("login-btn");
const registerBtn = getClass("register-btn");

const add_school_btn = getClass("add-school-btn");
const add_school_form = getClass("add-school-form");
const subjects = getClass("subjects");
const add = getClass("add-more-btn");
const add_school = getClass("add-school");
const registered_people=getClass("registered-people")

const select_field=getClass("select-field");
const select_school_list=getClass('list')
const down_arrow_icon= getClass('down-arrow')


const add_schools_to_workerBtn=getClass("add-schools-to-workerBtn")
const update_school=getClass("update-school")
const worker=getClass("worker")
const main_page=document.getElementById("main-page")
const remove_schools=getClass("remove-schools")
const schools=getClass("schools")
const update_form=getClass("update-form")


const nav_links=document.querySelectorAll(".nav_link")
const loginForm = document.getElementById("login-form");
const registrationForm = document.getElementById("registration-form");


export default{
    add_school_btn,
    add_school_form,
    add,
    subjects,
    select_field,
    select_school_list,
    down_arrow_icon,
    add_schools_to_workerBtn,
    registered_people,
    update_school,
    worker,
    main_page,
    loginBtn,
    loginForm,
    registerBtn,
    registrationForm,
    nav_links,
    add_school,
    remove_schools,
    schools,
    update_form,
}