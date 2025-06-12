function logout(){
    localStorage.setItem('sessionstatus','logout');
}


  const empname = document.getElementById("empname");
  const emproll = document.getElementById("emproll");
  const empid = document.getElementById("empid");
  const payrolldate = document.getElementById("payrolldate");
  const payrollmonth = document.getElementById("monthselector");
  const basicsal = document.getElementById("basicsalary");
  const presentday = document.getElementById("presentdays");
  const addearn = document.getElementById("additions"); 
  const totalsal = document.getElementById("totalsalary");
  const grosssal = document.getElementById("grosssalary");
  const workday = document.getElementById("workingdays");
  const leaveday = document.getElementById("leavedays");
  const deduct = document.getElementById("deductions");
  



  payrollmonth.addEventListener("input",function(){
    const value = this.value;
    console.log(value);
      if (value) {
        const [year, month] = value.split("-");
        const days = getDaysInMonth(parseInt(month), parseInt(year));
        console.log(days);
        workday.value=days;
      }
  });

  
  function getDaysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
  }
  
  

 function calgrosssal(){
    const num9 = parseFloat(basicsal.value) || 0 ;
    const num10 = parseFloat(workday.value)  ;
        if(num10<=31){
          grosssal.value = num9 * num10;
        }else{
            workday.value = "";
            grosssal.value = "";
        }
      
}


function caltotalsal() {
    const num1 = parseFloat(basicsal.value) || 0 ;
    const num2 = parseFloat(presentday.value) || 0 ;

    totalsal.value = num1 * num2;
  
}

function totalleaveday(){
    const num7 = parseFloat(basicsal.value) || 0 ;
    const num4 = parseFloat(workday.value) || 0 ;
    const num5 = parseFloat(presentday.value);
    
    if(num4 >= num5 && num4 !==0 ){
        const num8 = num4 - num5;
        leaveday.value= num8;
        deduct.value = num7 * num8; 
    }else{
        presentday.value=""; 
        leaveday.value="";
        deduct.value = "";
        totalsal.value = "";
    }
    
}



function caltotalearn(){
  const num11 = parseFloat(totalsal.value) || 0;
  const num12 = parseFloat(addearn.value) ;

  totalearning.value = num11 + num12;
  
}


window.onload=function(){
  basicsal.addEventListener('input', calgrosssal);
  workday.addEventListener('input',calgrosssal);
  basicsal.addEventListener('input', caltotalsal);
  presentday.addEventListener('input', caltotalsal);
  presentday.addEventListener('input', totalleaveday);
  workday.addEventListener('input',totalleaveday);
  basicsal.addEventListener('input', totalleaveday); 
   totalsal,addEventListener('input',caltotalearn)
  addearn.addEventListener('input', caltotalearn);

};





function savepayslip(){
    alert("Payslip saved successfully");
}



 








    
