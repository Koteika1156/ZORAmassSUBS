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
