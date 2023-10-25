
window.addEventListener('load', ()=>{
    //Get the table element
    const movieTable = document.querySelector('.movie-table')


//Define the movie data
const moviesPremiered = [
    {Id:1, Title: "Ant Man and the Wasp:Quantumania", Release: "February 17", Genre: "Action, Adventure"},
    {Id:2, Title: " Chang Can Dunk", Release: "March 10", Genre: "Sports comedy"},
    {Id:3, Title: "Prom Pact", Release: "March 31", Genre: "Romance"},
    {Id:4, Title: "Peter Pan and Wendy", Release: "April 28", Genre: "Family, Fantasy"},
    {Id:5, Title: "Guardians of the Galaxy Vol 3", Release: "May 5", Genre: "Superhero film"},
    {Id:6, Title: "Crater", Release: "May 12", Genre: "Sci-Fiction, Adventure"},
    {Id:7, Title: "The Little Mermaid", Release: "May 26", Genre: "Fantasy"},
    {Id:8, Title: "Elemental ", Release: "June 16", Genre: "Animation, Fantasy"},
    {Id:9, Title: "World's Best", Release: "June 23", Genre: "Hip hop musical comedy"},
    {Id:10, Title: "Indiana Jones and the Dial of Destiny", Release: "June 30", Genre: "Action, Adventure"},
    {Id:11, Title: "Haunted Mansion", Release: "July 28", Genre: "Comedy, Drama"}
    ];


//function to create the table headings
function createTableHeadings() {
    const row = movieTable.insertRow();
    const idHeader = row.insertCell(0);
    const titleHeader = row.insertCell(1);
    const releaseHeader = row.insertCell(2);
    const genreHeader = row.insertCell(3);

    idHeader.textContent = 'ID';
    titleHeader.textContent = 'Title';
    releaseHeader.textContent = 'Release';
    genreHeader.textContent = 'Genre';

    // Add the CSS class to make headings bold
    idHeader.classList.add('bold-heading');
    titleHeader.classList.add('bold-heading');
    releaseHeader.classList.add('bold-heading');
    genreHeader.classList.add('bold-heading');
}


//Create the table rows and insert data 
function createTable() {
    moviesPremiered.forEach(movie => {
        const row = movieTable.insertRow();
        const idCell = row.insertCell(0);
        const titleCell = row.insertCell(1);
        const releaseCell = row.insertCell(2);
        const genreCell = row.insertCell(3);
    
        idCell.textContent = movie.Id;
        titleCell.textContent = movie.Title;
        releaseCell.textContent = movie.Release;
        genreCell.textContent = movie.Genre;
});

}



//function to display the table with a 3-second delay
function displayTableWithDelay() {
    setTimeout(()=>{
        createTableHeadings();
        createTable();
    }, 2000);
}


//Add an event listener to the header 
const header = document.querySelector('.header');
header.addEventListener('click', () => {
    displayTableWithDelay();
});

});

