function validate() {
  var empId = document.getElementById("empId").value;
  var empName = document.getElementById("empName").value;
  var age = document.getElementById("Age").value;
  var genders = document.getElementsByName("gender");
  var designation = document.getElementById("Designation").value;
  var salary = document.getElementById("Salary").value;
  var locations = document.getElementsByName("location");
  var email = document.getElementById("Email").value;
  var doj = document.getElementById("doj").value;
  var contact = document.getElementById("Contact").value;

  // employee id validation
  if (empId.match(/^\w{4}\w+$/) && empId.length != 0) {
    document.getElementById("eid").style.display = "none";
    document.getElementById("eid").classList.remove("invalid-feedback");
    document.getElementById("empId").classList.remove("is-invalid");
  } else {
    document.getElementById("eid").style.display = "block";
    document.getElementById("eid").classList.add("invalid-feedback");
    document.getElementById("empId").classList.add("is-invalid");
    return;
  }

  // employee name validation
  if (empName.match(/^([a-z]|[A-Z])+$/) && empName.length != 0) {
    document.getElementById("ename").style.display = "none";
    document.getElementById("ename").classList.remove("invalid-feedback");
    document.getElementById("empName").classList.remove("is-invalid");
  } else {
    document.getElementById("ename").style.display = "block";
    document.getElementById("ename").classList.add("invalid-feedback");
    document.getElementById("empName").classList.add("is-invalid");
    return;
  }

  // age validation
  if (age.match(/^\d{2,3}$/) && Number(age) <= 130 && Number(age) >= 16) {
    document.getElementById("eage").style.display = "none";
    document.getElementById("eage").classList.remove("invalid-feedback");
    document.getElementById("Age").classList.remove("is-invalid");
  } else {
    document.getElementById("eage").style.display = "block";
    document.getElementById("eage").classList.add("invalid-feedback");
    document.getElementById("Age").classList.add("is-invalid");
    return;
  }

  // gender validation
  for (let g in genders) {
    if (genders[g].checked) {
      console.log(genders[g].value);
    }
  }

  // designation validation
  if (designation.length != 0) {
    document.getElementById("ed").style.display = "none";
    document.getElementById("ed").classList.remove("invalid-feedback");
    document.getElementById("Designation").classList.remove("is-invalid");
  } else {
    document.getElementById("ed").style.display = "block";
    document.getElementById("ed").classList.add("invalid-feedback");
    document.getElementById("Designation").classList.add("is-invalid");
    return;
  }

  // Salary validation
  if (salary.match(/^\d+$/)) {
    document.getElementById("esalary").style.display = "none";
    document.getElementById("esalary").classList.remove("invalid-feedback");
    document.getElementById("Salary").classList.remove("is-invalid");
  } else {
    document.getElementById("esalary").style.display = "block";
    document.getElementById("esalary").classList.add("invalid-feedback");
    document.getElementById("Salary").classList.add("is-invalid");
    return;
  }

  // location
  for (let l in locations) {
    if (locations[l].selected) {
      console.log(locations[l].value);
    }
  }

  // email validation
  if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    document.getElementById("mail").style.display = "none";
    document.getElementById("mail").classList.remove("invalid-feedback");
    document.getElementById("Email").classList.remove("is-invalid");
  } else {
    document.getElementById("mail").style.display = "block";
    document.getElementById("mail").classList.add("invalid-feedback");
    document.getElementById("Email").classList.add("is-invalid");
  }

  // date of joining validation
  if (doj.length == 0) {
    document.getElementById("edate").style.display = "block";
    document.getElementById("edate").classList.add("invalid-feedback");
    document.getElementById("doj").classList.add("is-invalid");
    return;
  } else if (doj.match(/\d{2}-\d{2}-\d{4}/)) {
    var arr = doj.split("-");
    var m = parseInt(arr[1]);
    var d = parseInt(arr[0]);
    var y = parseInt(arr[2]);
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (m == 2) {
      var leapyear = false;
      if ((!(y % 4) && y % 100) || !(y % 400)) {
        leapyear = true;
      }
      if (leapyear == false && d >= 29) {
        document.getElementById("edate").style.display = "block";
        document.getElementById("edate").classList.add("invalid-feedback");
        document.getElementById("doj").classList.add("is-invalid");
        return;
      } else if (leapyear == true && d > 29) {
        document.getElementById("edate").style.display = "block";
        document.getElementById("edate").classList.add("invalid-feedback");
        document.getElementById("doj").classList.add("is-invalid");
        return;
      }
      document.getElementById("edate").style.display = "none";
      document.getElementById("edate").classList.remove("invalid-feedback");
      document.getElementById("doj").classList.remove("is-invalid");
    } else if (m == 1 || (m > 2 && m <= 12)) {
      if (d > monthDays[m - 1]) {
        console.log(d, m);
        document.getElementById("edate").style.display = "block";
        document.getElementById("edate").classList.add("invalid-feedback");
        document.getElementById("doj").classList.add("is-invalid");
        return;
      }
      document.getElementById("edate").style.display = "none";
      document.getElementById("edate").classList.remove("invalid-feedback");
      document.getElementById("doj").classList.remove("is-invalid");
    } else {
      document.getElementById("edate").style.display = "none";
      document.getElementById("edate").classList.remove("invalid-feedback");
      document.getElementById("doj").classList.remove("is-invalid");
      return;
    }
  } else {
    document.getElementById("edate").style.display = "block";
    document.getElementById("edate").classList.add("invalid-feedback");
    document.getElementById("doj").classList.add("is-invalid");
    return;
  }

  // phone number validation
  if (contact.match(/^[6-9][0-9]{9}$/)) {
    document.getElementById("enum").style.display = "none";
    document.getElementById("enum").classList.remove("invalid-feedback");
    document.getElementById("Contact").classList.remove("is-invalid");
  } else {
    document.getElementById("enum").style.display = "block";
    document.getElementById("enum").classList.add("invalid-feedback");
    document.getElementById("Contact").classList.add("is-invalid");
    return;
  }

  // displaying data
  // window.open("./FormData.html");

}

