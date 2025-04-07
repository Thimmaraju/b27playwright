import { expect, test } from "@playwright/test";
import empdata from  "../../testData/createemployeedata.json"

import fs from 'fs';

test('Verify List of users API', async ({ request }) => {

    const getAllUsers = await request.get(`https://reqres.in/api/users?page=2`)

    //console.log(listofusers)

    expect(getAllUsers.ok()).toBeTruthy();
    expect(getAllUsers.status()).toBe(200);

    console.log(await getAllUsers.json())

    const response = await getAllUsers.json()

    expect(response.page).toBe(2)

    expect(response.per_page).toBe(6)
    expect(response.total).toBe(12)
    expect(response).toHaveProperty('total_pages');
    expect(response.total_pages).toBe(2);

    expect(response.data[0].id).toBe(7)

    expect(response.data[0].email).toBe("raju.lawson@reqres.in")

})


test('Verify Get Employees API', async ({ request }) => {

    const headers = {
        "Cookie": "orangehrm=cgp3htta413g9ttgrk8353ttkr"
    };


    const getALlEmployees = await request.get("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC", { headers })

    expect(getALlEmployees.status()).toBe(200);

    const responsebody = await getALlEmployees.json()

    expect(responsebody.data[0].empNumber).toBe(104)



})


test("verify create employee API", async  ({ request }) =>{

    const url = "/web/index.php/api/v2/pim/employees"
 
    const headers ={
      
     "Cookie": process.env.COOKIEVALUE,
     "Origin": "https://opensource-demo.orangehrmlive.com",
     "Referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
 
    }
 
    const payload = empdata
 
    const createuser = await request.post(url, { headers, data: payload }); 
 
      // Verify status code
   expect(createuser.status()).toBe(200);
 
   const responseBody = await createuser.json();
 
   // Log the response body to the console
   console.log(responseBody);


   // Ensure the directory exists
     const dir = "apiresponses";
     if (!fs.existsSync(dir)) {
       fs.mkdirSync(dir, { recursive: true }); // Create directory recursively
     }
   
     // Write the response body to a file
     fs.writeFileSync("apiresponses/postres.txt", JSON.stringify(responseBody, null, 2));
 
 })
 