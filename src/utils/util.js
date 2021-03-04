/* eslint-disable import/no-anonymous-default-export */
export default {
    formatPhoneNumber: function (phoneNum) {
        // strips the string of all characeters that aren't a number
        const ns = ('' + phoneNum).replace(/\D/g, '')

        // retrieves the parts of the string that match the parts of a formatted phone number
        const match = ns.match(/^(\d{3})(\d{3})(\d{4})$/);

        // if matches exist return a formatted phone number
        if (match) {
            return "(" + match[1] + ') ' + match[2] + '-' + match[3]
        }

        // if matches didn't exist, format number with dashes
        let arr = phoneNum.split("")
        arr.splice((arr.length - 5), 1, "-");

        if (arr[arr.length - 10]) {
            arr.splice((arr.length - 9), 1, "-");
        }

        return arr.join("");
    },

    stripPhoneNumber: function (num) {
        const ns = ('' + num).replace(/\D/g, '');
        return ns;
    },

    // sorts filtered results in ascending order, based on property
    sortAsc(arr, prop1, prop2) {
        if (prop2) {
            return arr.sort((a, b) => (a[prop1][prop2] > b[prop1][prop2]) ? 1 : -1);
        };

        return arr.sort((a, b) => (a[prop1] > b[prop1]) ? 1 : -1);
    },

    // sorts filtered results in descending order, based on property
    sortDesc(arr, prop1, prop2) {
        if (prop2) {
            return arr.sort((a, b) => (a[prop1][prop2] > b[prop1][prop2]) ? -1 : 1);
        };

        return arr.sort((a, b) => (a[prop1] > b[prop1]) ? -1 : 1);
    }

};