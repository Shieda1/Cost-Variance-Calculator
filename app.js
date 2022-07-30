// https://calculator.swiftutors.com/cost-variance-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costVarianceRadio = document.getElementById('costVarianceRadio');
const earnedValueRadio = document.getElementById('earnedValueRadio');
const actualCostRadio = document.getElementById('actualCostRadio');

let costVariance;
let earnedValue = v1;
let actualCost = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

costVarianceRadio.addEventListener('click', function() {
  variable1.textContent = 'Earned Value';
  variable2.textContent = 'Actual Cost';
  earnedValue = v1;
  actualCost = v2;
  result.textContent = '';
});

earnedValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost Variance';
  variable2.textContent = 'Actual Cost';
  costVariance = v1;
  actualCost = v2;
  result.textContent = '';
});

actualCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost Variance';
  variable2.textContent = 'Earned Value';
  costVariance = v1;
  earnedValue = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costVarianceRadio.checked)
    result.textContent = `Cost Variance = ${computeCostVariance().toFixed(2)}`;

  else if(earnedValueRadio.checked)
    result.textContent = `Earned Value = ${computeEarnedValue().toFixed(2)}`;

  else if(actualCostRadio.checked)
    result.textContent = `Actual Cost = ${computeActualCost().toFixed(2)}`;
})

// calculation

function computeCostVariance() {
  return Number(earnedValue.value) - Number(actualCost.value);
}

function computeEarnedValue() {
  return Number(costVariance.value) + Number(actualCost.value);
}

function computeActualCost() {
  return Number(earnedValue.value) - Number(costVariance.value);
}