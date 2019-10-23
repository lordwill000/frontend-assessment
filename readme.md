# MindArc Frontend Exam

## Project setup
```
npm install
```

## Install json-server
```
npm i -g json-server
```

### Run mock api (from the root folder)
```
json-server src/db/db.json
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
###### Bonus points
* The result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`. This is because the second '`+`' operator is not followed by a string or a number therefore outputs a '`NaN`' which is then followed by '`a`' string. The toLowerCase() function just transformed the whole to string to lowercase.