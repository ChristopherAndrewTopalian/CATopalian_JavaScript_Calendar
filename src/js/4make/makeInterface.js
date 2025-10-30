// makeInterface.js

function makeInterface(whichArray, whichYear)
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.gap = '2px';
    ba(mainDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let monthDetails = ce('details');
        mainDiv.append(monthDetails);

        //-//

        let monthSummary = ce('summary');
        monthSummary.textContent = whichArray[x].name;
        monthSummary.onmouseover = function()
        {
            hoverSound();
        };
        monthSummary.onclick = function()
        {
            clickSound();
        };
        monthDetails.append(monthSummary);

        //-//

        // determine the first day of the month
        let monthIndex = x; // assuming order matches months
        let firstDay = new Date(whichYear, monthIndex, 1);
        let startDay = firstDay.getDay();

        // loop through all days in the month
        for (let i = 0; i < whichArray[x].days; i++)
        {
            let currentDate = new Date(whichYear, monthIndex, i + 1);

            let dayName = getDayName(currentDate);

            //-//

            let dayDiv = ce('div');
            dayDiv.textContent = (i + 1) + dayName;
            dayDiv.className = 'day';
            dayDiv.contentEditable = true;
            dayDiv.onmouseover = function()
            {
                hoverSound();
            };
            dayDiv.onclick = function()
            {
                clickSound();
            };
            monthDetails.append(dayDiv);
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

