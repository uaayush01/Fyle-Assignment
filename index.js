
$(document).ready(function() {
    const exit = document.getElementById("exit-btn");
    const box = document.getElementById("box");
  
   
    exit.addEventListener('click', () => {
      box.style.display = "none";
    });
  
    // Add event listener to form submission
    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      var grossIncomeInput = document.getElementById("grossIncome").value;
      var extraIncomeInput = document.getElementById("extraIncome").value;
      var deductionsInput = document.getElementById("deductions").value;
      var ageInput = document.getElementById("age").value;
  
      
      var grossIncome = parseFloat(grossIncomeInput);
      var extraIncome = parseFloat(extraIncomeInput);
      var deductions = parseFloat(deductionsInput);
      var age = parseInt(ageInput);
  
      // Check if any field is empty
      if (grossIncomeInput === '' || extraIncomeInput === '' || deductionsInput === '' || ageInput === '') {
        alert('Please fill out all fields.');
        return; // Exit the function if any field is empty
      }
  
      // Calculate total income
      const totalIncome = grossIncome + extraIncome - deductions;
  
      // Calculate tax based on total income
      if (totalIncome <= 800000) {
        console.log("No tax");
      } else {
        var taxRate;
        if (age < 40) {
          taxRate = 0.3;
        } else if (age >= 40 && age < 60) {
          taxRate = 0.4;
        } else {
          taxRate = 0.1;
        }
  
        // Calculate tax amount
        var taxableAmount = totalIncome - 800000;
        var tax = taxableAmount * taxRate;
        console.log("Tax:", tax.toFixed(2));
  
        // Display results in the box
        var ffinalIncome=totalIncome-tax;
        var finalIncome=document.getElementById("final-income")
        finalIncome.innerHTML=ffinalIncome;
        
  
        var finalTax = document.getElementById("final-tax");
        finalTax.textContent = tax.toFixed(2);
  
        box.style.display = "block";
      }
    });
  
    
    const inputs = document.querySelectorAll('.number-input');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        const errorIcon = input.nextElementSibling;
        if (!/^\d*$/.test(input.value)) {
          errorIcon.style.display = 'inline-block';
        } else {
          errorIcon.style.display = 'none';
        }
      });
    });
  });
  