async function loadStudents() {
  try {
    const res = await fetch("http://localhost:5000/api/students");
    const data = await res.json();

    const list = document.getElementById("student-list");
    list.innerHTML = "";
    data.forEach(stu => {
      const li = document.createElement("li");
      li.textContent = `${stu.name} - ${stu.course}`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching students:", err);
  }
}

loadStudents();
