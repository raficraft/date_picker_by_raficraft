# Date picker by raficraft (live demo)


![SASS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![netlify](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![netlify](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) 


A multilingual date picker from scratch for react.
[Code source](https://github.com/raficraft/date_picker_by_raficraft)

[Live demo host on netlify](https://suspicious-euclid-36780f.netlify.app/)

## Supported language

-  English (EN)
-  English (US)
-  French  (EN)
-  German  (DE)
-  Spanish (SP)
-  Italian (IT)

Other languages ​​will be added. Stay tuned. ^^
 
<br>

***

## Install
<br>

In your terminal

```javascript
npm i datepicker_by_raficraft
```

in your React.js project 
```javascript
import { DatePicker } from "datepicker_by_raficraft";
```

<br>

***

## Use  

```javascript

    <DatePicker
        className="custom_input"
        start={date.start}
        end={date.end}
        language="es"
        label="Espagnol picker"
        forHtml="es_picker"
        key="es"  //If you use, multiple picker. Define a unique key identifier
    ></DatePicker>

```
<br>

***

## Settings
<br>


*By default the calendar is calculated by contribution to the current year. The calendar limits are calculated fifty years before the current year and fifty years after
ex: for the year 2022, we get a calendar that starts in 1972 and ends in 2052*.


The different props that you can pass in your component
<br>

```javascript

//Default Value 

    // [label] Optional, if you define it, a label will be associated with the input of the date picker
    label = "date picker",  

    // [forHtml] Add a "for" attribute in the label and an "ID" attribute in the input. If no label, only the
    // ID will be added. Indispensable if you have several date pickers on the same page. ^^
    forHtml = "datePicker", 

    // [language] Defines the date format and language
    language = "gb",

    // [start || end ]  First and last year of the calendar.

    start = new Date().getFullYear() - 50,
    end = new Date().getFullYear() + 50,

    // [autocomplete] Disable autocompletion
    autocomplete = "off",

```
<br>

***

## Change style


You can change the styles of the picker by overriding the classes of the latter. HTML structure of the picker.

```HTML
<div class="container_dataPicker_by_raficraft">
    <label forhtml="es_picker">Espagnol picker</label>
    <input type="text" class="fakeInput" placeholder="dd-mm-yy" name="es_picker" id="es_picker" 
            data-format="date" autocomplete="off">
    <div class="carousel">
        <header class="head">
            ...Contains the navigation button, the select button and the home button
        </header>
        <div class="carousel_container">
            <table>
                <thead>
                    ...Contains the days of the week
                <thead>
                <tbody>
                    ...Contains the days of the month 
                    <tr>
                        <td class="current" data-fulldate="14-01-22" data-year="2022" 
                            data-month="enero">14</td>
                        OR
                        <td class="currentDay" data-fulldate="14-01-22" data-year="2022" 
                            data-month="enero">14</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
``` 
<br>
<span style="color:#ff6062;">However, be careful not to directly overload the following tags in your css without adding a parent class or a specific class.</span>

<br>


```CSS
// DOn't do That 

table{
    background-color : red;
}

// If you do this then the background color of the picker will be red.

```

## Author

Hi, I am a front-end developer specializing in react.js and javascript. What I like the most developed are tools and components designed to improve the productivity of front-line developers. Join me on linkedin so as not to miss any of my work. See you soon !! ^^

[SoftSkill profil](https://app.assessfirst.com/_/profile/d53utubs-raphael-parodi)

[Linkedin profil](https://www.linkedin.com/in/raphael-parodi-a942ab1b0/)

[Github repository](https://github.com/raficraft)

<br>

***



## My other package

### Guides.js


Guide.js is the first tool in a series of four. This will allow the front-end developer to improve their working comfort and productivity.

Guide.js allows you to insert guides to change their thickness, color and position in order to easily align the elements of your page. This feature is directly inspired by the one that can be found in Photoshop. ^^

The project is completely made from scratch and has no dependencies. And it will be the same for the next modules.

[NPM](https://www.npmjs.com/package/guides_js_by_raficraft)

[Live demo](https://flamboyant-saha-06f6cd.netlify.app/)

[Github repository](https://github.com/raficraft/guides_standAlone)