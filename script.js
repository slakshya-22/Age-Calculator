document.getElementById("calculate-age").addEventListener("click", function() {
    const dob = document.getElementById("dob").value;
    if (!dob) {
      document.getElementById("result").textContent = "Please enter a valid date of birth.";
      return;
    }
  
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const mDiff = today.getMonth() - birthDate.getMonth();
    const dDiff = today.getDate() - birthDate.getDate();
  
    if (mDiff < 0 || (mDiff === 0 && dDiff < 0)) {
      age--;
    }
  
    document.getElementById("result").textContent = `Your age is ${age} years old.`;
  });
  