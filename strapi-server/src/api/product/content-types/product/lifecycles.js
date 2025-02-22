module.exports = {
    beforeCreate(event) {
      const { data } = event.params;
      
      console.log("Before Create Data:", data);
  
      if (data.actual_price !== undefined && data.discount !== undefined) {
        data.selling_price = calculateSellingPrice(data.actual_price, data.discount);
        console.log("Calculated Selling Price:", data.selling_price);
      } else {
        console.log("Missing actual_price or discount:", data);
      }
    },
  
    beforeUpdate(event) {
      const { data } = event.params;
  
      console.log("Before Update Data:", data);
  
      if (data.actual_price !== undefined && data.discount !== undefined) {
        data.selling_price = calculateSellingPrice(data.actual_price, data.discount);
        console.log("Updated Selling Price:", data.selling_price);
      } else {
        console.log("Missing actual_price or discount:", data);
      }
    },
  };
  
  function calculateSellingPrice(actualPrice, discount) {
    if (!actualPrice || !discount) return actualPrice; // Default to actual price if missing
    const discountAmount = (actualPrice * discount) / 100;
    return actualPrice - discountAmount;
  }
  