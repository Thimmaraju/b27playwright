import { expect } from "@playwright/test";

exports.jobTitlePage = class jobTitlePage {

    constructor(page) {
        this.page = page;

        this.jobsubmenu = page.locator("//span[text()='Job ']")
        this.jobtitlesOption = page.locator("//a[text()='Job Titles']")
        this.addjobtitleBtn = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.jobtileinput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.jobtitleDescriptioninput = page.getByPlaceholder("Type description here")
        this.saveBtn = page.locator('button[type="submit"]')
    }

   async navigatetoAddJobtitle(){
   
     await this.jobsubmenu.click()
     await this.jobtitlesOption.click()
     await this.addjobtitleBtn.click()
      
   }

   async addjobTitle(jobtitle, jobdescription){

      await this.jobtileinput.fill(jobtitle)

      await this.jobtitleDescriptioninput.fill(jobdescription)

      await this.saveBtn.click()
   } 

   async verifyJobtitleCreationSuccess(){

    await expect(this.page).toHaveURL("/web/index.php/admin/viewJobTitleList/")
   }


}