README

# What is this ?

A component called accordion

# Installation

`npm i datasketch-library-accordion`

Then ...

structure in html

```
<div class="accordion">
        <div class="accordion__item">
            <button data-id="0" class="accordion__button">
                <span>
                    Name
                </span>
                <img class="accordion__icon accordion__icon--active" src="/images/accordion-icon.svg" alt="accordion icon">
            </button>
            <div class="accordion__panel accordion__panel--active">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio obcaecati a distinctio incidunt saepe, cupiditate dicta, iste suscipit officiis quos unde. Aut expedita dolore voluptatum sed impedit eum facilis!
            </div>
        </div>
        <div class="accordion__item">
            <button data-id="1" class="accordion__button">
                <span>
                    Name
                </span>
                <img class="accordion__icon" src="/images/accordion-icon.svg" alt="accordion icon">
            </button>
            <div class="accordion__panel">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio obcaecati a distinctio incidunt saepe, cupiditate dicta, iste suscipit officiis quos unde. Aut expedita dolore voluptatum sed impedit eum facilis!
            </div>
        </div>
        <div class="accordion__item">
            <button data-id="2" class="accordion__button">
                <span>
                    Name
                </span>
                <img class="accordion__icon" src="/images/accordion-icon.svg" alt="accordion icon">
            </button>
            <div class="accordion__panel">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio obcaecati a distinctio incidunt saepe, cupiditate dicta, iste suscipit officiis quos unde. Aut expedita dolore voluptatum sed impedit eum facilis!
            </div>
        </div>
    </div>
```

structure in css

```
.accordion {
    position: relative;
    display: grid;
    row-gap: 32px;
}
.accordion__item {
    border-width: 8px;
    border-radius: 35px 35px 0px 35px;
    border: 1px solid #f6f6f6;
    overflow: hidden;
}
.accordion__button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    color: #fff;
    font-weight: bold;
    padding: 12px 32px;
    cursor: pointer;
    background-color: #E57629;
    border: 2px solid #E57629;
}
.accordion__icon {
    height: 8px;
    transform: rotate(0deg);
    transition: all 0.3s;
}
.accordion__icon--active {
    transform: rotate(180deg);
}
.accordion__panel {
    padding: 0px 32px;
    max-height: 0px;
    opacity: 0;
    overflow: hidden;
    transition: all 0.3s;
}
.accordion__panel--active {
    padding: 12px 32px;
    overflow-y: scroll;
    max-height: 208px;
    opacity: 1;
}
```

structure in js

```
import { Accordion } from "/node_modules/datasketch-library-accordion/index.js"

const accordion = new Accordion()
```

copy images file

## Options

for the moment this is the first version soon continue adding more content and improvements
