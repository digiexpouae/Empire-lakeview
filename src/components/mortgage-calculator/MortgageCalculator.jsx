import React, { useState } from 'react';
import Image from 'next/image';

const MortgageCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(1000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanTerm, setLoanTerm] = useState(25);
  const [interestRate, setInterestRate] = useState(5);

  const loanAmount = propertyPrice - (propertyPrice * downPayment / 100);
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  const totalInterest = (monthlyPayment * numberOfPayments) - loanAmount;
  const totalPayment = loanAmount + totalInterest;

  return (
    <div className="mortgage-calculator-container">
        <div className='mortgage-calculator-content'>
      <div className="mortgage-calculator">
        <h2>Mortgage Calculator</h2>
        <div className="calculator-body">
          <div className="calculator-inputs">
            <div className="input-group">
              <label>Property Price</label>
              <div className="input-field">
                <span>AED</span>
                <input type="number" value={propertyPrice} onChange={(e) => setPropertyPrice(e.target.value)} />
                <div>
                  <button onClick={() => setPropertyPrice(propertyPrice + 100)}>+</button>
                  <button onClick={() => setPropertyPrice(propertyPrice - 100)}>-</button>
                </div>
              </div>
            </div>
            <div className="input-group">
              <label>Down Payment ({downPayment}%)</label>
              <input type="range" min="0" max="100" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Loan Amount: AED {loanAmount.toFixed(2)}</label>
            </div>
            <div className="input-group">
              <label>Interest Rate</label>
               <div className="input-field">
                <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
                <span>%</span>
                 <div>
                  <button onClick={() => setInterestRate(interestRate + 1)}>+</button>
                  <button onClick={() => setInterestRate(interestRate - 1)}>-</button>
                </div>
              </div>
            </div>
            <div className="input-group">
              <label>Loan Term ({loanTerm} Years)</label>
              <input type="range" min="1" max="30" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
            </div>
            <button className="expert-advice-btn">Get Expert Advice</button>
          </div>
          <div className="calculator-results">
            <div className="chart-container">
                 <Image src="/assets/pie chart.png" alt="Pie Chart" width={150} height={150} />
            </div>
            <div className="result-details">
                <div className='result-detail-content'>
              <p>Monthly Payment: <span>AED {monthlyPayment.toFixed(2)}</span></p>
              <p>Interest: <span>AED {totalInterest.toFixed(2)}</span></p>
              <p>Annual Payment: <span>AED {(monthlyPayment * 12).toFixed(2)}</span></p>
              <p>Total Interest: <span>AED {totalInterest.toFixed(2)}</span></p>
              <p>Total Payment: <span>AED {totalPayment.toFixed(2)}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="calculator-description">
        <p>Our Mortgage Calculator is a powerful tool designed to help you estimate your monthly mortgage payments and understand the financial commitments of purchasing a property. By entering key loan details, you can quickly assess the affordability of a mortgage and make informed decisions about your home financing options.</p>
        <ul>
          <li><strong>Property Price:</strong> This is the total price of the property.</li>
          <li><strong>Interest Rate:</strong> The annual interest rate charged on the loan amount.</li>
          <li><strong>Loan Term:</strong> The duration over which the loan will be repaid, typically measured in years.</li>
          <li><strong>Down Payment:</strong> The initial amount paid upfront towards the purchase of the property, reducing the total loan amount.</li>
        </ul>
        <div className='desc-logo'>
             <Image src="/assets/logo morr.png" alt="Logo" width={100} height={100} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
