# **Rating System API**  
A simple REST API for managing feedback submissions, approvals, and deletions. Built using **Node.js** and deployed on **Render**.  

## **Live API Endpoint**  
🔗 Base URL: [https://rating-system-api-qdr1.onrender.com](https://rating-system-api-qdr1.onrender.com)  

## **API Endpoints**  

### **1. Get All Feedbacks**  
- **Endpoint:** "GET /feedback/all" 
- **Description:** Fetches all feedbacks, including pending and approved ones.  
- **Example Request:**  
   ["https://rating-system-api-qdr1.onrender.com/feedback/all"](url)

### **2. Get Pending Feedbacks**  
- **Endpoint:** "GET /feedback/pending"  
- **Description:** Retrieves only the feedbacks that are pending approval.  
- **Example Request:**  
.["https://rating-system-api-qdr1.onrender.com/feedback/pending"](url)

### **3. Submit Feedbacks**  
- **Endpoint:** "POST /feedback"  
- **Description:** Allows users to submit new feedback.  
- **Request body (JSON):** {
      "email": "trigger.study@example.com",
      "feedback": "The response time can be improved.",
      "rating": 3,
      "status": "pending",
      "approvalDate": null
    },
  
### **4. Approve Feedback**  
- **Endpoint:** "PUT /feedback/approve/:id"  
- **Description:** Approves a feedback by its ID.  
- **Example Request (Approving feedback with ID 2):**  
.[https://rating-system-api-qdr1.onrender.com/feedback/approve/2](url)

### **5. Delete Feedback**  
- **Endpoint:** "DELETE /feedback/:id"  
- **Description:** Deletes a feedback by its ID.  
- **Example Request (Deleting feedback with ID 2):**  
  [https://rating-system-api-qdr1.onrender.com/feedback/2](url)
  
**Tech Stack**
🟢 Backend: Node.js, Express.js
🟢 Database: MongoDB (optional, as this uses an in-memory array for now)
🟢 Deployment: Render

**Future Enhancements**
🔹 Connect to a MongoDB database instead of using in-memory storage
🔹 Implement user authentication (JWT)
🔹 Add pagination for feedback retrieval



