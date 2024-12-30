//practice 1:
function reverseAndTransfer() {
    //var num = window.prompt("input");
    var result = ' ';
    for (var i = num.length - 1; i >= 0; i--) 
    {
        var convertedChar = num.charAt(i);
        switch (convertedChar) {
            case "1":
                convertedChar = "壹";
                break;
            case "2":
                convertedChar = "贰";
                break;
            case "3":
                convertedChar = "叁";
                break;
            case "4":
                convertedChar = "肆";
                break;
            case "5":
                convertedChar = "⑤";
                break;
            case "6":
                convertedChar = "Ⅵ";
                break;
            case "7":
                convertedChar = "⑦";
                break;
            case "8":
                convertedChar = "Ⅷ";
                break;
            case "9":
                convertedChar = "⑨";
                break;
        }
        result += convertedChar;
    }
    console.log(result);
}
reverseAndTransfer();

//practice 2:
function byteLength(str)
{
    var len = str.length;
    var byteLen = 0;
    for(var i = 0; i < len; i++)
    {
        if(str.charCodeAt(i) > 255)
        {
            byteLen += 2;
        }
        else
        {
            byteLen++;
        }
    }
    return byteLen;
}
var str = "123456789asdaefdfdg#$%^&*(⑥Ⅵ⑦⑧⑨";
console.log(byteLength(str));

