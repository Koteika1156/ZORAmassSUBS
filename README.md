# ZORAmassSUBS
A simple script to gain a lot of subscriptions to your zora account.

## Instruction:

1) Open the page of any zora user with a large number of subscriptions (for example https://zora.co/0x252b438c977468ee0a7b2bfc2bbcdc036a13c03e).
   Due to the nature of the zora site - the recommended number of subs is 200 - 300 subs. If the number of subs is large, you may experience freezes.

<kbd>![image](https://github.com/Koteika1156/ZORAmassSUBS/assets/89998783/f93568b8-a4ed-4c2c-9a09-973a4d1de7aa)</kbd>

2) Click here

<kbd>![image](https://github.com/Koteika1156/ZORAmassSUBS/assets/89998783/793bb377-357f-40eb-824f-d949a80b38e8)</kbd>

3) It'll show up:

<kbd>![image](https://github.com/Koteika1156/ZORAmassSUBS/assets/89998783/c8606c50-24f1-468c-b861-75a36d7d96a7)</kbd>

4) Now press `CTRL + SHIFT + I` on your keyboard and select the 'console' tab. **(IF THE SUBSCRIBER LIST GETS CLOSED - REOPEN IT!)**

  <kbd> ![image](https://github.com/Koteika1156/ZORAmassSUBS/assets/89998783/2e60cbd9-dd7c-489f-a5de-ec6511a5d33b)</kbd>

   
   The console will open. Copy the script below and press Enter.
   
   That's it! Enjoy!

   

## SCRIPT:
```
async function SUB() {

    // We get all the buttons that need to be pressed
    const elementsToClick = document.querySelectorAll(".Button_root__fYgu3.Button_--variant-solid__g1ly2.Button_--color-black__t5X7L");

    // Setting a delay between subscriptions
    const randomDelay = () => 500 + Math.random() * 100;

    // function that is responsible for clicking on the “subscribe” button
    const clickWithDelay = async () => {
        for (let i = 0; i < elementsToClick.length; i++) {
            const button = elementsToClick[i];
            button.click();
            await new Promise(resolve => setTimeout(resolve, randomDelay()));
        }
    };

    // start clicking the “subscribe” button and wait for the execution to finish.
    await clickWithDelay();


  // Scroll down the list and wait for new items to load
	document.querySelector('.View_root__Zq_GM.position_--position-relative__5MrH9.View_--padding__xvy7Y.View_--flex__1qhEp.View_--direction-column__brv2d.View_--align-center__wPb_I.View_--justify-center__S8FIk').scrollIntoView();
	setTimeout(SUB, 5000) 
 
}

SUB(); // Call the function again 
```
