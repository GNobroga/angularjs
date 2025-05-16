import app from "../app";

app.filter('toUppercase', function () {
    return function (value: string) {
        if (value == null) return '';
        return value.toUpperCase();
    };
});
