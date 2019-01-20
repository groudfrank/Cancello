// var updateProperty = (node, property, value) => {
//     node.style.setProperty(property, value);
// }

// var cssShow = {
//     visibility: "visible",
//     opacity: "1"
// }

var changeThemeColor = (node, primary, secondary) => {
    node.style.setProperty('--primary-color', primary);
    node.style.setProperty('--secondary-color', secondary);
};

var propertyValueExtractor = (node, property) => {
    var compStyle = window.getComputedStyle(node);
    var compValue = compStyle.getPropertyValue(property);
    return compValue;
};

var gradientColorExtractor = (node, property) => {
    var regex = /\),/g;
    var property_string = propertyValueExtractor(node, property);
    property_string = property_string.replace(/\s|[a-z]|[A-Z]|\-/g, '');
    property_string = property_string.slice(2, -1);
    property_string = property_string.replace('),(',') (');
    property_string_array = property_string.split(" ");
    property_string_array[0] = 'rgb' + property_string_array[0]; 
    property_string_array[1] = 'rgb' + property_string_array[1]; 
    return property_string_array;
};