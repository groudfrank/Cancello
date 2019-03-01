// Updates property values for a given element
// Object literals with key-value pairs corrisonding to
// property-value names are passed to that multiple property
// values can be updated at once. 
var updateProperty = (node, obj) => {
    var property_entries = Object.entries(obj);
    var property;
    var value;
    // Decontstructs the arrayx gets the property-values and 
    // updates the node passed in as arguments.
    property_entries.forEach(entry => {
        property = entry[0];
        value = entry[1];
        node.style.setProperty(property, value);
    }); 
    
}

// Sets styles on the --primary-color and --secondary-color variables
var changeThemeColor = (node, primary, secondary) => {
    node.style.setProperty('--primary-color', primary);
    node.style.setProperty('--secondary-color', secondary);
};

// Returns the property value (passed in as a string) from the node
// it is given as arguments. 
var propertyValueExtractor = (node, property) => {
    var compStyle = window.getComputedStyle(node);
    var compValue = compStyle.getPropertyValue(property);
    return compValue;
};

// This function is a pathner function to propertyExtractorValue().
// While propertyValueExtractor() gets and return the entire property value 
// as a string, when background-image is targeted all its property value is 
// is extracted as well.
// gradientColorExtractor basically strips the string so that only the 
// braces with the rgb values and commas remain. The for in loop just appends the 
// the string 'rgb' to those rgb values again.
var gradientColorExtractor = (node, property) => {
    var property_string = propertyValueExtractor(node, property);
    property_string = property_string.replace(/\s|[a-z]|[A-Z]|\-/g, '');
    property_string = property_string.slice(2, -1);
    property_string = property_string.replace('),(',') (');
    property_string_array = property_string.split(" ");

    for(var i in property_string_array){
        property_string_array[i] = 'rgb' + property_string_array[i];
    }
  
    return property_string_array;
};

var stringCheck = (node, lookout) => {
    if(node.value.indexOf(lookout) !== -1){
        return true;
    } else {
        return false;
    }
}

// var validateEmail = (email) => {
//     var regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$", "g");
    
//     if(regex.test(email) == true){
//         return true;
//     }else{
//         return false;
//     }
// }