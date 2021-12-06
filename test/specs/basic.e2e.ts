
describe('My first application', () => {
   
    it('should validate app', async () => {
       const viewElement = await $("~Views");
       await viewElement.click();
       const expandableListReference = await driver.findElement("xpath", "//android.widget.TextView[@content-desc='Expandable Lists']");
       const expandableListElement = await $(expandableListReference);
       await expandableListElement.click();
       const customAdapter = await $("~1. Custom Adapter");
        await customAdapter.click();
        await $("//*[@text='People Names']").click();
        const peopleElement = await $("//*[@text='David']");
        await driver.touchAction({action: "longPress", element: peopleElement});
    });

});


