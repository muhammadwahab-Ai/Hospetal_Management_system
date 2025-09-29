const patientName = document.querySelector("#patient-Name")
const patientAge = document.querySelector("#patient-Age")
const patientDisease = document.querySelector("#patient-Disease")
const contect = document.querySelector("#contect")
const tableBody = document.querySelector("#table-body")
const addPatientBtn = document.querySelector("#AddPatient")



addPatientBtn.addEventListener("click", function () {
    let pname = patientName.value
    let pAge = patientAge.value
    let pDies = patientDisease.value
    let cont = contect.value

    if (pname == "" && pAge == "" && pDies == "" && cont == "") {
        alert("Fill all the Feild")
        return;
    } else {





        let patient = JSON.parse(localStorage.getItem("patient")) || [];
        patient.push({ pname, pAge, pDies, cont })
        localStorage.setItem("patient", JSON.stringify(patient))

       

        

        const patientoption = document.createElement("option")
        patientoption.innerHTML = patientName.value;
        patientSelect.appendChild(patientoption)



        const row = document.createElement("td")
        row.innerHTML = patientName.value;
        BillBody.appendChild(row)



        const dateInput = document.getElementById("Currentdate");
        dateInput.value = new Date().toISOString().split("T")[0];

        tableBody.innerHTML = ` <tr>
            <th>p name</th>
            <th>p Age</th>
            <th>p Disease</th>
            <th>p contect</th>
        </tr>`

        patient.forEach(element => {
            const row = document.createElement("tr")
            row.innerHTML = ` <tr>
            <td>${element.pname}</td>
            <td>${element.pAge}</td>
            <td>${element.pDies}</td>
            <td>${element.cont}</td>
        </tr>`
            tableBody.appendChild(row)
        });
    }
    patientName.value = "";
    patientAge.value = "";
    patientDisease.value = ""
    contect.value = "";
})
// localStorage.clear()


// Doctor Section..

const DoctorName = document.querySelector("#Doctor-Name")
const DoctorSpeciality = document.querySelector("#sepecialization")
const AddDoctor = document.querySelector("#AddDoctor")
const doctorTable = document.querySelector("#doctor-table")




AddDoctor.addEventListener("click", function () {
    let DName = DoctorName.value;
    let Dspecility = DoctorSpeciality.value;

    if (DName == "" && Dspecility == "") {
        alert("Fill the All feild")
    }

    else {

        // const doctorSelect = document.querySelector("#DoctorSelect")
        // console.log(doctorSelect);

        const doctorOP = document.createElement("option")
        doctorOP.innerHTML = DoctorName.value;
        DoctorSelect.appendChild(doctorOP)

        const BillDoctor = document.querySelector("#Dcotor_Name")


        const row = document.createElement("td")
        row.innerHTML = DoctorName.value;
        BillDoctor.appendChild(row)




        const doctor = JSON.parse(localStorage.getItem("doctor")) || [];
        doctor.push({ DName, Dspecility })
        localStorage.setItem("doctor", JSON.stringify(doctor))

        doctorTable.innerHTML = ` <tr>
            <th>Doctor Name</th>
            <th>Doctor speciality</th>

        </tr>`

        doctor.forEach(item => {
            const tr = document.createElement("tr")
            tr.innerHTML = `  <tr>
            <td>${item.DName}</td>
            <td>${item.Dspecility}</td>
        </tr>`
            doctorTable.appendChild(tr)

            DoctorName.value = "";
            DoctorSpeciality.value = "";

        });
    }



})





// Appointment section start

const patientSelect = document.querySelector("#patientselect")
const DoctorSelect = document.querySelector("#DoctorSelect")
// console.log(DoctorSelect)
const BookAppintmentBtn = document.querySelector("#bookAppointBtn")

BookAppintmentBtn.addEventListener("click", function () {

    const billDate = document.querySelector("#billDate")
    const Billrow = document.createElement("td")
    Billrow.innerHTML = new Date().toISOString().split("T")[0];;

    billDate.appendChild(Billrow)
    const payment = document.querySelector("#payment")
    const row = document.createElement("tr")
    row.innerHTML = "1500";
    payment.appendChild(row)





})








// Bill Section start

const BillBody = document.querySelector("#billBody")




localStorage.clear()


