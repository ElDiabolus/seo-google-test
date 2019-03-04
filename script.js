$(function ()
{
    //Warte bis Mausklick auf submit erfolgt...
    $('input[type=submit][id=snippeterstellen]').bind('click', function (event)
    {
        event.preventDefault();
        var strTitel = $('#seitentitel').val();
        var strLink = $('#seitenlink').val();
        $('div.Link').html(strLink);
        var strBeschreibung = $('#seitenbeschreibung').val();
        if(strBeschreibung.length > 156)
        {
            strBeschreibung = strBeschreibung.slice(0, 155) + "...";
        }
        if(strTitel.length > 55)
        {
            strTitel = strTitel.slice(0, 54) + "...";
        }
        $("a.Titel").prop("href", "http://"+strLink).html(strTitel);
        $('div.Beschreibung').html(strBeschreibung);
    });
});