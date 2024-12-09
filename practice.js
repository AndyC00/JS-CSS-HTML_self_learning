//practice:
function reverseAndTransfer() {
    var num = window.prompt("input");
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