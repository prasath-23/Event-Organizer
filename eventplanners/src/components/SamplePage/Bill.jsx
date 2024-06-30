import React from 'react';
import BillCard from './BillCard'; // Make sure to provide the correct path to the BillCard component

function Bill() {
  return (
    <div>
      {/* You can pass props to the BillCard component */}
      <BillCard billId = {1}  name = {"XXX"}  relation = {"YYY"}  message = {"abcd"}  amount = {1000} acc = {5000} />
    </div>
  );
}

export default Bill;
