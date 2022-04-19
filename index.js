class Accordion {
    constructor() {
        // Event Handlers
        document.querySelector('.accordion').addEventListener("click", function (e) {
            // get current button element
            const currentButton = e.target.closest('.accordion__button')

            // closure protection
            if (!currentButton) return

            // get data-id 
            const id = currentButton.dataset.id

            // active current accordion

            // panel
            document.querySelectorAll(".accordion__panel")[id].classList.toggle("accordion__panel--active")

            // icon
            document.querySelectorAll(".accordion__icon")[id].classList.toggle("accordion__icon--active")
        })
    }
}

export { Accordion }