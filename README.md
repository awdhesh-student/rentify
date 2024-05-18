This is the project name Rentify which is used to rent or sell properties of the user. To execute this project, you need to 
1. download the zip folder from this GitHub link on your system
2. download all related files and libraries by "npm install" command
3. create env folder on the backend folder and declare some variables
   
   **Application Flow**
Roles and Responsibilities:
The project has 2 types of users – Renter and Owner and the other will be Admin which takes care of all the users. The roles and responsibilities of these two types of users can be inferred from the API endpoints defined in the code. Here is a summary: 
  
**Renter/Tenant: **
Create an account and log in to the system using their email and password. 
They will be shown automatically all the properties in their dashboard.
After clicking on Get Info, all the information about the property and owner will come and a small form will be generated in which the renter needs to send his details.
After that, they can see their booking in the booking section where the status of the booking will be showing “pending”. It will be changed by the owner of the property.
They can also like the property by clicking the like button

**Admin: **
He/she can approve the user as “owner” for the legit user to add properties in his app
He monitors the application of all doctors and approves them and then doctors are registered in the app.
Implement and enforce platform policies, terms of service, and privacy regulations.  

Note: for admin, you need to create a simple user from the register page, and after registering you need to change the type of that user and write "Admin" in that user`s type

**Owner:**
Gets the approval from the admin for his Owner account.
After approval, he/she can do all CRUD operations of the property in his/her account
He/she can change the status and availability of the property.
