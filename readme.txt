The project sends the auto generated OTP to the contacts already registered and marked "white-listed" with nexmo.
The credit of $2 is being used to send the text.
1. The home page displays the name and phone number of all the users registered.
    On clicking on the "Phone Number" you're taken to other page whereby the details of the user is displayed.

2. On the details page, on clicking om the SEND OTP button, the text is sent to the number and the message is beinh saved into the databse.

3. On clicking on "MESSAGE" Tab in navbar all the messages are displayed in descending order of timestamp.

4. Pn clicking on "ADD SINGLE CONTACT"Tab in navbar, a form is being displayed which can be used to add single contact details via form into database.

5. The textarea field on the home page is used to take the input in JSON format and save it into database.
  Example:
  [{"fanme":"Shubhi",
    "lanme":"Yadav",
    "Phone":"917704847554",
    "gender":"female"
   }]
   
6. All the script tags can be separated from the ejs file to increase the modularity of the program and to make it testable.
It would be easy to rectify the errors if different modules are present.

7. The screenshot of the text recieved is also present in the folder.

8. Link: https://otpapp.herokuapp.com/  