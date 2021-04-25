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

    console.log(date);
    // 23/10/2006
    console.log(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());

    // 2006-10-23 3:30:0
    console.log(
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' '
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
    );

    // 1161561600000
    console.log(+date);

    // 23 October 2006
    let options = {month: 'long'};
    let month = new Intl.DateTimeFormat('en-US', options).format(date);
    console.log(date.getDate() + ' ' + month + ' ' + date.getFullYear());
}
{
    // Practice Two

    let options = {calendar: 'persian', dateStyle: 'long'};
    console.log(new Intl.DateTimeFormat('en-US', options).format(date));
}