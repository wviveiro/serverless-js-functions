/**
 * Example of custom router for multiple services
 *
 * @author Wellington Viveiro <wviveiro@gmail.com>
 **/
 
const types = {all: {}};

const add_function = (type, function_name, func) => {
    if (!types.hasOwnProperty(type)) types[type] = {};
    types[type][function_name] = func;
    types.all[function_name] = func;
}

const export_modules = () => {
    for (let i in types) {
        module.exports[i] = () => {
            return types[i];
        }
    }
}

/**************************************************************************
Create your router below
**************************************************************************/

/**
 * add_functions
 * @param type - Type of exports. It is used to export the correct
 *               for each serverless.yml
 * @param function_name - Name of the function created in AWS
 * @param func - Function that will be exported
 *
 * @author Wellington Viveiro <wviveiro@gmail.com>
 **/

add_function('user', 'getuser', {
    handler: '../user/handler.get_user',
    events: [
        {"http": {
             path: 'user',
             method: 'get',
             cors: true
         }}
     ]
})

