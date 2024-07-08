const netSalaryCalculator = () => {
  let basicSalary = parseFloat(document.getElementById("basicsalary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);

  // Gross salary calculation
  const grossSalaryCalc = () => {
    return basicSalary + benefits;
  };

  // PAYE Tax Calculation
  const payeeTaxCalc = (grossPay) => {
    const allowableDeductions = 1080;
    const taxableIncome = grossPay - allowableDeductions;
    const level1Max = 24000;
    const level2Max = 32333;
    const level3Max = 500000;
    const level4Max = 800000;
    let payee = 0;

    if (taxableIncome > level4Max) {
      payee =
        (taxableIncome - level4Max) * 0.35 +
        (level4Max - level3Max) * 0.325 +
        (level3Max - level2Max) * 0.3 +
        (level2Max - level1Max) * 0.25;
    } else if (taxableIncome > level3Max) {
      payee =
        (taxableIncome - level3Max) * 0.325 +
        (level3Max - level2Max) * 0.3 +
        (level2Max - level1Max) * 0.25;
    } else if (taxableIncome > level2Max) {
      payee =
        (taxableIncome - level2Max) * 0.3 + (level2Max - level1Max) * 0.25;
    } else if (taxableIncome > level1Max) {
      payee = (taxableIncome - level1Max) * 0.25;
    }
    return payee;
  };

  // NHIF Deductions Calculation
  const nhifDeductionsCalc = (grossPay) => {
    if (grossPay >= 100000) return 1700;
    else if (grossPay >= 90000) return 1600;
    else if (grossPay >= 80000) return 1500;
    else if (grossPay >= 70000) return 1400;
    else if (grossPay >= 60000) return 1300;
    else if (grossPay >= 50000) return 1200;
    else if (grossPay >= 45000) return 1100;
    else if (grossPay >= 40000) return 1000;
    else if (grossPay >= 35000) return 950;
    else if (grossPay >= 30000) return 900;
    else if (grossPay >= 25000) return 850;
    else if (grossPay >= 20000) return 750;
    else if (grossPay >= 15000) return 600;
    else if (grossPay >= 12000) return 500;
    else if (grossPay >= 8000) return 400;
    else if (grossPay >= 6000) return 300;
    else return 150;
  };

  // NSSF Deductions Calculation
  const nssfDeductionsCalc = (pensionablePay) => {
    const tier1Limit = 6000;
    const tier2Limit = 18000;
    let tier1 = Math.min(pensionablePay, tier1Limit) * 0.06;
    let tier2 = 0;
    if (pensionablePay > tier1Limit) {
      tier2 =
        Math.min(pensionablePay - tier1Limit, tier2Limit - tier1Limit) * 0.06;
    }
    return tier1 + tier2;
  };

  // Net salary calculation
  const netSalaryCalc = () => {
    const grossAmount = grossSalaryCalc();
    const payee = payeeTaxCalc(grossAmount);
    const nhifDeduction = nhifDeductionsCalc(grossAmount);
    const employeeContribution = nssfDeductionsCalc(grossAmount);
    return grossAmount - (payee + nhifDeduction + employeeContribution);
  };

  // Displaying the results
  const grossSalaryAmount = grossSalaryCalc();
  const payeeTax = payeeTaxCalc(grossSalaryAmount);
  const nhifDeductionAmount = nhifDeductionsCalc(grossSalaryAmount);
  const nssfDeductionsAmount = nssfDeductionsCalc(grossSalaryAmount);
  const netSalaryAmount = netSalaryCalc();

  document.getElementById("payee").innerHTML = `P.A.Y.E: ${payeeTax.toFixed(
    2
  )}`;
  document.getElementById(
    "nhif"
  ).innerHTML = `N.H.I.F. Deductions: ${nhifDeductionAmount.toFixed(2)}`;
  document.getElementById(
    "nssf"
  ).innerHTML = `N.S.S.F. Deductions: ${nssfDeductionsAmount.toFixed(2)}`;
  document.getElementById(
    "grosssalary"
  ).innerHTML = `Gross Salary: ${grossSalaryAmount.toFixed(2)}`;
  document.getElementById(
    "netsalary"
  ).innerHTML = `Net Salary: ${netSalaryAmount.toFixed(2)}`;
};
