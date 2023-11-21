var count = 0;
var thisCount = 0;


const handlers = {

    initFunctionInvoking(data)
    {
        document.querySelector('.littlebar').style.left = '0%';
        document.querySelector('.littlebar').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data)
    {
        count = data.count;

        document.querySelector('.berang h3').innerHTML += "\u{1f358}";
    },

    performMapLoadFunction(data)
    {
        ++thisCount;

        document.querySelector('.littlebar').style.left = '0%';
        document.querySelector('.littlebar').style.width = ((thisCount / count) * 100) + '%';
    }
};

window.addEventListener('message', function(e)
{
    (handlers[e.data.eventName] || function() {})(e.data);
});