// Class representing an Order at a restaurant
class Order {
  constructor(restaurant, total, customer) {
    // Initialize the order with the restaurant name, total amount, and customer name
    this.restaurant = restaurant;
    this.total = total;
    this.customer = customer;
    this.foodStatus = 0;  // Initial status of the food, where 0 represents "waiting"
    this.validStatus = [0, 1, 2, 3];  // Array of valid status codes
  }

  // Method to retrieve the current status of the order as a string
  getOrderStatus() {
    // Use a switch statement to return the appropriate status based on foodStatus value
    switch (this.foodStatus) {
      case 0:
        return "waiting";  // Food is still being prepared
      case 1:
        return "prepared";  // Food is ready for pickup
      case 2:
        return "pick up";  // Food is in the process of being picked up
      case 3:
        return "collected";  // Food has been collected by the customer
      default:
        return "wrong code status!";  // Fallback message for an invalid status code
    }
  }

  // Method to update the order's status
  setOrderStatus(newStatusCode) {
    // Check if the new status code is valid
    if (this.validStatus.includes(newStatusCode)) {
      this.foodStatus = newStatusCode;  // Update the status if valid
    } else {
      throw new Error('invalid status code!');  // Throw an error if the status code is invalid
    }
  }
}
