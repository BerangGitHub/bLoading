var setCount = 0;
var count = 0;

const handlers = {
    startInitFunctionOrder(data)
    {
        count = data.count;
    },

    initFunctionInvoking(data)
    {
        document.querySelector('.littlebar').style.left = '0%';
        document.querySelector('.littlebar').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data)
    {
        count = data.count;
    },

    performMapLoadFunction(data)
    {
        ++setCount;

        document.querySelector('.littlebar').style.left = '0%';
        document.querySelector('.littlebar').style.width = ((setCount/ count) * 100) + '%';
    }
};

window.addEventListener('message', function(e)
{
    (handlers[e.data.eventName] || function() {})(e.data);
});