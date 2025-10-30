// makeInterfaceGrid.js

function makeInterfaceGrid(whichArray, whichYear)
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

        // create and add the summary
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

        // make a container for days with grid styling
        let daysContainer = ce('div');
        // grid with 7 columns
        daysContainer.style.display = 'grid';
        daysContainer.style.gridTemplateColumns = 'repeat(7, 1fr)';
        daysContainer.style.gap = '2px'; // space between days

        //-//

        // determine the first day of the month
        let monthIndex = x; // assuming order matches months
        let firstDay = new Date(whichYear, monthIndex, 1);
        let startDay = firstDay.getDay();

        //-//

        // loop through all days in the month
        for (let i = 0; i < whichArray[x].days; i++)
        {
            let currentDate = new Date(whichYear, monthIndex, i + 1);

            let dayName = getDayName(currentDate);

            //-//

            let dayDiv = ce('div');
            dayDiv.style.width = '85px';
            dayDiv.style.height = '85px';
            dayDiv.style.padding = '4px';
            dayDiv.style.textAlign = 'center';

            let shortDayName = dayName.slice(0, 3); // 'Mon'

            // show day number and full day name
            //dayDiv.textContent = (i + 1) + dayName;

            // show day number and abbreviated day name
            dayDiv.textContent = (i + 1) + ' ' + shortDayName;

            dayDiv.className = 'day';
            dayDiv.contentEditable = true;
            dayDiv.style.overflowY = 'scroll';
            dayDiv.onmouseover = function() 
            {
                hoverSound();
            };
            dayDiv.onclick = function()
            {
                clickSound();
            };
            daysContainer.append(dayDiv);
        }
        monthDetails.append(daysContainer);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

