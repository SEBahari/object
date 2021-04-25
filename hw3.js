/*
    - With Date 2006-10-23
        Show => 23/10/2006
        Show => 2006-10-23 00:00:00
        Show => timestamp of this time
        Show => 23 October 2006

    - Convert it time to persian calendar just with js method
*/
// ----------------------------------------------------------------------------------------------------

const date = new Date('2006-10-23');
{
    // Practice One
}
{
    // Practice Two

    let options = {calendar: 'persian', dateStyle: 'long'};
    console.log(new Intl.DateTimeFormat('en-US', options).format(date));
}