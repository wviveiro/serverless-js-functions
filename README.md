# serverless-js-functions
How to import js functions in YAML functions

1. JS file 'myfile.js'

```javascript
module.exports = () => {
    return ({
        getuser: {
            handler: '../handlers/handler.index',
            events: [
               {"http": {
                    path: 'mypath',
                    method: 'get',
                    cors: true
                }}
            ]
        },
    })
}
```

2. `serverless.yml` file

```yml
  functions: ${file(../../myfile.js)}
```
